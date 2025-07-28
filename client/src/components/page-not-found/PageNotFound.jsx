import React from 'react'
import "./styles.css";
import ContentWrapper from '../content-wrapper/ContentWrapper';
import MainBtn from '../button/MainBtn';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <div
            id="page-not-found"
        >
            <ContentWrapper>
                <div className="page-not-found">
                    <div className="title">
                        <span>404</span>
                    </div>
                    <div className="subtitle">
                        <span>Oops!! Something Is Missing</span>
                    </div>
                    <div className="para">
                        <span>Sorry But The Page You Are Looking  For Does Not Exist, Have Been Removed, Name Changed Or Is Temporarily Unavailable</span>
                    </div>
                    <MainBtn
                        title="Back to Home"
                        className='white'
                        onClick={()=>navigate("/")}
                    />
                </div>
            </ContentWrapper>
        </div>
    )
}

export default PageNotFound;