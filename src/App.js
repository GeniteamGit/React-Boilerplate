import React, {useEffect, useState} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Spinner} from "reactstrap";
import AdminLayout from "./layouts/Admin";
import AuthLayout from "./layouts/Auth";

const App = () => {
    const [signedInUser, setSignedInUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(async () => {
        const _user = {name: "DICOTA", role: 'admin'};

        localStorage.setItem('user', JSON.stringify({..._user}));
        setSignedInUser(_user);
        setIsLoading(false);
    }, []);

    return (
        <>
            {
                isLoading ?
                    <div className="text-center mt-7">
                        <Spinner
                            color={'primary'}
                            size={''}
                        >
                            Loading...
                        </Spinner>
                    </div> :
                    <Switch>
                        <Route path="/dashboard" render={props => {
                            if (signedInUser) return <AdminLayout {...props} signedInUser={signedInUser}/>;
                            return <Redirect to="/auth/login"/>
                        }}/>
                        <Route path="/auth" render={props => {
                            if (!signedInUser) return <AuthLayout {...props} signedInUser={signedInUser}/>;
                            return <Redirect to="/dashboard/home"/>
                        }}/>
                        <Redirect from="/" to="/dashboard/home"/>
                    </Switch>
            }
        </>
    )
}

export default App;