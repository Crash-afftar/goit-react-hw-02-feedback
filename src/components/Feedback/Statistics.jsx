import React from "react";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <p className="Statistic">Good: {good}</p>
            <p className="Statistic">Neutral: {neutral}</p>
            <p className="Statistic">Bad: {bad}</p>
            <p className="Statistic__total">Total: {total}</p>
            <p className="Statistic__total">Positive feedback: {positivePercentage}%</p>
        </>
    );
};

export default Statistics;