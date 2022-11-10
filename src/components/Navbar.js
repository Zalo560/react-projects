import "./Navbar.css";

let Navbar = () => {
  return (
    <div className="navbar">
      <h1>Money Moves</h1>
      <div>
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