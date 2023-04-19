import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const Home = (props) => {

    return (
        <>
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8"/>
            <Container className="mt--9" fluid>
                <Row className="mb-4">
                    <Col>
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <h2 className="mb-0">Hi, there!</h2>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col>

                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;