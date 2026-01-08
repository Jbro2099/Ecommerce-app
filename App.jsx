import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

 // delete function
  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5000/api/products/${id}`, {
      method: "DELETE",
    });


 return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      <ul>
        {products.length === 0 && <li>No products yet.</li>}

        {products.map((product) => (
          <li key={product._id} style={{ marginBottom: "10px" }}>
            {product.name}

            <button
              onClick={() => deleteProduct(product._id)}
              style={{
                marginLeft: "10px",
                background: "red",
                color: "white",
                border: "none",
                padding: "4px 8px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

}
export default App;
