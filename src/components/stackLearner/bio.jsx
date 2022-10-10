import React from "react"

const Bio = (props) => {
    return (
    <div className="bio">
        <h1 >My Name Is {props.name}</h1>
        <p>{props.title}</p>
    </div>
    )
  }

export default Bio