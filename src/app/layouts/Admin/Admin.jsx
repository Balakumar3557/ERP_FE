import React, { useState, useEffect }  from 'react';
import Sidebar from '../sidebar/sidebar';
import Dashboard from '../../mastermanagement/Dashboard/Dashboard';
import Navbar from '../Navbar/Navbar';
// import RoomAllocation from '../../mastermanagement/Hostel/';
// import GatePass from '../../Hostel/Gatepass/Gatepass';
import { Routes, Route } from 'react-router-dom';
import City from '../../mastermanagement/Academic/City/City';
import StudentStatus from '../../mastermanagement/Academic/StudentStatus/StudentStatus';
import Semester from '../../mastermanagement/Academic/Semester/Semester';
import Subject from '../../mastermanagement/Academic/Subject/Subject';
import Scholarship from '../../mastermanagement/Academic/Scholarship/Scholarship';
import Placement from '../../mastermanagement/Academic/Placement/Placement';
import Grade from '../../mastermanagement/Academic/Grade/Grade';
import Registration from '../../mastermanagement/Student/Registration/Registration';
import AddRegistration from '../../mastermanagement/Student/Registration/AddRegistration/AddRegistration';
import Department from '../../mastermanagement/Academic/Department/Department';
import Section from '../../mastermanagement/Academic/Section/Section';
import State from '../../mastermanagement/Academic/State/State';
import EducationalLevel from '../../mastermanagement/Academic/EducationalLevel/EducationalLevel';
import AcademicYear from '../../mastermanagement/Academic/AcademicYear/AcademicYear';
import Degree from '../../mastermanagement/Academic/Degree/Degree';
import Designation from '../../mastermanagement/Academic/Designation/Designation';
import HostelCreation from '../../mastermanagement/Hostel/HostelCreation/HostelCreation';
import RoomCreation from '../../mastermanagement/Hostel/RoomCreation/RoomCreation';
import RouteCreation from '../../mastermanagement/Transport/RouteCreation/RouteCreation';
import StageCreation from '../../mastermanagement/Transport/StageCreation/StageCreation';
import VehicleEntry from '../../mastermanagement/Transport/VehicleEntry/VehicleEntry';
import DriverDetails from '../../mastermanagement/Transport/DriverDetails/DriverDetails';
import TripChangeEntry from '../../mastermanagement/Transport/TripChangeEntry/TripChangeEntry';
import TripEntry from '../../mastermanagement/Transport/TripEntry/TripEntry';
import FoodType from '../../mastermanagement/Hostel/FoodType/FoodType';
import FoodName from '../../mastermanagement/Hostel/FoodName/FoodName';
import RoomManagement from '../../mastermanagement/Hostel/RoomManagement/RoomManagement';
import SnackName from '../../mastermanagement/Hostel/SnackName/SnackName';
import MealPlanning from '../../mastermanagement/Hostel/MealPlanning/MealPlanning';
import SnackPlanning from '../../mastermanagement/Hostel/SnackPlanning/SnackPlanning';
import LocationSelector from '../../mastermanagement/Transport/LocationSelector/LocationSelector';
import LibraryName from '../../mastermanagement/Library/LibraryName/LibraryName';
import BookTitle from '../../mastermanagement/Library/Book Title/BookTitle';
import BookSubTitle from '../../mastermanagement/Library/BookSubTitle/BookSubTitle';
import BookMaster from '../../mastermanagement/Library/BookMaster/BookMaster';

function Admin() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to manage sidebar visibility

    // Function to toggle the sidebar manually
    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };

    // Auto-close sidebar on smaller screens
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1024) {
                setIsSidebarOpen(false); // Auto-close for mobile/tablet
            } else {
                setIsSidebarOpen(true); // Keep open for larger screens
            }
        };

        // Initial setup and add listener
        handleResize();
        window.addEventListener('resize', handleResize);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Close sidebar on navigation (for mobile and tablet)
    const handleNavigation = () => {
        if (window.innerWidth <= 768) {
            setIsSidebarOpen(false);
        }
    };
    return (
        <div className={`g-sidenav-show bg-gray-100 ${isSidebarOpen ? 'g-sidenav-pinned' : 'g-sidenav-hidden'}`}>
            <div className="min-height-300 bg-primary position-absolute w-100"></div>
            {/* Pass the toggle function to Sidebar */}
            <Sidebar isOpen={isSidebarOpen} onNavigate={handleNavigation}/>
            <main className="main-content position-relative border-radius-lg">
                <Navbar toggleSidebar={toggleSidebar} />
                <Routes>
                    <Route path='*' element={<DashBoard/>} />
                    <Route path='/Master/*' element={<Master/>}/>
                    <Route path='/Hostel/*' element={<Hostel/>}/>
                    <Route path='/Transport/*' element={<Transport/>}/>
                    <Route path='/Inventry/*' element={<Inventory/>}/>
                    <Route path='/Accounts/*' element={<Accounts/>}/>
                    <Route path='/Placement/*' element={<Placements/>}/>
                    <Route path='/Reports/*' element={<Reports/>}/>
                    <Route path='/Library/*' element={<Library/>}/>
                    <Route path='/Exam/*' element={<Exam/>}/>
                    <Route path='/Certificate/*' element={<Certificate/>}/>
                    <Route path='/DatabaseBackup/*' element={<DatabaseBackup/>}/>
                    <Route path='/EmailSetting/*' element={<EmailSetting/>}/>
                    <Route path='/SmsSetting/*' element={<SmsSetting/>}/>
               </Routes>
            </main>
        </div>
    );
}

function DashBoard() {
    return (
        <>
            <Routes>
                <Route path="*" element={<Dashboard />} />
            </Routes>
        </>
    );
}

function Master() {
    return (
        <>
            <Routes>
                <Route path="/Academic/*" element={<AcademicItems />} />
                <Route path="/HostelMaster/*" element={<HostelItems />} />
                <Route path="/Student/*" element={<StudentDetails />} />
                <Route path="/Transport/*" element={<TransportItems />} />
                <Route path="/LibraryMaster/*" element={<LibraryItems />} />
            </Routes>
        </>
    );
}

// /adm/Master/Academic/Academic_Items/
function Hostel() {
    return (
        <>
        <Routes>
            {/* <Route path='/Room-Allocation' element={<RoomAllocation/>}/> */}
            {/* <Route path='/Approved-Gate-Pass' element={<GatePass/>} /> */}
            {/* <Route path='/Hostel-Bed-Status' element={<BedStatus/>}/> */}
        </Routes>
        </>
    );
}

function Transport() {
   
}

// Inventory
function Inventory() {}

function Accounts() {}

function Placements() {}

function Reports() {}

function Library() {}

function Exam() {}

function Certificate() {}

function DatabaseBackup() {}

function EmailSetting() {}

function SmsSetting() {}


// student
function StudentDetails() {
    return (
        <>
            <Routes>
                <Route path='/Registration' element={<Registration />} />
                <Route path='/Add-Registration' element={<AddRegistration />} />
            </Routes>
        </>
    );
}

// Academic
function AcademicItems() {
    return (
        <>
            <Routes>
                <Route path='/Academic-Degree' element={<Degree />} />
                <Route path='/Academic-Department' element={<Department />} />
                <Route path='/Academic-Section' element={<Section />} />
                <Route path='/Academic-State' element={<State />} />
                <Route path='/Academic-AcademicYear' element={<AcademicYear />} />
                <Route path='/Academic-EducationalLevel' element={<EducationalLevel />} />
                <Route path='/Academic-Designation' element={<Designation />} />
                <Route path='/Academic-City' element={<City />} />
                <Route path='/Academic-Student-Status' element={<StudentStatus />} />
                <Route path='/Academic-Semester' element={<Semester />} />
                <Route path='/Academic-Subject' element={<Subject />} />
                <Route path='/Academic-Scholarship' element={<Scholarship />} />
                <Route path='/Academic-Placement' element={<Placement />} />
                <Route path='/Academic-Grade' element={<Grade />} />
            </Routes>
        </>
    );
}

function HostelItems() {
    return (
        <Routes>
            <Route path='/Hostel-HostelCreation' element={<HostelCreation />} />
            <Route path='/Hostel-RoomCreation' element={<RoomCreation />} />
            <Route path='/Hostel-FoodType' element={<FoodType />} />
            <Route path='/Hostel-FoodName' element={<FoodName />} />
            <Route path='/Hostel-RoomManagement' element={<RoomManagement />} />
            <Route path='/Hostel-SnackName' element={<SnackName />} />
            <Route path='/Hostel-MealPlanning' element={<MealPlanning />} />
            <Route path='/Hostel-SnackPlanning' element={<SnackPlanning />} />
        </Routes>
    );
}

function TransportItems() {
    return (
        <Routes>
            <Route path='/RouteCreation' element={<RouteCreation />} />
            <Route path='/StageCreation' element={<StageCreation />} />
            <Route path='/VehicleEntry' element={<VehicleEntry />} />
            <Route path='/DriverDetails' element={<DriverDetails />} />
            <Route path='/TripChangeEntry' element={<TripChangeEntry />} />
            <Route path='/TripEntry' element={<TripEntry />} />
            <Route path='/LocationSelector' element={<LocationSelector />} />
        </Routes>
    );
}

function LibraryItems() {
    return (
        <Routes>
            <Route path='Library-LibraryName' element={<LibraryName />} />
            <Route path='Library-BookTitle' element={<BookTitle />} />
            <Route path='Library-BookSubTitle' element={<BookSubTitle />} />
            <Route path='Library-BookMaster' element={<BookMaster />} />
        </Routes>
    );
}

export default Admin;
