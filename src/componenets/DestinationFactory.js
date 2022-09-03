import {NavLink} from 'react-router-dom';
import MoonImg from '../My Resources/assets/destination/image-moon.png'

function DestinationFactory(props) {

  const ShowState = ({isActive}) => {
    return {
      'textDecoration' : isActive ? 'underline': 'none'
    }
  }

  return (
    <div className="destination-wrapper">
      <div>
        <h5><span className="faded">01</span> Pick Your Destination</h5>

        <div className='stars-img'>
          <img src= {props.images.png}/>
        </div>
        
      </div>

      <div>
        <nav className='nav-elements'>
          <ul>
          <li><NavLink to='/Destination/'   className="nav-element" style={ShowState}>Moon</NavLink></li>
          <li><NavLink to='/Destination/Mars'  className="nav-element" style={ShowState}>Mars</NavLink></li>
          <li><NavLink to='/Destination/Europa'  className="nav-element" style={ShowState}>Europa</NavLink></li>
          <li><NavLink to='/Destination/Titan'  className="nav-element" style={ShowState}>Titan</NavLink></li>
          </ul>
        </nav>

        <h2>{props.name}</h2>

        <p>{props.description}</p>

        <div className='nav-strip faded'></div>

        <div className='destination-technical-data'>
          <div>
            <h6>Avg. Distance</h6>
            <h5>{props.distance}</h5>
          </div>

          <div>
            <h6>Est. Travel Time</h6>
            <h5>{props.travel}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}


export default DestinationFactory;