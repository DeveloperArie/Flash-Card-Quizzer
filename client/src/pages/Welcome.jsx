import { Link } from "react-router-dom"
import Decks from '../components/Decks.jsx'

export default function Welcome({credentials}) {

    return (
        <div>
            <div>Welcome {credentials && credentials.username} </div>
            {!credentials && <Link to='/register'>Sign up</Link>}
            <br/>
            {!credentials && <Link to='/login'>Login</Link>}
            {credentials && <Decks/>}
        </div>
    )
}