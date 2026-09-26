import React from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Web Development",
    path: "/explore/WebDevelopment",
    cName: "dropdown-link",
  },
  {
    id: 2,
    title: "App Development",
    path: "/explore/AppDevelopment",
    cName: "dropdown-link",
  },
  {
    id: 3,
    title: "AI & Machine Learning",
    path: "/explore/MachineLearning",
    cName: "dropdown-link",
  },
  {
    id: 4,
    title: "UI/UX Design",
    path: "/explore/UIUXDesign",
    cName: "dropdown-link",
  },
];
const Dropdown = () => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  return (
    <ul
      onClick={handleClick}
      className={click ? "dropdown-menu clicked" : "dropdown-menu"}
    >
      {items.map((item) => {
        return (
          <li key={item.id}>
            <Link
              to={item.path}
              className={item.cName}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
