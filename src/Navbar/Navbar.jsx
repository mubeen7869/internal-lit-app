import { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import Userinfo from "../Userinfo/Userinfo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export default function MyNavbar() {
  const [profilevisible, setProfileVisible] = useState(false);
  const navigate = useNavigate();

  function handleProfile() {
    setProfileVisible(!profilevisible);
  }

  function handleHrLap() {
    navigate("/home");
  }

  // function handleFresherManagement() {
  //   navigate("/fresher-management");
  // }

  // function handleExperienceManagement() {
  //   navigate("/experience-management");
  // }

  function handleEmployee() {
    // Handle navigation or other actions for the "Employee" dropdown
  }
  function handleRegistration() {
      navigate("/registration");
    }

  function handleFinance() {
    // Handle navigation or other actions for the "Finance" dropdown
  }

  function handleAsset() {
    // Handle navigation or other actions for the "Asset" dropdown
  }

  return (
    <>
      <Navbar bg="" expand="lg">
        <Navbar.Brand onClick={handleHrLap}>
          <img src="image/LIT.jpg" alt="logo" className="img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="HR Lap" id="hr-lap-dropdown">
              <NavDropdown title="Vender Lap" id="vender-lap-dropdown">
                {/* <NavDropdown.Item onClick={handleFresherManagement}>
                  Fresher Management
                </NavDropdown.Item> */}
                {/* <NavDropdown title="Fresher Management" id="fresher-management-dropdown"> */}
                <NavDropdown.Item href="#">Registration</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Search</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Management</NavDropdown.Item>
              <NavDropdown.Divider />
              {/* </NavDropdown> */}
                {/* <NavDropdown.Item onClick={handleExperienceManagement}>
                  Experience Management
                </NavDropdown.Item> */}
                
              </NavDropdown>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Client Lap</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Internship Lap</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="Employee Lap" id="employee-lap-dropdown">
            <NavDropdown.Item href="#" onClick={handleRegistration}>Registration</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Search</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Management</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Finance Lap" id="finance-lap-dropdown">
            <NavDropdown.Item href="#">Invoice Registration</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Invoice Search</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Invoice Management</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Asset Lap" id="asset-lap-dropdown">
            <NavDropdown.Item href="#">Registration</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Search</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Management</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="CO-W Lap" id="co-w-lap-dropdown">
            <NavDropdown.Item href="#">Registration</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Search</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Management</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="IT Lap" id="IT-lap-dropdown">
            <NavDropdown.Item href="#">Registration</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Search</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Management</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div className="userInfo">
          <FaUserCircle className="user_icon" onClick={handleProfile} />
        </div>
      </Navbar>
      <div className="usrlogo">{profilevisible && <Userinfo />}</div>
    </>
  );
}
