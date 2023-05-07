import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className='Button-container'>
            {options.map(option => (
                <button key={option} onClick={() => onLeaveFeedback(option)} className="Button">
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                </button >
            ))}
        </div>
    );
};

export default FeedbackOptions;