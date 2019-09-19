import React from 'react';
import Navbar from '../components/Navbar';
import header from '../images/avatarval.jpg';
import './styles/BadgeNew.css';
import Badge from '../components/Badges';
import BadgeForm from '../components/BadgeForm';



class BadgeNew extends React.Component {
    state = { 
        form: {
      firstName: '',
      lastName: '',
      email: '',
      profesion: '',
      twitter: '',
      
        
    } };

    handleChange = e => {
       
        this.setState({
        form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
        },
        });
    };

    render(){
        return (
            <div>
              <Navbar/>
            <div className = "BadgeNew__hero">
                <img className = "img-fluid" src = {header} alt = "logo" width = "150"/>
            </div>
            
            <div className = "container">
                <div className = "row">
         <div className = "col-6">
                    
            <Badge 
            firstname = {this.state.form.firstName} 
            lastname = {this.state.form.lastName} 
            twitter = {this.state.form.twitter}
            facebook ="facebook/ValitonCorp"
            email = {this.state.form.email}
            /> 
         </div>
            <div className = "col-6">
             <BadgeForm 
             onChange = {this.handleChange}
             formValues = {this.state.form}
             />
            </div>

                 </div>
                      </div>
            </div>
        )
    }

}
export default BadgeNew;