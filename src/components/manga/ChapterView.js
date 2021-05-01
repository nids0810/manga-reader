import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import axios from 'axios'
import cheerio from 'cheerio'
import Page from './Page'
import Spinner from '../layout/Spinner'
import replaceSecondoccurrence from '../../utils/replaceSecondoccurrence'
import airthmaticOperationOnStrings from '../../utils/airthmaticOperationOnStrings'

const ChapterView = (props) => {
	let history = useHistory()
	const location = useLocation()
	const [chapter, setChapter] = useState(location.state.chapter)
	const [manga, setManga] = useState(location.state.manga)
	const pages = chapter.pages

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}, [])

	const prevChapter = (chapterno) => {
		let newChapterNo = airthmaticOperationOnStrings(chapterno, '-1')

		let newPath = replaceSecondoccurrence(
			history.location.pathname,
			newChapterNo
		)

		const newChapter = manga.chapters.filter(
			(item) => item.chapterno === newChapterNo
		)

		history.push({
			pathname: newPath,
			state: { chapter: newChapter, manga: manga },
		})
	}

	const nextChapter = (chapterno) => {
		let newChapterNo = airthmaticOperationOnStrings(chapterno, '1')

		const newPath = replaceSecondoccurrence(
			history.location.pathname,
			newChapterNo
		)

		const newChapter = manga.chapters.filter((item) => item === newChapterNo)

		history.push({
			pathname: newPath,
			state: { chapter: newChapter, manga: manga },
		})
	}

	useEffect(() => {
		const fetchCurChapter = async () => {
			axios({
				method: 'get',
				url: `https://cors-anywhere.herokuapp.com/${chapter.chapterlink}`,
				headers: { 'X-Requested-With': 'XMLHttpRequest' },
			})
				.then(function (res) {
					//success!
					const $ = cheerio.load(res.data)
					// Page Length
					const pageLength = $('.entry-content img').length
					setChapter((prevState) => ({
						...prevState, // copy all other field/objects
						pagelength: pageLength, // overwrite the value of the field to update
					}))

					// Page List
					var pageList = []

					$('.entry-content img').each((i, el) => {
						const pageNo = i + 1
						const pageSrc = $(el).attr('src')
						const pageALT = $(el).attr('alt')
						pageList.push({
							pageno: pageNo,
							pagesrc: pageSrc,
							pagealt: pageALT,
						})
					})
					setChapter((prevState) => ({
						...prevState, // copy all other field/objects
						pages: pageList, // overwrite the value of the field to update
					}))
				})
				.catch((err) => console.log(err))
		}
		fetchCurChapter()
	}, [chapter.chapterlink])

	if (pages === undefined || pages.length === 0) {
		return <Spinner />
	} else {
		return (
			<div
				className='container-fluid d-flex flex-column justify-content-center align-items-center'
				style={{ minHeight: 'calc(100vh - 56px)' }}
			>
				<h1 className='mt-3'>{chapter.chaptername}</h1>
				<ul
					className='d-flex flex-column justify-content-center align-items-center'
					style={{ padding: '10px 0px' }}
				>
					{pages.map((data) => (
						<li key={data.pageno}>
							<Page key={data.pageno} page={data} />
						</li>
					))}
				</ul>
				<div className='col-lg-12' style={{ margin: '10px' }}>
					<div className='d-flex flex-row justify-content-center align-items-center'>
						<button
							className='btn btn-success'
							onClick={() => {
								prevChapter(chapter.chapterno)
							}}
							style={{ marginRight: '5px' }}
						>
							Previous chapter
						</button>
						<button
							className='btn btn-success'
							onClick={() => {
								nextChapter(chapter.chapterno)
							}}
							disabled
							style={{ marginLeft: '5px' }}
						>
							Next chapter
						</button>
					</div>
				</div>
			</div>
		)
	}
}

export default ChapterView
