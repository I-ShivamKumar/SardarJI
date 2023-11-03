import logo from '../assets/logo.png'
import '../App.css'

function Card() {
    return (
        <div className="card">
            <div className="card-image"><img src={logo} alt="React Logo" /></div>
            <div className="category"> Illustration </div>
            <div className="heading"> A heading that must span over two lines
            </div>
        </div>
    )
}

export default Card