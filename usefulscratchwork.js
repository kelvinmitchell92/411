import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';




class Entry extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      input:"",
      index:"",
      name:"",
      description:"",
      height:"",
      weight:"",
      type: "",
      type2: "",
      pic1:"",
      pic2:"",
      pic3:"",
      pic4:"",
      superEffective:"",
      semiEffective:"",
      notEffective:"",
      weakAgainst:"",
      strongAgainst:"",
      hasNoEffect : "", 
    };
  }


   myPoke = async () =>{

    let poke = this.state.input;  

    var file = "https://pokeapi.co/api/v2/pokemon/"+poke;

    const response = await   fetch(file);

    const pokemon = await   response.json();

    const url = await fetch(pokemon.species.url);

    const species = await url.json();

    const typeurl = await fetch(pokemon.types[0].type.url)

    const types = await typeurl.json();


    this.setState({
      name:pokemon.name,
      index:pokemon.order,
      description:species.flavor_text_entries[0].flavor_text,
      height: pokemon.height*3.94 + " inches",
      weight: pokemon.weight*0.22 + "pounds",
      type:pokemon.types[0].type.name,
      pic1:pokemon.sprites.front_default,
      pic2:pokemon.sprites.back_default,
      pic3:pokemon.sprites.front_shiny,
      pic4:pokemon.sprites.back_shiny,
    });

    if(typeof types.damage_relations.double_damage_to[0] !== "undefined"){
      this.setState({superEffective:types.damage_relations.double_damage_to[0].name});
    } else{this.setState({superEffective:"None"});}
    if(typeof types.damage_relations.no_damage_to[0] !== "undefined"){
      this.setState({notEffective:types.damage_relations.no_damage_to[0].name});
    } else{this.setState({notEffective:"None"});}
    if(typeof types.damage_relations.half_damage_to[0] !== "undefined"){
      this.setState({semiEffective:types.damage_relations.half_damage_to[0].name});
    } else{this.setState({semiEffective:"None"});}
    if(typeof types.damage_relations.double_damage_from[0] !== "undefined"){
      this.setState({weakAgainst:types.damage_relations.double_damage_from[0].name});
    } else{this.setState({weakAgainst:"None"});}
    if(typeof types.damage_relations.half_damage_from[0] !== "undefined"){
      this.setState({strongAgainst:types.damage_relations.half_damage_from[0].name});
    } else{this.setState({strongAgainst:"None"});}
    if(typeof types.damage_relations.no_damage_from[0] !== "undefined"){
      this.setState({hasNoEffect:types.damage_relations.no_damage_from[0].name});
    } else{this.setState({hasNoEffect:"None"});}  
    if(typeof pokemon.types[1] !== "undefined"){
      this.setState({type2:pokemon.types[1].type.name});
    } else{this.setState({hasNoEffect:"None"});}  



  }

  myEventHandler = (event) =>{
    let nam = event.target.name;
    let val = event.target.value;

    this.setState({[nam]:val});
  }





  render(){
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"></link>
    <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet"></link>
</head>
    return (

      <body>
      
        <h1>PokeDex</h1>
      
        <h2>Created By Kelvin Mitchell</h2>

        <img src ={this.state.pic1}  alt = "Front of Pokemon" text = "Normal" ></img><img src = {this.state.pic2} alt = "Back of Pokemon"></img>

        <img src ={this.state.pic3}  alt = "Front of Shiny Pokemon" text = "Shiny" ></img><img src = {this.state.pic4} alt = "Back of Shiny Pokemon"></img>

        <div>{"Name : "+this.state.name + "     No. : "+this.state.index}</div>
        <div>{"Type 1 : "+ this.state.type+"      Type 2 : "+this.state.type2}</div>
        <div>{"Description: "+this.state.description}</div>
        <div>{"Height : "+ this.state.height + "      Weight : "+ this.state.weight}</div>
        <div>{"Super Effective Against : " + this.state.superEffective}</div>
        <div>{"Not Very Effective Against : "+this.state.semiEffective}</div> 
        <div>{"Not Effective Against : " + this.state.notEffective}</div>
        <div>{"Takes Double Damage from : "+this.state.weakAgainst}</div>
        <div>{"Takes Half Damge from : "+this.state.strongAgainst}</div>
        <div>{"Takes No Damge from : "+this.state.hasNoEffect}</div>       
        <div>What Pokemon are you looking for? (spelling must be correct)</div>
        
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

  function isEmpty(par){

    if(par===""){
      return false;
    }
    else{
      return true;
    }
  }

  <a href="http://www.pokemon.com" class="navbar-brand d-flex align-items-center">
  <span class="material-icons red md-36">catching_pokemon</span>
    <strong>PokeDex</strong>
  </a>

