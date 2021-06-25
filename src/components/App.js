import logo from '../assets/logo.png';
import '../App.css';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
// import QuestionForm from './QuestionForm';
import Footer from './Footer';
import { useState, useEffect } from 'react'

function App() {
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<div>
			<Banner>
				<img src={logo} alt='Sirine Délice' className='sd-logo' />
				<h1 className='sd-title'>Sirine Délice</h1>
			</Banner>
			<div className='sd-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}
export default App;