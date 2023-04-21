import React from "react";
import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";
import Carro from "./Carro";

class Navegacion extends React.Component{
    render(){
        return(
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">{this.props.titulo}</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">acerca de</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Prueba 2</NavLink>
                    </NavItem>
                    <NavItem>
                        <Carro/>
                    </NavItem>
                </Nav>
            </Navbar>

        );
    }

}

export default Navegacion;