import { useState } from "react";
import "./style.scss";
import TextLayout from "./TextLayout";
import ImageLayout from "./ImageLayout";
import ComponentLayout from "./ComponentLayout";

enum MENU_ENUM {
  TEXT = "text",
  IMAGE = "image",
  COMPONENT = "component",
}

const MENU = [
  {
    key: MENU_ENUM.TEXT,
    title: "Text",
    icon: "icons/text.svg",
  },
  {
    key: MENU_ENUM.IMAGE,
    title: "Image",
    icon: "icons/brand.svg",
  },
  {
    key: MENU_ENUM.COMPONENT,
    title: "Component",
    icon: "icons/component.svg",
  },
];

const getRenderLayout = (navbar: string) => {
  switch (navbar) {
    case MENU_ENUM.TEXT:
      return <TextLayout />;
    case MENU_ENUM.IMAGE:
      return <ImageLayout />;
    case MENU_ENUM.COMPONENT:
      return <ComponentLayout />;
    default:
      return;
  }
};

const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState<MENU_ENUM>(MENU_ENUM.TEXT);

  return (
    <div className="flex">
      <div className="menu_list">
        {MENU.map((item) => (
          <div
            key={item.key}
            className={`menu_item ${item.key === activeNavbar ? "active" : ""}`}
            onClick={() => setActiveNavbar(item.key)}
          >
            <img src={item.icon} alt={item.key} />
            <p className="title">{item.title}</p>
          </div>
        ))}
      </div>
      {getRenderLayout(activeNavbar)}
    </div>
  );
};

export default Navbar;
