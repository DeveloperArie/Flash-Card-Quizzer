import {useContext, useEffect} from "react"
import { Link, useNavigate } from "react-router-dom"
import {CredentialsContext} from "../App.jsx"
import Decks from '../components/Decks.jsx'

export default function Welcome() {
    const navigate = useNavigate()
    const credentials = useContext(CredentialsContext)

    useEffect(() => {
        if (credentials.token) {
            navigate("/decks")
        } else {
            navigate("/login")
        }
    },[credentials])

    return (
        <div>
        <p>You will be redirected soon!</p>
        </div>
    )
}
