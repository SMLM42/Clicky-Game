import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div className="jumbotron jumbotron-fluid text-center">
            <div className="container">
                <h1 >Play the TeamFortress 2 Matching Game</h1>
                <p>Click on any Image to get started, Don't Click on any Image more then Once!</p>
                <p>Score: {props.score} | Top Score: {props.topScore}</p>
            </div>
        </div>
    );
}

export default Header;