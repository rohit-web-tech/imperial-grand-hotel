import React from 'react';
import "./styles.css";

const ContentWrapper = ({
    children
}) => {

    return (
        <div
            className='wrapper-container'
        >
            <div
                className='wrapper'
            >
                {
                    children
                }
            </div>
        </div>
    )
}

export default ContentWrapper;
