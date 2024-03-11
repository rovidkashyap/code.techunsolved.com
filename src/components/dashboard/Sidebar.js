import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Home from '../Home';


const Sidebar = () => {

    const { initial } = useParams();
    const [childData, testChildData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                // Make GET request to the API
                const response = await fetch(`https://api.techunsolved.com/api/TechTopic/${initial}`);
                if(!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Parse JSON response
                const jsonData = await response.json();
                // Update the data state with the fetched data
                testChildData(jsonData);
            }
            catch (error) {
                console.log('Error Fetching Data: ', error);
            }
        };

        fetchData();
    }, [initial]);

    return (
        <div className="border-end bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-dark logo-container">
                {/* <img className='myImage' src={require('../../images/logo.png')} /> */}
                <Link to="/">
                    <p className='logo'><span className='logo-front'>TECH</span>UNSOLVED</p>
                </Link>
            </div>
            {childData && (
                <div className="list-group list-group-flush">
                    {childData.map(item => (
                        <Link to={`/dashboard/Course/${initial}/${item.techTopicId}`}>
                            <a key={item.initial} href="#" className="list-group-item list-group-item-action list-group-item-light p-3">
                                {item.techTopicName}
                            </a>
                        </Link>
                        
                    ))}
                </div>
            )}
        </div>   
    )
}

export default Sidebar;
