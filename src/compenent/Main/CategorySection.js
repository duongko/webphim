import { useEffect, useState } from "react"
import { GetGene } from "../../apiservice/api"

const CategorySection = (props) => {

    const [category, setcategory] = useState([])

    useEffect(() => {

        GetmoveGene()
    }, [])





    const GetmoveGene = async () => {

        let res = await GetGene()


        setcategory(res.data.genres)

    }



    const imggene = (id) => {
        switch (id) {
            case 28: {

                return "../images/action.jpg"
                break;
            }
            case 12: {
                return "../images/adventure.jpg"
                break;
            }
            case 16: {
                return "../images/animated.jpg"
                break;
            }
            case 35: {
                return "../images/comedy.jpg"
                break;
            }
            case 80: {
                return "../images/crime.jpg"
                break;
            }
            case 99: {
                return "../images/horror.jpg"
                break;
            }
            case 18: {
                return "../images/sci-fi.jpg"
                break;
            }
            case 10751: {
                return "../images/thriller.webp"
                break;
            }
            default: {
                return "../images/comedy.jpg"

            }
        }
    }

    return (
        <section className="category" id="category">

            <h2 className="section-heading">Category</h2>

            <div className="category-grid">


                {category && category.length > 0

                    ?
                    category.slice(0, 8).map((value, index) => {


                        return (

                            <div className="category-card" key={index}>
                                <img src={imggene(value.id)} alt="" className="card-img" />
                                <div className="name">{value.name}</div>
                                <div className="total">100</div>
                            </div>



                        )
                    })

                    :
                    <></>
                }


            </div>

        </section>

    )
}

export default CategorySection