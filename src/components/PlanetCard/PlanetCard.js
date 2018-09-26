import React from "react";
import "./PlanetCard.css";

const PlanetCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectPlanet(props.world)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.world} src={props.image} />
            </a>
        </div>
    </div>
);

export default PlanetCard;
