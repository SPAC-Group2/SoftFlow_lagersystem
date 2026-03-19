import { useEffect, useState } from "react";
import type { Product } from "../shared/types/Product";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState<boolean>(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/Products")
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Could not fetch products");
        }

        const data: Product[] = await res.json();
        setProducts(data);
      })
      .catch((err) => {
        console.error("Fejl ved hentning af produkter:", err);
        setProducts([]);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/api/Categories")
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Could not fetch categories");
        }

        const data = await res.json();

        if (Array.isArray(data)) {
          const cleanedCategories = data
            .map((item) => {
              if (typeof item === "string") {
                return item;
              }

              if (typeof item === "object" && item !== null) {
                return item.name || item.category || item.category_name || "";
              }

              return "";
            })
            .filter((item): item is string => item !== "");

          setCategories(cleanedCategories);
        } else if (Array.isArray(data.data)) {
          const cleanedCategories = data.data
            .map((item: unknown) => {
              if (typeof item === "string") {
                return item;
              }

              if (typeof item === "object" && item !== null) {
                const categoryItem = item as {
                  name?: string;
                  category?: string;
                  category_name?: string;
                };

                return (
                  categoryItem.name ||
                  categoryItem.category ||
                  categoryItem.category_name ||
                  ""
                );
              }

              return "";
            })
            .filter((item: string) => item !== "");

          setCategories(cleanedCategories);
        } else {
          setCategories([]);
        }
      })
      .catch((err) => {
        console.error("Fejl ved hentning af categories:", err);
        setCategories([]);
      });
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Topbar />

        <section className="products-page">
          <h1 className="page-title">Products</h1>

          <div className="filter-bar">
            <button className="filter-button" type="button">
              Sort
            </button>

            <div className="category-dropdown-wrapper">
              <button
                className="filter-button"
                type="button"
                onClick={() => setShowCategoryDropdown((prev) => !prev)}
              >
                {selectedCategory === "all" ? "Category" : selectedCategory}
              </button>

              {showCategoryDropdown && (
                <div className="dropdown-menu">
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => {
                      setSelectedCategory("all");
                      setShowCategoryDropdown(false);
                    }}
                  >
                    All categories
                  </button>

                  {categories.length > 0 ? (
                    categories.map((cat) => (
                      <button
                        key={cat}
                        className="dropdown-item"
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat);
                          setShowCategoryDropdown(false);
                        }}
                      >
                        {cat}
                      </button>
                    ))
                  ) : (
                    <div className="dropdown-empty">No categories found</div>
                  )}
                </div>
              )}
            </div>

            <button className="filter-button" type="button">
              Price
            </button>
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

            {filteredProducts.map((product) => (
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
                  type="button"
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
                type="button"
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
                </div>

                <div className="modal-table-row details-grid">
                  <span>{selectedProduct.name}</span>
                  <span>{selectedProduct.description}</span>
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