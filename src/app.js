import React, { Component, useState } from 'react';
import Navbar from "./Componennts/navbar"
import QuestionBody from './Componennts/questionBody';
import CandidateDetails from './Componennts/candidateDetails';
// import Footer from './Componennts/footer';
import Questions from './Helpers/questions'
import  './style.css'

function App() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState({});
    const [selectedQuestion, setSelectedQuestion] = useState(-1);

    const handleNext = (e) => {
        e.preventDefault();
        setCurrentQuestion(currentQuestion + 1);
      };
    
      const handlePrev = (e) => {
        e.preventDefault();
        setCurrentQuestion(currentQuestion - 1);
      };

    return ( 
        <React.Fragment>
            <Navbar />
            <div className='container'>
                <QuestionBody 
                    handleNext= {handleNext}
                    handlePrev={handlePrev}
                    selectedOption = {selectedOption}
                    setSelectedOption = {setSelectedOption}
                    currentQuestion = {currentQuestion}
                    selectedQuestion={selectedQuestion}
                    setSelectedQuestion={setSelectedQuestion}
                />
                <CandidateDetails 
                image = {Questions[currentQuestion].img}
                selectedOption = {selectedOption}
                setSelectedOption = {setSelectedOption}
                setCurrentQuestion={setCurrentQuestion} 
                selectedQuestion={selectedQuestion}
                setSelectedQuestion={setSelectedQuestion}
                currentQuestion = {currentQuestion}
                />
            </div>
            {/* <Footer 
                onIncrement={incrementIndex} 
                question={Questions}
                onDecrement={decrementIndex}/> */}
        </React.Fragment>
     );
}

export default App;