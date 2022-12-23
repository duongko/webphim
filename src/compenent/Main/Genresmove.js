import { useEffect, useState } from "react"
import { GetDiscovery } from "../../apiservice/api"

const Genresmove = (props) => {
    const { GenresId, typemove } = props

    const [Move, setmove] = useState()


    useEffect(() => {

        GetGenresmove()


    }, [GenresId, typemove])





    const GetGenresmove = async () => {


        let res = await GetDiscovery(GenresId, typemove)

        console.log("res discovery:", res)
        setmove(res.data.results)
    }


    return (
        <>
            <div className="movies-grid">

                {Move && Move.length > 0
                    ? Move.slice(0, 18).map((value, index) => {

                        if (value.poster_path != null)
                            // let date = moment(value.release_date).year()

                            return (
                                <div className="movie-card" key={index}>

                                    <div className="card-head">
                                        <img src={`https://image.tmdb.org/t/p/w342${value.poster_path || value.backdrop_path}`} alt="" className="card-img" />



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
                                            <span className="year"></span>
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
export default Genresmove