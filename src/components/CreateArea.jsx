import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const CreateArea = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    //const name = event.target.name;
    //const value = event.target.value;

    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  };

  const submitNote = (event) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  };

  return (
    <div>
      <form className="create-note">
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="title"
        />
        <textarea
          name="content"
          rows="3"
          onChange={handleChange}
          value={note.content}
          placeholder="take a note"
        ></textarea>
        <Fab onClick={submitNote}>
          <AddCircleIcon />
        </Fab>
      </form>
    </div>
  );
};

export default CreateArea;
