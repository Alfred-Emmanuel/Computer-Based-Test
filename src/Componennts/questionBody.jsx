import React, { useState, useEffect } from 'react';
import Questions from '../Helpers/questions'

function QuestionBody(props){
    const [score, setScore] = useState(0);

    useEffect(() => {
        const selectedOptionIndex = props.selectedOption[props.currentQuestion] || -1;
        if (selectedOptionIndex === Questions[props.currentQuestion].answer) {
          setScore(score + 1);
        }
      }, [props.selectedOption, props.currentQuestion, score]);


    const selectedOptionIndex = props.selectedOption[props.currentQuestion] || -1;

    const handleOptionChange = (questionId, optionId) => {

      // Get the previous selected option for the current question
      const prevSelectedOption = props.selectedOption[questionId] || -1;

      // Update the selectedOption state with the new selected option
      props.setSelectedOption({ ...props.selectedOption, [questionId]: optionId });
      props.setSelectedQuestion(questionId);
      
      if (prevSelectedOption === Questions[questionId].answer) {
          // If the previously selected option was the correct answer
          if (optionId !== Questions[questionId].answer) {
              // And the new selected option is not the correct answer, reduce the score by 1
              setScore(score - 1);
          }
      }else if ( selectedOptionIndex === Questions[props.currentQuestion].answer && optionId === Questions[questionId].answer) {
          // If the new selected option is the correct answer, increase the score by 1
          setScore(score + 1);
      }
  };

  
  
    return (
      <form className='question-body'>
        {props.currentQuestion < Questions.length && (
          <div className='options'>
            <h1 className='questionNumber'>Question {Questions[props.currentQuestion].id}</h1>
            <h3>{Questions[props.currentQuestion].question}</h3>
            {Questions[props.currentQuestion].options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <input
                  type="radio"
                  name={props.currentQuestion}
                  id={optionIndex}
                  value={option}
                  checked={props.selectedOption[props.currentQuestion] === optionIndex}
                  onChange={() => handleOptionChange(props.currentQuestion, optionIndex)}
                />
                <label htmlFor={optionIndex}>{option}</label>
              </div>
            ))}
          </div>
        )}
         <button 
            disabled={props.currentQuestion === 0} 
            onClick={props.handlePrev} 
            className='button_slide prevBtn' 
            type='button'>
            Previous
        </button>

      <button 
        disabled={props.currentQuestion === Questions.length - 1} 
        onClick={props.handleNext} 
        className='button_slide nextBtn' 
        type='button'>
        Next
      </button>

      {/* {props.currentQuestion === Questions.length - 1 &&*/ <button className='button_slide submitBtn'>Submit</button>}
      {/* <h1>Score: {score}</h1> */}
      </form>
    );
  };

export default QuestionBody;