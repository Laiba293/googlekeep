import React, { useState } from "react";
import { VscAdd } from "react-icons/vsc";
import Note from "./Note";

const App = () => {
  const [newKeepData, setNewkeepData] = useState([]);
  const [keepData, setKeepData] = useState({
    title: "",
    note: "",
  });
   const [isEditing, setIsEditing] = useState(false);
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setKeepData((oldItem) => {
      return {
        ...oldItem,
        [name]: value,
      };
    });
  };
  const AddNote = () => {
    setNewkeepData((oldData) => {
      return [...oldData, keepData];
    });
    setKeepData({
      title: "",
      note: "",
    });
  };
  const DeleteItems = (id) => {
    setNewkeepData((oldItem) => {
      return oldItem.filter((arr, index) => {
        return index !== id;
      });
    });
  };
  const EditItems=()=>{
setIsEditing(true);
  }
  return (
    <>
      <div className="wrapper">
        <div className="header">
          <h1>Keep</h1>
        </div>
      </div>
      <div className="input_div">
        <input
          onChange={InputEvent}
          type="text"
          placeholder="Title"
          name="title"
          autoComplete="off"
          value={keepData.title}
        />
        <textarea
          onChange={InputEvent}
          placeholder="Add a Note.."
          name="note"
          value={keepData.note}
        />
        <button type="button" onClick={AddNote}>
          <VscAdd />
        </button>
      </div>
      <div className="keep_body">
        {newKeepData.map((itemVal, index) => {
          return (
            <Note
              title={itemVal.title}
              note={itemVal.note}
              key={index}
              id={index}
              onSelect={DeleteItems}
              onChange={EditItems}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
