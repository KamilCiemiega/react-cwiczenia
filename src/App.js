import { Cart } from "./components/Card";
import { cardData } from "./data/cardData";
import { menuData } from "./data/menuData";
import { Menu } from "./components/Menu";
import app from "./style/app.css";

function App() {
  return (
    <div className="wraper">
      <ul className="menu">
        {menuData.map((el) => {
          return <Menu name={el.name} link={el.link} />;
        })}
      </ul>
      {cardData.map((elem) => {
        return (
          <Cart
            name={elem.name}
            surname={elem.surname}
            avatar={elem.avatar}
            background={elem.background}
            bronze={elem.bronze}
            silver={elem.silver}
            gold={elem.gold}
          />
        );
      })}
    </div>
  );
}

export default App;
