
import  './index.css';
import React from 'react';


class Survey extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      name:"",
      insturment:"N/A",
      favorite: "",
      bassist:"Explain Yourself"
    };
  }

  myNextHandler = (event) =>{
    if(this.state.name !== ""){
    if(this.state.favorite !== ""){

    alert("Information Submitted:\n"+
      "       Name:             "+ this.state.name+"\n"+
      "Plays an Insturment:     " +this.state.insturment+"\n"+
      "Favorite Bass Player:    "+this.state.favorite+"\n"+
      "Why Les Claypool was not chosen:   "+this.state.bassist+"\n");
    }
    }
  }
    

  myEventHandler = (event) =>{
    let nam = event.target.name;
    let val = event.target.value;

    this.setState({[nam]:val});
  }

  
  
  render() {
    return (

      <body>
      
        <h1> Musical Prefrences of IST 411</h1>
      
        <h2>Recorded By Kelvin Mitchell</h2>
      
        <p1>What is your name?</p1>
        <form> 
        <input type = "text" name="name" id = "input"value={this.state.name} onChange={this.myEventHandler}required/><br></br>
      
        <p1>Do you play an insturment?</p1>
       
          <input type="radio" id="yes" name="insturment"  value="yes" onChange={this.myEventHandler}/>
          <label for="yes" color={111}>Yes</label><cr></cr>
          <input type="radio" id="no" name="insturment" value="no" onChange={this.myEventHandler}/>
          <label for="no" color={111}>No</label><cr></cr>
      
      

      <div><p1>Who is the best bass player of all time?</p1></div>
      
     
      <select id = "bass players" name = "favorite" onChange={this.myEventHandler} required>
        <option value = "">(Required)</option>
        <option value = "Geddy Lee">Geddy Lee</option>
        <option value = "Larry Graham">Larry Graham</option>
        <option value = "Bootsy Collins">Bootsy Collins</option>
        <option value = "Les Claypool" >Les Claypool</option>
        <option value = "How do you play a fish?">How do you play a fish?</option>
      </select>
     <br></br> 
      <p1>Please explain why you did not choose Les Claypool on the previous question.(If applicable.)</p1>
  <br></br>
      <textarea id = "bassist" name="bassist" value={this.state.bassist} onChange={this.myEventHandler}/>
      
      
       <div><button type="submit" id="submit" class="submit-button" onClick = {this.myNextHandler} >Submit</button></div>
       </form>
       </body>

     

      
    );
  }
}

export default Survey;