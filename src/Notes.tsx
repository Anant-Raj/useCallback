import React, { useCallback, useState } from "react";
import Button from "./Button";

const Notes = () => {
  const [notes, setNotes] = useState([""]);
  const addNote = useCallback(() => {
    const newNote = "random";
    setNotes((n) => [...n, newNote]); // this is functional update
  }, [setNotes]);

  return (
    <div>
      <Button addNote={addNote} />
      {notes.map((note, index) => (
        <p key={index}>{note}</p>
      ))}
    </div>
  );
};

export default Notes;
