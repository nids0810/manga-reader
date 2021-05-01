import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header>
			{/* <!-- Fixed navbar --> */}
			<nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
				<div className='container-fluid'>
					<Link className='navbar-brand' to='/'>
						Manga Reader
					</Link>
					<button
						className='navbar-toggler collapsed'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarCollapse'
						aria-controls='navbarCollapse'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='navbar-collapse collapse' id='navbarCollapse'>
						<ul className='navbar-nav me-auto mb-2 mb-md-0'>
							<li className='nav-item'>
								<Link className='nav-link active' to='/'>
									Home
								</Link>
							</li>
						</ul>
						<form className='d-flex'>
							<input
								className='form-control me-2'
								type='search'
								placeholder='Search'
								aria-label='Search'
							/>
							<button className='btn btn-outline-success' type='submit'>
								Search
							</button>
						</form>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header
