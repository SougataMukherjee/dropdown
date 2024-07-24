import { useState } from "react";
import Select from "react-select";
import "./App.css";
import DropdownMenu from "./Movable";
import CustomDropdown from "./CustomDropdown";
const data = [
  {
    label: "Menu 1",
  },
  {
    label: "Menu 2",
    submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
  },
  {
    label: "Menu 3",
    submenu: [
      { label: "Sub Menu 1" },
      { label: "Sub Menu 2" },
      { label: "Sub Menu 3" },
      { label: "Sub Menu 4" },
    ],
  },
  {
    label: "Menu 4",
    submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
  },
];

export default function App() {
  const [menu, setMenu] = useState("");
  const [subMenu, setSubMenu] = useState([]);
  const [selectedSubMenu, setSelectedSubMenu] = useState(data[0].label);
  function updateSelect(e) {
    setMenu(e.target.value);
    const selectedMenu = data.find(({ label }) => label === e.target.value);
    setSelectedSubMenu(e.target.value);
    if (selectedMenu && selectedMenu.submenu) {
      setSubMenu(selectedMenu.submenu);
    } else {
      setSubMenu([]);
    }
  }
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const styles = {
    option: (value) => {
      return value && { color: "white", background: "gray" };
    },
  };
  return (
    <>
      <select value={menu} id="id" onChange={updateSelect} className="Select">
        <option disabled> --- SELECT --- </option>
        {data.slice(0, 5).map((menu) => (
          <option
            key={menu.label}
            value={menu.label}
            // onClick={() => handleClick(item)}
            className="dropdown-menu"
          >
            {menu.label}
          </option>
        ))}
      </select>

      <select
        disabled={subMenu.length === 0}
        style={{ height: "40px", border: "none" }}
      >
        <option defaultValue>--- SELECT ---</option>
        {subMenu &&
          subMenu.map((subM) => (
            <option key={subM.label} value={subM.label}>
              {subM.label}
            </option>
          ))}
      </select>
      <div>you select{selectedSubMenu} and</div>
      <div>React Select</div>
      <Select
        className="react-multi-select"
        options={options}
        styles={styles}
        isMulti
        //defaultValue={[options[2]]}
      />
      <div>Movable dropdown</div>
      <DropdownMenu />
      <div>Custom dropdown type $</div>
      <CustomDropdown />
    </>
  );
}
