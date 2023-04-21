import React from "react";
import { Modal, Button, Container, ModalHeader, ModalBody, ModalFooter, CardImg } from "reactstrap";
import '../Estilos/FichaProducto.css';
import listaCar from "../listaCarrito.json"

class FichaProducto extends React.Component{
    constructor(props){
        const {listaCarrito} = listaCar;
        
        super();
        this.state ={
            Modal:false,
            listaCarrito
        };

        this.toggle= this.toggle.bind(this);
        this.agregarCarrito= this.agregarCarrito.bind(this);
    }
    toggle(){
        this.setState(prevState =>({
            modal: !prevState.modal
        }));
    }

    agregarCarrito(){
        listaCar.push({
            "titulo": this.props.props.titulo,
            "precio": this.props.props.precio
         });

         this.setState(prevState => ({
            modal: !prevState.modal
         }));
    }

    render(){
        return(
            <Container>
            <Button onClick= {this.toggle}>Ver ficha</Button>
            <Modal isOpen={this.state.modal}>
                <ModalHeader>{ this.props.props.titulo }</ModalHeader>
                <ModalBody>
                    <CardImg src= {this.props.props.imagen}></CardImg>
                    <p>El detalle del producto seleccionado es el siguiente:</p>
                    {this.props.props.plataforma}
                    <p>Este producto tiene un valor de <b>{this.props.props.precio}</b> pesos.</p>
                    <p>Hay <b>{this.props.props.stock}</b> unidades de este producto disponible.</p>
                </ModalBody>
                <ModalFooter className="modalFooter">
                    <Button color="primary" onClick= {this.agregarCarrito}>Agregar al carrito</Button>
                    <Button color="secondary" onClick= {this.toggle}>Volver atrás</Button>
                </ModalFooter>
            </Modal>
            </Container>
            
        );
    }

}
export default FichaProducto;