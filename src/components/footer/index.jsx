import React from 'react'

// Footer component, static footer
function Footer() {
	return (
		<footer className='bg-light text-dark header-footer-alignment p-4'>
			<div className='row'>
				<div className='col-xl-6 col-12 text-xl-left text-center'>
					<div className='h5 px-1 font-weight-bold mb-0'>SHOP MY</div>
				</div>
				<div className='col-xl-6 col-12'>
					<div className='text-xl-right text-center mb-0 w-100'>
						<small>
							{' '}
							<a className='text-primary' target='_blank' href='https://github.com/gnyan9494'>
								gnyan
							</a>{' '}
							© All Rights Reserved
						</small>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
