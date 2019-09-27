import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import api from '../api';

class BadgeForm extends React.Component {
 
    handleClick = e => {
        console.log("Button was click");
    }

    render(){
        return(
            <div>
                <form onSubmit =  {this.props.onSubmit}>

                <div className = "form-group">
                    <label>Id Proveedor</label>
                    <input 
                    onChange = {this.props.onChange} 
                    className = "form-control" 
                    type= "text" 
                    name = "Idproveeodr"
                    value = {this.props.formValues.Idproveedor}
                    />
                </div>

                <div className = "form-group">
                    <label>Nombre</label>
                    <input 
                    onChange = {this.props.onChange} 
                    className = "form-control" 
                    type= "text" 
                    name = "firstName"
                    value = {this.props.formValues.firstName}
                    />
                </div>
                

                <div className = "form-group">
                    <label>RFC</label>
                    <input 
                    onChange = {this.props.onChange} 
                    className = "form-control" 
                    type= "text" 
                    name = "lastName"
                    value = {this.props.formValues.lastName}
                    />
                </div>

                <div className = "form-group">
                    <label>Correo Electronico</label>
                    <input 
                    onChange = {this.props.onChange} 
                    className = "form-control" 
                    type= "email" 
                    name = "email"
                    value = {this.props.formValues.email}
                    />
                </div>

                <div className = "form-group">
                    <label>Permiso</label>
                    <input 
                    onChange = {this.props.onChange} 
                    className = "form-control" 
                    type= "text" 
                    name = "profesion"
                    value = {this.props.formValues.profesion}
                    />
                </div>

                <div className = "form-group">
                    <label>Contraseña</label>
                    <input 
                    onChange = {this.props.onChange} 
                    className = "form-control" 
                    type= "password" 
                    name = "twitter"
                    value = {this.props.formValues.twitter}
                    />
                </div>


                <button onClick = {this.handleClick} className = "btn btn-primary">Guardar</button>

                {this.props.error && (
                    <p className = "text-danger">{this.props.error.message}</p>
                )}
                </form>
            </div>
        )
    }
}

export default BadgeForm;