import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom' 
import '../assets/css/main.css'


const Home = () => {
  
    const [firstData, setFirstData] = useState([]);
    const [secondData, setSecondData] = useState([]);
    const [thirdData, setThirdData] = useState([]);
    const [thirdOneData, setThirdOneData] = useState([]);
    const [thirdTwoData, setThirdTwoData] = useState([]);
    const { 
            initial = "dotnet-development", 
            initial2 = "front-end-development", 
            initial3 = "javascript-frameworks",
            initial4 = "microsoft-cloud-development",
            initial5 = "amazon-cloud-development" } = useParams();
    
    const { csharp_initial = "C-Sharp",
            dotnetcore_initial = "dotnet-core",
            webapi_initial = "webapi",
            reactjs_initial = "reactjs" } = useParams();

    useEffect(() => {
        const fetchFirstData = async () => {
            try {
              // Fetch Data
              const response = await fetch(`https://api.techunsolved.com/api/TechSubCategory/GetBySubCategoryInitial?initial=${initial}`);
              if(!response.ok) {
                throw new Error('Network response was not ok')
              }
              // Parse the JSON response
              const data = await response.json();
              setFirstData(data);
            }
            catch (error) {
              console.log('Error Fetching data: ', error);
            }
          };
      
          fetchFirstData();
    }, [initial]);

    useEffect(() => {
        const fetchSecondData = async () => {
            try {
                // Fetch Data
                const response = await fetch(`https://api.techunsolved.com/api/TechSubCategory/GetBySubCategoryInitial?initial=${initial2}`);
                if(!response.ok) {
                    throw new Error('Network response was not ok')
                }
                // Parse the JSON response
                const data = await response.json();
                setSecondData(data);
            }
            catch (error) {
                console.log('Error Fetching data: ', error);
            }
        };

        fetchSecondData();
    }, [initial2]);

    useEffect(() => {
        const fetchThirdData = async () => {
            try {
                // Fetch Data
                const response = await fetch(`https://api.techunsolved.com/api/TechSubCategory/GetBySubCategoryInitial?initial=${initial3}`);
                if(!response.ok) {
                    throw new Error('Network response was not ok')
                }
                // Parse the JSON response
                const data = await response.json();
                setThirdData(data);
            }
            catch (error) {
                console.log('Error Fetching data: ', error);
            }
        };

        fetchThirdData();
    }, [initial3]);

    useEffect(() => {
        const fetchThirdOneData = async () => {
            try {
                // Fetch Data
                const response = await fetch(`https://api.techunsolved.com/api/TechSubCategory/GetBySubCategoryInitial?initial=${initial4}`);
                if(!response.ok) {
                    throw new Error('Network response was not ok')
                }
                // Parse the JSON response
                const data = await response.json();
                setThirdOneData(data);
            }
            catch (error) {
                console.log('Error Fetching data: ', error);
            }
        };

        fetchThirdOneData();
    }, [initial4]);

    useEffect(() => {
        const fetchThirdTwoData = async () => {
            try {
                // Fetch Data
                const response = await fetch(`https://api.techunsolved.com/api/TechSubCategory/GetBySubCategoryInitial?initial=${initial5}`);
                if(!response.ok) {
                    throw new Error('Network response was not ok')
                }
                // Parse the JSON response
                const data = await response.json();
                setThirdTwoData(data);
            }
            catch (error) {
                console.log('Error Fetching data: ', error);
            }
        };

        fetchThirdTwoData();
    }, [initial5]);

    return (

        <div>
            <div id="page-wrapper">
                <header id="header" className="alt">
                    <div className="head_logo">
                        <Link to={`/dashboard/TestPage`}>
                            <img src={require('../images/logo.png')} width="100%" height="auto" />
                        </Link>
                    </div>
                </header>

                <section id="banner">
                    <div className="inner">
                        <div className="logo">
                            <span className="icon fa-gem"></span>
                        </div>
                        <b>CODE</b> FROM <h2>TECHUNSOLVED</h2>
                        <p>Develop Critical Tech Skill and Sharp your career with techunsolved</p>
                    </div>
                </section>

                <section id="wrapper">

                    <section id="one" className="wrapper spotlight style1">
                        <div className="inner">
                            <a href="#" className="image">
                                <img src={require('../images/dotnet-pic01.png')} />
                            </a>
                            {firstData.map(item => (
                                <div className="content">
                                    <h2 className="major">{item.techSubcategoryName}</h2>
                                    <p>
                                        .Net is developed by Microsoft that enables developers to build and run Windows applications as well as cross-platform applications
                                        include web applications, console applications, IoT, Mobile applications and many more.
                                    </p>
                                    <Link to={{ pathname: `/Course/${initial}`, state:{name: `/Course/${initial}`}}}>
                                        <a className='special'>Click here for Course Modules</a>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="two" className="wrapper alt spotlight style2">
                        <div className="inner">
                            <a href="#" className="image">
                                <img src={require('../images/frontend-pic02.png')} alt="" />
                            </a>
                            {secondData.map(item => (
                                <div className="content">
                                    <h2 className="major">{item.techSubcategoryName}</h2>
                                    <p>
                                        You can think Front-End as <b>client-side</b> and Backend as <b>server-side</b>. The main responsibility 
                                        of the Front-End Developer is the <b>User Interface</b>. Now a days Many Frameworks are introduce 
                                        in internet world for develop Frontend. Some of the popular framework courses are here.
                                    </p>
                                    <Link to={{pathname: `/Course/${initial2}`, state:{name: `/Course/${initial2}`}}}>
                                        <a className='special'>Click here for Course Modules</a>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="three" className="wrapper spotlight style3">
                        <div className="inner">
                            <a href="#" className="image">
                                <img src={require('../images/jsframework-pic03.png')} />
                            </a>
                            {thirdData.map(item => (
                                <div className="content">
                                    <h2 className="major">{item.techSubcategoryName}</h2>
                                    <p>
                                        JavaScript Frameworks is a very important part of modern web development. Every JavaScript 
                                        Framework serves a different purpose. Basically JavaScript Framework is collection of pre-written, 
                                        reusable code that serves as a template or blueprint to help developers build web applications.
                                    </p>
                                    <Link to={{pathname: `/Course/${initial3}`, state:{name: `/Course/${initial3}`}}}>
                                        <a className='special'>Click here for Course Modules</a>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="three-one" className="wrapper alt spotlight style2">
                        <div className="inner">
                            <a href="#" className="image">
                                <img src={require('../images/azure.png')} alt="" />
                            </a>
                            {thirdOneData.map(item => (
                                <div className="content">
                                    <h2 className="major">{item.techSubcategoryName}</h2>
                                    <p>
                                        Microsoft Azure is the cloud computing platform offered by Microsoft. It provides a wide range of cloud services similar to Amazon 
                                        Web Services (AWS), enabling businesses to build, deploy, and manage applications and services through Microsoft's global network 
                                        of data centers.
                                    </p>
                                    <Link to={{pathname: `/Course/${initial4}`, state: { name: `/Course/${initial4}`}}}>
                                        <a className='special'>Click here for Course Modules</a>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="three-two" className="wrapper spotlight style3">
                        <div className="inner">
                            <a href="#" className="image">
                                <img src={require('../images/aws.png')} />
                            </a>
                            {thirdTwoData.map(item => (
                                <div className="content">
                                    <h2 className="major">{item.techSubcategoryName}</h2>
                                    <p>
                                        Amazon Web Services (AWS) is a cloud computing platform offered by Amazon. It provides a wide range of services that include 
                                        computing power, storage options, networking, databases, machine learning, analytics, security, and more. AWS enables businesses 
                                        to build and deploy applications and services quickly and securely without the need to invest in physical infrastructure.
                                    </p>
                                    <Link to={{pathname: `/Course/${initial5}`, state:{name: `/Course/${initial5}`}}}>
                                        <a className='special'>Click here for Course Modules</a>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="four" className="wrapper alt style1">
                        <div className="inner">
                            <h2 clasName="major">Jump Direct to Course</h2>
                            <p>
                                Built in-demand tech skills with free access to all course modules and provide 
                                help for 24/7 support. Some of the popular courses are listed here and others 
                                will be updated soon. You are just one click away to start your development journey
                                with Techunsolved Learning.
                            </p>
                            <section className="features">
                                <article>
                                    <a href="#" className="image">
                                        <img src={require('../images/.net-development/c-sharp.png')} alt="" />
                                    </a>
                                    <h3 className="major">C#</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla 
                                        dignissim dapibus ultrices.
                                    </p>
                                    <Link to={`/dashboard/Course/${csharp_initial}`}>
                                        <a className="special">Start Tutorials</a>
                                    </Link>
                                </article>
                                <article>
                                    <a href="#" className="image">
                                        <img src={require('../images/.net-development/dotnet-core.png')} alt="" />
                                    </a>
                                    <h3 className="major">.Net Core</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id 
                                        nulla dignissim dapibus ultrices.
                                    </p>
                                    <Link to={`/dashboard/Course/${dotnetcore_initial}`}>
                                        <a className="special">Start Tutorials</a>
                                    </Link>
                                </article>
                                <article>
                                    <a href="#" className="image">
                                        <img src={require("../images/.net-development/web-api.png")} alt="" />
                                    </a>
                                    <h3 className="major">ASP.Net Web API</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id 
                                        nulla dignissim dapibus ultrices.
                                    </p>
                                    <Link to={`/dashboard/Course/${webapi_initial}`}>
                                        <a className="special">Start Tutorials</a>
                                    </Link>
                                </article>
                                <article>
                                    <a href="#" className="image">
                                        <img src={require("../images/javascript-frameworks/react-js.png")} alt="" />
                                    </a>
                                    <h3 className="major">React.JS</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id 
                                        nulla dignissim dapibus ultrices.
                                    </p>
                                    <Link to={`/dashboard/Course/${reactjs_initial}`}>
                                        <a className="special">Start Tutorials</a>
                                    </Link>
                                </article>
                            </section>

                            {/* <ul className="actions">
                                <li>
                                    <a href="#" className="button">Browse All</a>
                                </li>
                            </ul> */}
                        </div>
                    </section>

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

export default Home