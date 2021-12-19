import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import CardNoticias from './CardNoticias'
import api from '../services/api'
import './Noticias.css'

function Noticias() {

	const [noticias, setNoticias] = useState([])

	useEffect(() => {
		api
			.get('/noticias')
			.then(response => {
				setNoticias(response.data)
			})
			.catch(err => {
				console.log('ERRO: ', err)
			})
	}, [])

	return (
		<main className='noticias-container'>
       <h1 class='p-3 texto'>Página Inicial</h1>
			{
				noticias.map(noticia => {
					return (
						<div key={noticia._id} class='m-2 col-11 row-3'>
							<CardNoticias titulo={noticia.titulo} autor={noticia.autor} idNoticia={noticia._id}/>
						</div>
					)
				})
			}

		</main>
	)
}

export default Noticias;