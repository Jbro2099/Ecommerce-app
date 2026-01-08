
// Import React hooks from the React library
// useState to store component data (state)
// useEffect to run code when the component loads
import { useEffect, useState } from "react";


// Main React component
function App() {
  const [products, setProducts] = useState([]);

// Fetch products once when the component loads
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

// Update the UI by removing the deleted product from state
    setProducts(products.filter((product) => product._id !== id));
  };


 // Render the UI
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
