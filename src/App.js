import React from 'react'
import Header from './components/header'
import Widget from './components/common/Widget'
import {WIDGET_LIST} from './api'

function App() {
	return (
		<>
			<Header />
			<div className='row mb-3 mx-2'>
				{Object.values(WIDGET_LIST).map(element => {
					return (
						<div className='col-xl-6 col-lg-6 col-md-6 col-12 mb-3' key={element?.title}>
							<Widget title={element?.title} URL={element?.API_URL} />
						</div>
					)
				})}
			</div>
		</>
	)
}

export default App
