import React, { useState } from "react";
import './App.css';
import copiarLink from './new-draft';

// Utility function to import all icons
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const heroIcons = importAll(require.context('./images/heroIcons', false, /\.(png|jpe?g|svg)$/));

function TrueDraft() {
    const [selectedHeroesLeft, setSelectedHeroesLeft] = useState([]);
    const [selectedHeroesRight, setSelectedHeroesRight] = useState([]);
    const [isAmberTurn, setIsAmberTurn] = useState(true);

    const handleIconClick = (iconName) => {
        const heroIcon = heroIcons[iconName];
        if (isAmberTurn) {
            if (selectedHeroesLeft.length < 6) {
                setSelectedHeroesLeft([...selectedHeroesLeft, heroIcon]);
                setIsAmberTurn(!isAmberTurn);
            }
        } else {
            if (selectedHeroesRight.length < 6) {
                setSelectedHeroesRight([...selectedHeroesRight, heroIcon]);
                setIsAmberTurn(!isAmberTurn);
            }
        }
    };

    return (
        <div className="App-header">
            <div className="selected-heroes-box-left">
                {selectedHeroesLeft.map((heroIcon, index) => (
                    <div key={index} className="selected-hero">
                        <img src={heroIcon} alt={`Hero ${index}`} />
                    </div>
                ))}
            </div>
            <div className="selected-heroes-box-right">
                {selectedHeroesRight.map((heroIcon, index) => (
                    <div key={index} className="selected-hero">
                        <img src={heroIcon} alt={`Hero ${index}`} />
                    </div>
                ))}
            </div>
            <div className="icon-box">
                {Object.keys(heroIcons).map((iconName, index) => (
                    <button 
                        key={index} 
                        className="icon-button" 
                        onClick={() => handleIconClick(iconName)}
                    >
                        <img src={heroIcons[iconName]} alt={iconName} />
                    </button>
                ))}
            </div>
        </div>
    );
}

export default TrueDraft;