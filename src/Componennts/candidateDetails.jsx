import React, { Component } from 'react';
import Questions from '../Helpers/questions'

function CandidateDetails(props) {
    
    const buttons = [];
        for (let i = 0; i < Questions.length; i++) {
        buttons.push(
        <button 
        key={i} 
        onClick={() => props.setCurrentQuestion(i)}
        style={{backgroundColor: i === props.selectedQuestion ? 'green' : 'none'}}
        >
                {i + 1}
        </button>
        );
    }

    console.log(props.image)

    const answeredQuestions = Object.keys(props.selectedOption).length;

    return (         
        // This is the sidebar on the right hand
        <div className='sideBar'>

            {/* This contains the details of the candidates  */}
            <div className='candidateDetails'>

                {/* This contains the image of the candidate  */}
                {/* <div className='passport'>
                    <img src={props.image}/>
                </div> */}

                    {/* This contains the numbers associated to the candidate  */}
                <div>
                    <h3 className='matricNumber'>Matric Num:</h3>
                    <p>210811093</p> <br />
                    <h3>Name:</h3>
                    <p>Alfred Emmanuel</p> <br />
                    <h3>Extra Num</h3>
                    <p>122345</p>
                </div>
            </div>

                {/* This is all the boxes that leads to each questions  */}
            <div>
                <div className='numberOfQuestions-div'>
                    <h3>Number of Questions</h3>
                    <h4>Answered {answeredQuestions} out of 200</h4>
                    <div className='questionBtns'>
                        {buttons}
                    </div>
                </div>
            </div>
        </div>
     );
}

export default CandidateDetails;