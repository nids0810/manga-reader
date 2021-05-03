import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import cheerio from 'cheerio'
import Chapter from './Chapter'
import Spinner from '../layout/Spinner'

const MangaView = (props) => {
	const location = useLocation()
	const [manga, setManga] = useState(location.state.manga)
	const chapters = manga.chapters

	useEffect(() => {
		const fetchCurManga = async () => {
			const url = manga.link
			//const url = `https://cors-anywhere.herokuapp.com/${manga.link}`
			axios({
				method: 'get',
				url: url,
				headers: { 'X-Requested-With': 'XMLHttpRequest' },
			})
				.then(function (res) {
					//success!
					const $ = cheerio.load(res.data)

					// Chapter Length
					const chaplength = $('#Chapters_List a').length
					setManga((prevState) => ({
						...prevState, // copy all other field/objects
						chapterlength: chaplength, // overwrite the value of the field to update
					}))

					// Chapater List
					var chaptersList = []

					$('#Chapters_List a').each((i, el) => {
						//const chapterno = $(el).text().replace(/\D/g, '')
						const chapterno = $(el)
							.text()
							.match(/\d{1,10}(\.\d{1,4})/g)
						const chaptername = $(el).text()
						const chapterlink = $(el).attr('href')
						const chapterisnew = false
						chaptersList.push({
							chapterno: chapterno,
							chaptername: chaptername,
							chapterlink: chapterlink,
							chapterisnew: chapterisnew,
						})
					})
					setManga((prevState) => ({
						...prevState, // copy all other field/objects
						chapters: chaptersList, // overwrite the value of the field to update
					}))
				})
				.catch((err) => console.log(err))
		}
		fetchCurManga()
	}, [manga.link])

	if (chapters === undefined || chapters.length === 0) {
		return <Spinner />
	} else {
		return (
			<>
				<div className='flex border-0' style={{ width: '100%' }}>
					<div className='row g-0 border-bottom'>
						<div className='col-md-4'>
							<div className='card-body'>
								<img
									className='img-thumbnail'
									src={manga.img}
									alt={manga.title}
								/>
							</div>
						</div>
						<div className='col-md-8'>
							<div className='card-body'>
								<h1 className='card-title'>{manga.title}</h1>
								<p className='card-text'>Written By: {manga.writtenby}</p>
								<p className='card-text'>
									Total Chapters: {manga.chapters.length}
								</p>
								<p className='card-text'>
									Duration: {manga.startdate} - {manga.enddate}
								</p>
								<p className='card-text'>Description: {manga.description}</p>
								<p className='card-text'>
									<small className='text-muted'>Imprint: {manga.imprint}</small>
									<small> ; </small>
									<small className='text-muted'>
										Magazine: {manga.magazine}
									</small>
								</p>
							</div>
						</div>
					</div>
					<div className='col'>
						<div className='card border-0'>
							<div className='card-body'>
								<h2 className='card-title text-center'>Chapters</h2>
								<ul className='list-group list-group-flush'>
									{chapters.map((data) => (
										<Chapter
											key={data.chapterno}
											chapter={data}
											manga={manga}
										/>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default MangaView
