import { CardText, CardSubtitle, CardTitle, CardBody, CardImg, Col, Card} from "reactstrap";
import React from "react";
import '../Estilos/Producto.css';
import FichaProducto from "./FichaProducto";


class Producto extends React.Component{
    render(){
        return(
            <Col sm="4">
                <Card className="Card">
                    <CardImg src={this.props.imagen}/>
                    <CardBody>
                        <CardTitle>{this.props.titulo}</CardTitle>
                        <CardSubtitle><b>Valor:$</b>{this.props.precio}</CardSubtitle>
                        <CardText> <b>Plataforma:</b>
                            {this.props.plataforma}
                        </CardText>
                    </CardBody>
                    <FichaProducto props={this.props}/>
                </Card>
            </Col>
        )
    }
}

export default Producto;