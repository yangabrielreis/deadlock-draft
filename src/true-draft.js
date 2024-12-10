import React, { useState } from "react";
import './App.css';


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const heroIcons = importAll(require.context('./images/heroIcons', false, /\.(png|jpe?g|svg)$/));
const blankImage = require('./images/Blank.png'); 
function TrueDraft() {
    const [selectedHeroesTop, setSelectedHeroesTop] = useState([]);
    const [selectedHeroesLeft, setSelectedHeroesLeft] = useState([]);
    const [selectedHeroesRight, setSelectedHeroesRight] = useState([]);
    const [isAmberTurn, setIsAmberTurn] = useState(true);
    const [availableHeroIcons, setAvailableHeroIcons] = useState(heroIcons);

    const handleIconClick = (iconName) => {
        const heroIcon = availableHeroIcons[iconName];
        if (heroIcon === blankImage) return; 

        if (selectedHeroesTop.length < 4) {
            setSelectedHeroesTop([...selectedHeroesTop, heroIcon]);
            const newAvailableHeroIcons = { ...availableHeroIcons };
            newAvailableHeroIcons[iconName] = blankImage;
            setAvailableHeroIcons(newAvailableHeroIcons);
        } else if (isAmberTurn) {
            if (selectedHeroesLeft.length < 6) {
                const newAvailableHeroIcons = { ...availableHeroIcons };
                newAvailableHeroIcons[iconName] = blankImage;
                setAvailableHeroIcons(newAvailableHeroIcons);
                setSelectedHeroesLeft([...selectedHeroesLeft, heroIcon]);
                setIsAmberTurn(!isAmberTurn);
            }
        } else {
            if (selectedHeroesRight.length < 6) {
                const newAvailableHeroIcons = { ...availableHeroIcons };
                newAvailableHeroIcons[iconName] = blankImage;
                setAvailableHeroIcons(newAvailableHeroIcons);
                setSelectedHeroesRight([...selectedHeroesRight, heroIcon]);
                setIsAmberTurn(!isAmberTurn);
            }
        }
    };
    

    return (
        <div className="App-header">
            <div className="selected-heroes-box-top">
                {selectedHeroesTop.map((heroIcon, index) => (
                    <div key={index} className="selected-hero">
                        <img src={heroIcon} alt={`Hero ${index}`} />
                    </div>
                ))}
            </div>
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
                {Object.keys(availableHeroIcons).map((iconName, index) => (
                    <button 
                        key={index} 
                        className="icon-button" 
                        onClick={() => handleIconClick(iconName)}
                    >
                        <img src={availableHeroIcons[iconName]} alt={iconName} />
                    </button>
                ))}
            </div>
        </div>
    );
}

export default TrueDraft;
