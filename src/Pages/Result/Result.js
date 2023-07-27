import React from 'react'
import "./Result.css"
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@mui/material'
const Result = ({name, score}) => {
const history=useHistory()
  useEffect(() => {
    if(!name){
      history.pushState("/")
    }
  }, [name,history])
  
  return (
    <div className='result'>
        <span className="title">
          Final score:{score}
        </span>
        <Button
        variant="contained"
        color="secondary"
        size="large"
        href="/"
        style={{alignSelf:"center", marginTop:20}}
        >
           Go to homepage
        </Button>
    </div>
  )
}

export default Result