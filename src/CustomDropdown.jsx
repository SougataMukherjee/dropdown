import { useState, useRef } from "react";

export default function CustomDropdown() {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [cursor, setCursor] = useState(0);
  const ref = useRef(null);

  const calculatePosition = (position) => Math.min(position, 22) * 8;

  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value === "" || !e.target.value.includes("$"))
      setShow(
        false
      ); // If is empty or havent $ when change disable the dropdown
    else if (e.nativeEvent.data === "$") setShow(true);
  };

  const handlePosition = (e) => {
    setCursor(calculatePosition(e.target.selectionStart));
    if (value.substring(0, e.target.selectionStart).slice(-1) === "$") {
      setShow(true);
    } else {
      setShow(false);
    }
  }; // Get cursor position in the input
  const handleFocus = (e) =>
    e.target.value !== "" && e.target.value.includes("$")
      ? setShow(true)
      : null; // Show the dropdown if isn't empty and have $

  return (
    <div className="App">
      <input
        ref={ref}
        value={value}
        onChange={handleChange}
        onClick={handlePosition}
        onKeyDown={handlePosition}
        onFocus={handleFocus}
        onBlur={() => setShow(false)} // If focus is lose hide the dropdown
      />
      {show && (
        <div
          style={{
            width: "210px",
            height: "210px",
            background: "pink",
            marginLeft: cursor + "px",
            position: "absolute",
            left: "2px",
          }}
        >
          -DropDown-
        </div>
      )}
    </div>
  );
}
