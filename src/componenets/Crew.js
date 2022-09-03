import {Routes, Route} from 'react-router-dom'
import CrewFactory from './CrewFactory'
import NavBar from './NavBar'
// import Data

const Crew = (props) => {
    const CommanderData = props[0]
    const missionSpecialistData = props[1]
    const pilotData = props[2]
    const flightEnginneerData = props[3]

    const styles = {
        wrapperStyle : {
            // background: `url('My Resources/assets/crew/background-crew-desktop.jpg') no-repeat`,
            // backgrundPosition: 'cover',
            // height: '100vh',
            // overflow: 'hidden'
        }
    }
    return (
        <div style={styles.wrapperStyle} className="crew-wrapper-container">
            <NavBar />
            <Routes>
                <Route path='/' element={<CrewFactory {...CommanderData}/>}></Route>
                <Route path='Mission-Specialist' element={<CrewFactory {...missionSpecialistData}/>}></Route>
                <Route path='Pilot' element={<CrewFactory {...pilotData}/>}></Route>
                <Route path='Flight-Engineer' element={<CrewFactory {...flightEnginneerData}/>}></Route>
            </Routes>
        </div>
    )
}

export default Crew;