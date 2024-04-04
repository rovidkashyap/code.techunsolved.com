import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


const Sidebar = () => {

    const { initial } = useParams();
    const [childData, testChildData] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

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
                setError(error)
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [initial]);

    if (loading) {
        return <div>Loading......</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div className="border-end bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-dark logo-container">
                {/* <img className='myImage' src={require('../../images/logo.png')} /> */}
                <Link to="/">
                    <p className='logo'>
                        <span className='logo-front'>TECH</span>UNSOLVED
                    </p>
                </Link>
            </div>
            {childData && (
                <div className="list-group list-group-flush">
                    {childData.map(item => (
                        <Link key={item.techTopicId} to={`/dashboard/Course/${initial}/${item.techTopicId}`}>
                            <a className="list-group-item list-group-item-action list-group-item-light p-2">
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
