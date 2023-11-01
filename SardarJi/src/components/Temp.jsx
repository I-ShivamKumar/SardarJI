import reactLogo from '../assets/react.svg'
import '../App.css'

function Temp() {
    return (
        <div className="card">
            <div className="card-image"><img src={reactLogo} alt="React Logo" /></div>
            <div className="category"> Illustration </div>
            <div className="heading"> A heading that must span over two lines
            </div>
        </div>
    )
}

export default Temp