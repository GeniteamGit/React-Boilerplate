import {useEffect, useRef} from "react";
import {Redirect, Route, Switch, useLocation} from "react-router-dom";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import routes from "../routes";

const Admin = (props) => {

    const mainContent = useRef(null);
    const location = useLocation();

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainContent.current.scrollTop = 0;
    }, [location]);

    const getRoutes = (routes) => {
        return routes.map((route, key) => {
            return (
                <Route
                    exact
                    key={key}
                    path={route.layout + route.path}
                    name={route.name}
                    render={renderProps => <route.component {...renderProps} signedInUser={props.signedInUser}/>}
                />
            );
        });
    };

    const getBrandText = (path) => {
        const _routes = routes[props.signedInUser.role];
        for (let i = 0; i < _routes.length; i++) {
            if (
                props.location.pathname.indexOf(_routes[i].layout + _routes[i].path) !==
                -1
            ) {
                return _routes[i].name;
            }
        }
        return "Brand";
    };

    return (
        <>
            <Sidebar
                {...props}
                routes={[...routes.common, ...routes[props.signedInUser.role]]}
                logo={{
                    innerLink: "/dashboard",
                    imgSrc: require("../assets/img/brand/logo.png").default,
                    imgAlt: "...",
                }}
            />
            <div className="main-content" ref={mainContent}>
                <AdminNavbar
                    {...props}
                    brandText={getBrandText(props.location.pathname)}
                />
                <Switch>
                    {getRoutes([...routes.common, ...routes[props.signedInUser.role]])}
                    <Redirect from="*" to="/dashboard"/>
                </Switch>
                {/*<Container fluid>*/}
                {/*  <AdminFooter />*/}
                {/*</Container>*/}
            </div>
        </>
    );
};

export default Admin;
