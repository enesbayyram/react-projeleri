import { IoPersonSharp } from "react-icons/io5";
import { FaShoppingBasket } from "react-icons/fa";
import { SiAuth0 } from "react-icons/si";
import { IoMdLogIn } from "react-icons/io";



const style = {
  fontSize: "15px",
  color: "lightgrey",
  marginRight:'5px'
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
  {
    name: "SiAuth0",
    icon: <SiAuth0 key={3} style={style} />,
  },
  {
    name: "IoMdLogIn",
    icon: <IoMdLogIn key={4} style={style} />,
  },
];
