// import classes from "./ExploreMenu.modeule.css";
import { menu_list } from "../../assets/frontend_assets/assets";
import classes from "./ExploreMenu.module.css";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className={classes.exploreMenu} id="exploreMenu">
      <h1>Explore Our menu</h1>
      <p className={classes.exploreMenu_text}>
        choose your favourite from our diverse collection of recipies
      </p>
      <div className={classes.exploreMenulist}>
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              className={classes.exploreMenulistItems}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
            >
              <img
                src={item.menu_image}
                className={category === item.menu_name ? classes.active : ""}
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
