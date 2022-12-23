import { useEffect, useState } from "react"
import { GetGene } from "../../apiservice/api"
import { Link, Outlet, useNavigate } from "react-router-dom"
import Genresmove from "./Genresmove"

const MoveSection = (props) => {


  const naviga = useNavigate()
  const [Genres, setgenres] = useState([])
  const [GenresId, setGenresId] = useState("28")

  const [typemove, settypemove] = useState("popularity.desc")

  useEffect(() => {

    Getgenerslist()

  }, [GenresId])



  const Getgenerslist = async () => {
    let res = await GetGene()
    setgenres(res.data.genres)
  }



  console.log("id", GenresId)
  console.log("type:", typemove)

  return (


    <section className="movies">

      {/* <!--
        - filter bar
      --> */}
      <div className="filter-bar">

        <div className="filter-dropdowns">

          <select name="genre" className="genre" onChange={(event) => { setGenresId(event.target.value) }}>
            {/* <option value="all genres">All genres</option> */}

            {Genres && Genres.length > 0


              ? Genres.map((value, index) => {


                return (

                  <option value={value.id} key={value.id}



                  >{value.name}</option>

                )
              })
              :
              <></>


            }

          </select>

          <select name="year" className="year">
            <option value="all years">All the years</option>
            <option value="2022">2022</option>
            <option value="2020-2021">2020-2021</option>
            <option value="2010-2019">2010-2019</option>
            <option value="2000-2009">2000-2009</option>
            <option value="1980-1999">1980-1999</option>
          </select>

        </div>

        <div className="filter-radios">


          <input type="radio" name="grade" id="popular"
            value="popularity.desc"
            onChange={(e) => { settypemove(e.target.value) }}
            defaultChecked
          />
          <label htmlFor="popular"


          >Popular</label>

          <input type="radio" name="grade" id="featured"


            value="vote_average.desc"
            onChange={(e) => { settypemove(e.target.value) }}

          />
          <label htmlFor="featured"


          >Rating</label>



          <input type="radio" name="grade" id="newest" value="release_date.desc"
            onChange={(e) => { settypemove(e.target.value) }} />
          <label htmlFor="newest"



          >Upcoming</label>

          <div className="checked-radio-bg"></div>

        </div>

      </div>



      {/* <Outlet /> */}

      <Genresmove GenresId={GenresId} typemove={typemove} />

    </section>
  )
}
export default MoveSection;