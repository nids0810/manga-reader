import React from 'react'
import Mangas from '../manga/Mangas'

const Home = () => {
	return (
		<React.Fragment>
			<div className='row bg-light'>
				<Mangas />
			</div>
		</React.Fragment>
	)
}

export default Home
