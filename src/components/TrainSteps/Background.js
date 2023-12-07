import React, { useEffect, useState } from "react";
import { Button, Col, Container, Input, Label, Row } from "reactstrap";
export default function Background({
    chatbotDetail,
    setChatbotDetail,
    currentStep,
    setCurrentStep,
}) {
    const handleColorChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        const updatedColor = {
            ...chatbotDetail?.background,
            [name]: value,
        };
        setChatbotDetail({ ...chatbotDetail, background: updatedColor });
    };
    const handleBackgroundNext = () => {
        let step = currentStep + 1;
        setCurrentStep(step);
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
                            <h3 className="text-light font-heading">
                                Background
                            </h3>
                            <p className="text-light font-small">
                                Customize The Visual Backdrop Of Your Chatbot
                                Interface To Align With Your Brand's Aesthetics
                            </p>
                            <div>
                                <Label className="text-light font-small">
                                    Chatbot Name:
                                </Label>
                                <Input
                                    type="color"
                                    className="p-0 border-0 rounded-pillow w-25"
                                    value={
                                        chatbotDetail?.background?.chatbotName
                                    }
                                    name="chatbotName"
                                    onChange={(e) => handleColorChange(e)}
                                />
                            </div>
                            <Row>
                                <Label className="text-light font-small">
                                    Text:
                                </Label>
                                <Col sm={6}>
                                    <span className="text-light font-small">
                                        User Background
                                    </span>
                                    <Input
                                        type="color"
                                        className="p-0 border-0 rounded-pillow w-50 my-1 font-small"
                                        value={
                                            chatbotDetail?.background
                                                ?.userBackground
                                        }
                                        name="userBackground"
                                        onChange={(e) => handleColorChange(e)}
                                    />
                                </Col>
                                <Col sm={6}>
                                    <span className="text-light my-1 font-small">
                                        Bot Background
                                    </span>
                                    <Input
                                        type="color"
                                        className="p-0 border-0 rounded-pillow  w-50 my-1"
                                        value={
                                            chatbotDetail?.background
                                                ?.botBackground
                                        }
                                        name="botBackground"
                                        onChange={(e) => handleColorChange(e)}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <span className="text-light my-1 font-small">
                                        Background Color
                                    </span>
                                    <Input
                                        type="color"
                                        className="p-0 border-0 rounded-pillow  w-50 my-1"
                                        value={
                                            chatbotDetail?.background
                                                ?.bodyBackground
                                        }
                                        name="bodyBackground"
                                        onChange={(e) => handleColorChange(e)}
                                    />
                                </Col>
                            </Row>
                            <Button
                                className="rounded-pill px-5 bg-item-bg text-dark mt-4 font-small"
                                onClick={() => {
                                    handleBackgroundNext();
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
