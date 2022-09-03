import React from 'react'
import {useState, setState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Data from './Data.json'
import Home from './componenets/Home'
import Destination from './componenets/Destination'
import Crew from './componenets/Crew'
import Technology from './componenets/Technology'
import NoMatch from './componenets/NoMatch'
import './style.css'

export default function App() {
  const [AllData, setData] = useState(Data);
  const destinationData = AllData.destinations;
  const crewData = AllData.crew;
  const technologyData = AllData.technology;

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='Destination/*' element={<Destination/>}/>
      <Route path='Crew/*' element={<Crew {...crewData}/>}/>
      <Route path='Technology/*' element={<Technology {...technologyData}/>}/>
      <Route path='*' element={<NoMatch />}/>
    </Routes>
    </>

  )
}

