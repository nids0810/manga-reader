import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

const Manga = ({ manga }) => {
	let history = useHistory()

	const viewManga = (id) => {
		history.push({
			pathname: '/manga/' + id,
			//search: '?query=abc',
			state: { manga: manga },
		})
	}

	if (manga === undefined || manga.id === '') {
		return <div />
	} else {
		return (
			<div className='card text-center m-3 p-3' style={{ width: '300px' }}>
				{/* <h5 class='card-header'>Featured</h5> */}
				<img
					className='card-img-top'
					src={manga.img}
					alt={manga.title}
					style={{ width: '100%' }}
				/>
				<div className='card-body'>
					<h1 className='card-title'>{manga.title}</h1>
					<button
						style={{ width: '100%' }}
						className='btn btn-primary stretched-link'
						onClick={() => viewManga(manga.id)}
					>
						View
					</button>
				</div>
			</div>
		)
	}
}

Manga.prototype = {
	manga: PropTypes.object.isRequired,
	viewManga: PropTypes.func.isRequired,
}

export default Manga
