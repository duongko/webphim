import { useEffect, useState } from "react"
import { Getmovepopular } from "../../apiservice/api"
import moment from 'moment'
import Popular from "./Popular"
import { Link, Outlet } from "react-router-dom"

const MoveSection = (props) => {

  return (


    <section className="movies">

      {/* <!--
        - filter bar
      --> */}
      <div className="filter-bar">

        <div className="filter-dropdowns">

          <select name="genre" className="genre">
            <option value="all genres">All genres</option>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="animal">Animal</option>
            <option value="animation">Animation</option>
            <option value="biography">Biography</option>
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

          <input type="radio" name="grade" id="featured" checked />
          <Link to="featured"><label htmlFor="featured">Featured</label></Link>

          <input type="radio" name="grade" id="popular" />
          <Link to="popular"><label htmlFor="popular">Popular</label></Link>

          <input type="radio" name="grade" id="newest" />
          <Link to="upcoming"><label htmlFor="newest">Upcoming</label></Link>

          <div className="checked-radio-bg"></div>

        </div>

      </div>



      <Outlet />

    </section>
  )
}
export default MoveSection;