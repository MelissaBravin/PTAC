import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import api from '../services/api'

import './Noticia.css'

function Noticia() {
	let params = useParams()

	const [noticia, setNoticia] = useState([])

	useEffect(() => {
		api
			.get(`/noticias/visualizar?id=${params.idNoticia}`)
			.then(response => {
				setNoticia(response.data)
			})
			.catch(err => {
				console.log('ERRO: ', err)
			})
	}, [])

	return (
		<article>
			<div className="noticia-container">
      <div className="title">
					<h2><b>{noticia.titulo}</b></h2>
				</div>
				<div>
					<span className="author">{noticia.data_publicacao}</span>
				</div>
        <div>
        	<span className="date">{noticia.autor}</span></div>	
			</div>
			<div className="text">
				{noticia.descricao}
			</div>
      <div className="text">
				{noticia.conteudo}
			</div>
		</article>
	)
}

export default Noticia;