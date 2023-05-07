import React, { Component } from "react";
import PropTypes from 'prop-types';
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";
import './Feedback.css';

class Feedback extends Component {
    
    static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
    };

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleIncrement = (type) => {
        this.setState(prevState => ({
            [type]: prevState[type] + 1,
        }));
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        return total ? Math.round((good / total) * 100) : 0;
    };


    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();

        return (
            <div>
                 <Section title="Please leave feedback">
                <FeedbackOptions
                        options={['good', 'neutral', 'bad']}
                        onLeaveFeedback={this.handleIncrement}
                        
                    />
                    </Section>

                 <Section title="Statistics">
                    {total ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={total}
                            positivePercentage={positivePercentage}
                        />
                    ) : (
                        <Notification message="There is no feedback" />
                    )}
                </Section>
            </div>
        );
    }
}

export default Feedback;