import React from "react";

const Card =(props) => {
  return (
    <div className="container text-center mt-5">
        <div classNAme="row ">
          {props.imagenes.map((imagen, index) => (
          <div className="col-lg-3 d-inline-block" key={index}  > 
            <div className="card m-4" style={{width: 230}} >
              <img className="card-img-top" src={imagen.url} alt="..." style={{objectFit :'cover' , width: 229, height: 200}}/>
                <div className="card-body">
                    <h5 className="card-title">{imagen.name}</h5>
                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                    <a href="https://www.youtube.com/watch?v=eNLjdPI9zdE&ab_channel=ElReinoInfantil" className={`${imagen.BotonColor}`}>
                        find out more
                    </a>
                </div>
           </div> 
          </div>
          ))}
        </div>
    </div>
  )
}


/*const  Card =() => {
  return (<div class="container text-center">
  <div class="row">
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
  </div>
</div>)
}*/


export default Card ;