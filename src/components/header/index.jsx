import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Modal} from 'react-bootstrap'
import AppIcon from '../../assets/images/logo.png'
import CartIcon from '../../assets/images/cart.png'

// Header component, contains logo & cart
function Header(props) {
	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	const [totalPrice, setTotalPrice] = useState(0)
	const {cartItems, handleAddCart} = props

	useEffect(() => {
		// calculating total price
		let total = 0
		cartItems.map(item => {
			total = total + Number(item?.price) * item.cartQuantity
		})
		setTotalPrice(total)
	}, [cartItems])

	return (
		<>
			<div className='p-4 d-flex header-footer-alignment justify-content-between bg-light'>
				<Link className='navbar-brand' to='/'>
					<img src={AppIcon} alt={'Logo'} height={50} />{' '}
				</Link>
				<div className='cursor-pointer' onClick={handleShow}>
					<img src={CartIcon} alt={'Logo'} height={50} />{' '}
					<div className='font-weight-bold bg-warning text-black p-0 cart-qty rounded-circle position-absolute d-flex justify-content-center'>
						{cartItems.length}
					</div>
				</div>
			</div>
			<Modal show={show} onHide={handleClose} dialogClassName='modal-dialog-centered modal-dialog-scrollable'>
				<Modal.Header closeButton>
					<Modal.Title>Your Cart</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{cartItems.length > 0 ? (
						cartItems.map(item => {
							const isDecreaseBtnDisabled = item?.cartQuantity === 0
							const isincreaseBtnDisabled = Number(item?.quantity) === item?.cartQuantity
							return (
								<div className='col-12' key={item?.id}>
									<div className='p-4 my-3 rounded bg-white'>
										<img className='py-2' src={item?.image} alt={item?.name} width='100%' />
										<p className='text-dark pt-1 mb-0 text-truncate'>{item?.name}</p>
										<p className='text-secondary font-weight-lighter pb-1 mb-0 text-truncate' title={item?.description}>
											{item?.description}
										</p>
										<h6 className='pb-1 text-truncate text-dark text-truncate'>Rs. {item?.price}</h6>
										<div className='d-flex'>
											<button
												className={`btn w-50 btn btn-${
													isDecreaseBtnDisabled ? 'secondary' : 'warning'
												} mr-4 cursor-pointer`}
												onClick={() => handleAddCart(item, -1)}
												disabled={isDecreaseBtnDisabled}
											>
												-
											</button>
											<input type='text' className='text-center input-w-50' disabled value={item?.cartQuantity} />
											<button
												className={`btn w-50 btn btn-${
													isincreaseBtnDisabled ? 'secondary' : 'warning'
												} ml-4 cursor-pointer`}
												onClick={() => handleAddCart(item, 1)}
												disabled={isincreaseBtnDisabled}
											>
												+
											</button>
										</div>
									</div>
								</div>
							)
						})
					) : (
						<div className='text-center'>
							<h3>Your cart is empty!</h3>
							<p>Add items to it now.</p>
							<button className='btn w-50 btn btn-warning cursor-pointer' onClick={handleClose}>
								Shop Now
							</button>
						</div>
					)}
				</Modal.Body>
				{cartItems.length > 0 && (
					<Modal.Footer className='d-flex justify-content-between'>
						<div className='d-flex flex-column font-weight-bold'>
							<span>Rs. {totalPrice}</span>
							<span>Total Price</span>
						</div>
						<button className='btn w-50 btn btn-secondary cursor-pointer' disabled>
							Proceed to Buy
						</button>
					</Modal.Footer>
				)}
			</Modal>
		</>
	)
}

export default Header
