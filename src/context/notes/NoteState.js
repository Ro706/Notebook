import React from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const state = {
        name: "Ro706",
        class: "5th"
    }
    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    );
}
// 59
export default NoteState;
