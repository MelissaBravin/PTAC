import React from 'react'
import { Link } from 'react-router-dom';

import './CardNoticias.css'

function CardNoticias(props) {
	return (
		 <div class="card bg-dark">
      <div class="card-body">
      <p class="card-text p-2">
      <Link to={props.idNoticia}> 
      <h4 class="card-title">{props.titulo}</h4>
      </Link>
      <h5 class='p-2'>{props.autor}</h5>
      </p>
    </div>
  </div>
	)
}

export default CardNoticias