import React, { useEffect } from 'react';
import { createWidget } from '@typeform/embed';
import '@typeform/embed/build/css/widget.css';

import './Busreis.css'

function Busreis() {
  useEffect(() => {
    createWidget('OHJJG8Hp', { container: document.querySelector('#form') });
  }, []);


  return (
    <main className='content busreis'>
      <div className='info'>
        <h1>Busreis aanvragen</h1>
        <p>Staat je busreis er niet tussen? Vraag via dit formulier een busreis aan voor je favoriete festival!</p>
      </div>
      <div id="form" style={{ width: '100%', height: '700px' }}></div>
    </main>
  );
}

export default Busreis;