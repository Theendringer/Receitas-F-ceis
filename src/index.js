import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from "./Componets/inicio"
import NovaReceita from "./Componets/novaReceita"
import BuscarReceita from "./Componets/buscarReceita"
import Link from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div> 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/novareceita' element={<NovaReceita/>}/>
      <Route path='/buscarreceita' element={<BuscarReceita/>}/>

    </Routes>
    </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
