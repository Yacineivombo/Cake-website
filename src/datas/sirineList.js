import Burger from '../assets/Burger.jpg'
import StrawberryCake from '../assets/StrawberryCake.jpg'
import MiniBurger from '../assets/MiniBurger.jpeg'
import Donut from '../assets/Donut.jpg'
import LayerCake from '../assets/LayerCake.jpeg'

export const sirineList = [
	{
		name: 'Mini hamburger',
		category: 'plateau',
		id: '1ed', 
		salt: 3,
		sugar: 0,
		cover: Burger,
		price: 10
	},
	{
		name: 'Mini HotDog',
		category: 'plateau',
		id: '2ab',
		salt: 2,
		sugar: 0,
		cover: MiniBurger,
		price: 10
	},
	{
		name: 'Batbout',
		category: 'plateau',
		id: '3sd',
		salt: 1,
		sugar: 0,
		cover: Burger,
		price: 10
	},
	{
		name: 'Baggles',
		category: 'plateau',
		id: '4kk',
		salt: 3,
		sugar: 0,
		cover: MiniBurger,
		price: 10
	},
	{
		name: 'Donut nutella',
		category: 'donuts',
		id: '5pl',
        salt: 0,
		sugar: 2,
		cover: Donut,
		price: 10

	},
	{
		name: 'Donut Noisette',
		category: 'donuts',
		id: '6uo',
		salt: 0,
		sugar: 3,
		cover: Donut,
		price: 13
	},
	{
		name: 'Donut Caramel',
		category: 'donuts',
		id: '7ie',
		salt: 0,
		sugar: 2,
		cover: Donut,
		price: 13
	},
	{
		name: 'Layer Cake chocolat',
		category: 'cake',
		id: '8fp',
        salt: 0,
		sugar: 1,
		cover: LayerCake,
		price: 60
	},
	{
		name: 'Layer Cake Vanille',
		category: 'cake',
		id: '9vn',
		salt: 0,
		sugar: 2,
		cover: StrawberryCake,
		price: 60
	}
]