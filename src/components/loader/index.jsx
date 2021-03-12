import React from 'react'

// Loading component, contains loader icon
const Loader = () => {
	return (
		<div className='h-100vh d-flex justify-content-center align-items-center'>
			<div className='spinner-border text-primary'></div>
			<span className='pl-2'>Loading...</span>
		</div>
	)
}

export default Loader
