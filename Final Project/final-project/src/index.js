import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Toggle from './toggle'
import ThemeProvider from './themes'
import Background from './background'

class Entry extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      input:"",
      index:"",
      name:"",
      ability:"",
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
      evolution:"",
      dark:"",
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
    if(typeof pokemon.abilities[0] !== "undefined"){
      this.setState({ability:pokemon.abilities[0].ability.name});
    } else{this.setState({ability:"None"});}
    if(species.evolves_from_species !== null){
      this.setState({evolution: species.evolves_from_species.name});
    } else{this.setState({evolution:"None"});}



  }

  myEventHandler = (event) =>{
    let nam = event.target.name;
    let val = event.target.value;

    this.setState({[nam]:val});
  }

  darkMode = (event) =>{

    if(this.state.dark === "dark"){
      this.setState({dark:""});
    }else{
      this.setState({dark:"dark"});
    }

alert(this.state.dark);

  }



  render(){

    return (
      

      <body>
      <header>

<div>
  <div class="navbar navbar-dark bg-white shadow-sm dark:bg-gray-50" >
      <div class="container">
      <a href="http://www.pokemon.com" class="navbar-brand d-flex align-items-center">
      <span class="material-icons">catching_pokemon</span>
        <strong class="text-dark dark:text-white">PokeDex</strong>
      </a>



    </div>
  </div>
  </div>
</header>



  <section class="py-5 text-center container">
  <div class = "float-end text-muted">
  <Toggle />
  <p>Dark Mode</p>
  </div>
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class = "text-success dark:text-danger">FOR THE LOVE OF GOD CHANGE COLORS</h1>
        <h1 class="fonts dark:text-white">PokeDex</h1>
        <p class="lead text-muted">Please correctly spell the Pokemon you wish to learn more about below.</p>
        <p>
          <input type = "text" name="input" id = "input" onChange={this.myEventHandler}  required/><br></br>
 
          <button class="btn btn-danger my-2" onClick={this.myPoke} >Submit</button>
        </p>
      </div>
    </div>
  </section>

  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 g-2">
        <div class="col">
          <div class="card shadow-lg">
            <Image  src ={this.state.pic1}  alt = "Front of Pokemon" ></Image>
            <p class = "text-center">Normal</p>

            <div class="card-body">
              <p class="text-center">Name : {this.state.name}    No.{this.state.index} </p>
              <p class="text-center">Description : {this.state.description}</p>
              <p class="text-center">Ability : {this.state.ability}</p>
       
            </div>
          </div>
        
       
          
          <div class="card shadow-lg">
          <Image  src ={this.state.pic3}  alt = "Front of Shiny Pokemon" ></Image>
          <p class = "text-center">Shiny</p>

            <div class="card-body">
            <p class="text-center">Super Effective Against : {this.state.superEffective} </p>
            <p class="text-center">Not Very Effective Against : {this.state.semiEffective} </p>
            <p class="text-center">Not Effective Against : {this.state.notEffective} </p>
            
            </div>
          </div>

        </div>
        <div class="col">
        <div class="card shadow-lg">
          <Image  src ={this.state.pic2}  alt = "Back of Pokemon" ></Image>
          <p class = "text-center">Normal Back</p>

            <div class="card-body">
            <p class="text-center">Height : {this.state.height}   Weight : {this.state.weight} </p>
            <p class="text-center">Evolves From : {this.state.evolution}</p>
            <p class="text-center">Type : {this.state.type}   Type 2 : {this.state.type2} </p>
        
            </div>
          </div>
       

          <div class="card shadow-lg">
          <Image  src ={this.state.pic4}  alt = "Back of Shiny Pokemon" ></Image>
          <p class = "text-center">Shiny Back</p>
            <div class="card-body">
            <p class="text-center">Receives Double Damge from : {this.state.weakAgainst} </p>
            <p class="text-center">Recieves Half Damage from : {this.state.strongAgainst} </p>
            <p class="text-center">Recieves No Damage from : {this.state.hasNoEffect} </p>
             
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
      
      <footer class="text-muted py-5">
  <div class="container">
    <p class="float-end text-grey">
      <a href="#" >Back to top</a>
    </p>
<div class="container">
  <div class="row">
    <div class="col-sm-8 col-md-7 py-4">
    <h4 class="text-grey">About</h4>
    <p class="text-grey">This is a Pokedex created By Kelvin MItchell using PokeAPI as a final project for my IST 411 class, Front end Development.</p>
  </div>
<div class="col-sm-4 offset-md-1 py-4">
<h4 class="text-grey">Contact</h4>
<ul class="list-unstyled">
  <li><a href="kelvin.mitchell@doane.edu" class="text-grey">Email me</a></li>
</ul>
</div>
</div>
</div>

  </div>
</footer>


  </body>
        
    );
  
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
     <Entry />
      </Background>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


