import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cabecario from './models/Cabecario'
import Noticias from './models/Noticias'
import Noticia from './models/Noticia'
import Footer from './models/Footer'
import './App.css';

function App() {
	return (
    <BrowserRouter>
    	<div class="container">
		    <Cabecario/>
        <div class="row">
        <main class="col-12 col-md-9  order-2  order-md-1 p-3">
        <Routes>
					<Route path='/' element={<Noticias/>} />
          <Route path=':idNoticia' element={<Noticia />} />		 
        </Routes>
        </main>
        </div>
        <Footer/>
			</div>
      </BrowserRouter>
	);
}

export default App;