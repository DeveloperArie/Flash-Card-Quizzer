import {useContext, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {userMe} from "../api/userMe"
import { CredentialsContext } from "../App"

export function Header() {
    const navigate = useNavigate()
    const credentials = useContext( CredentialsContext)
    console.log({credentials})

    async function logout() {
        localStorage.removeItem("token")
        credentials.setToken("")
        credentials.setUsername("")
        navigate("/login")
    }

    useEffect( () => {
        if (credentials.token) {
            const f = async () => {try {
                console.log(credentials.token)
                const {username} = await userMe(credentials.token)
                credentials.setUsername(username)
            } catch(e) {
                alert(e.message)
                credentials.setUsername("")
                credentials.setToken("")
            }};
            f();
        }
    }, [credentials])

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
                    <button className="headerBtns" onClick={() => navigate("/login")}>Log In</button>
                    <button className="headerBtns" onClick={() => navigate("/signup")}>Sign Up</button>
                </div>
            </>}
            </div>
            
        </div>
    )
}

