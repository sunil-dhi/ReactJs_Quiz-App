import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Button } from "@mui/material";
import "./Question.css";
import { useHistory } from "react-router-dom";
const Questions = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const history=useHistory()

  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "select";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };
  const handleNext=()=>{
    if(currQues>8){
      history.push("/result")
    }
    else if(selected){
      setCurrQues(currQues+1)
      setSelected();
    }
    else{
      setError("please select an option first")
    }
  }

  const handleQuit=()=>{
     setCurrQues(0)
     setQuestions()
  }

  return (
    <div className="question">
      <h1>Question {currQues + 1}</h1>
      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}

          {options &&
            options.map((i) => (
              <button
                onClick={() => {
                  handleCheck(i);
                }}
                className={`singleOption ${selected && handleSelect(i)}`}
                key={i}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>

        <div className="controls">
          <Button
            onClick={handleQuit}
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
          >
            Quit
          </Button>

          <Button
            onClick={handleNext}
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
          >
            Next question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
