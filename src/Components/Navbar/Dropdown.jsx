import React from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Web Development",
    path: "/work/WebDevelopment",
    cName: "dropdown-link",
  },
  {
    id: 2,
    title: "App Development",
    path: "/work/AppDevelopment",
    cName: "dropdown-link",
  },
  {
    id: 3,
    title: "UI/UX Design",
    path: "/work/UIUXDesign",
    cName: "dropdown-link",
  },
  {
    id: 4,
    title: "Machine Learning",
    path: "/work/MachineLearning",
    cName: "dropdown-link",
  },
];
const Dropdown = ({ onPress }) => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  return (
    <ul
      onClick={handleClick}
      className={click ? "dropdown-menu clicked" : "dropdown-menu"}
    >
      {items.map((item) => {
        return (
          <li key={item.id} onClick={onPress}>
            <Link to={item.path} className={item.cName}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
