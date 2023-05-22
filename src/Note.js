import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import "./index.css";
const Note = (props) => {
  return (
    <>
      <div className="box">
        <h2>{props.title}</h2>
        <h2>{props.note}</h2>
        <button
          onClick={() => {
            props.onChange(props.id);
          }}
        >
          <MdEditSquare />
        </button>
        <button
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          <MdDeleteOutline />
        </button>
      </div>
    </>
  );
};

export default Note;
