const CategorySection = (props) => {

    return (
        <section class="category" id="category">

            <h2 class="section-heading">Category</h2>

            <div class="category-grid">

                <div class="category-card">
                    <img src="../images/action.jpg" alt="" class="card-img" />
                    <div class="name">Action</div>
                    <div class="total">100</div>
                </div>

                <div class="category-card">
                    <img src="../images/comedy.jpg" alt="" class="card-img" />
                    <div class="name">Comedy</div>
                    <div class="total">50</div>
                </div>

                <div class="category-card">
                    <img src="../images/thriller.webp" alt="" class="card-img" />
                    <div class="name">Thriller</div>
                    <div class="total">20</div>
                </div>

                <div class="category-card">
                    <img src="../images/horror.jpg" alt="" class="card-img" />
                    <div class="name">Horror</div>
                    <div class="total">80</div>
                </div>

                <div class="category-card">
                    <img src="../images/adventure.jpg" alt="" class="card-img" />
                    <div class="name">Adventure</div>
                    <div class="total">100</div>
                </div>

                <div class="category-card">
                    <img src="../images/animated.jpg" alt="" class="card-img" />
                    <div class="name">Animated</div>
                    <div class="total">50</div>
                </div>

                <div class="category-card">
                    <img src="../images/crime.jpg" alt="" class="card-img" />
                    <div class="name">Crime</div>
                    <div class="total">20</div>
                </div>

                <div class="category-card">
                    <img src="../images/sci-fi.jpg" alt="" class="card-img" />
                    <div class="name">SCI-FI</div>
                    <div class="total">80</div>
                </div>

            </div>

        </section>

    )
}

export default CategorySection