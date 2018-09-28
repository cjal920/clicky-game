import React from "react";
import "./Nav.css";

const Nav = props => (
    <div>
        <ul className="navbar nav-justified">
           <a href="/">Click A Planet</a>
            <div
                className={props.message.indexOf('incorrectly') !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </div>
            <div>Score: <span style={{color: "green"}}>{props.currentScore}</span> | Top Score: {props.topScore}</div>
        </ul> 
    </div>
);

export default Nav;

