import { Link } from "react-router-dom";
import "./Home.css";
import "./Products.css";

function Products() {
  const products = [
    {
      id: 1,
      name: "Burgundy Lipstick",
      price: "$18.00",
      image: "/images/lipstick.jpeg",
      imageClass: "lipstick-image",
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
      imageClass: "foundation-image",
    },
    {
      id: 5,
      name: "Makeup Primer",
      price: "$19.00",
      image: "/images/primer.jpeg",
    },
    {
      id: 6,
      name: "Perfect Concealer",
      price: "$17.00",
      image: "/images/concealer.jpeg",
    },
    {
      id: 7,
      name: "Eyeshadow Palette",
      price: "$25.00",
      image: "/images/Eyeshadow.jpeg",
    },
    {
      id: 8,
      name: "Lip Gloss",
      price: "$15.00",
      image: "/images/lipgloss.jpeg",
    },
    {
      id: 9,
      name: "Lip Liner",
      price: "$12.00",
      image: "/images/lipliner.jpeg",
    },
    {
      id: 10,
      name: "Loose Powder",
      price: "$21.00",
      image: "/images/loosepowder.jpeg",
    },
  ];

  return (
    <div className="products-page">

      <section className="products-header text-center">
        <p className="hero-subtitle">BEAUTY & ELEGANCE</p>
        <h1 >Our Products</h1>
        <p>Discover our complete makeup collection.</p>
      </section>

      <section className="products-section container-fluid">

        <div className="row g-4">
          {products.map((product) => (
            <div className="col-12 col-sm-6 col-lg-3" key={product.id}>
              <div className="card product-card h-100">

                <img
                  src={product.image}
                  className={`product-image ${product.imageClass || ""}`}
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

      </section>
    </div>
  );
}

export default Products;