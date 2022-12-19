import moment from "moment"
import { useEffect, useState } from "react"
import { Getmovefeatured } from "../../apiservice/api"


const Featured = (props) => {

    const [MoveSection, setMoveSection] = useState([])

    useEffect(() => {


        movefeatured()
    }, [])

    const movefeatured = async () => {
        let res = await Getmovefeatured()

        setMoveSection(res.data.results)



    }





    return (




        <>
            <div className="movies-grid">

                {MoveSection && MoveSection.length > 0
                    ? MoveSection.slice(0, 18).map((value, index) => {


                        let date = moment(value.release_date).year()

                        return (
                            <div className="movie-card" key={index}>

                                <div className="card-head">
                                    <img src={`https://image.tmdb.org/t/p/w342${value.poster_path}`} alt="" className="card-img" />



                                    <div className="card-overlay">

                                        <div className="bookmark">
                                            <ion-icon name="bookmark-outline"></ion-icon>
                                        </div>

                                        <div className="rating">
                                            <ion-icon name="star-outline"></ion-icon>
                                            <span>{value.vote_average}</span>
                                        </div>

                                        <div className="play">
                                            <ion-icon name="play-circle-outline"></ion-icon>
                                        </div>

                                    </div>
                                </div>

                                <div className="card-body">
                                    <h3 className="card-title">{value.title}</h3>

                                    <div className="card-info">
                                        <span className="genre">Action/Comedy</span>
                                        <span className="year">{date}</span>
                                    </div>
                                </div>

                            </div>


                        )
                    })

                    :
                    <></>

                }

            </div>

            {/* <!--
        - load more button
      --> */}

        </>


    )
}

export default Featured