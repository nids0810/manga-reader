import React from 'react'
import Mangas from '../manga/Mangas'

const Home = () => {
	return (
		<React.Fragment>
			<main>
				<div className='container bg-light'>
					<div className='row'>
						<Mangas />
					</div>
				</div>
			</main>
		</React.Fragment>
	)
}

export default Home
