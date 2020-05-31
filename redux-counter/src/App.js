import React from "react";
import {useSelector , useDispatch} from 'react-redux';
import {increment , decrement , signIn} from './Actions/index'


import "./App.css";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.logger);
  const dispatch = useDispatch()
  return <div>
    <h1>
      Counter : {counter}
    </h1>
    <button onClick = {() => dispatch(increment())}>+</button>
    <button onClick = {() => dispatch(decrement())}>-</button>
    <button onClick = {() => dispatch(signIn())}>Login</button>

    {isLogged === true ? <h3>User shouldn't see if logged out.</h3>: ''}
  </div>;
}

export default App;
