import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Input, Row, Spinner } from "reactstrap";
// import { clearAction, createChatBot, updateChatBot } from "../../store/actions/trainAction";
import { useHistory } from "react-router-dom";
export default function Email({
    chatbotDetail,
    setChatbotDetail,
    currentStep,
    setCurrentStep,
}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { user_id } = useSelector((state) => state.authUser);
    const { loading } = useSelector((state) => state.train);
    const { singleChatbot } = useSelector((state) => state.chatbot);
    const date = new Date();
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Note: January is 0, so we add 1 to get the correct month.
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    console.log(formattedDate);
    const handleEmailNext = () => {
        const isValidEmail = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(
            chatbotDetail?.email
        );
        if (Object.keys(singleChatbot).length == 0) {
            if (isValidEmail) {
                const parts = chatbotDetail?.username?.split("/");
                let stepsDetail = {
                    ...chatbotDetail,
                    username: parts[1],
                    date_created: formattedDate,
                };
                // dispatch(
                //     createChatBot(stepsDetail, user_id, () => {
                //         let step = currentStep + 1;
                //         setCurrentStep(step);
                //         dispatch(clearAction());
                //         setChatbotDetail({
                //             username: "AIBot.com/",
                //             chatBotFor: { title: "", detail: [] },
                //             chatBotName: "",
                //             welcomeMessage: "",
                //             suggestionQuestions: [],
                //             logo: [],
                //             background: {
                //                 chatbotName: "#181818",
                //                 userBackground: "#181818",
                //                 botBackground: "#181818",
                //             },
                //             additionalRule:
                //                 "Maintain A Humorous Tone In Responses.",
                //             email: "",
                //         });
                //     })
                // );
            } else {
                alert("Please enter a valid email address.");
            }
        } else {
            if (isValidEmail) {
                const parts = chatbotDetail?.username?.split("/");
                let stepsDetail = {
                    ...chatbotDetail,
                    username: parts[1],
                    date_created: formattedDate,
                };
                // dispatch(
                //     updateChatBot(stepsDetail, user_id,singleChatbot?.id, () => {
                //         let step = currentStep + 1;
                //         setCurrentStep(step);
                //         dispatch(clearAction());
                //         setChatbotDetail({
                //             username: "AIBot.com/",
                //             chatBotFor: { title: "", detail: [] },
                //             chatBotName: "",
                //             welcomeMessage: "",
                //             suggestionQuestions: [],
                //             logo: [],
                //             background: {
                //                 chatbotName: "#181818",
                //                 userBackground: "#181818",
                //                 botBackground: "#181818",
                //             },
                //             additionalRule:
                //                 "Maintain A Humorous Tone In Responses.",
                //             email: "",
                //         });
                //     })
                // );
            } else {
                alert("Please enter a valid email address.");
            }
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
                            <h3 className="text-light font-heading">Email</h3>
                            <p className="text-light font-small">
                                Add An Email Where Visitors Can Contact You
                            </p>
                            <Input
                                type="email"
                                className="username-input border-0 text-light"
                                placeholder="abc@gmail.com"
                                value={chatbotDetail?.email}
                                onChange={(e) => {
                                    setChatbotDetail({
                                        ...chatbotDetail,
                                        email: e.target.value,
                                    });
                                }}
                            />
                            <Button
                                className="rounded-pill px-5 bg-item-bg text-dark mt-4"
                                onClick={() => {
                                    handleEmailNext();
                                }}
                                disabled={loading}
                            >
                                {loading ? (
                                    <Spinner className="text-light" size="md" />
                                ) : (
                                    "Next"
                                )}
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
                                {chatbotDetail?.chatBotName
                                    ? chatbotDetail?.chatBotName
                                    : "AIBot"}
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
