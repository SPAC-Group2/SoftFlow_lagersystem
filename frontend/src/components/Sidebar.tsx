import logo from "../assets/logo_sf.png";

// Sidebar komponent der indeholder navigationen til systemet
function Sidebar() {
    return (
        <aside className="sidebar">

            {/* Logo område */}
            <div className="sidebar-logo">
                <img src={logo} alt="StockFlow logo" className="logo" />
                <h2>StockFlow</h2>
            </div>

            {/* Navigations menu */}
            <nav className="sidebar-menu">
                <a href="#">Dashboard</a>
                <a href="#">Orders</a>
                <a href="#" className="active">Products</a>
                <a href="#">Customers</a>
                <a href="#">Warehouses</a>
                <a href="#">Profile</a>
                <a href="#">Settings</a>
                <a href="#">Log Out</a>
            </nav>
        </aside>
    );
}

export default Sidebar;