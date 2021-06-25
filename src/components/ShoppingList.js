import { sirineList } from '../datas/sirineList'
import SirineItem from './SirineItem'
import '../styles/ShoppingList.css'
import {useState} from 'react'
import Categories from './Categories'

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = sirineList.reduce(
		(acc, sirine) =>
			acc.includes(sirine.category) ? acc : acc.concat(sirine.category),
		[]
	)

	function addToCart(name, price) {
		const currentAlmSaved = cart.find((sirine) => sirine.name === name)
		if (currentAlmSaved) {
			const cartFilteredCurrentAlm = cart.filter(
				(sirine) => sirine.name !== name
			)
			updateCart([
				...cartFilteredCurrentAlm,
				{ name, price, amount: currentAlmSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='sd-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='sd-plant-list'>
				{sirineList.map(({ id, cover, name, salt, sugar, category, price }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<SirineItem
								cover={cover}
								name={name}
								salt={salt}
								sugar={sugar}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList;