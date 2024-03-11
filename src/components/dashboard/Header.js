import React, { useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css'

const Header = () => {

    useEffect(() => {
        const handleSidebarToggle = () => {
          document.body.classList.toggle('sb-sidenav-toggled');
          localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        };
    
        const sidebarToggle = document.getElementById('sidebarToggle');
        if (sidebarToggle) {
          sidebarToggle.addEventListener('click', handleSidebarToggle);
        }
    
        return () => {
          // Clean up event listener
          if (sidebarToggle) {
            sidebarToggle.removeEventListener('click', handleSidebarToggle);
          }
        };
      }, []);
  
    return (
        <div>
            {/* Top navigation */}
            <nav className="navbar navbar-expand-lg navbar-light bg-dark border-bottom">
                <div className="container-fluid">
                    <a href="#"><i className='fa fa-regular fa-bars myLink' id='sidebarToggle'></i></a>
                </div>
            </nav>
        </div>
    )
  
}

export default Header;
