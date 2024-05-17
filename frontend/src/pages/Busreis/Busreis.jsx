import React, { useEffect } from 'react';
import { createWidget } from '@typeform/embed';
import '@typeform/embed/build/css/widget.css';

import './Busreis.css'

function Busreis() {
  useEffect(() => {
    createWidget('OHJJG8Hp', { container: document.querySelector('#form') });
  }, []);


  return (
    <div>
      <h1>Vraag een busreis aan</h1>
      <div id="form" style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
}

export default Busreis;