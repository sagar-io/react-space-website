import { NavLink, Navigate } from "react-router-dom";

const CrewFactory = (props) => {
  const showState = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#ffffff" : "transparent",
      borderRadius: "50%",
    };
  };

  return (
    <div className="crew-wrapper">
      <div className="crew-info-text">
        <h5>
          <span className="faded">02</span> Meet Your Crew
        </h5>

        <div>
          <h4>{props.role}</h4>
          <h3>{props.name}</h3>
          <p>{props.bio}</p>
        </div>

        <div className="dots-wrapper">
          <NavLink to="/Crew/" style={showState}>
            {" "}
            <div className="faded dot dot1"></div>
          </NavLink>
          <NavLink to="/Crew/Mission-Specialist" style={showState}>
            {" "}
            <div className="faded dot dot2"></div>
          </NavLink>
          <NavLink to="/Crew/Pilot" style={showState}>
            {" "}
            <div className="faded dot dot3"></div>
          </NavLink>
          <NavLink to="/Crew/Flight-Engineer" style={showState}>
            {" "}
            <div className="faded dot dot4"></div>
          </NavLink>
        </div>
      </div>

      <div className="crew-img">
        <img src={props.images.png} alt="Crew-Image" />
        <div className='nav-strip faded'></div>
      </div>
    </div>
  );
};

export default CrewFactory;
