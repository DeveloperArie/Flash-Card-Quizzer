import { CredentialsContext } from "../App"

export function Header({credentials}) {
    return (
        <div className="header">
            <div className="container">
                <div>FlashCardQuizzer</div>
                <div>Welcome {credentials && credentials.username}</div>
                <div className="signUp">
                    <a href="/login">login</a>
                    <a href="/signup">sign up</a>
                </div>
            </div>
            
        </div>
    )
}