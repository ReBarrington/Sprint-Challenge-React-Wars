import React from "react";


const Specs = props => {

console.log (props, " is props in Eyecolor");

    return (
        <div>
            <p>Eye Color: {props.eyecolor}</p>
            <p>Skin Color: {props.skincolor}</p>
        </div>
    );

};


export default Specs;

