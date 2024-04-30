import MenuList from "./MenuList";
import "./style.css";
import menu from "./data";

export default function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-container">
      <MenuList list={menu} />
    </div>
  );
}
