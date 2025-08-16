import React from 'react';
import video from './media/video/asdsdfgfg.mp4'; // Caminho corrigido


function Seg() {
  return (
<div style={{
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  padding: '20px',
  textAlign: 'center'
}}>
  {/* Title Section */}
  <div style={{ marginBottom: '30px' }}>
    <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Fotovoltaico</h1>
    <h2 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>Faça o teste do aplicativo</h2>
    <h4 style={{ fontSize: '1rem', color: '#666' }}>Versão teste</h4>
  </div>

  {/* Video Section */}
  <div style={{
    maxWidth: '800px',
    width: '100%',
    marginBottom: '30px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  }}>
    <video 
      controls 
      autoPlay
      style={{ 
        width: '100%',
        borderRadius: '8px'
      }}
    >
      <source src={video} type="video/mp4" />
      Seu navegador não suporta vídeos HTML5.
    </video>
  </div>

  {/* Download Section */}
  <div>
    <a 
      href='https://www.mediafire.com/file/mfcxi13jlcjmkpg/fotovaoltaico.rar/file' 
      target='_blank'
      rel="noopener noreferrer"
      style={{
        display: 'inline-block',
        padding: '12px 24px',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '4px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s'
      }}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
    >
      Download
    </a>
    <p style={{ marginTop: '10px', color: '#666' }}>Versão teste</p>
  </div>
</div>
  );
}

export default Seg;
