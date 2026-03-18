import { useEffect, useState } from "react";
import type { Product } from "../shared/types/Product";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

<p>Antal produkter: {products.length}</p>

  /*useEffect(() => {
  const fakeProducts: Product[] = [
    {
      public_id: "P-1001",
      name: "Laptop",
      description: "God computer",
      price: 399,
      stock: 15n,
      currency_name: "DKK",
      currency_symbol: "kr",
      category_id: 1n,
    },
    {
      public_id: "P-1002",
      name: "Mus",
      description: "Gaming mus",
      price: 249,
      stock: 8n,
      currency_name: "DKK",
      currency_symbol: "kr",
      category_id: 2n,
    },
  ];

  setProducts(fakeProducts);
}, []);*/

useEffect(() => {
  fetch("http://localhost:3000/api/Products")
    .then(async (res) => {
      console.log("STATUS:", res.status);
      const data = await res.json();
      console.log("DATA FRA API:", data);
      setProducts(data);
    })
    .catch((err) => {
      console.error("Fejl ved hentning af produkter:", err);
    });
}, []);

  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Topbar />

        <section className="products-page">
          <h1 className="page-title">Products</h1>

          <div className="filter-bar">
            <button className="filter-button">Sort</button>
            <button className="filter-button">Category</button>
            <button className="filter-button">Price</button>
          </div>

          <section className="products-table">
            <div className="table-header">
              <span>Product id</span>
              <span>Category</span>
              <span>Price</span>
              <span>Stock</span>
              <span>Status</span>
              <span>Action</span>
            </div>

            {products.map((product) => (
              <div className="table-row" key={product.id}>
                <span>{product.id}</span>
                <span>{product.category}</span>
                <span>{product.price}</span>
                <span>{Number(product.stock)}</span>
                <span>
                  {Number(product.stock) === 0
                    ? "Out of Stock"
                    : Number(product.stock) < 10
                    ? "Low Stock"
                    : "In Stock"}
                </span>
                <button
                  className="action-button"
                  onClick={() => setSelectedProduct(product)}
                >
                  →
                </button>
              </div>
            ))}
          </section>
        </section>

        {selectedProduct && (
          <div className="modal-overlay">
            <div className="product-modal">
              <button
                className="back-button"
                onClick={() => setSelectedProduct(null)}
              >
                ←
              </button>

              <h2 className="modal-title">Product details</h2>

              <div className="modal-card">
                <div className="modal-table-header">
                  <span>Product id</span>
                  <span>Category</span>
                  <span>Price</span>
                  <span>Stock</span>
                  <span>Status</span>
                </div>

                <div className="modal-table-row">
                  <span>{selectedProduct.id}</span>
                  <span>{selectedProduct.category}</span>
                  <span>{selectedProduct.price}</span>
                  <span>{Number(selectedProduct.stock)}</span>
                  <span>
                    {Number(selectedProduct.stock) === 0
                      ? "Out of Stock"
                      : Number(selectedProduct.stock) < 10
                      ? "Low Stock"
                      : "In Stock"}
                  </span>
                </div>
              </div>

              <div className="modal-card">
                <h3 className="modal-subtitle">Additional details</h3>

                <div className="modal-table-header details-grid">
                  <span>Name</span>
                  <span>Description</span>
                  <span>Currency</span>
                  <span>Category id</span>
                </div>

                <div className="modal-table-row details-grid">
                  <span>{selectedProduct.name}</span>
                  <span>{selectedProduct.description}</span>
                  {/*<span>{selectedProduct.currency_name}</span>
                  <span>{selectedProduct.category_id}</span>*/}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default ProductsPage;