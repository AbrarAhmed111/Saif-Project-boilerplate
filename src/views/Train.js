import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import UserName from "../components/TrainSteps/UserName";
import ChatBotFor from "../components/TrainSteps/ChatBotFor";
import ChatBotName from "../components/TrainSteps/ChatBotName";
import WelcomeMessage from "../components/TrainSteps/WelcomeMessage";
import SuggestionQuestions from "../components/TrainSteps/SuggestionQuestions";
import Logo from "../components/TrainSteps/Logo";
import Background from "../components/TrainSteps/Background";
import AdditionalRule from "../components/TrainSteps/AdditionalRule";
import Email from "../components/TrainSteps/Email";
import CreatedSuccessfully from "../components/TrainSteps/CreatedSuccessfully";
import { useSelector } from "react-redux";
import data from "../jsonfile/chatBotForData.json";
export default function Train() {
    const history = useHistory();
    // const { singleChatbot } = useSelector((state) => state.chatbot);
    const [chatbotDetail, setChatbotDetail] = useState({
        username: "AIBOT.com/",
        chatBotFor: { title: "", detail: [] },
        chatBotName: "",
        welcomeMessage: "",
        suggestionQuestions: [],
        logo: [],
        background: {
            chatbotName: "#181818",
            userBackground: "#ffffff",
            botBackground: "#181818",
            bodyBackground: "#ffffff",
        },
        additionalRule: "Maintain A Humorous Tone In Responses.",
        email: "",
    });
    console.log(chatbotDetail, "chatbotDetail");
    const [currentStep, setCurrentStep] = useState(1);
    // useEffect(() => {
    //     const propertiesToCheck = [
    //         chatbotDetail.username,
    //         chatbotDetail.chatBotFor?.title,
    //         chatbotDetail.chatBotName,
    //         chatbotDetail.welcomeMessage,
    //         chatbotDetail.suggestionQuestions.join(""), // Combine all suggestions into one string
    //         chatbotDetail.logo ? chatbotDetail.logo.name : "", // Check if logo exists and has a name
    //         chatbotDetail.background
    //             ? chatbotDetail?.background?.chatbotName
    //             : "",
    //         chatbotDetail.additionalRule,
    //         chatbotDetail.email,
    //     ];

    //     for (let i = propertiesToCheck.length - 1; i >= 0; i--) {
    //         if (propertiesToCheck[i].trim() !== "") {
    //             setCurrentStep(i + 2); // Adding 2 to match your desired step values
    //             return; // Exit the loop once a non-empty value is found
    //         }
    //     }
    // }, [chatbotDetail]);
    // useEffect(() => {
    //     if (Object.keys(singleChatbot).length > 0) {
    //         const suggestions = singleChatbot?.SuggestionQuestions.split(
    //             ","
    //         ).map((suggestion) => suggestion.trim());
    //         let updatedLogo = [];
    //         updatedLogo.push({
    //             uid: 1,
    //             name: "image.png",
    //             status: "done",
    //             url: `http://192.168.18.84:8000/show-file?file_path=${singleChatbot?.Logo}`,
    //         });
    //         setChatbotDetail((prevChatbotDetail) => {
    //             return {
    //                 ...prevChatbotDetail,
    //                 username: "AIBot.com/" + singleChatbot?.UserName,
    //                 chatBotFor: {
    //                     title: singleChatbot?.Category,
    //                     detail: data[singleChatbot?.Category],
    //                 },
    //                 chatBotName: singleChatbot?.ChatbotName,
    //                 welcomeMessage: singleChatbot?.WelcomeMessage,
    //                 suggestionQuestions: suggestions,
    //                 logo: updatedLogo,
    //                 background: {
    //                     chatbotName: singleChatbot?.ChatbotColor,
    //                     userBackground: singleChatbot?.TextFrontColor,
    //                     botBackground: singleChatbot?.TextBackColor,
    //                     bodyBackground: singleChatbot?.BackgroundColor,
    //                 },
    //                 additionalRule: singleChatbot?.AdditionalRule,
    //                 email: singleChatbot?.Email,
    //             };
    //         });
    //     }
    // }, [singleChatbot]);

    return (
        <Container className="library-section">
            <Row className="d-flex align-items-center justify-content-center">
                <Col>
                    <Card className="mt-5">
                        <CardBody>
                            {currentStep === 1 && (
                                <UserName
                                    chatbotDetail={chatbotDetail}
                                    setChatbotDetail={setChatbotDetail}
                                    setCurrentStep={setCurrentStep}
                                    currentStep={currentStep}
                                />
                            )}
                            {currentStep === 2 && (
                                <ChatBotFor
                                    chatbotDetail={chatbotDetail}
                                    setChatbotDetail={setChatbotDetail}
                                    setCurrentStep={setCurrentStep}
                                    currentStep={currentStep}
                                />
                            )}
                            {currentStep === 3 && (
                                <ChatBotName
                                    chatbotDetail={chatbotDetail}
                                    setChatbotDetail={setChatbotDetail}
                                    setCurrentStep={setCurrentStep}
                                    currentStep={currentStep}
                                />
                            )}
                            {currentStep === 4 && (
                                <WelcomeMessage
                                    chatbotDetail={chatbotDetail}
                                    setChatbotDetail={setChatbotDetail}
                                    setCurrentStep={setCurrentStep}
                                    currentStep={currentStep}
                                />
                            )}
                            {currentStep === 5 && (
                                <SuggestionQuestions
                                    chatbotDetail={chatbotDetail}
                                    setChatbotDetail={setChatbotDetail}
                                    setCurrentStep={setCurrentStep}
                                    currentStep={currentStep}
                                />
                            )}
                            {currentStep === 6 && (
                                <Logo
                                    chatbotDetail={chatbotDetail}
                                    setChatbotDetail={setChatbotDetail}
                                    setCurrentStep={setCurrentStep}
                                    currentStep={currentStep}
                                />
                            )}
                            {currentStep === 7 && (
                                <Background
                                    chatbotDetail={chatbotDetail}
                                    setChatbotDetail={setChatbotDetail}
                                    setCurrentStep={setCurrentStep}
                                    currentStep={currentStep}
                                />
                            )}
                            {currentStep === 8 && (
                                <AdditionalRule
                                    chatbotDetail={chatbotDetail}
                                    setChatbotDetail={setChatbotDetail}
                                    setCurrentStep={setCurrentStep}
                                    currentStep={currentStep}
                                />
                            )}
                            {currentStep === 9 && (
                                <Email
                                    chatbotDetail={chatbotDetail}
                                    setChatbotDetail={setChatbotDetail}
                                    setCurrentStep={setCurrentStep}
                                    currentStep={currentStep}
                                />
                            )}
                            {currentStep === 10 && (
                                <CreatedSuccessfully
                                    chatbotDetail={chatbotDetail}
                                    setChatbotDetail={setChatbotDetail}
                                    setCurrentStep={setCurrentStep}
                                    currentStep={currentStep}
                                />
                            )}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
