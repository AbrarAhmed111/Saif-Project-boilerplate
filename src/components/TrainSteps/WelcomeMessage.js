import React, { useEffect } from "react";
import { Button, Col, Container, Input, Row } from "reactstrap";
export default function WelcomeMessage({ chatbotDetail, setChatbotDetail,currentStep,setCurrentStep }) {
    const handleWelcomeMessageNext = () => {
        if (chatbotDetail?.welcomeMessage != "") {
            let step = currentStep + 1;
            setCurrentStep(step);
        } else {
            alert("Welcome Message is mendatory!");
        }
    };
    const handleBack = () => {
        let step = currentStep - 1;
        setCurrentStep(step);
    };
    useEffect(() => {
        const usernameParts = chatbotDetail?.username.split("/");
        if (usernameParts.length >= 2) {
            setChatbotDetail((prevChatbotDetail) => ({
                ...prevChatbotDetail,
                welcomeMessage: `Welcome To ${usernameParts[1]}, I Am Your AI Assistant-${prevChatbotDetail.chatBotName}. How Can I Help You Today?`,
            }));
        }
    }, []);
    return (
        <Container>
            <Row>
                <Col lg={8} md={12}>
                    <div className="right-section-chat my-2 d-flex align-items-center mb-4">
                        <div className="mx-3">
                        <p
                                className="text-item-bg mt-2 cursor"
                                onClick={() => {
                                    handleBack();
                                }}
                            >
                                <i class="fa-solid fas fa-arrow-left"></i> Back
                            </p>
                            <h3 className="text-light font-heading">Welcome Message</h3>
                            <p className="text-light font-small">
                                Craft An Initial Welcome Message To Make A
                                Positive First Impression
                            </p>
                            <Input
                                type="textarea"
                                className="username-input border-0 text-light font-small"
                                placeholder="AIBot"
                                value={chatbotDetail?.welcomeMessage}
                                onChange={(e) => {
                                    setChatbotDetail((prevChatbotDetail) => ({
                                        ...prevChatbotDetail,
                                        welcomeMessage: e.target.value,
                                    }));
                                }}
                            />
                            <Button
                                className="rounded-pill px-5 bg-item-bg text-dark mt-4 font-small"
                                onClick={() => {
                                    handleWelcomeMessageNext();
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
