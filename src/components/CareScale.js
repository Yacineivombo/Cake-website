import Salt from '../assets/salt.png'
import Sugar from '../assets/sugar-cubes.png'

const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'salt' ? (
			<img src={Salt} alt='salt-icon' />
		) : (
			<img src={Sugar} alt='sugar-icon' />
		)

	return (
		<div
			onClick={() =>
				alert(
					`Cette aliment contient ${quantityLabel[scaleValue]} ${
						careType === 'salt' ? 'de sel' : "de sucre"
					}`
				)
			}
		>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale