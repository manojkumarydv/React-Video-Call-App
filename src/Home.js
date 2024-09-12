import './App.css';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate()

    const [roomId,setRoomId] = useState()

    const handleJoin = () =>{
        navigate(`/room/${roomId}`)
    }
  return (
    <div className='App'>
      <input type="text"placeholder='Enter room' value={roomId} onChange={(e) =>setRoomId(e.target.value)} />
      <button onClick={handleJoin}>Sumit</button>
    </div>
  )
}

export default Home
