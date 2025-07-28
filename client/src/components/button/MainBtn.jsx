import { ChevronRight } from 'lucide-react';
import React from 'react'
import "./styles.css";

const MainBtn = ({
    title,
    onClick,
    className = ""
}) => {
    return (
        <button
            onClick={onClick}
            className={`main-btn ${className}`}
        >
            <span>
                {
                    title
                }
            </span>
            <ChevronRight />
        </button>
    )
}

export default MainBtn;