import React,{useEffect, useState} from "react";
import Notecontainer from "./Components/Notecontainer";
import "./App.css";
import Sidebar from "./Components/Sidebar";
function App(){
    const [notes,setNotes]=useState(JSON.parse(localStorage.getItem('AWESOMEAPP'))||[]);

    const addNote=(color)=>{
        
        const tempNotes=[...notes];
        tempNotes.push({
            id:Date.now()+"" +Math.floor(Math.random()*78),
            text:"",
            time:Date.now(),
            color,

        });
        setNotes(tempNotes);


    };

    const deleteNote=(id)=>{
        const tempNotes=[...notes]
        const index=tempNotes.findIndex(item=>item.id===id)
        if(index<0)return;
        tempNotes.splice(index,1);
        setNotes(tempNotes);
        

    };

    const UpdateText=(text,id)=>{
        const tempNotes=[...notes]
        const index=tempNotes.findIndex(item=>item.id===id)
        if(index<0)return;
        tempNotes[index].text=text;
        setNotes(tempNotes);

    }

    useEffect(()=>{
        localStorage.setItem('AWESOMEAPP',JSON.stringify(notes))
    },[notes])


    return (
        <div className="App">
        <Sidebar addNote={addNote}/>
        <Notecontainer notes={notes} deleteNote={deleteNote} UpdateText={UpdateText}/>
            
        </div>
        
    );

}
export default App;