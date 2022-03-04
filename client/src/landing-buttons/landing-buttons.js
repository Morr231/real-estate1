import React, { useState, useRef } from "react";
import "./landing-buttons.sass";

function LandingButtons({
    setTeamState,
    setReferenceState,
    isTeam,
    isReference,
}) {
    const references = [useRef(null), useRef(null), useRef(null)];

    function changeTeam(referenceNumber) {
        for (let i = 0; i < 3; i++) {
            if (i == referenceNumber) {
                references[i].current.style.backgroundColor = "#1C3988";
            } else {
                references[i].current.style.backgroundColor = "#DADAEE";
            }
        }
        if (isTeam) {
            setTeamState(referenceNumber);
        } else if (isReference) {
            setReferenceState(referenceNumber);
        }
    }

    return (
        <div className="landing-buttons">
            <button
                className="landing-buttons__element"
                ref={references[0]}
                onClick={() => changeTeam(0)}
            ></button>
            <button
                className="landing-buttons__element"
                ref={references[1]}
                onClick={() => changeTeam(1)}
            ></button>
            <button
                className="landing-buttons__element"
                ref={references[2]}
                onClick={() => changeTeam(2)}
            ></button>
        </div>
    );
}

export default LandingButtons;
