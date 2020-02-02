import React, {useState, useEffect} from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css'
import './Main.css'
import DevItem from './components/index'

function App() {
  const [devs, setDevs] = useState([]);
  const [github_username, setGithubUsername] = useState('');
  const [techs, SetTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude } = position.coords;
        
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
      )
  }, []);

  useEffect(()=>{
    async function loadDevs(){
      const response= await api.get('/devs');

      setDevs(response.data);
    }
    loadDevs();
  }, []);
  
  async function handleaAddDev(e){
    e.preventDefault();

    const response = await api.post('/devs',{
      github_username,
      techs,
      latitude,
      longitude,
    })
    setGithubUsername('');
    SetTechs('');
    
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
      <strong>Cadastrar</strong>
      <form onSubmit={handleaAddDev}>
        <div className="input-block">
        <label htmlFor="github_username">Usuário do Github</label>
        <input 
        name = "github_username" 
        id="github_username"
        required
        value={github_username}
        onChange={e => setGithubUsername(e.target.value)}/>
        </div>

        <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input 
        name = "techs" 
        id="techs"
        required
        value={techs}
        onChange={e => SetTechs(e.target.value)}/>
        </div>

        <div className="input-group">
        <div className="input-block">
        <label htmlFor="Latitude">Latitude</label>
        <input
         type ="number" 
         name = "Latitude" 
         id="Latitude" 
         required value={latitude}
         onChange={e => setLongitude(e.target.value)}/>
        </div>

        <div className="input-block">
        <label htmlFor="Lonngitude">Lonngitude</label>
        <input 
        type ="number" 
        name = "Longitude" 
        id="Longitude" 
        required value={longitude}
        onChange={e => setLatitude(e.target.value)}/>
        </div>
        </div>
        <button type="submit">Salvar</button>
      </form>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
