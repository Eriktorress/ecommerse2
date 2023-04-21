import React from "react";
import Producto from "./Componentes/Producto";
import "./App.css";
import { Container, Row } from "reactstrap";
import Navegacion from "./Componentes/Navegacion.js";
import listaPro from "./listaProductos.json";

class  App extends React.Component{
  constructor(){
    const {listaProductos} = listaPro;
    super();

    this.state={
      listaProductos
    };
  }
  render(){
    const arregloComponentes= this.state.listaProductos.map(
      (listaProductos, i) =>{
        return(
          <Producto
          key={i}
          titulo={listaProductos.titulo}
          imagen={listaProductos.imagen}
          plataforma={listaProductos.plataforma}
          precio={listaProductos.precio}
          stock={listaProductos.stock}
          />
        )
      }
    );
    return (
      <Container>
        <Navegacion titulo="Mi primer sitio de compras en React"></Navegacion>
        <Row>
          {arregloComponentes}
      </Row>
    </Container>
  );
}
}

export default App;
