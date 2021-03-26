import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Statistics from './components/Statistics/Statistics'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import Section from './components/Section/Section'
import Notification from './components/Notification/Notification'


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (e) => {
    const name = e.target.name;
		this.setState((prevState) => ({
			[name]: prevState[name] + 1
		}));
  }

//  goodHandleIncrement = () => {
//     this.setState(prevState => ({
//         good: prevState.good + 1
//      }));
//  };
  
  
  
//  neutralHandleIncrement = () => {
//     this.setState(prevState => ({
//         neutral: prevState.neutral + 1
//      }));
//  };
  
//    badHandleIncrement = () => {
//     this.setState(prevState => ({
//         bad: prevState.bad + 1
//      }));
//  };
 
 countTotalFeedback = () => {
		const { good, neutral, bad } = this.state;
		const result = good + neutral + bad;
		return result;
	};
 
  countPositiveFeedbackPercentage = () => {
    const  result  = this.countTotalFeedback();
		const { good } = this.state;
		const percentage = (good * 100) / result;
		return Math.round(percentage);
  }
  
  render() {
	const { good, neutral, bad } = this.state;
    
    const result = this.countTotalFeedback()

    return (
      <div >
       
        <Section title="Please leave feedback">
      
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
      
        {/* <button type="button" onClick={this.goodHandleIncrement}>Good</button>
        <button type="button" onClick={this.neutralHandleIncrement}>Neutral</button>
        <button type="button" onClick={this.badHandleIncrement}>Bad</button> */}

        {result === 0 ? (<Notification message="No feedback given"></Notification>) :
        
          (<Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>)}
      
      </div>
    );
  }
}
export default App;




