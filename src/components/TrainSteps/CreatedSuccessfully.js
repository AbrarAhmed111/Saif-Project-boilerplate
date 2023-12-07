import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import congrats from "../../assets/img/Congrats.png";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
export default function CreatedSuccessfully() {
    const { singleChatbot } = useSelector((state) => state.chatbot);
    const history = useHistory();
    return (
        <Container>
            <Row>
                <Col>
                    <div className="successfull  d-flex align-items-center justify-content-center">
                        <div>
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={congrats} width={70}/>
                            </div>
                            <h3 className="text-center font-heading">
                               {Object.keys(singleChatbot).length > 0?"Updated Chatbot Successfully!":"Created Chatbot Successfully!"} 
                            </h3>
                            <p className="text-center font-small">
                                The Next Step Is To Train Your Chatbot So It
                                Always Knows What To Say!
                            </p>
                            <div className="d-flex align-items-center justify-content-center">
                                {/* <Button className="rounded-pill bg-light text-dark font-small">
                                    TRAIN YOUR CHATBOT
                                </Button> */}
                                <Button className="mx-2 rounded-pill bg-light text-dark font-small" onClick={()=>{
                                    history.push("/library")
                                }}>
                                    DASHBOARD
                                </Button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
