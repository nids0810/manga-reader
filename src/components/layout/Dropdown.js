import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { mangaData } from '../../data/manga'

const Dropdown = () => {
	let history = useHistory()
	const [mangas] = useState(mangaData)

	const viewManga = (id, data) => {
		history.push({
			pathname: '/manga-reader/manga/' + id,
			//search: '?query=abc',
			state: { manga: data },
		})
	}

	return (
		<>
			{mangas.map((data) => (
				<button
					className='dropdown-item'
					type='button'
					key={data.id}
					onClick={() => viewManga(data.id, data)}
				>
					{data.title}
				</button>
			))}
		</>
	)
}

export default Dropdown
