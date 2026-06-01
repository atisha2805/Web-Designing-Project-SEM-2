import { useState } from "react";
import "./App.css";

function App() {

  const [page, setPage] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const products = [

    {
      id:1,
      name:"Luxury Matte Lipstick",
      price:899,
      rating:4.8,
      category:"Lipstick",
      sale:"25% OFF",
      image:"https://images.meesho.com/images/products/469132017/g7rs7_512.avif?width=512&height=512&quality=75"
    },

    {
      id:2,
      name:"Glow Foundation",
      price:1299,
      rating:4.9,
      category:"Face",
      sale:"20% OFF",
      image:"https://images.meesho.com/images/products/919831151/j54o9_512.avif?width=512&height=512&quality=75"
    },

    {
      id:3,
      name:"Eyeshadow Palette",
      price:1499,
      rating:4.7,
      category:"Eyes",
      sale:"30% OFF",
      image:"https://rukminim2.flixcart.com/image/1280/1280/xif0q/eye-shadow/r/i/i/36-nude-eyeshadow-palette-we-ensign-original-imahfcunyggjrw7s.jpeg?q=90"
    },

    {
      id:4,
      name:"Lip and Cheek Tint",
      price:699,
      rating:4.5,
      category:"Face",
      sale:"15% OFF",
      image:"https://images.meesho.com/images/products/382537734/lkbw2_512.avif?width=512"
    },

    {
      id:5,
      name:"Waterproof Mascara",
      price:999,
      rating:4.8,
      category:"Eyes",
      sale:"18% OFF",
      image:"https://images.meesho.com/images/products/951912215/wd2rd_512.avif?width=512&height=512&quality=75"
    },

    {
      id:6,
      name:"Hydrating Primer",
      price:1099,
      rating:4.6,
      category:"Face",
      sale:"22% OFF",
      image:"https://images.meesho.com/images/products/940432044/qrqhs_512.avif?width=512&height=512&quality=75"
    },

    {
      id:7,
      name:"Beauty Blender",
      price:499,
      rating:4.5,
      category:"Tools",
      sale:"10% OFF",
      image:"https://images.meesho.com/images/products/955060326/be5fm_512.avif?width=512&height=512&quality=75"
    },

    {
      id:8,
      name:"Liquid Highlighter",
      price:1199,
      rating:4.9,
      category:"Face",
      sale:"28% OFF",
      image:"https://images.meesho.com/images/products/31012552/2juah_512.avif?width=512&height=512&quality=75"
    },

    {
      id:9,
      name:"Vitamin C Serum",
      price:1599,
      rating:4.8,
      category:"Skincare",
      sale:"35% OFF",
      image:"https://images.meesho.com/images/products/440419213/rdmyk_512.avif?width=512&height=512&quality=75"
    },

    {
      id:10,
      name:"Nude Lip Gloss",
      price:799,
      rating:4.6,
      category:"Lipstick",
      sale:"15% OFF",
      image:"https://images.meesho.com/images/products/409583804/iry69_512.avif?width=512&height=512&quality=75"
    },

    {
      id:11,
      name:"Compact Face Powder",
      price:1899,
      rating:4.9,
      category:"Face",
      sale:"25% OFF",
      image:"https://images.meesho.com/images/products/544010689/4l8zc_512.avif?width=512&height=512&quality=75"
    },

    {
      id:12,
      name:"Makeup Brush Set",
      price:1399,
      rating:4.7,
      category:"Tools",
      sale:"20% OFF",
      image:"https://images.meesho.com/images/products/789807453/l5s2c_512.avif?width=512&height=512&quality=75"
    },

    {
      id:13,
      name:"Collagen Night Wrapping Mask",
      price:1799,
      rating:3.8,
      category:"Skincare",
      sale:"27% OFF",
      image:"https://images.meesho.com/images/products/640609641/m4jxa_512.avif?width=512&height=512&quality=75"
    },

    {
      id:14,
      name:"Face Wash",
      price:899,
      rating:4.3,
      category:"Skincare",
      sale:"32% OFF",
      image:"https://images.meesho.com/images/products/437269354/yzmp8_512.avif?width=512&height=512&quality=75"
    },

    {
      id:15,
      name:"Sketch Eyeliner",
      price:699,
      rating:4.5,
      category:"Eyes",
      sale:"18% OFF",
      image:"https://images.meesho.com/images/products/47437653/o3hib_512.avif?width=512&height=512&quality=75"
    },

    {
      id:16,
      name:"Lip Balm with SPF",
      price:799,
      rating:4.6,
      category:"Lipstick",
      sale:"10% OFF",
      image:"https://images.meesho.com/images/products/437003684/2wlkf_512.avif?width=512&height=512&quality=75"
    },

    {
      id:17,
      name:"Setting Spray",
      price:1099,
      rating:4.7,
      category:"Face",
      sale:"22% OFF",
      image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRge-8pzjn4UzEfLteGlHjCjNGZESh12duMq5c-A86DjupyTcoypUEQhFRY-BHZcoKrZHx8dV3PGjGFgN-04rpxAYneKISwcHdFKecbdWA"
    },

    {
      id:18,
      name:"Eyelash Curler",
      price:1999,
      rating:4.5,
      category:"Tools",
      sale:"15% OFF",
      image:"https://m.media-amazon.com/images/I/61beP11FakL._SX679_.jpg"
    }


  ];

  const addToCart = (product) => {

    const existing = cart.find(
      item => item.id === product.id
    );

    if(existing){

      setCart(
        cart.map(item =>
          item.id === product.id
          ? {
              ...item,
              quantity:item.quantity + 1
            }
          : item
        )
      );

    }else{

      setCart([
        ...cart,
        {
          ...product,
          quantity:1
        }
      ]);
    }
  };

  const increaseQty = (id) => {

    setCart(
      cart.map(item =>
        item.id === id
        ? {
            ...item,
            quantity:item.quantity + 1
          }
        : item
      )
    );
  };

  const decreaseQty = (id) => {

    setCart(
      cart
      .map(item =>
        item.id === id
        ? {
            ...item,
            quantity:item.quantity - 1
          }
        : item
      )
      .filter(item => item.quantity > 0)
    );
  };

  const getQuantity = (id) => {
    const item = cart.find(
      item => item.id === id
    );

    return item ? item.quantity : 0;
  };

  const toggleWishlist = (product) => {

    const exists = wishlist.find(
      item => item.id === product.id
    );

    if(exists){

      setWishlist(
        wishlist.filter(
          item => item.id !== product.id
        )
      );

    }else{

      setWishlist([
        ...wishlist,
        product
      ]);
    }
  };

  const total = cart.reduce(
    (acc,item) =>
      acc + item.price * item.quantity,
    0
  );

  const filteredProducts =
    products.filter(product => {

      const matchSearch =
        product.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        );

      const matchCategory =
        category === "All"
        ||
        product.category === category;

      return (
        matchSearch &&
        matchCategory
      );
    });

  return (

    <div
      className={
        darkMode
        ? "app dark"
        : "app"
      }
    >      <nav className="navbar">

        <h2
          className="logo"
          onClick={() => setPage("home")}
        >
          ✨ GlamShine Beauty
        </h2>

        <div className="nav-links">

          <button
            onClick={() => setPage("home")}
          >
            Home
          </button>

          <button
            onClick={() => setPage("shop")}
          >
            Shop
          </button>

          <button
            onClick={() => setPage("cart")}
          >
            Cart (
            {
              cart.reduce(
                (acc,item)=>
                acc + item.quantity,
                0
              )
            }
            )
          </button>

          <button
            onClick={() => setPage("checkout")}
          >
            Checkout
          </button>

          <button
            onClick={() => setPage("login")}
          >
            Login
          </button>

          <button
            className="theme-btn"
            onClick={() =>
              setDarkMode(!darkMode)
            }
          >
            {
              darkMode
              ? "☀️"
              : "🌙"
            }
          </button>

        </div>

      </nav>

      {
        page === "home"
        &&

        <>
          <section className="hero">

            <div className="hero-content">

              <h1>
                Discover Beauty
                Beyond Limits
              </h1>

              <p>
                Premium cosmetics crafted
                for confidence and elegance.
              </p>

              <button
                onClick={() =>
                  setPage("shop")
                }
              >
                Shop Now
              </button>

            </div>

          </section>

          <section className="featured">

            <h2>
              Featured Products
            </h2>

            <div className="products">

              {
                products
                .slice(0,6)
                .map(product => (

                  <div
                    key={product.id}
                    className="card"
                  >

                    <span className="sale">
                      {product.sale}
                    </span>

                    <span
                      className="wishlist"
                      onClick={() =>
                        toggleWishlist(product)
                      }
                    >
                      {
                        wishlist.find(
                          item =>
                          item.id === product.id
                        )
                        ? "❤️"
                        : "🤍"
                      }
                    </span>

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <h3>
                      {product.name}
                    </h3>

                    <p className="rating">
                      ⭐ {product.rating}
                    </p>

                    <h4>
                      ₹{product.price}
                    </h4>

                    <button
                      onClick={() =>
                        addToCart(product)
                      }
                    >
                      Add To Cart
                      {
                        getQuantity(product.id) > 0
                        &&
                        ` (+${getQuantity(product.id)})`
                      }
                    </button>

                  </div>

                ))
              }

            </div>

          </section>

        </>
      }

      {
        page === "shop"
        &&

        <div className="shop-page">

          <div className="filters">

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e)=>
                setSearch(e.target.value)
              }
            />

            <select
              value={category}
              onChange={(e)=>
                setCategory(e.target.value)
              }
            >
              <option>
                All
              </option>

              <option>
                Lipstick
              </option>

              <option>
                Face
              </option>

              <option>
                Eyes
              </option>

              <option>
                Skincare
              </option>

              <option>
                Tools
              </option>

            </select>

          </div>

          <div className="products">

            {
              filteredProducts.map(
                product => (

                <div
                  key={product.id}
                  className="card"
                >

                  <span className="sale">
                    {product.sale}
                  </span>

                  <span
                    className="wishlist"
                    onClick={() =>
                      toggleWishlist(product)
                    }
                  >
                    {
                      wishlist.find(
                        item =>
                        item.id === product.id
                      )
                      ? "❤️"
                      : "🤍"
                    }
                  </span>

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <h3>
                    {product.name}
                  </h3>

                  <p className="rating">
                    ⭐ {product.rating}
                  </p>

                  <h4>
                    ₹{product.price}
                  </h4>

                  <button
                    onClick={() =>
                      addToCart(product)
                    }
                  >
                    Add To Cart
                    {
                      getQuantity(product.id) > 0
                      &&
                      ` (+${getQuantity(product.id)})`
                    }
                  </button>

                </div>

              ))
            }

          </div>

        </div>
      }      {
        page === "cart"
        &&

        <div className="cart-page">

          <h1>
            Your Shopping Cart
          </h1>

          {
            cart.length === 0

            ?

            <h2>
              Your cart is empty 🛒
            </h2>

            :

            <>
              {
                cart.map(item => (

                  <div
                    className="cart-item"
                    key={item.id}
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <div className="cart-info">

                      <h3>
                        {item.name}
                      </h3>

                      <p>
                        ₹{item.price}
                      </p>

                      <div className="qty-box">

                        <button
                          onClick={() =>
                            decreaseQty(item.id)
                          }
                        >
                          -
                        </button>

                        <span>
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQty(item.id)
                          }
                        >
                          +
                        </button>

                      </div>

                    </div>

                  </div>

                ))
              }

              <div className="total-box">

                <h2>
                  Total: ₹{total}
                </h2>

                <button
                  className="checkout-btn"
                  onClick={() =>
                    setPage("checkout")
                  }
                >
                  Proceed To Checkout
                </button>

              </div>

            </>
          }

        </div>
      }

      {
        page === "login"
        &&

        <div className="login-container">

          <div className="login-card">

            <h1>
              Welcome Back ✨
            </h1>

            <p>
              Login to continue shopping
            </p>

            <input
              type="email"
              placeholder="Enter Email"
            />

            <input
              type="password"
              placeholder="Enter Password"
            />

            <button>
              Login
            </button>

            <p className="signup-text">
              New User?
              Create Account
            </p>

          </div>

        </div>
      }

      {
        page === "checkout"
        &&

        <div className="checkout-page">

          <div className="checkout-card">

            <h1>
              Checkout
            </h1>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email"
            />

            <input
              type="text"
              placeholder="Address"
            />

            <input
              type="text"
              placeholder="City"
            />

            <input
              type="text"
              placeholder="Pincode"
            />

            <h2>
              Amount Payable
            </h2>

            <h1>
              ₹{total}
            </h1>

            <button
              className="pay-btn"
            >
              Place Order
            </button>

          </div>

        </div>
      }

    </div>

  );

}

export default App;