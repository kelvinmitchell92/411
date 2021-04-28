import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Entry extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      input:"",
      index:"",
      name:"Test",
      description:"",
      height:"",
      weight:"",
      type: "",
      superEffective:"",
      effective:"",
      semiEffective:"",
      notEffective:"",
      weakAgainst:"",
      strongAgainst:"",
      hasNoEffect : "", 
    };
  }


   myPoke = async () =>{

    let poke = this.state.input;  

    alert("https://pokeapi.co/api/v2/pokemon/"+poke);

    var file = "https://pokeapi.co/api/v2/pokemon/"+poke;

    const response = await   fetch(file);

    const pokemon = await   response.json();
 

    
    this.setState({
      name:pokemon.name,
      index:pokemon.order,
      /*description:pokeSpecies.flavor_text_entries.flavor_text,*/
      height: pokemon.height,
      weight: pokemon.weight*0.22,
      type:pokemon.types[0].type.name,
    });

    alert(this.state.name+","+this.state.type+","+ this.state.weight+","+this.state.height+","+this.state.index);

  }

  myEventHandler = (event) =>{
    let nam = event.target.name;
    let val = event.target.value;

    this.setState({[nam]:val});
  }





  render(){

    

    return (

      <body>
      
        <h1>PokeDex</h1>
      
        <h2>Created By Kelvin Mitchell</h2>

        <div>{"Name:"+this.state.name+"Type:"+this.state.type+"Weight:"+this.state.weight}</div>
      
        <p1>What Pokemon are you looking for? (spelling must be correct)</p1>
        
        <input type = "text" name="input" id = "input" onChange={this.myEventHandler}  required/><br></br>

        <button type="submit" id="submit" class="submit-button" onClick={this.myPoke} >Submit</button>

        </body>
    );
    }

  }

  ReactDOM.render(
    <Entry />,
    document.getElementById('root')
  );

  function isEmpty(type){

    if(type===""){
      return false;
    }
    else{
      return true;
    }
  }