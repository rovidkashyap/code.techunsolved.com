import { child } from 'fontawesome';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const TestPage = () => {

    const { initial } = useParams();
    const [childData, testChildData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try{
    //             // Make GET request to the API
    //             const response = await fetch(`https://api.techunsolved.com/api/TechTopic/${initial}`);
    //             if(!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             // Parse JSON response
    //             const jsonData = await response.json();
    //             // Update the data state with the fetched data
    //             testChildData(jsonData);
    //         }
    //         catch (error) {
    //             console.log('Error Fetching Data: ', error);
    //         }
    //     };

    //     fetchData();
    // }, [initial]);

  
    return (
        <div>
            {/* {childData && (
                <ul>
                    {childData.map(item => (
                        <li key={item.techTopicId}>{item.techTopicName}</li>
                    ))}
                </ul>
            )} */}
            <h1>Hello test Page</h1>
        </div>
        
    )
  
}

export default TestPage;
