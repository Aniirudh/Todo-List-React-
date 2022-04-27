import React, { useState } from "react";
import TodoList from "../TodoList";
import data from "../data.json";
import TodoForm from "../TodoForm";
import './Welcome.css';

function Welcome() {


    return ( 
      <div className="App">
        
      <TodoList/>
      
    </div>
    );
}

export default Welcome;