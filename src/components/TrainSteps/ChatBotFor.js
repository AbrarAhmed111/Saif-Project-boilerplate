import React, { useEffect, useState } from "react";
import { Button, Col, Container, Input, Row } from "reactstrap";
import data from "../../jsonfile/chatBotForData.json";
import { useDispatch } from "react-redux";
// import { clearUsernameAction } from "../../store/actions/trainAction";
export default function ChatBotFor({
    chatbotDetail,
    setChatbotDetail,
    currentStep,
    setCurrentStep,
}) {
    const dispatch = useDispatch();
    const usageButtons = [
        "Custom",
        "Customer Support",
        "E-Commerce Code Documentation",
        "Blog Social Media",
        "Business Card",
        "Restaurant",
        "Law Firm",
        "Education",
        "Fitness Coach",
        "Real Estate",
        "Professional Portfolio",
        "Health and Wellness Advisor",
        "Job Recruitment",
        "Nonprofit",
        "Travel Guide",
        "Financial Advisor",
        "Music Teacher",
        "Beauty Consultant",
    ];
    const handleChatbotFor = (item) => {
        if (data[item]) {
            console.log("innn");
            setChatbotDetail({
                ...chatbotDetail,
                chatBotFor: {
                    title: item,
                    detail: data[item],
                },
            });
        } else {
            setChatbotDetail({
                ...chatbotDetail,
                chatBotFor: {
                    title: item,
                    detail: [],
                },
            });
        }
    };

    const handleChatForNext = () => {
        if (chatbotDetail.chatBotFor?.title != "") {
            let step = currentStep + 1;
            setCurrentStep(step);
        } else {
            alert("ChatbotFor is mendatory!");
        }
    };
    const handleBack = () => {
        let step = currentStep - 1;
        setCurrentStep(step);
        // dispatch(clearUsernameAction());
    };

    return (
        <Container>
            <Row>
                <Col lg={8} md={12}>
                    <div className="right-section-chat my-2 d-flex align-items-center">
                        <div className="mx-3 ">
                            <p
                                className="text-item-bg mt-2 cursor back-text"
                                onClick={() => {
                                    handleBack();
                                }}
                            >
                                <i class="fa-solid fas fa-arrow-left"></i> Back
                            </p>

                            <h3 className="text-light font-heading">
                                What Is Your Chatbot For?
                            </h3>
                            <p className="text-light font-small">
                                Define The Purpose Of Your Chatbot To Engage And
                                Assist Your Target Audience.
                            </p>
                            {usageButtons?.map((item) => {
                                return (
                                    <Button
                                    className={`rounded-pill font-small mt-2 mx-1 ${item === chatbotDetail.chatBotFor.title ? "bg-site-elevate" : "chatbot-usage-button"}`}
                                    onClick={() => {
                                        handleChatbotFor(item);
                                    }}
                                >
                                    {item}
                                </Button>
                                );
                            })}
                            <Button
                                className="d-block rounded-pill px-5 bg-item-bg text-dark mt-4 font-small"
                                onClick={() => {
                                    handleChatForNext();
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
