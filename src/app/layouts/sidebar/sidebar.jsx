import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './sidebar.css';
import logo from '../../../assets/images/logo/IGT_logo1.png';
import adminData from '../../../assets/data/admin_sidebar.json';
import staffData from '../../../assets/data/staff_sidebar.json';
import studentData from '../../../assets/data/student_sidebar.json';

function Sidebar({ isOpen, toggleSidebar }) {
    const [expandedMenu, setExpandedMenu] = useState({});
    const [activeItem, setActiveItem] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUserRole(user.role);
        }
    }, []);

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

    const toggleSubMenu = (id, level) => {
        setExpandedMenu((prev) => ({
            ...prev,
            [level]: prev[level] === id ? null : id, // Toggle the submenu state
        }));
        // console.log(id);
        setActiveItem(id); // Set active item for navigation
    };

    const renderSubMenu = (subMenu, level = 1) => (
        <ul className={`sub-menu level-${level}`}>
            {subMenu.map(subItem => (
                <li
                    key={`${subItem.id}-${level}`} // Combine id and level for a unique key
                    className={`sub-menu-item text-sm level-${level}-item ${activeItem === subItem.id ? 'active-path' : ''}`}
                >
                    <div
                        className={`sub-menu-link ${activeItem === subItem.id ? 'active' : ''}`}
                        onClick={() => {
                            if (subItem.subMenu) {
                                toggleSubMenu(subItem.id, level); // Toggle the submenu
                            } else {
                                setActiveItem(subItem.id);
                                navigate(subItem.link); // Navigate if no further submenus
                            }
                        }}
                        aria-haspopup={!!subItem.subMenu}
                        aria-expanded={expandedMenu[level] === subItem.id}
                    >
                        {subItem.icon && <i className={`${subItem.icon} me-2`}></i>}
                        {subItem.title}
                        {subItem.subMenu && (
                            <i
                                className={`fas ${expandedMenu[level] === subItem.id ? 'fa-chevron-up rotate' : 'fa-chevron-down'}`}
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent parent onClick
                                    toggleSubMenu(subItem.id, level); // Toggle submenu for the current level
                                }}
                                style={{ marginLeft: 'auto', marginRight: '20px' }}
                            ></i>
                        )}
                    </div>
                    {subItem.subMenu && expandedMenu[level] === subItem.id && (
                        <ul className="nested-submenu">
                            {renderSubMenu(subItem.subMenu, level + 1)} {/* Render submenus recursively */}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <nav
            className={`sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 ${
                isOpen ? 'show' : 'hide'
            }`}
            id="sidenav-main"
        >
            <div className="sidenav-header">
                <div className="navbar-brand m-0" onClick={() => navigate('/adm')}>
                    <img src={logo} className="navbar-brand-img" alt="main_logo" />
                    <span className="ms-3">Dashboard</span>
                </div>
            </div>
            <hr className="horizontal dark mt-0" />
            <div className="sidenav-content">
                <div className="w-auto" id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        {sidebarData.map(item => (
                            <li
                                className={`nav-item my-1 ${activeItem === item.id ? 'active-path' : ''}`}
                                key={`${item.id}-main`} // Add `-main` suffix to make it unique
                            >
                                <div
                                    className={`nav-link ${expandedMenu[1] === item.id ? 'active' : ''}`}
                                    onClick={() => {
                                        if (item.subMenu) {
                                            toggleSubMenu(item.id, 1); // Toggle main menu
                                        } else {
                                            setActiveItem(item.id);
                                            navigate(item.link); // Navigate if no submenus
                                        }
                                    }}
                                    aria-haspopup={!!item.subMenu}
                                    aria-expanded={expandedMenu[1] === item.id}
                                    aria-controls={item.id}
                                >
                                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className={`${item.icon} text-sm opacity-10`}></i>
                                    </div>
                                    <span className="nav-link-text ms-1">{item.title}</span>
                                    {item.subMenu && (
                                        <i
                                            className={`fas ms-auto ${
                                                expandedMenu[1] === item.id ? 'fa-chevron-up rotate' : 'fa-chevron-down'}`}
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevent parent onClick
                                                toggleSubMenu(item.id, 1); // Toggle submenu for main menu
                                            }}
                                        ></i>
                                    )}
                                </div>
                                {item.subMenu && expandedMenu[1] === item.id && renderSubMenu(item.subMenu, 2)} {/* Render nested submenus */}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
           
        </nav>
    );
}

export default Sidebar;
