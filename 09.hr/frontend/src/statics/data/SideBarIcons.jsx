import { IoPersonSharp } from "react-icons/io5";
import { FaShoppingBasket } from "react-icons/fa";

const style = {
  fontSize: "17px",
  color: "lightgrey",
};

export const sideBarIcons = [
  {
    name: "IoPersonSharp",
    icon: <IoPersonSharp key={1} style={style} />,
  },
  {
    name: "FaShoppingBasket",
    icon: <FaShoppingBasket key={2} style={style} />,
  },
];
