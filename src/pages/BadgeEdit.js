import React from 'react';
import header from '../images/avatarval.jpg';
import './styles/BadgeEdit.css';
import Badge from '../components/Badges';
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import PageLoading from '../components/pageLoading';



class BadgeEdit extends React.Component {
    state = { 
        loading: true,
        error: null,
        form: {
      firstName: '',
      lastName: '',
      email: '',
      profesion: '',
      twitter: '',
    },
   };

   UNSAFE_componentWillMount(){
       this.fetchData()
   }

   fetchData = async e => {
       this.setState ({loading: true, error: null})

       try {
         const data = await api.badges.read (
             this.props.match.params.badgeId
         )

         this.setState({loading: false, form: data})
       } catch (error) {
           this.setState({loading: false, error: error})
       }
   }

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
            await api.badges.update (this.props.match.params.badgeId, this.state.form);
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
              
            <div className = "BadgeEdit__hero">
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
            <h1>Editar usuario</h1>
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
export default BadgeEdit;