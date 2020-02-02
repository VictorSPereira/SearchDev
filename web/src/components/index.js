import React from 'react';
import './style.css';


function DevItem({dev}){
    return(
    <li className="dev-item">
            <header>
            <img src={dev.avatar_url}alt={dev.name}/>
            <div className="user-info">
          <strong>{dev.name}</strong>
          <spam>{dev.techs.join(', ')}</spam>
            </div>
            </header>
            <p>Dev-BackEnd na InGaia</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github </a>
          </li>
    );
}

export default DevItem;