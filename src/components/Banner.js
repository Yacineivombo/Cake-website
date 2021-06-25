import '../styles/Banner.css'
// eslint-disable-next-line
import logo from '../assets/logo.png'

function Banner({ children }) {
	return <div className='sd-banner'>{children}</div>
}

export default Banner;