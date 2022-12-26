import React from 'react';
import { Player } from 'video-react';
import "../../../../node_modules/video-react/dist/video-react.css";



const Detailmove = (props) => {
    const { moveid, infomove } = props



    return (

        <>




            <article>



                <section className="movie-detail"
                // style={{


                //     "background": `url(https://image.tmdb.org/t/p/w342${infomove[3]}) no-repeat`,
                //     'background-size': 'cover',
                //     'background-position': 'center',
                //     'padding-top': '160px',
                //     'padding-bottom': '100px'

                // }}
                >

                    {/* <div className='background-che'></div> */}
                    <div className="container">

                        <figure className="movie-detail-banner">

                            <img src={`https://image.tmdb.org/t/p/w342${infomove[2]}`} alt="Free guy movie poster" />

                            <button className="play-btn">
                                <ion-icon name="play-circle-outline"></ion-icon>
                            </button>

                        </figure>

                        <div className="movie-detail-content">

                            <p className="detail-subtitle">New Episodes</p>

                            <h1 className="h1 detail-title">
                                {infomove[1]}
                            </h1>

                            <div className="meta-wrapper">

                                <div className="badge-wrapper">
                                    <div className="badge badge-fill">PG 13</div>

                                    <div className="badge badge-outline">HD</div>
                                </div>

                                <div className="ganre-wrapper">
                                    <a href="#">Comedy,</a>

                                    <a href="#">Action,</a>

                                    <a href="#">Adventure,</a>

                                    <a href="#">Science Fiction</a>
                                </div>

                                <div className="date-time">

                                    <div>
                                        <ion-icon name="calendar-outline"></ion-icon>

                                        <time datetime="2021">{infomove[4]}</time>
                                    </div>

                                    <div>
                                        <ion-icon name="time-outline"></ion-icon>

                                        <time datetime="PT115M">115 min</time>
                                    </div>

                                </div>

                            </div>

                            <p className="storyline">
                                {infomove[5]}
                            </p>

                            <div className="details-actions">

                                <button className="share">
                                    <ion-icon name="share-social"></ion-icon>

                                    <span>Share</span>
                                </button>

                                <div className="title-wrapper">
                                    <p className="title">Prime Video</p>

                                    <p className="text">Streaming Channels</p>
                                </div>

                                <button className="btn btn-primary">
                                    <ion-icon name="play"></ion-icon>

                                    <span>Watch Now</span>
                                </button>

                            </div>



                        </div>

                    </div>

                    <div >
                        <iframe width="330" height="200" src={`https://www.2embed.to/embed/tmdb/movie?id=${infomove[0]}&autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen > allow=”autoplay”</iframe>


                    </div>

                </section>










            </article>








        </>


    )
}
export default Detailmove