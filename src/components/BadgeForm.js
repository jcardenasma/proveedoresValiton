import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class BadgeForm extends React.Component {
 
    handleClick = e => {
        console.log("Button was click");
    }

    handleSubmit = e => {
        e.preventDefault();    
        console.log('form was submitted');
        console.log(this.state);
        
    }

    render(){
        return(
            <div>
                <h1>Registrar usuario</h1>
                <form onSubmit =  {this.handleSubmit}>

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
                    <label>Apellido</label>
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
                    <label>Profesion</label>
                    <input 
                    onChange = {this.props.onChange} 
                    className = "form-control" 
                    type= "text" 
                    name = "profesion"
                    value = {this.props.formValues.profesion}
                    />
                </div>

                <div className = "form-group">
                    <label>twitter</label>
                    <input 
                    onChange = {this.props.onChange} 
                    className = "form-control" 
                    type= "text" 
                    name = "twitter"
                    value = {this.props.formValues.twitter}
                    />
                </div>


                <button onClick = {this.handleClick} className = "btn btn-primary">Guardar</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;