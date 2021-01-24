import Auto from "../auto"
import "./style.scss"

function Nav (props) {

    function handleCallback (value) {
        props.callback(value)
    }

    return (
        <nav className="navStyle">
        <h1 className="title">STURTUP ARGENTINA</h1>
        <Auto  callback={handleCallback}/>
        </nav>
    )

}

export default Nav