import React from 'react';
import logovaliton from '../images/logoval.png';
import avatar from '../images/avatarval.jpg';
import "./styles/Badge.css";
import 'bootstrap/dist/css/bootstrap.css';
import '../global.css';


class Badge extends React.Component {
render () {
   
   return <div className ="Badge">
    
    <div className = "Badge__header">
        <img src = {logovaliton} alt = "Logo de valiton" width = "120"/>
    </div>

    <div className = "Badge__section-name">
        <img className = "Badge__avatar" src = {avatar} alt = "Imagen Valiton"/>
        <h1>
         {this.props.firstname} <br/> {this.props.lastname}
        </h1>
    </div>

    <div className = "Badge__section-info"> 
         <div> @{this.props.twitter} </div>
    </div>

    <div className = "Badge__section-info"> 
                <div> {this.props.email} </div>
    </div>

    <div className = "Badge__footer">#Valiton</div>
</div>


}
}

export default Badge;