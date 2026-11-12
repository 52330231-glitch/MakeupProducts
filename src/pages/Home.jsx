import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const products = [
    {
      id: 1,
      name: "Burgundy Lipstick",
      price: "$18.00",
      image: "/images/lipstick.jpeg",
      imageclass:"lipstick-image",
    },
    {
      id: 2,
      name: "Cream Blush",
      price: "$20.00",
      image: "/images/blush.jpeg",
    },
    {
      id: 3,
      name: "Volume Mascara",
      price: "$16.00",
      image: "/images/mascara.jpeg",
    },
    {
      id: 4,
      name: "Liquid Foundation",
      price: "$24.00",
      image: "/images/fondation.jpeg",
      imageclass:"foundation-image",
    },
  ];

  return (
    <div className="home-page">

      <section className="hero-section container-fluid">
        <div className="row align-items-center g-5">

          <div className="col-12 col-lg-5">
            <div className="hero-content">
              <p className="hero-subtitle">
                BEAUTY & ELEGANCE
              </p>

              <h1>Discover Your Beauty</h1>

              <p className="hero-description">
                Enhance your natural beauty with our carefully
                selected makeup collection.
              </p>

              <Link to="/products" className="btn btn-lg shop-btn">
                Shop Now
              </Link>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <img
              src="/images/makeup.jpeg"
              alt="Luxury Makeup Collection"
              className="hero-image"
            />
          </div>

        </div>
      </section>

      <section className="best-sellers container-fluid">
        <div className="section-heading text-center">
          <h2>Our Best Sellers</h2>
          <p>Discover the products everyone loves.</p>
        </div>

        <div className="row g-4">
          {products.map((product) => (
            <div className="col-12 col-sm-6 col-lg-3" key={product.id}>
              <div className="card product-card h-100">

                <img
                  src={product.image}
                  className={'product-image${product.imageClass}'}
                  alt={product.name}
                />

                <div className="card-body text-center">
                  <h5 className="card-title">
                    {product.name}
                  </h5>

                  <p className="product-price">
                    {product.price}
                  </p>

                  <Link
                    to={`/products/${product.id}`}
                    className="btn details-btn"
                  >
                    View Details
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="text-center view-all">
          <Link to="/products" className="btn shop-btn">
            View All Products
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Home;