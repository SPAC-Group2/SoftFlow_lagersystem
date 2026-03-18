import dkFlag from "../assets/dk_flag.png";
import ukFlag from "../assets/uk_flag.png";

// Topbar komponent
function Topbar() {
    return (
        <header className="topbar">
            <div className="topbar-left">
                <img src={dkFlag} alt="Dansk flag" className="flag-icon" />
                <img src={ukFlag} alt="Engelsk flag" className="flag-icon" />

                {/* Søgefelt */}
                <input
                    type="text"
                    placeholder="Search"
                    className="search-input"
                />
            </div>

            {/* Højre side af topbaren */}
            <div className="topbar-right">
                <span className="user-text">Hello! Arez</span>
                <span className="user-avatar">AO</span>
            </div>
        </header>
    );
}  

export default Topbar;