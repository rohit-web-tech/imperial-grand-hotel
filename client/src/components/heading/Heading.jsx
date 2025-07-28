import React from 'react'
import "./styles.css";

const Heading = ({
    className="center",
    subtitle,
    title,
    blackBg=false
}) => {
  return (
    <div
        className={`heading ${className}`}
    >
      <div className={`vertical-line ${blackBg ? "white" : ""}`}></div>
      <div className="subtitle">
        {subtitle}
      </div>
      <div className={`title ${blackBg ? "white" : ""}`}>
        {title}
      </div>
    </div>
  )
}

export default Heading ;