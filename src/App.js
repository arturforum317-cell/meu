import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './media/img/1.png';
import logo2 from './media/img/2.png';
import logo3 from './media/img/3.png';
import logo6 from './media/img/logoda.png';
import red1 from './media/img/facebook.png';
import red2 from './media/img/instagram.png';
import red3 from './media/img/linkedin.png';
import red4 from './media/img/youtube.png';

function App() {

  return (
    
    <div className="container-fluid p-0 m-0">
    {/* Header */}
    <header className="bg-success text-white text-center py-3 position-relative">
      <h1>OTTO</h1>
      
      {/* Menu */}
      <div className='text-white' style={{
        display: 'flex', 
        gap: '20px', 
        position: 'absolute', 
        right: '50px',
        top: '50%',
        transform: 'translateY(-50%)'
      }}>
        <span onClick={() => window.open("http://localhost:3000/", "_blank")}style={{ curso:'point'}}>Inicio</span>
        <span onClick={() => window.open("https://google.com", "_blank")}style={{ curso:'point'}}>Progamas</span>
        <span onClick={() => window.open("https://google.com", "_blank")}style={{ curso:'point'}}>Sobre</span>
        <span onClick={() => window.scrollTo({top: document.body.scrollHeight,behavior: "smooth"})}>Contatos</span>
      </div>
    </header>

{/* Logo - mantendo posicionamento original */}
<div style={{ position: 'relative', left: '-69px', top: '-120px',pointerEvents: 'none'}}>
    <img src={logo6} alt="Logo OTTO" className="img-fluid" style={{width: "300px"}} />
  </div>

  {/* Títulos - mantendo posicionamento original */}
  <div style={{ marginTop: '-110px' }}>
    <h2 className='text-center' style={{fontFamily: 'Arial, sans-serif', fontSize: '65px'}}>
      OTTO
    </h2>
    <h3 className="text-center" style={{ fontFamily: 'Arial, sans-serif', fontSize: '60px'}}>
      Tecnologia para quem protege o futuro.
    </h3>
    <div style={{textAlign:'center', lineHeight: '1.2', fontSize: '40px'}}>
      <p className='display-5'>Potencialize suas ações ambientais com softwares</p>
      <p className='display-5'>especializados em gestão, monitoramento e sustentabilidade.</p>
      <p className='display-5'>Soluções digitais para empresas.</p>
    </div>
  </div>

  {/* Banner 1 - Solar */}
  <div className="position-relative my-5" style={{ height: '100vh' }}>
    <img src={logo} alt="Sistema Solar" className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} />
    <div className="position-absolute top-50 start-0 translate-middle-y text-white p-5" style={{width: '50%'}}>
      <h1 className="display-5 fw-bold mb-4">
        Descubra o melhor posicionamento e dimensionamento para o seu sistema solar com nosso software intuitivo.
      </h1>
      <a href="https://limewire.com/d/ns5bv#KTyNQrtcfD">
        <button className="btn btn-success btn-lg">Clique aqui</button>
      </a>
    </div>
  </div>

  {/* Banner 2 - IA Animal */}
  <div className="position-relative my-5" style={{ height: '100vh' }}>
    <img src={logo2} alt="IA Animal" className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} />
    <div className="position-absolute top-50 end-0 translate-middle-y p-5" style={{width: '50%'}}>
      <h1 className="display-5 fw-bold mb-4 text-black">
        Nosso software usa IA avançada para identificar e destacar animais automaticamente.
      </h1>
      <div className="text-start">
        <a href='https://www.youtube.com/watch?v=QCkcHC3j1q8&list=RDMM440b2EJMOoU&index=5' target="_blank" rel="noopener noreferrer">
          <button className="btn btn-success btn-lg">Clique aqui</button>
        </a>
      </div>
    </div>
  </div>

  {/* Banner 3 - Atitudes */}
  <div className="position-relative " style={{ height: '100vh' }}>
  <img
    src={logo3}
    alt="Atitudes Ambientais" 
    className="img-fluid w-100 h-100"
    style={{ objectFit: 'cover' }}
  />
    <div className="position-absolute text-white p-5"
    style={{
      top: '50%',
      left: '27%',
      transform: 'translateY(-50%)', // Apenas centraliza verticalmente
      width: '50%'}}>
    <h1 className="display-5 fw-bold mb-4">
        Pequenas atitudes do dia a dia têm um impacto enorme no meio ambiente.
      </h1>
    </div>
  </div>

  {/* Footer */}
  <footer className="bg-success text-white text-center py-5 w-100">
  <div className="d-flex justify-content-center gap-4 p-3">
  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
    <img src={red1} alt="LinkedIn" width="60" className="img-fluid" />
  </a>
  <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Finbox%2F%3F__coig_login%3D1" target="_blank" rel="noopener noreferrer">
    <img src={red2} alt="Instagram" width="60" className="img-fluid" />
  </a>
  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
    <img src={red3} alt="Facebook" width="60" className="img-fluid" />
  </a>
  <a href="https://www.youtube.com/watch?v=IWVJq-4zW24&t=14s" target="_blank" rel="noopener noreferrer">
    <img src={red4} alt="YouTube" width="60" className="img-fluid" />
  </a>
</div>


  </footer>
  <footer className="bg-success text-white text-center py-5 w-100">
    <p className="m-0">© 2025 Otto. Todos os direitos reservados.</p>
  </footer>
</div>
  );
}

export default App;
