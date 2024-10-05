import React from "react";
import AlertIcon from '@mui/material/Alert';


export default function Alert(props) {
    const capatalize = (word)=>{
      if (word==="danger"){
        word="error"
      }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height:'50px'}}>
 {  props.alert &&
      <div  role="alert">
<AlertIcon className={`alert alert-${props.alert.severity} alert-dismissible fade show`} severity={props.alert.severity}><strong>{capatalize(props.alert.severity)}</strong> : {props.alert.msg}</AlertIcon>
  
    </div>}
    </div>
  )
}
