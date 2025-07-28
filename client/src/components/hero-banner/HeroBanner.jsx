import React, { useState } from 'react';
import "./styles.css";
import ContentWrapper from '../content-wrapper/ContentWrapper';
import { Pencil, X } from 'lucide-react';
import BookingCard from '../booking-card/BookingCard';
import MainBtn from '../button/MainBtn';

const EditableText = ({ text, onChange, className }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditText = async (text) => {
        setIsEditing(false);
        const updatedData = {
            component: "HeroBanner",
            field: className?.includes("title") ? "title" : "subtitle",
            value: text
        }
        try {
            
            const resInText = await fetch("http://localhost:5000/update-section", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedData)
            }) ;

            const res = await resInText.json();
            
            console.log(res?.message)
            
        } catch (error) {
            
            console.log(res?.message)

        }
    }

    return (
        <div className={`${className} editable-text`}>
            {
                isEditing ? (
                    <input
                        value={text}
                        onChange={(e) => onChange(e.target.value)}
                        onBlur={()=>handleEditText(text)}
                        autoFocus
                    />
                ) : (
                    <>
                        <span>{text}</span>
                        <Pencil className="edit-icon" size={16} onClick={() => setIsEditing(true)} />
                    </>
                )
            }
        </div>
    );
};

const ButtonEditorModal = ({ btnData, setBtnData, onClose, onSave }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <h4>Edit Call to Action</h4>
                    <X size={18} onClick={onClose} />
                </div>
                <div className="modal-body">
                    <label>Button Text</label>
                    <input
                        type="text"
                        value={btnData.title}
                        onChange={(e) => setBtnData({ ...btnData, title: e.target.value })}
                    />
                    <label>Button Link</label>
                    <input
                        type="text"
                        value={btnData.link}
                        onChange={(e) => setBtnData({ ...btnData, link: e.target.value })}
                    />
                    <button className="modal-save-btn" onClick={onSave}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

const HeroBanner = () => {
    const [title, setTitle] = useState("A Luxurious Way To Enjoy Your Life");
    const [subtitle, setSubtitle] = useState("BEST PLACE TO RELAX & ENJOY");

    const [button, setButton] = useState({
        title: "",
        link: ""
    });
    const [showBtnEditor, setShowBtnEditor] = useState(false);
    const [btnData, setBtnData] = useState(button);

    const handleButtonSave = () => {
        setButton(btnData);
        setShowBtnEditor(false);
    };

    return (
        <>
            <div id="hero-banner">
                <ContentWrapper>
                    <div className="hero-banner">
                        <div className="line-vertical"></div>

                        <EditableText
                            text={subtitle}
                            onChange={setSubtitle}
                            className="subtitle"
                        />

                        <EditableText
                            text={title}
                            onChange={setTitle}
                            className="title"
                        />

                        {
                            button?.title ? (
                                <div className="cta-button-wrapper">
                                    <MainBtn
                                        title={button.title}
                                        onClick={() => window.location.href = button.link}
                                        className="gold"
                                    />
                                    <Pencil
                                        className="edit-icon"
                                        size={16}
                                        onClick={() => {
                                            setBtnData(button);
                                            setShowBtnEditor(true);
                                        }}
                                    />
                                </div>
                            ) : (
                                <button
                                    className="add-cta-btn"
                                    onClick={() => {
                                        setShowBtnEditor(true);
                                    }}
                                >
                                    + Add Button
                                </button>
                            )
                        }
                    </div>
                </ContentWrapper>
            </div>

            <ContentWrapper>
                <BookingCard />
            </ContentWrapper>

            {
                showBtnEditor && (
                    <ButtonEditorModal
                        btnData={btnData}
                        setBtnData={setBtnData}
                        onClose={() => setShowBtnEditor(false)}
                        onSave={handleButtonSave}
                    />
                )
            }
        </>
    );
};

export default HeroBanner;
