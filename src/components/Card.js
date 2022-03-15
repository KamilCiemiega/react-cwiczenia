import card from "../style/card.css";

export const Cart = (props) => {
  return (
    <div className="container">
      <p></p>
      <div className="container-name">
        <h1>{props.name}</h1>
        <h1>{props.surname}</h1>
      </div>
      <img src={props.avatar} alt="avatar"></img>
      <div className="container-rewards">
        <h1>Rewards</h1>
        <div className="container-rewards-elements">
          <p>{props.bronze}</p>
          <p>{props.silver}</p>
          <p>{props.gold}</p>
        </div>
      </div>
    </div>
  );
};
