import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./ProductsDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Burgundy Lipstick",
      price: "$18.00",
      image: "/images/lipstick.jpeg",
      category: "Lips",
      description: "Add elegance to your look with this beautiful burgundy lipstick. Its creamy texture glides smoothly onto the lips, leaving a rich and attractive color.",
      features: ["Rich burgundy color", "Creamy texture", "Easy application"],
    },
    {
      id: 2,
      name: "Cream Blush",
      price: "$20.00",
      image: "/images/blush.jpeg",
      category: "Face",
      description: "Give your cheeks a fresh and natural glow with this creamy blush. Its soft texture blends easily into the skin.",
      features: ["Natural rosy finish", "Easy to blend", "Lightweight feel"],
    },
    {
      id: 3,
      name: "Volume Mascara",
      price: "$16.00",
      image: "/images/mascara.jpeg",
      category: "Eyes",
      description: "Enhance your lashes with beautiful volume and definition for a fuller and more expressive look.",
      features: ["Adds volume", "Defines lashes", "Fuller-looking effect"],
    },
    {
      id: 4,
      name: "Liquid Foundation",
      price: "$24.00",
      image: "/images/fondation.jpeg",
      category: "Face",
      description: "Create a smooth and even-looking complexion with this blendable liquid foundation.",
      features: ["Buildable coverage", "Smooth finish", "Easy to blend"],
    },
    {
      id: 5,
      name: "Makeup Primer",
      price: "$19.00",
      image: "/images/primer.jpeg",
      category: "Face",
      description: "Prepare your skin for makeup with this lightweight primer that creates a smoother-looking base.",
      features: ["Smooth makeup base", "Lightweight texture", "Easy application"],
    },
    {
      id: 6,
      name: "Perfect Concealer",
      price: "$17.00",
      image: "/images/concealer.jpeg",
      category: "Face",
      description: "Help conceal dark circles and the appearance of imperfections with this creamy and blendable concealer.",
      features: ["Buildable coverage", "Covers dark circles", "Natural-looking finish"],
    },
    {
      id: 7,
      name: "Eyeshadow Palette",
      price: "$25.00",
      image: "/images/Eyeshadow.jpeg",
      category: "Eyes",
      description: "Create beautiful eye looks with elegant shades suitable for everyday makeup and special occasions.",
      features: ["Beautiful shades", "Easy to blend", "Versatile looks"],
    },
    {
      id: 8,
      name: "Lip Gloss",
      price: "$15.00",
      image: "/images/lipgloss.jpeg",
      category: "Lips",
      description: "Give your lips a beautiful glossy finish with a smooth texture and an attractive shine.",
      features: ["Glossy finish", "Comfortable feel", "Enhances lip color"],
    },
    {
      id: 9,
      name: "Lip Liner",
      price: "$12.00",
      image: "/images/lipliner.jpeg",
      category: "Lips",
      description: "Define and shape your lips with this smooth lip liner. Perfect for pairing with your favorite lipstick or gloss.",
      features: ["Precise definition", "Smooth application", "Perfect lip outline"],
    },
    {
      id: 10,
      name: "Loose Powder",
      price: "$21.00",
      image: "/images/loosepowder.jpeg",
      category: "Face",
      description: "Set your makeup with this lightweight loose powder that helps reduce excess shine and gives a smooth appearance.",
      features: ["Helps set makeup", "Reduces shine", "Soft matte finish"],
    },
  ];

  const product = products.find((item) => item.id === Number(id));

  const handleAddToCart = () => {
    toast.success(`${product.name} added to cart!`);
  };

  if (!product) {
    return (
      <div className="product-not-found text-center">
        <h2>Product Not Found</h2>
        <Link to="/products" className="btn shop-btn">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="product-details-page">
      <div className="container">

        <div className="details-breadcrumb">
          <Link to="/">Home</Link>
          <span> / </span>
          <Link to="/products">Products</Link>
          <span> / {product.name}</span>
        </div>

        <div className="row align-items-center g-5">

          <div className="col-12 col-lg-6">
            <div className="details-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="details-image"
              />
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="details-content">

              <p className="details-category">
                {product.category}
              </p>

              <h1>{product.name}</h1>

              <p className="details-price">
                {product.price}
              </p>

              <div className="details-divider"></div>

              <h4>Product Description</h4>
              <p className="details-description">
                {product.description}
              </p>

              <h4>Why You'll Love It</h4>

              <ul className="details-features">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <button
                className="btn add-cart-btn"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>

              <div className="details-back">
                <Link to="/products">
                  ← Continue Shopping
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
