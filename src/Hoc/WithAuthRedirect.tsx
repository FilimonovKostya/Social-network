import React from "react";

type PropsType = {
    isAuth: boolean;
};

export const WithAuthRedirect = <P extends {}> (Component: React.ComponentType<P & PropsType>) => {

    return (props:  PropsType & P) => <Component {...props}/>;
}

export default WithAuthRedirect
