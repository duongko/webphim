import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { keywordaction } from "../../redux/action/KeyAction"

const Header = (props) => {


    const [keyword, setkeyword] = useState('')
    const naviga = useNavigate()
    const [show, setshow] = useState(false)
    const [shownavbar, setshownavbar] = useState(false)
    const dispatch = useDispatch()
    const handleSearch = () => {

        const action = keywordaction(keyword)
        dispatch(action)
        naviga("/search")
        setshow(!show)
        window.scroll(0, 0)
        setkeyword('')

    }

    const handleclickhome = () => {
        setshownavbar(!shownavbar)
        naviga('/')
        window.scroll(0, 0)
    }

    return (
        <header className={`${shownavbar == false ? '' : "active"}`}>
            <div className="navbar">

                {/* <!--
          - menu button for small screen
        --> */}
                <button className={`navbar-menu-btn ${shownavbar == false ? '' : "active"} `}

                    onClick={() => { setshownavbar(!shownavbar) }}
                >
                    <span className="one"></span>
                    <span className="two"></span>
                    <span className="three"></span>
                </button>


                <Link to="/" className="navbar-brand">
                    <img src="../images/logo.png" alt="" />
                </Link>

                {/* <!--
          - navbar navigation
        --> */}

                <nav className={`${shownavbar == false ? '' : "active"}`}>
                    <ul className="navbar-nav">

                        <li> <span className="navbar-link" onClick={() => handleclickhome()}>Home</span> </li>
                        <li> <a href="#category" className="navbar-link">Category</a> </li>
                        <li> <a href="#live" className="navbar-link  indicator">LIVE</a> </li>

                    </ul>
                </nav>

                {/* <!--
          - search and sign-in
        --> */}

                <div className="navbar-actions">

                    <form action="#" className={`navbar-form ${show == false ? '' : "active"}`}>
                        <input
                            type="text" name="search"
                            placeholder="I'm looking for..."
                            value={keyword}
                            className="navbar-form-search"

                            onChange={(event) => { setkeyword(event.target.value) }}

                        />

                        <div className="navbar-form-btn"

                            onClick={() => { handleSearch() }}
                        >
                            <ion-icon name="search-outline"></ion-icon>
                        </div>

                        <div className="navbar-form-close"
                            onClick={() => setshow(!show)}

                        >
                            <ion-icon name="close-circle-outline"></ion-icon>
                        </div>
                    </form>


                    {/* <!--
            - search button for small screen
          --> */}

                    <button

                        className="navbar-search-btn"

                        onClick={() => setshow(!show)}
                    >
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