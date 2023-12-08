import React from "react";
import "./Dropdown.css";

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
            <a href={item.path} className={item.cName}>
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
