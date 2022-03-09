import React from "react";
import { Route, useNavigate } from "react-router-dom";

function AuthRoute({ authenticated, component: Component, render, ...rest }) {

    const navigate = useNavigate();

    return (
        <Route
        {...rest}
        render={(props) =>
            authenticated ? (
            render ? (
                render(props)
            ) : (
                <Component {...props} />
            )
            ) : (
                navigate("/login", {state : { from: props.location }})
            )
        }
        />
    );
}

export default AuthRoute;