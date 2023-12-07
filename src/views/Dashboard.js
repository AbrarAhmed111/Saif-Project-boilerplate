import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";

export default function Dashboard() {
    const history  = useHistory()
    return (
        <Container>
            <Row className="d-flex align-items-center justify-content-center vh-100">
                <Col sm={8}>
                    <Card>
                        <CardBody>
                            <h3 className="text-center">No Chatbots Created Yet</h3>
							<div className="d-flex align-items-center justify-content-center">
                            <Button className="rounded-pill d-block mt-4 bg-light text-dark mb-5 px-4" onClick={()=>{
                                history.push("/train")
                            }}>
                                CREATE YOUR FIRST CHATBOT
                            </Button>
							</div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
