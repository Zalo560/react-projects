import "./Navbar.css";

let Navbar = (props) => {
  return (
    <div className="navbar">
      <h1>Money Moves</h1>
      <div className="navbar-buttons">
        <button>Home</button>
        <button>Summary</button>
        <button>Networth</button>
        <button>Help</button>
        <button>Settings</button>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;