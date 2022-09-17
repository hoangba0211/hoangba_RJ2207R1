export default function SignIn() {
    return (
        <>
            <div id="signin">
                <div className="signin__avatar">
                    <img src="https://i.pinimg.com/236x/92/d6/60/92d660adb69ff63b4d133cda9592d848.jpg" alt="logo bootstrap" />
                </div>
                <p className="please">Please sign in</p>
                <div className="signin__form">
                    <input type="email"  placeholder="Email address" />
                    <input type="password"  placeholder="Password" />
                    <input type="checkbox" /> Remember me
                </div>
                <button>Sign in</button>
                <p>2017 - 2021</p>
            </div>
        </>
    )
}