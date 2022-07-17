import React ,{useState} from "react";
import plusIcon from "../assests/plus.png";
import "./Sidebar.css";
function Sidebar(props){
    const colors=["#fe9b72","#fec971","#00d4fe", "#b693fd","#e4ee91"];
    const[listopen,setlistopen]=useState(false);
    return(
        <div className="sidebar">
           <img src={plusIcon} alt="Add" onClick={()=>setlistopen(!listopen)}/>
           <ul className={`sidebar_list ${listopen?"sidebar_list_active":""}`}>
            {colors.map((item,index)=>(
            <li 
            key={index}
            className="sidebar-list-item"
            style={{backgroundColor:item}}
            onClick={()=>props.addNote(item)}
            />
            ))}
            
           </ul>
        </div>
    )
}
export default Sidebar;