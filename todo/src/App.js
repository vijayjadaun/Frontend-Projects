import React from 'react';



import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      todos: []
    }
  }

  handleDelete = (todo) => {
    this.setState(state =>{
      return {
      todos: state.todos.filter(el => el !== todo)
    }
  })
  }

  handleChange = (event) => {
    this.setState({input: event.target.value})
  }

  enterKeyDown = (event) => {
    if(event.keyCode === 13 && this.state.input){
    this.setState(state =>{ 
      return {todos:[...state.todos , state.input ] ,input:'' }
    })
    event.target.value = "";
  }
  }

  clearAll = () => {
    this.setState ({todos: []})
  }

  

  render(){    
  const addToDoStyle = {
    display:"block" ,
    margin: "30px auto 80px auto",
    outline:"none",
    textAlign:"center" ,
    height:"50px" ,
    width:"70%" ,
    borderRadius:"10px" ,
    backgroundColor: "lightGrey" ,
    fontSize:"30px",
    boxShadow:"5px 10px 20px white" ,
    borderBottom: "2px solid grey"
  }

  const card = {color:"white" ,
   textAlign:"center",
    fontSize:"23px" ,
    margin:"15px",
    borderBottom:"3px solid grey",
    padding:"15px"
  }

  const cardButton = {float:"right", 
  height:"30px", 
  width: "60px" , 
  borderRadius: "5px",
  backgroundColor:"black",
  border:"2px solid white",
  color: "white"
}

  return (
<div style = {{margin: "0 auto" , width:"70%"}}>
    <div >
     

      <div>
        <input onChange = {this.handleChange}  style = {addToDoStyle} placeholder = "Add To-Do" onKeyDown = {this.enterKeyDown}/>
      </div>

      
        {this.state.todos.map( (todo) => 
          (<div key = {todo} onClick = {this.handleDivClick} style = {card}>{todo} 
          <span style={{float:"right"}}><button  onClick ={() => this.handleDelete(todo)} style = {cardButton}>Delete</button> </span> 
          </div>) )}
        
       
        
    </div>
    <button onClick ={this.clearAll} style = {{position:"fixed" , bottom:"2px", background:"maroon" , margin:"0px auto", width:"70%" , height:"7%" , border:"3px solid white"}}>
            <h2 style = {{color:"white"}}>Clear All!</h2>
    </button>
  </div>
  );
  }
}

export default App;