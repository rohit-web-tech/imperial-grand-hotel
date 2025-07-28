import { ChevronRight } from 'lucide-react';
import React from 'react'
import "./styles.css";

const SecondaryBtn = ({
    title,
    onClick,
    className=""
}) => {
  return (
    <button
        onClick={onClick}
        className={`sec-btn ${className}`}
    >
      <span>
        {
            title
        }
      </span>
      <ChevronRight/>
    </button>
  )
}

export default SecondaryBtn;