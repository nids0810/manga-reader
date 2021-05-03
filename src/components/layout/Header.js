import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

const Header = () => {
	return (
		<header>
			{/* <!-- Fixed navbar --> */}
			<nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
				<div className='container-fluid'>
					<Link className='navbar-brand' to='/manga-reader/'>
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
								<Link className='nav-link active' to='/manga-reader/'>
									Home
								</Link>
							</li>
							<li className='nav-item dropdown'>
								<Link
									className='nav-link dropdown-toggle'
									to='/'
									id='navbarDropdown'
									role='button'
									data-toggle='dropdown'
									aria-haspopup='true'
									aria-expanded='false'
								>
									Mangas
								</Link>
								<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
									<Dropdown />
									<div className='dropdown-divider'></div>
									<Link className='dropdown-item' to='/manga-reader/about'>
										Add More?
									</Link>
								</div>
							</li>
							<li className='nav-item'>
								<Link className='nav-link active' to='/manga-reader/about'>
									About
								</Link>
							</li>
						</ul>
						<form className='form-inline ml-auto my-2 my-lg-0'>
							<input
								className='form-control mr-sm-2'
								type='search'
								placeholder='Search'
								aria-label='Search'
							/>
							<button
								className='btn btn-outline-success my-2 my-sm-0'
								type='submit'
							>
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
