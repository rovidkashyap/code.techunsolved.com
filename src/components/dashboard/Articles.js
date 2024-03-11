import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Articles = () => {

  const { id } = useParams();
    const [childData, testChildData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                // Make GET request to the API
                const response = await fetch(`https://api.techunsolved.com/api/TechArticle/${id}`);
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
    }, [id]);
  
    return (
      <div>
        <div id="page-content-wrapper">
        <div className="container-fluid">
                {childData && (
                  <ul>
                    {childData.map(item => (
                      <><h1 className="mt-4">{item.articleHeading}</h1>
                      <li key={item.techArticleId}>
                        {item.article}
                        {item.article2}
                        {item.article3}
                        {item.article4}
                        {item.article5}
                      </li></>
                    ))}
                  </ul>
                )}
        </div>
      </div>
      </div>
      
    )
  
}

export default Articles;
