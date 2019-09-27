import React from 'react';
import header from '../images/avatarval.jpg';
import './styles/BadgeNew.css';
import Badge from '../components/Badges';
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import PageLoading from '../components/pageLoading';



class BadgeNew extends React.Component {
    state = { 
        loading: false,
        error: null,
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

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({loading: true, error: null})

        try {
            await api.badges.create (this.state.form)
         this.setState({loading: false})

         this.props.history.push('/badges');
        } catch (error) {
            this.setState ({loading: false, error: error})
        }
    } 

    render(){
        if(this.state.loading){
            return <PageLoading/>;
        }
        return (
            <React.Fragment>
              
            <div className = "BadgeNew__hero">
                <img className = "BadgeEdit_hero-image img-fluid" 
                     src = {header} 
                    alt = "logo" 
                    width = "150"/>
            </div>
            
            <div className = "container">
                <div className = "row">
         <div className = "col-6">
                    
            <Badge 
            firstName = {this.state.form.firstName || 'NOMBRE'} 
            lastName = {this.state.form.lastName || 'APELLIDO'}
            profesion = {this.state.form.profesion || 'PROFESION'}
            twitter = {this.state.form.twitter || 'TWITTER'}
           
            email = {this.state.form.email || 'CORREO ELECTRONICO'}
            /> 
         </div>
            <div className = "col-6">
            <h1>Registrar usuario</h1>
             <BadgeForm 
             onChange = {this.handleChange}
             onSubmit = {this.handleSubmit}
             formValues = {this.state.form}
             error = {this.state.error}
             />
            </div>

                 </div>
                      </div>
            </React.Fragment>
        )
    }

}
export default BadgeNew;