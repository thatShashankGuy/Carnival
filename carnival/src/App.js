import React, {useState} from 'react'
import Navigation from "./components/Navigation/Navigation"
import PhotoCard from './components/PhotoCard/PhotoCard'
import ImgLinkForm from './components/ImgLinkForm/ImgLinkForm'
import Timer from './components/Timer/Timer'
import Particles from 'react-particles-js';
import './App.css';

function App() {
const [Input, setInput] = useState(0);

const clientID = 0//to be added 


const fetchData = (userQuery) => { 
    let Url = `https://api.unsplash.com/photos/random?client_id='+${clientID}+'&query=${userQuery}`
    let imgurl =  fetch(Url).then(Response => {
        return Response.json()
    }).then(json =>{
            console.log(json)
           return  json.urls.regular          
          })
          console.log(imgurl)
    return (
        imgurl
    )
}

 
  const particlesobj = {
    number: {
      value: 900,
      density: {
          enable: true,
          value_area: 1000
      }
  },
  color: {
      value: '#0d0c0c'
  },
  opacity: {
      value: 0.5,
      anim: {
          enable: true
      }
  },
  size: {
      value: 7,
      random: true,
      anim: {
          enable: true,
          speed: 3
      }
  },
  line_linked: {
      enable: false
  },
  move: {
      speed: 0.2
  }
}    
  return (
    <div className="App">
      <Navigation />
      <Particles className = 'particles' params ={particlesobj}/>
      <PhotoCard/>
      <Timer/>
      <ImgLinkForm onDetect =  {fetchData}/>
    </div>
  );
}

export default App;
