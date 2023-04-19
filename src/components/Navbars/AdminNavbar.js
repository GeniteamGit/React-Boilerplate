import {Link} from "react-router-dom";
import {
    Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Media,
    Nav,
    Navbar,
    UncontrolledDropdown,
} from "reactstrap";

const AdminNavbar = (props) => {

    return (
        <>
            <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
                <Container fluid>
                    <Link
                        className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
                        to="/"
                    >
                        {/*{props.brandText}*/}
                    </Link>
                    <Nav className="align-items-center d-none d-md-flex" navbar>
                        <UncontrolledDropdown nav>
                            <DropdownToggle className="pr-0" nav>
                                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                        alt="..."
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSex0_2jKFFviUr3QZCCN_v31N5_gF4_U_Z9Q&usqp=CAU"
                    />
                  </span>
                                    <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                      {
                          props.signedInUser.name ? props.signedInUser.name :
                              (props.signedInUser.email && props.signedInUser.email.split('@')[0])
                      }
                        <i className="fas fa-caret-down ml-2"/>
                    </span>
                                    </Media>
                                </Media>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                                <DropdownItem className="noti-title" header tag="div">
                                    <h6 className="text-overflow m-0">Welcome!</h6>
                                </DropdownItem>
                                <DropdownItem href="#pablo" onClick={(e) => {
                                    e.preventDefault();
                                }}>
                                    <i className="ni ni-user-run"/>
                                    <span>Logout</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default AdminNavbar;
