function ProductCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Price: Rs. {props.price}</p>
    </div>
  );
}

function App() {
  return (
    <main>
      <h1>Our Products</h1>
      <div className="products">
        <ProductCard name="Laptop" price={50000} />
        <ProductCard name="Phone" price={20000} />
        <ProductCard name="Headphones" price={1500} />
        <ProductCard name="Keyboard" price={800} />
      </div>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
