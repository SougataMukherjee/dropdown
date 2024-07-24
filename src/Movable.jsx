import { useState } from "react";

function DropdownMenu() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [activeButton, setActiveButton] = useState(null);

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
    { label: "Option 4", value: "option4" },
    { label: "Option 5", value: "option5" },
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setActiveButton(option.label);
  };

  const getDropdownStyle = () => {
    return {
      display: "flex",
      justifyContent: "space-evenly",
      background: selectedOption ? "red" : "yellow",
    };
  };

  const getBlackBoxStyle = () => {
    const marginLeft = selectedOption?.label.includes("1")
      ? "0%"
      : selectedOption?.label.includes("2")
      ? "20%"
      : selectedOption?.label.includes("3")
      ? "40%"
      : selectedOption?.label.includes("4")
      ? "60%"
      : "80%";

    return {
      height: "30vh",
      width: "20vw",
      background: "black",
      marginLeft: marginLeft,
      transition: "width 1s, margin-left .5s",
    };
  };

  const dropdownStyle = getDropdownStyle();
  const blackBoxStyle = getBlackBoxStyle();

  return (
    <div>
      <div className="dropdown">
        <div className="dropdown-menu" style={dropdownStyle}>
          {options.map((option) => (
            <a
              key={option.value}
              className="dropdown-item"
              style={{
                textDecoration:
                  activeButton === option.label ? "underline" : "none",
                color: activeButton === option.label ? "white" : "black",
                backgroundColor: activeButton === option.label ? "hotpink" : "",
              }}
              href="#dummy"
              onMouseEnter={() => handleOptionSelect(option)}
            >
              {option.label}
            </a>
          ))}
        </div>
      </div>
      {selectedOption && (
        <div style={blackBoxStyle}>{selectedOption.label}</div>
      )}
    </div>
  );
}

export default DropdownMenu;
