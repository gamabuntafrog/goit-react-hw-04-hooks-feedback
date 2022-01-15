import React, { Component } from "react";
import { useState } from 'react'
import Statistics from "../Statistics";
import FeedbackOptions from "../FeedbackOptions";
import Section from "../Section";
import Notification from "../Notification";


const Counter = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleState = (name) => {
    if (name === 'good') {
      setGood(good + 1)
    }
    if (name === 'neutral') {
      setNeutral(neutral + 1)
    }
    if (name === 'bad') {
      setBad(bad + 1)
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return ((good /
        (good + neutral + bad)) * 100
    );
  };

  return (<div>
    <Section title="Please leave feedback">
      <FeedbackOptions options={{good, neutral, bad}} onLeaveFeedback={handleState} />
      {countTotalFeedback() !== 0 && (
        <Statistics
        good={good} neutral={neutral} bad={bad}
        total={countTotalFeedback()}
        percentage={countPositiveFeedbackPercentage()}
        />)}
      {countTotalFeedback() === 0 && (<Notification message="There is no feedback" />)}
    </Section>


  </div>)

}

export default Counter;

