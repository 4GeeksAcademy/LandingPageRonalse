import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
//create your first component
let imagenes = [ 
  {url : "https://img.freepik.com/foto-gratis/hermosa-mujer-haciendo-ejercicio-al-aire-libre_23-2148965070.jpg?t=st=1711220475~exp=1711224075~hmac=441fbdd82126994cc5e22ed67baf3dfd9aba147f93d6cc172ee9b506132ab870&w=360",
	name : "noe",
	BotonColor : "btn btn-primary"},
  {url : "https://img.freepik.com/foto-gratis/hombre-entrenando-gimnasio_23-2148197773.jpg?t=st=1711214698~exp=1711218298~hmac=d8843ae5a13e99abaf81e808256aa7e2bf6fd4d80a548a62e9999b4401ac80d7&w=996",
  	name : "vero",
  	BotonColor : "btn btn-success"},
  {url : "https://img.freepik.com/foto-gratis/accion-jugador-futbol-estadio_1150-14608.jpg?t=st=1711214721~exp=1711218321~hmac=96c5b7982fa24f6b2198f0f6434ba865291d347fa4fd8f53fbcef4cc643912c9&w=996",
  	name : "gus",
 	BotonColor : "btn btn-warning"},
  {url : "https://img.freepik.com/foto-gratis/adolescente-sosteniendo-baloncesto-al-aire-libre_23-2148800886.jpg?t=st=1711214739~exp=1711218339~hmac=7f0f39050a6c420c7bf8c3f279f266e0f08840e98b6a877396f3b9d08e02da6a&w=996",
  	name : "jose",
  	BotonColor : "btn btn-dark"},
  ];

const Home = () => {
	return (
<>
		<Navbar />
		<div classNameName="container-fluid">
			<Jumbotron />
				<div className="col">
					<Card imagenes = {imagenes} />
				</div>
					
	
		</div>
		<div className="card-footer  text-center text-bg-dark p-4">
    					Copyright © Ronald Website 2024
  			</div>
</>
	);
};

export default Home;
