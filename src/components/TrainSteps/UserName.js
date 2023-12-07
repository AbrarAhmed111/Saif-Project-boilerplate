import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Input, Row, Spinner } from "reactstrap";
// import { checkUsernameAction, clearAction } from "../../store/actions/trainAction";

export default function UserName({
    chatbotDetail,
    setChatbotDetail,
    currentStep,
    setCurrentStep,
}) {
    const dispatch = useDispatch();
    // const { singleChatbot } = useSelector((state) => state.chatbot);
    // const { isValidUsername ,loading} = useSelector((state) => state.train);
    const handleInputChange = (e) => {
        const newValue = e.target.value;
        // Check if the new value starts with the initial part 'AIBot.com/'
        if (newValue.startsWith("AIBot.com/")) {
            setChatbotDetail({ ...chatbotDetail, username: newValue });
        } else {
            // If not, keep the initial part and append the new value
            setChatbotDetail({
                ...chatbotDetail,
                username: "AIBot.com/" + newValue,
            });
        }
    };
    const handleusername = () => {
        const parts = chatbotDetail?.username?.split("/");
        let step = currentStep + 1;
        setCurrentStep(step);
        // if (singleChatbot && Object.keys(singleChatbot).length > 0) {
        //     if (singleChatbot?.UserName === parts[1]) {
        //         // Username matches, move to the next step
        //         let step = currentStep + 1;
        //         setCurrentStep(step);
        //     } else {
        //         if (parts[1] === "") {
        //             // Username is empty, show alert
        //             alert("Username is mandatory!");
        //         } else {
        //             // Dispatch the checkUsernameAction
        //             dispatch(checkUsernameAction(parts[1]));
        //         }
        //     }
        // } else {
        //     if (parts[1] === "") {
        //         // Username is empty, show alert
        //         alert("Username is mandatory!");
        //     } else {
        //         // Dispatch the checkUsernameAction
        //         dispatch(checkUsernameAction(parts[1]));
        //     }
        // }
    };
    
    // useEffect(() => {
    //     const parts = chatbotDetail?.username?.split("/");
    //     console.log(parts[1],'parts[1]')
    //     if (parts[1] != "") {
    //         if (isValidUsername == false) {
    //             let step = currentStep + 1;
    //             setCurrentStep(step);
    //         }
    //     }
    // }, [isValidUsername]);
    // useEffect(() => {
    //     dispatch(clearAction());
    // }, []);
    return (
        <Container>
            <Row>
                <Col lg={8} md={12}>
                    <div className="right-section my-2 d-flex align-items-center">
                        <div className="mx-3">
                            <h3 className="text-light font-heading">
                                Username
                            </h3>
                            <p className="text-light font-small">
                                Enter A Username To Represent Your Brand
                            </p>
                            <Input
                                type="text"
                                className="username-input border-0 text-light"
                                value={chatbotDetail?.username}
                                onChange={(e) => {
                                    handleInputChange(e);
                                }}
                            />
                            <Button
                                className="rounded-pill px-5 bg-item-bg text-dark mt-4"
                                onClick={() => {
                                    handleusername();
                                }}
                                // disabled={loading}
                            >
                                 Next{/* {loading ? <Spinner className="text-light" size="md" /> : "Next"} */}
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
