// import DestinationBackground from '../My Resources/assets/destination/background-destination-desktop.jpg'
import { Route, Routes } from 'react-router-dom'
import DestinationFactory from './DestinationFactory'
import Data from '../Data.json'
import { useState, setState } from 'react'
import NavBar from './NavBar'


const Destination = () => {
    const [destinationData, setDestinationData] = useState(Data.destinations);
    return (
      
        <div className="destination-wrapper-container">
          <NavBar />
          <Routes>
            <Route path='/' element={<DestinationFactory {...destinationData[0]}/>}></Route>
            <Route path='Mars' element={<DestinationFactory {...destinationData[1]}/>}></Route>
            <Route path='Europa' element={<DestinationFactory {...destinationData[2]}/>}></Route>
            <Route path='Titan' element={<DestinationFactory {...destinationData[3]}/>}></Route>
          </Routes>
        </div>
    )
}

export default Destination;