import './index.css'
function Header() {
    return (
      <div className="header-container">
        <div className="app-header">
         <div className="title">
            CyWard
         </div>
         <nav>
        <ul>
            <li>Services</li>
            <li>Protection</li>
            <li>FAQ</li>
            <li>About Us</li>
            <li>Contact</li>
        </ul>
         </nav>
         <button className="header-sign-up-btn">
            Sign Up
         </button>
        </div>
      </div>
    );
  }
  
  export default Header;
  