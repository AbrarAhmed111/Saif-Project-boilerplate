import React, { useEffect, useState } from "react";
import { Button, Col, Container, Input, Row } from "reactstrap";
export default function AdditionalRule({
    chatbotDetail,
    setChatbotDetail,
    currentStep,
    setCurrentStep,
}) {
    const handleChatbotNameNext = () => {
        if (chatbotDetail?.additionalRule != "") {
            let step = currentStep + 1;
            setCurrentStep(step);
        } else {
            alert("Additional Rule is mendatory!");
        }
    };
    const handleBack = () => {
        let step = currentStep - 1;
        setCurrentStep(step);
    };
    return (
        <Container>
            <Row>
                <Col lg={8} md={12}>
                    <div className="right-section-chat my-2 d-flex align-items-center">
                        <div className="mx-3">
                            <p
                                className="text-item-bg mt-2 cursor"
                                onClick={() => {
                                    handleBack();
                                }}
                            >
                                <i class="fa-solid fas fa-arrow-left"></i> Back
                            </p>
                            <h3 className="text-light font-heading">Additional Rules</h3>
                            <p className="text-light font-small">
                                Establish Guidelines For Your Chatbot's
                                Behaviour And Responses
                            </p>
                            <Input
                                type="text"
                                className="username-input border-0 text-light"
                                placeholder="rule.."
                                value={chatbotDetail?.additionalRule}
                                onChange={(e) => {
                                    setChatbotDetail({...chatbotDetail,additionalRule:e.target.value});
                                }}
                            />
                            <Button
                                className="rounded-pill px-5 bg-item-bg text-dark mt-4"
                                onClick={() => {
                                    handleChatbotNameNext();
                                }}
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={12}>
                    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                        <div
                            className="chatbot-screen"
                            style={{
                                backgroundColor:
                                    chatbotDetail?.background?.bodyBackground,
                            }}
                        >
                            <h4
                                className="fs--20 mt-3 mx-2"
                                style={{
                                    color: `${chatbotDetail.background.chatbotName}`,
                                }}
                            >
                              {chatbotDetail?.chatBotName?chatbotDetail?.chatBotName:"AIBot"}
                            </h4>
                            <div className="chat-container">
                                {chatbotDetail?.chatBotFor?.detail?.map(
                                    (message, index) => (
                                        <div
                                            key={index}
                                            className={`message ${
                                                index % 2 === 0 ? "user" : "bot"
                                            }`}
                                        >
                                            {index % 2 === 0 ? (
                                                <div
                                                    className="user-message shadow-sm"
                                                    style={{
                                                        backgroundColor:
                                                            chatbotDetail
                                                                .background
                                                                .userBackground,
                                                    }}
                                                >
                                                    {message.user}
                                                </div>
                                            ) : (
                                                <div
                                                    className="bot-message shadow-sm"
                                                    style={{
                                                        backgroundColor:
                                                            chatbotDetail
                                                                .background
                                                                .botBackground,
                                                    }}
                                                >
                                                    {message.bot}
                                                </div>
                                            )}
                                        </div>
                                    )
                                )}
                            </div>
                            <div className="rounded-pill-footer">
                                <input
                                    type="text"
                                    className="rounded-pill-input px-1"
                                    placeholder="Ask me anything"
                                />
                                <Button className="rounded-pill-button">
                                    Send<i class="mx-1 fas fa-share"></i>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
