import CareScale from './CareScale'
import '../styles/SirineItem.css'

function handleClick(sirineName) {
	alert(`Vous voulez acheter 1 ${sirineName} ? Très bon choix ! 🍔🧁`);
}

function SirineItem({ id, cover, name, salt, sugar }) {
	return (
		<li key={id} className='sd-plant-item' onClick={() => handleClick(name)}>
			<img className='sd-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='salt' scaleValue={salt} />
				<CareScale careType='sugar' scaleValue={sugar} />
			</div>
		</li>
	)
}

export default SirineItem;