import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Header from './components/header'
import Loader from './components/loader'
import Footer from './components/footer'
import {GET_PRODUCT_LIST} from './api'

function App() {
	const [productsList, setProductsList] = useState([])
	const [cartItems, setcartItems] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		// Fetching the products with mock API
		setLoading(true)
		axios
			.get(`${process.env.REACT_APP_API_ENDPOINT || GET_PRODUCT_LIST.BASE_URL}${GET_PRODUCT_LIST.ENDPOINT}`)
			.then(res => {
				const products = res?.data?.data || []
				setProductsList(products)
				setLoading(false)
			})
	}, [])

	const handleAddCart = (product, factor) => {
		// handle add to cart, increase/decrease quantity
		const list = [...cartItems]
		const idx = list.findIndex(item => item.id === product.id)
		if (idx >= 0) {
			list[idx].cartQuantity = list[idx].cartQuantity + factor
			list[idx].cartQuantity === 0 && list.splice(idx, 1)
		} else {
			product.cartQuantity = factor
			list.push(product)
		}
		setcartItems(list)
	}

	return loading ? (
		<Loader />
	) : (
		<div className='container-fluid'>
			<Header cartItems={cartItems} handleAddCart={handleAddCart} />
			<div className='row'>
				{productsList.map(item => {
					const product = cartItems.find(ele => ele.id === item.id)
					return (
						<div className='col-xl-3 col-lg-4 col-md-6 col-12 ' key={item?.id}>
							<div className='p-4 my-3 rounded zoom-on-hover bg-white'>
								<img className='py-2' src={item?.image} alt={item?.name} width='100%' />
								<p className='text-dark pt-1 mb-0 text-truncate'>{item?.name}</p>
								<p className='text-secondary font-weight-lighter pb-1 mb-0 text-truncate' title={item?.description}>
									{item?.description}
								</p>
								<h6 className='pb-1 text-truncate text-dark text-truncate'>Rs. {item?.price}</h6>
								{product ? (
									Number(product?.quantity) === product?.cartQuantity ? (
										<button className='btn w-100 btn btn-secondary' disabled>
											Out of Stock
										</button>
									) : (
										<div className='d-flex'>
											<button
												className='btn w-50 btn btn-outline-warning mr-4 cursor-pointer'
												onClick={() => handleAddCart(item, -1)}
											>
												-
											</button>
											<input type='text' className='text-center input-w-50' disabled value={product?.cartQuantity} />
											<button
												className='btn w-50 btn btn-outline-warning ml-4 cursor-pointer'
												onClick={() => handleAddCart(item, 1)}
											>
												+
											</button>
										</div>
									)
								) : (
									<button
										className='btn w-100 btn btn-outline-warning cursor-pointer'
										onClick={() => handleAddCart(item, 1)}
									>
										Add to Cart
									</button>
								)}
							</div>
						</div>
					)
				})}
			</div>
			<Footer />
		</div>
	)
}

export default App
