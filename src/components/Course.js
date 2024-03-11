import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Sidebar from './dashboard/Sidebar';

const Course = () => {

    const [firstChildData, setFirstChildData] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const { initial } = useParams();

    useEffect(() => {
        // Define an async function to fetch the data
        const fetcchFirstData = async () => {
            try {
                // Make a GET request to the API
                const response = await fetch(`https://api.techunsolved.com/api/TechModule/initial?initial=${initial}`);
                if(!response.ok) {
                    throw new Error('Network response was not ok');
                }

                // Parse the JSON response
                const jsonData = await response.json();
                // Update the data state with the fetched data
                setFirstChildData(jsonData);
            }
            catch(error) {
                console.log('Error fetching data: ', error);
            }
        };

        fetcchFirstData();
    }, [initial]);
  
    return (
        <div>
            <div id="page-wrapper">
                <section id="wrapper">
                    <header>
                        <div className="inner">
                            <h2>{initial}</h2>
                            <p>
                                Please Select your .Net Development Course and start learning
                            </p>
                        </div>
                        
                    </header>

                    <div className="wrapper">
                        <div className="inner">
                            <h3 className="major">Our Courses</h3>
                            <p>
                                Overall, .NET development offers a robust and versatile platform for building 
                                modern, enterprise-grade applications across a wide range of domains and 
                                industries. It continues to evolve with new features, improvements, and updates, 
                                making it a popular choice for developers worldwide.
                            </p>
                            {firstChildData && (
                                <section className="features">
                                    {firstChildData.map(item => (
                                        <article key={item.initial}>
                                            <a href="#" className="image">
                                                { item.initial === "c-sharp" ? (
                                                    <img src={require('../images/.net-development/c-sharp.png')} alt="" />
                                                ) : item.initial === "dotnet-core" ? (
                                                    <img src={require('../images/.net-development/dotnet-core.png')} alt="" />
                                                ) : item.initial === "web-api" ? (
                                                    <img src={require('../images/.net-development/web-api.png')} alt="" />
                                                ): item.initial === "mvc" ? (
                                                    <img src={require('../images/.net-development/aspnet-mvc.png')} alt="" />
                                                ): item.initial === "mvc-core" ?(
                                                    <img src={require('../images/.net-development/mvc-core.png')} alt="" />
                                                ): item.initial === "entity-framework-core" ? (
                                                    <img src={require('../images/.net-development/ef-core.png')} alt="" />
                                                ): item.initial === "entity-framework" ? (
                                                    <img src={require('../images/.net-development/ef.png')} alt="" />
                                                ): item.initial === "linq" ? (
                                                    <img src={require('../images/.net-development/linq.png')} alt="" />
                                                ): item.initial === "css" ?(
                                                    <img src={require('../images/frontend-development/css.png')} alt="" />
                                                ): item.initial === "css3" ? (
                                                    <img src={require('../images/frontend-development/css3.png')} alt="" />
                                                ): item.initial === "bootstrap" ? (
                                                    <img src={require('../images/frontend-development/bootstrap.png')} alt="" />
                                                ): item.initial === "tailwind-css" ? (
                                                    <img src={require('../images/frontend-development/tailwind-css.png')} alt="" />
                                                ): item.initial === "html" ? (
                                                    <img src={require('../images/frontend-development/html5.png')} alt="" />
                                                ): item.initial === "javascript" ? (
                                                    <img src={require('../images/javascript-frameworks/javascript.png')} alt="" />
                                                ): item.initial === "reactjs" ? (
                                                    <img src={require('../images/javascript-frameworks/react-js.png')} alt="" />
                                                ): item.initial === "angularjs" ? (
                                                    <img src={require('../images/javascript-frameworks/angular-js.png')} alt="" />
                                                ): item.initial === "vuejs" ? (
                                                    <img src={require('../images/javascript-frameworks/vue-js.png')} alt="" />
                                                ): (
                                                    <img src={require('../images/pic04.jpg')} alt="" />
                                                )}
                                            </a>
                                                <h3 className="major">{item.techModulesName}</h3>
                                                <p>{item.description}</p>
                                                <Link to={`/dashboard/Course/${item.initial}`}>
                                                    <a href="#" className="special">Start Tutorials</a>
                                                </Link>
                                        </article>
                                    ))}
                                </section>
                             )}
                        </div>
                    </div>
                </section>

                <section id="footer">
						<div className="inner">
                            <ul className="copyright">
                                <li>
                                    &copy; Techunsolved (2020-2024) All right reserved.
                                </li>
                                <li>
                                    Design By: 
                                    <a href="https://www.linkedin.com/in/rovid-kashyap" target="_blank">
                                        Rovid Kashyap
                                    </a>
                                </li>
                            </ul>
						</div>
					</section>
            </div>
        </div>
    )
  
}

export default Course
