import React from "react"

const Social = (props) => {
    return (
      <div className="social">
        <a
          href={props.linkA} >Home</a>
        <a
          href= {props.linkB} >Github</a>
        <a
          href= {props.linkC} >Linkedin</a>
    </div>
    )
}

export default Social