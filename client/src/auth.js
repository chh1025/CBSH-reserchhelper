import crypto from 'crypto';
import Axios from 'axios';

const createSalt = () =>
    new Promise((resolve, reject) => {
        crypto.randomBytes(64, (err, buf) => {
            if (err) reject(err);
            resolve(buf.toString('base64'));
        });
    });

const createHashedPassword = (plainPassword) =>
    new Promise(async (resolve, reject) => {
        const salt = await createSalt();
        crypto.pbkdf2(plainPassword, salt, 9999, 64, 'sha512', (err, key) => {
            if (err) reject(err);
            resolve({ newPassword: key.toString('base64'), salt });
        });
    }); 

const checkHashedPassword = (plainPassword, salt) =>
    new Promise(async (resolve, reject) => {
        crypto.pbkdf2(plainPassword, String(salt) , 9999, 64, 'sha512', (err, key) => {
            if (err) reject(err);
            resolve( key.toString('base64') );
        });
    }); 


var user = {}

const signIn = async ( email, password, url ) => {
    return Axios.post(`http://${url}:3306/api/postUserEmail`,{
        email: email
        }).then( async (response)=>{
            return new Promise( async (resolve, reject) => {
                if ((response.data == null) || (response.data == undefined) || (response.data == []) || (response.data.length == 0)){
                    alert('이메일이 잘못되었습니다')
                    return true
                } else {
                    user = response.data[0]
                }

                // console.log(password, user.salt)
                console.log(user)
                if (user === undefined) return false;
                
                const newPassword = await checkHashedPassword(password, user.salt)
                console.log(password)
                console.log(newPassword)
                console.log(user.password)
                // console.log(newPassword === user.password)

                if (user.password === newPassword){
                    // console.log(user)
                    resolve(user)
                } else{
                    resolve(false)
                }
            }
            )
        })
}

const signUp = async (data, url) => {
    const newPassword = await createHashedPassword(data.password)
    return Axios.post(`http://${url}:3306/api/insertUser`,{
        data : data,
        newPassword : newPassword
        }).then( async (response)=>{
            return new Promise( async (resolve, reject) => {
                    resolve(response.data)
                }
            )
        })
}


export default {
    signIn : signIn,
    signUp : signUp,
}