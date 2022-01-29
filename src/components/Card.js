import "./Card.css";
export default function Card(props) {
  return (
    <div className="card">
      <div className="card--img">
        <img src={`./images/${props.image}`} alt="fuji"></img>
      </div>
      <div className="card--data">
        <div className="card--country--container">
          <h3 className="card--country">
            <img
              className="ubication--logo"
              src="./images/ubication.png"
              alt="ubication-logo"
            ></img>
            {props.country}
          </h3>
          <a
            className="card--mapLink"
            href={props.mapsLink}
            rel="noreferrer"
            target="_blank"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="card--place">{props.place}</h2>
        <h3 className="card--date">
          <span>{props.dateFrom}</span> - <span>{props.dateTo}</span>
        </h3>
        <p className="card--description">{props.description}</p>
      </div>
    </div>
  );
}
