import '../assets/css/style.css'
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';
import Articles from '../components/dashboard/Articles';

const DashboardLayout = () => {
    return (
      <div className="d-flex" id="wrapper">
        <Sidebar />
        <div className="page-content-wrapper article-container">
          <Header />
          <div className="container-fluid">
            <Articles />
          </div>
        </div>
      </div>
    )
  }

  export default DashboardLayout;