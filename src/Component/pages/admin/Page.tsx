import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'

const Page = () => {
  const [state, setLocationState]= useState({data})

  useEffect(()=>{
    let state= location.state
    setLocationState(state)
  }, [location.state])
  return (
    <div>
      {state && (
        <div>{state.userName}</div>
      )}
    </div>
  )
}

export default Page