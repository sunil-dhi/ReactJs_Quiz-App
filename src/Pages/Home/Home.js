import React, { useState } from "react";
import "./Home.css";
import { Button, MenuItem, TextField } from "@mui/material";
import  Categories  from "../../Data/Categories";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
const Home = ({name,setName, fetchQuestions}) => {
        
    const [category, setCategory ]=useState("")
    const [difficulty, setDifficulty ]=useState("")
    const [error, setError ]=useState(false)
   
         const history=useHistory()

    const handleSubmit=()=>{
        if(!category || !difficulty || !name){
            setError(true)
        }
        else{
            setError(false)
             fetchQuestions(category,difficulty);
             history.push("/quiz")
        }
    }

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz settings</span>

        <div className="settings_select">
            {error && <ErrorMessage>please fill all fields</ErrorMessage>}
          <TextField
            style={{ marginBottom: 30 }}
            label="Enter your name"
            variant="outlined"
            onChange={(e)=>setName(e.target.value)}
            
          />

          <TextField style={{ marginBottom: 30 }}
            select 
            label="Select category" variant="outlined"
            onChange={(e)=>setCategory(e.target.value)}
            value={category}
            >
            
            
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField 
          select
          label="Select difficulty"
          variant="outlined"
          onChange={(e)=>setDifficulty(e.target.value)}
          value={difficulty}
          style={{marginBottom:30}}
           >
            <MenuItem key="Easy" value="easy"> Easy</MenuItem>
            <MenuItem key="Medium" value="medium"> Medium</MenuItem>
            <MenuItem key="Difficult" value="difficult"> Difficult</MenuItem>

          </TextField>

          <Button onClick={handleSubmit}
          variant="contained" 
          size="large" 
          color="primary">
              Start quiz
          </Button>
        </div>
      </div>

      <img src="/quiz.svg" className="banner" />
    </div>
  );
};

export default Home;
