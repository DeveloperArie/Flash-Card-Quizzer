import {useContext} from "react"
import {useNavigate} from "react-router-dom"
import { CredentialsContext } from "../App"

export function Header() {
    //const navigate = useNavigate()
    const credentials = useContext( CredentialsContext)
    console.log({credentials})

    async function logout() {
        localStorage.removeItem("token")
        alert("Please refresh. Bug will be fixed soon.")
        navigate("/login")
    }

    return (
        <div className="header">
            <div className="container">
                <h2 className='appNameHeader'>FlashCardQuizzer</h2>
        {credentials.token ? <>
                <h2 className="welcomeUser">Welcome {credentials.username}</h2>
                <div className="signUp">
                    <button className="logoutBtn headerBtns" onClick={logout}>Log out</button>
                </div>
            </>: <>

                <div className="signUp">
                    <button className="headerBtns" onClick={() => navigate("/login")}>Log in</button>
                    <button className="headerBtns" onClick={() => navigate("/signup")}>Sign up</button>
                </div>
            </>}
            </div>
            
        </div>
    )
}
