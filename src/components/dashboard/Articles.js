import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CodeArea from '../CodeArea';

const Articles = () => {

    const { techTopicId } = useParams();
    const [childData, testChildData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                // Make GET request to the API
                const response = await fetch(`https://api.techunsolved.com/api/TechArticle/${techTopicId}`);
                if(!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Parse JSON response
                const jsonData = await response.json();
                // Update the data state with the fetched data
                testChildData(jsonData);
            }
            catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, [techTopicId]);

    return (
      <div>
        <div id="page-content-wrapper">
        <div className="container-fluid">
                {childData && (
                  <ul>
                    {childData.map(item => (
                      <>
                        {/* Main Heading */}
                        <h1 className="heading">{item.main_Heading}</h1>
                        <h2 className="heading_four">{item.main_subHeading}</h2>
                         {/* Intro Heading */}
                        <h3 className='intro_heading'>{item.intro_Heading}</h3>
                        <h4 className='intro_data'>{item.intro_Data}</h4>
                        {/* Content Heading */}
                        <h3 className='intro_heading'>{item.content_Heading}</h3>
                        <h4 className='intro_data'>{item.content_Data}</h4>
                        <CodeArea techArticleId={item.techArticleId} />
                        <div className="para">
                          <p>{item.example_content}</p>
                          <p>{item.output_content}</p>
                          <p>{item.conclusion_data}</p>
                            <br />
                        </div>
                      </>
                    ))}
                  </ul>
                )}
        </div>
      </div>
      </div>
      
    )
  
}

export default Articles;
