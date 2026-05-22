  import { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://greim-design.myshopify.com/products.json?limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []));
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Greim Social Media Dashboard</h1>

      <p>
        Automatische Instagram- & Facebook-Posts für deinen Shopify-Shop.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "16px",
              padding: "16px",
            }}
          >
            <img
              src={product.images?.[0]?.src}
              alt={product.title}
              style={{
                width: "100%",
                borderRadius: "12px",
              }}
            />

            <h3>{product.title}</h3>

            <button
              style={{
                background: "#E1306C",
                color: "white",
                border: "none",
                padding: "12px 18px",
                borderRadius: "10px",
                marginRight: "10px",
                cursor: "pointer",
              }}
            >
              Instagram Post
            </button>

            <button
              style={{
                background: "#1877F2",
                color: "white",
                border: "none",
                padding: "12px 18px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Facebook Post
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
