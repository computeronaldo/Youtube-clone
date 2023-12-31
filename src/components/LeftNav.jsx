import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

const LeftNav = () => {
  const { selectCategories, updateSelectCategories, mobileMenu } =
    useContext(Context);

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return updateSelectCategories(name);
      case "home":
        return updateSelectCategories(name);
      case "menu":
        return false;
      default:
        break;
    }
  };
  return (
    <div
      className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-0" : ""
      }`}
    >
      <div className="flex px-5 flex-col">
        {categories.map((category) => {
          return (
            <React.Fragment key={category.name}>
              <LeftNavMenuItem
                text={category.type === "home" ? "Home" : category.name}
                icon={category.icon}
                action={() => {
                  clickHandler(category.name, category.type);
                  navigate("/");
                }}
                className={`${
                  selectCategories === category.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {category.divider && <hr className="my-5 border-white/[0.2]" />}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">Clone by Prajwal</div>
      </div>
    </div>
  );
};

export default LeftNav;
