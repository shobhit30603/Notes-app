import React from "react";
import Note from "./Note";
import "./Notecontainer.css";
function Notecontainer(props){
    const reverseArray=(arr)=>{
        const array=[];
        for(let i=arr.length-1;i>=0;--i){
            array.push(arr[i]);
        }
        return array;
    };
    const notes=reverseArray(props.notes);



    return (
        <div className="note-container">
        <h2>Notes</h2>
        <div className="note-container-notes custom-scroll">
        {notes?.length>0 ? notes.map((item,index)=>(
            <Note 
            key={item.id}
            note={item}
                deleteNote={props.deleteNote}
                UpdateText={props.UpdateText}
            />
       ) ):<h3>No Notes Present</h3>}
           
            </div>
        </div>
        
    );
}
export default Notecontainer;