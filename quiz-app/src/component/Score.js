import React, { useContext } from 'react'
import QuestionsData from '../data/QuestionsData'
import { DataContext } from '../App'

const Score = () => {
    const {score,setAppState,setScore}=useContext(DataContext)

    const restartApp=()=>{
        setScore(0)
        setAppState("menu")
    }

  return (
    <div className='score'>
      <h1>สรุปคะแนน</h1>
      <h2>{score} / {QuestionsData.length}</h2>
      <button onClick={restartApp}>ทำแบบทดสอบอีกครั้ง</button>
    </div>
  )
}

export default Score
