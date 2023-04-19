import React, {useState} from "react";
import {
    Alert,
    Button,
    Card,
    CardBody,
    Col,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Spinner,
} from "reactstrap";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading('signing in');
    }

    return (
        <>
            <Col lg="5" md="7">
                <Card className="bg-secondary shadow border-0">

                    <CardBody className="px-lg-5 py-lg-5">
                        <div className="text-center mb-5">
                            <img
                                alt="..."
                                className="auth-navbar-img"
                                src={
                                    require("../../assets/img/brand/logo.png").default
                                }
                            />
                        </div>
                        {
                            error &&
                            <Alert color="danger">
                                {error}
                            </Alert>
                        }
                        <Form role="form" onSubmit={handleSubmit}>
                            <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-email-83"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Email"
                                        type="email"
                                        autoComplete="new-email"
                                        value={email}
                                        required
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-lock-circle-open"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Password"
                                        type="password"
                                        autoComplete="new-password"
                                        required
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </InputGroup>
                            </FormGroup>
                            <div className="custom-control custom-control-alternative custom-checkbox">
                                <input
                                    className="custom-control-input"
                                    id=" customCheckLogin"
                                    type="checkbox"
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor=" customCheckLogin"
                                >
                                    <span className="text-muted">Remember me</span>
                                </label>
                            </div>
                            <div className="text-center">
                                <Button className="my-4" color="primary" type="submit"
                                        disabled={loading === 'signing in'}>
                                    {
                                        loading === 'signing in' ?
                                            <Spinner color="white" size="sm" className="mx-3">
                                                Loading..
                                            </Spinner> : 'Sign In'
                                    }
                                </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>

            </Col>
        </>
    );
};

export default Login;
