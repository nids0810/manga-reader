import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// import components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/layout/Home'

import MangaView from './components/manga/MangaView'
import ChapterView from './components/manga/ChapterView'

const App = () => {
	return (
		<Router>
			<Header />
			<div className='container'>
				<Route path='/' exact component={Home} />
				<Route path='/manga/:id' exact component={MangaView} />
				<Route path='/manga/:id/chapter/:id' exact component={ChapterView} />
			</div>
			<Footer />
		</Router>
	)
}

export default App
