import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

const Chapter = ({ chapter, manga }) => {
	let history = useHistory()

	if (!chapter.chapterno) return <div />

	const viewChapter = (chapterno) => {
		history.push({
			pathname: history.location.pathname + '/chapter/' + chapter.chapterno,
			state: { chapter: chapter, manga: manga },
		})
	}

	return (
		<>
			<li
				className='list-group-item'
				style={{ cursor: 'pointer' }}
				onClick={() => {
					viewChapter(chapter.chapterno)
				}}
			>
				<h4 className='card-title'>{'Chapter ' + chapter.chapterno}</h4>
			</li>
		</>
	)
}

Chapter.prototype = {
	chapters: PropTypes.object.isRequired,
	viewChapter: PropTypes.func.isRequired,
}

export default Chapter
