import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import { Col, Container, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
const Antd = ({ chatbotDetail, setChatbotDetail }) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [previewTitle, setPreviewTitle] = useState("");
    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(
            file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
        );
    };
    const checkFileType = (file) => {
        if (file && /\.(png|jpe?g|svg)$/i.test(file.name)) {
            return true;
        } else {
            alert("You can only upload PNG/JPG/JPEG/SVG file!");
            return false;
        }
    };
    const handleChange = (newFileList) => {
        const filteredList = newFileList.filter((file) => checkFileType(file));
        const temp = filteredList.map((file) => {
            return { ...file, status: "done" };
        });
        setChatbotDetail({...chatbotDetail,logo:temp});
    };

    const uploadButton = (
        <div className="text-light">
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Upload
                            listType="picture-card"
                            fileList={chatbotDetail?.logo}
                            onPreview={handlePreview}
                            onChange={(info) => handleChange(info.fileList)}
                            name=""
                            accept="image/PNG, image/jpeg, image/jpg, image/svg"
                            showUploadList={{ showTooltip: false }}
                        >
                            {chatbotDetail?.logo?.length > 0 ? "" : uploadButton}
                        </Upload>
                    </Col>
                </Row>
            </Container>

            <Modal isOpen={previewOpen} toggle={handleCancel}>
                <ModalHeader toggle={handleCancel}>{previewTitle}</ModalHeader>
                <ModalBody>
                    <img
                        alt="example"
                        style={{
                            width: "100%",
                        }}
                        src={previewImage}
                    />
                </ModalBody>
            </Modal>
        </>
    );
};
export default Antd;
