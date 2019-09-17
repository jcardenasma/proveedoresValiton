import React from 'react';
import logo from '../images/logoval.png';
import './styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';

class Navbar extends React.Component
{
    render(){
        return (
            <div  className = "Navbar">

                <div className = "container-fluid">
                <a className = "Navbar__brand" href = "/">
                    <img className = "Navbar__brand-logo" src = {logo} alt = "Logo" width = "150"/>
                    <span className = "font-weight-light">Proveedores</span>
                    <span className = "font-weight-bold">Valiton</span>

                </a>
                </div> 

            </div>
        );
    }

}
export default Navbar;