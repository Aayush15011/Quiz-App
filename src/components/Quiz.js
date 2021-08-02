import "../App.css";
import React,{ useEffect} from "react";
import { Questions } from "../helpers/Questions";
import { useState } from "react";

import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Quiz() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const { score, setScore, gameState, setGameState } = useContext(
    GameStateContext
  );

  const chooseOption = (option) => {
    console.log("clicked");
    setOptionChosen(option);
    
  };

  const nextQuestion = () => {
    
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };
  const PrevQuestion = () => {
    
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score - 1);
    }
    setCurrentQuestion(currentQuestion - 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

    // -------
    const[time ,settime] = useState(20);
    const tick=()=>{
        settime(time-1);
    }
    useEffect(() => {
        const interval  = setInterval(tick, 1000);     
        return()=>{
            clearInterval(interval)
        }
        
    })
    if(time<0){
      return(
        <h1 style={{color:"red"}}>Time Over !! </h1>
      )
    }

    // -----------
  return (
<>
        <div >
            <p style={{fontSize:"20px"}}>Time Left: {time} seconds</p>        
        </div>

{/* ----------- */}
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
        <button
          onClick={() => {
            chooseOption("optionA");
          }}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button 
          onClick={() => {
            chooseOption("optionB");
            
          }}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button
          onClick={() => {
            chooseOption("optionC");
          }}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button
          onClick={() => {
            chooseOption("optionD");
          }}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion == Questions.length - 1 ? (
        <button style={{background:"green", color:"#fff"}} onClick={finishQuiz} id="nextQuestion">
          Submit Quiz
        </button>
      ) : (
        <button style={{background:"rgb(232 42 42)",color:"#fff"}} onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
        <button style={{background:"rgb(232 42 42)",color:"#fff"}} onClick={PrevQuestion} id="nextQuestion">
          Prv Question
        </button>

    </div>
</>
  );
}

export default Quiz;