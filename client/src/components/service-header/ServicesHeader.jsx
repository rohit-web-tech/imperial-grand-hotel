import React from 'react'
import "./styles.css";
import ContentWrapper from '../content-wrapper/ContentWrapper';

const ServicesHeader = () => {
    return (
        <div
            id="services-header"
        >
            <ContentWrapper>
                <div className="services-header">
                    <div className="line-vertical"></div>
                    <div className="subtitle">
                        <span>OUR SERVICES</span>
                    </div>
                    <div className="title">
                        <span>Introducing Our Best Services</span>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default ServicesHeader;