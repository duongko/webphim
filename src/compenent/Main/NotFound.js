const NotFound = () => {


    return (
        <>

            <section className="movies">

                {/* <!--
- filter bar
--> */}
                <div className="filter-bar">

                    <div className="filter-dropdowns">
                        Sorry! Page not found
                    </div>



                </div>



                {/* <Outlet /> */}


                <div className="error">
                    <div className="container-floud">
                        <div className="col-xs-12 ground-color text-center">
                            <div className="container-error-404">
                                <div className="clip"><div className="shadow"><span className="digit thirdDigit">4</span></div></div>
                                <div className="clip"><div className="shadow"><span className="digit secondDigit">0</span></div></div>
                                <div className="clip"><div className="shadow"><span className="digit firstDigit">4</span></div></div>
                                <div className="msg">OH!<span className="triangle"></span></div>
                            </div>
                            <h2 className="h1">Sorry! Page not found</h2>
                        </div>
                    </div>
                </div>





            </section>



        </>
    )
}
export default NotFound