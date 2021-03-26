import React from 'react';
import PropTypes from "prop-types";

const FeedbackOptions = ({options, onLeaveFeedback }) => (
    <>
        <input
            className={options.button}
            type="button"
            name="good"
            value="Good"
            onClick={onLeaveFeedback}
        />
        <input
            className={options.button}
            type="button"
            name="neutral"
            value="Neutral"
            onClick={onLeaveFeedback}
        />
        <input
            className={options.button}
            type="button"
            name="bad"
            value="Bad"
            onClick={onLeaveFeedback}
        />
    </>
);

FeedbackOptions.prototype = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired
};


export default FeedbackOptions;