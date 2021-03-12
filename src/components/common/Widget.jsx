import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Loader from '../loader'

// Widget component
function Widget(props) {
	const [data, setData] = useState([])
	const [tableData, setTableData] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		// Fetching the data with mock API
		setLoading(true)
		axios.get(props.URL).then(res => {
			const data = res?.data?.data || {}
			setData(data)
			const list = (data?.dataSet && data?.dataSet?.data) || []
			list.sort((a, b) => (a.label > b.label ? 1 : -1))
			setTableData(list)
			setLoading(false)
		})
	}, [props.URL])

	const handleChange = e => {
		const val = e.target.value
		const list = [...tableData]
		if (val === 'label') {
			list.sort((a, b) => (a.label > b.label ? 1 : -1))
		} else {
			list.sort((a, b) => (a.value > b.value ? 1 : -1))
		}
		setTableData(list)
	}

	const headers = (data?.dataSet && data?.dataSet?.header) || []

	return loading ? (
		<Loader />
	) : (
		<div className='widget'>
			<div className='bg-header widget-border-top d-flex'>
				<h4 className='text-white p-3 mb-0'>{props?.title}</h4>
				<select onChange={handleChange} name='sort-option' className='sort-option form-select my-2 ml-auto mr-3 p-2'>
					<option value='label'>Sort by Label</option>
					<option value='value'>Sort by Value</option>
				</select>
			</div>
			<div className='d-flex'>
				<div className='bg-stats w-50'>
					<h6 className='text-white my-4 px-3'>STATS:</h6>
					<div>
						{data?.stats &&
							Object.values(data?.stats).map(attribute => {
								return (
									<div className='px-3' key={attribute?.label}>
										<div className='d-flex'>
											<h6 className='text-white'>{attribute?.label}</h6>
											<h6 className='text-white ml-auto'>{`${attribute?.value}%`}</h6>
										</div>
										<div className='progress progressbar-height mb-3'>
											<div
												className='progress-bar'
												role='progressbar'
												style={{width: `${attribute?.value}%`}}
												aria-valuenow={attribute?.value}
												aria-valuemin='0'
												aria-valuemax='100'
											></div>
										</div>
									</div>
								)
							})}
					</div>
					<div className='mt-5'>
						<button className='btn-info cursor-pointer btn-lg w-100' onClick={() => window.open(props?.URL)}>
							View API
						</button>
					</div>
				</div>
				<div className='w-100'>
					<div className='d-flex flex-grow-4'>
						<h4 className='flex-grow-1 table-title-border py-3 px-5 mb-0 title-1'>{data?.filter?.label || ''}</h4>
						<h4 className='flex-grow-3 py-3 px-4 mb-0 title-2'>{`${data?.filter?.value}%` || ''}</h4>
					</div>
					<table className='table table-striped mb-0'>
						<thead>
							<tr>
								<th className='text-center'>{headers[0] || ''}</th>
								<th className='text-center'>{headers[1] || ''}</th>
							</tr>
						</thead>
						<tbody>
							{tableData.map(item => {
								return (
									<tr key={item?.label}>
										<td className='text-center' style={{color: item?.color}}>
											{item?.label}
										</td>
										<td className='text-center' style={{color: item?.color}}>
											{item?.value}
										</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default Widget
