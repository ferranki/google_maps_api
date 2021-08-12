import React from 'react';
import './index.scss';

function AutocompleteLocationCellResultComponent({prediction, onLocationSelect}) {

    
    const handleSelect = () => {
        console.log("handleSelect", prediction);
        onLocationSelect(prediction)
    };
    
    const getDescriptionFormated = (description, matchedSubstrings) => {
        const matchedSubstringsValue = matchedSubstrings[0]

        if (matchedSubstringsValue.offset === 0) {
            return (
                <>
                    <span className="pac-matched">{description.substring(0, matchedSubstringsValue.length)}</span>
                    <span>{description.substring(matchedSubstringsValue.length, description.length)}</span>
                </>
            );
        }

        const startMatchPosition = matchedSubstringsValue.offset;
        const endMatchPosition = matchedSubstringsValue.length + matchedSubstringsValue.offset;

        return (
            <>
                <span>{description.substring(0, matchedSubstringsValue.offset)}</span>
                <span className="pac-matched">{description.substring(startMatchPosition, endMatchPosition)}</span>
                <span>{description.substring(endMatchPosition, description.length)}</span>
            </>
        );
    }

    return (
        <div className="pac-item" onClick={handleSelect}>
            {getDescriptionFormated(prediction.description, prediction.matched_substrings)}
        </div>
    );
}

export default AutocompleteLocationCellResultComponent;
