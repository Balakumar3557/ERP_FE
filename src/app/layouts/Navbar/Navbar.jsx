import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';

import adminData from '../../../assets/data/admin_sidebar.json';
import staffData from '../../../assets/data/staff_sidebar.json';
import studentData from '../../../assets/data/student_sidebar.json';

function getCurrentMenuTitle(path, data) {
  for (const menuItem of data) {
    if (menuItem.link && menuItem.link === path) {
      return menuItem.title;
    }
    if (menuItem.subMenu) {
      for (const subItem of menuItem.subMenu) {
        if (subItem.link === path) {
          return subItem.title;
        }
        if (subItem.subMenu) {
          for (const subSubItem of subItem.subMenu) {
            if (subSubItem.link === path) {
              return subSubItem.title;
            }
          }
        }
      }
    }
  }
  return null;
}

function Navbar({ toggleSidebar }) {
  const history = useNavigate(); // Used to programmatically navigate
  const location = useLocation();

  const [userRole, setUserRole] = useState(null); // State to hold the user role
  const currentPath = location.pathname;

  // Function to get the correct sidebar data based on the user role
  const getSidebarData = () => {
    switch (userRole) {
      case 'Admin':
        return adminData;
      case 'Staff':
        return staffData;
      case 'Student':
        return studentData;
      default:
        return [];
    }
  };

  const sidebarData = getSidebarData();

  // Get the current title for the breadcrumb
  const title = getCurrentMenuTitle(currentPath, sidebarData);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUserRole(user.role);
    }
  }, []);

  const handleSignIn = (event) => {
    event.preventDefault();
    // Redirect to sign-in page or toggle sign-in modal
    history('/signin');  // Redirect to the sign-in page (example)
  };

  return (
    <nav className="navbar navbar-main navbar-expand-lg px-0 mx-3 shadow-none border-radius-xl" id="navbarBlur" data-scroll="false">
      <div className="container-fluid py-1 px-1">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li className="breadcrumb-item text-sm">
              <Link className="opacity-5 text-white" to="/adm">Master</Link>
            </li>
            {title && (
              <li className="breadcrumb-item text-sm text-white active" aria-current="page">
                {title}
              </li>
            )}
          </ol>
        </nav>
        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
        <div className="d-flex justify-content-between align-items-center w-100">
            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                <div className="input-group">
                <button 
                    onClick={handleSignIn} 
                    className="btn btn-link nav-link text-white font-weight-bold px-0 mt-2" 
                    aria-label="Sign In"
                    style={{ padding: 0 }}
                >
                    <i className="fa fa-user me-sm-1"></i>
                    <span className="d-sm-inline d-none ml-4">Sign In</span>
                </button>
                </div>
            </div>
            <ul className="navbar-nav justify-content-end">
                {/* Toggler for Sidebar in Mobile View */}
                <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                <button 
                    onClick={toggleSidebar} 
                    className="nav-link text-white p-0" 
                    aria-label="Toggle Sidebar" 
                    style={{ cursor: "pointer", background: "none", border: "none" }}
                >
                    <div className="sidenav-toggler-inner">
                    <i className="sidenav-toggler-line bg-white"></i>
                    <i className="sidenav-toggler-line bg-white"></i>
                    <i className="sidenav-toggler-line bg-white"></i>
                    </div>
                </button>
                </li>
            </ul>
            </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
