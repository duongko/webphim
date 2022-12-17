const Header = (props) => {
    return (
        <header className="">
            <div className="navbar">

                {/* <!--
          - menu button for small screen
        --> */}
                <button className="navbar-menu-btn">
                    <span className="one"></span>
                    <span className="two"></span>
                    <span className="three"></span>
                </button>


                <a href="#" className="navbar-brand">
                    <img src="../images/logo.png" alt="" />
                </a>

                {/* <!--
          - navbar navigation
        --> */}

                <nav className="">
                    <ul className="navbar-nav">

                        <li> <a href="#" className="navbar-link">Home</a> </li>
                        <li> <a href="#category" className="navbar-link">Category</a> </li>
                        <li> <a href="#live" className="navbar-link  indicator">LIVE</a> </li>

                    </ul>
                </nav>

                {/* <!--
          - search and sign-in
        --> */}

                <div className="navbar-actions">

                    <form action="#" className="navbar-form">
                        <input type="text" name="search" placeholder="I'm looking for..." className="navbar-form-search" />

                        <button className="navbar-form-btn">
                            <ion-icon name="search-outline"></ion-icon>
                        </button>

                        <button className="navbar-form-close">
                            <ion-icon name="close-circle-outline"></ion-icon>
                        </button>
                    </form>


                    {/* <!--
            - search button for small screen
          --> */}

                    <button className="navbar-search-btn">
                        <ion-icon name="search-outline"></ion-icon>
                    </button>

                    <a href="#" className="navbar-signin">
                        <span>Sign in</span>
                        <ion-icon name="log-in-outline"></ion-icon>
                    </a>

                </div>

            </div>
        </header>

    )

}
export default Header