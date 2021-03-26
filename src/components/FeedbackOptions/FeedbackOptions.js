import React from 'react';

const FeedbackOptions = ({ onLeaveFeedback }) => (
    <>
        <input
            type="button"
            name="good"
            value="Good"
            onClick={onLeaveFeedback}
        />
        <input
    
            type="button"
            name="neutral"
            value="Neutral"
            onClick={onLeaveFeedback}
        />
        <input
   
            type="button"
            name="bad"
            value="Bad"
            onClick={onLeaveFeedback}
        />
    </>
);

export default FeedbackOptions;