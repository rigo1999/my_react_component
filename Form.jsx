import React from "react";
import { useState } from "react";

const Form = ({onOpen}) =>{
    console.log("Add data here ")
    
    const [onOpen, setonOpen] = useState(onOpen)

    return <>
  <h1>{onOpen}</h1>
    </>
 
}