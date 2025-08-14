import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import video from '/media/vídeo/asdsdsdd.mp4';

function App() {
  return (
    <div className="App">
      <div>
        <video controls>
          <source src={video} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
      <a href="#">
        <button className=""></button>
      </a>
    </div>
  );
}

export default App;