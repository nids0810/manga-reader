import React from 'react'
import PropTypes from 'prop-types'

const Page = ({ page }) => {
	if (!page.pageno) return <div />

	return (
		<>
			<img
				className='img-fluid'
				// src={`data:image/jpeg; base64, ${page.pagesrc}`}
				src={page.pagesrc}
				alt={page.pagealt}
			/>
		</>
	)
}

Page.prototype = {
	page: PropTypes.object.isRequired,
	viewChapter: PropTypes.func.isRequired,
}

export default Page
