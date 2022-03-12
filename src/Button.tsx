import React, { FunctionComponent, memo } from "react";

interface ButtonProps {
  addNote: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({ addNote }) => {
  console.log("Button re-rendered !! ");
  return (
    <div>
      <button onClick={addNote}>Add</button>
    </div>
  );
};

export default memo(Button);
