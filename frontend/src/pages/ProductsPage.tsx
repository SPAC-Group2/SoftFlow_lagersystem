// Importerer sidebar komponent
import Sidebar from "../components/Sidebar";

// Products siden hvor produkter senere vil blive vist
function ProductsPage() {
  return (
    <div className="layout">
        <Sidebar />
        <main className="content">
            <h1>Products</h1>
        </main>
    </div>
  );
}

export default ProductsPage;
