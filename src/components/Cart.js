import '../styles/Cart.css'
import { useState, useEffect } from 'react'

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, sirineType) => acc + sirineType.amount * sirineType.price,
		0
	)

	useEffect(() => {
		alert(`J'aurai ${total}€ à payer 💸`)
	}, [total])

	return isOpen ? (
		<div className='sd-cart'>
			<button
				className='sd-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='sd-cart-closed'>
			<button
				className='sd-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}


export default Cart;