import React from 'react'
import {POSTMAN_COLLECTION} from '../../api'

// Header component
function Header() {
	const downloadPostmanCollection = el => {
		const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(POSTMAN_COLLECTION))
		el.currentTarget.setAttribute('href', 'data:' + dataStr)
		el.currentTarget.setAttribute('download', 'assignment.postman_collection.json')
	}

	return (
		<>
			<div className='p-3 d-flex justify-content-between bg-header text-white mb-3'>
				<h2>ABC College of engineering</h2>
				<button className='btn btn btn-primary cursor-pointer'>
					<a onClick={downloadPostmanCollection}>Download Postman Collection</a>
				</button>
			</div>
		</>
	)
}

export default Header
