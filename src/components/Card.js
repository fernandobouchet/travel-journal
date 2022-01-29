import "./Card.css";
export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="card--img">
        <img src={`./images/${props.image}`} alt="fuji"></img>
      </div>
      <div className="card--data">
        <h3>
          <img src="./images/ubication.png" alt="ubication-logo"></img>
          {props.country}
        </h3>
        <h4>{props.mapsLink}</h4>
        <h2>{props.place}</h2>
        <h3>
          <span>{props.dateFrom}</span> - <span>{props.dateTo}</span>
        </h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
