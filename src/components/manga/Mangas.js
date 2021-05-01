import React, { useState } from 'react'
import { mangaData } from '../../data/manga'
import Spinner from '../layout/Spinner'
import Manga from './Manga'

const Mangas = () => {
	const [mangas] = useState(mangaData)

	if (mangas === undefined || mangas.length === 0) {
		return <Spinner />
	} else {
		return (
			<>
				{mangas.map((data) => (
					<Manga key={data.id} manga={data} />
				))}
			</>
		)
	}
}

export default Mangas
