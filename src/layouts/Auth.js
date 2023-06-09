import React from "react";
import {Redirect, Route, Switch, useLocation} from "react-router-dom";
import {Container, Row} from "reactstrap";
import AuthFooter from "components/Footers/AuthFooter.js";
import routes from "../routes";

const Auth = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.body.classList.add("bg-default");
    return () => {
      document.body.classList.remove("bg-default");
    };
  }, []);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (_routes) => {
    return _routes.map((route, key) => {
      if (route.layout === "/auth") {
        return (
            <Route
                key={key}
                path={route.layout + route.path}
                name={route.name}
                render={renderProps => <route.component {...renderProps} />}
            />
        );
      } else {
        return null;
      }
    });
  };

  return (
      <>
        <div className="main-content" ref={mainContent}>
          {/*<AuthNavbar/>*/}
          <div className="header bg-gradient-info py-7 py-lg-8">

            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
              >
                <polygon
                    className="fill-default"
                    points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </div>
          {/* Page content */}
          <Container className="mt--8 pb-5">
            <Row className="justify-content-center">
              <Switch>
                {getRoutes(routes.common)}
                <Redirect from="*" to="/auth/login"/>
              </Switch>
            </Row>
          </Container>
        </div>
        <AuthFooter/>
      </>
  );
};

export default Auth;
