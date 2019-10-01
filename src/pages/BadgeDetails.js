import React from 'react';
import {Link} from 'react-router-dom';
import './styles/BadgeDetails.css';
//import logovaliton from '../images/logoval.png';
import PageLoading from '../components/pageLoading';
import PageError from '../components/PageError';
import api from '../api';
import Badge from '../components/Badges';

class BageDetails extends React.Component {
        state = {
        loading: true,
        error: null,
        data: undefined,
    };
 
    componentDidMount() {
        this.fetchData ();
    }

    fetchData = async () => {
      this.setState ({loading:true, error: null});

      try {
       const data = await api.badges.read(this.props.match.params.badgeId)
       this.setState({loading: false, data: data});
      }catch (error) {
       this.setState({loading: false, error: error});
      }
    }

    render () {
        if(this.state.loading) {
            return <PageLoading />
        }

        if(this.state.error) {
            return <PageError error = {this.state.error} />
        }

        const badge = this.state.data

        return (
            <div>
              <div className = "BadgeDetails__hero">
                 <div className = "container">
                 <div className = "row"> 
                 <div className = "col">
                     <Badge email = {badge.email}
                            firstName = {badge.firstName} 
                            lastName = {badge.lastName}
                            twitter = {badge.twitter}
                            profesion = {badge.profesion} />
                 </div>
                 <div className = "col">
                     <h2>Acciones</h2>
                     <div>
                         <Link className = "btn btn-primary mb-4" to = {`/badges/${badge.id}/edit`} >
                             Editar
                         </Link>
                     </div>
                     <div>
                         <button className = "btn btn-danger"> Eliminar</button>
                     </div>
                     </div>
                 
                 </div>
                </div> 
              </div>
            </div>
        ); 
    }
}

export default BageDetails;