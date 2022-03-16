import menu from "../style/menu.css";

export const Menu = (props) => {
  return (
    <li className="menu-list">
      <a href={props.link}>{props.name}</a>
    </li>
  );
};
