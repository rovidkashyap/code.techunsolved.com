import React, { useState, useEffect } from 'react'
import hljs from 'highlight.js/lib/core';
import "highlight.js/styles/github.css";
import javascript from 'highlight.js/lib/languages/javascript';

// Register the language to be highlighted
hljs.registerLanguage('javascript', javascript);

const CodeArea = ({ techArticleId }) => {

    const [decodedData, setDecodedData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                // Make GET request to the API
                const response = await fetch(`https://api.techunsolved.com/api/TechArticlesData/${techArticleId}`);
                console.log('Response', response);
                if(!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
                }
                
                const jsonData = await response.json();
                setDecodedData(jsonData);
                // setDecodedData(jsonData, () => {
                //     hljs.highlightAll();
                // });
            }
            catch(error) {
                console.error('Error Fetching data: ', error);
                throw error;
            }
        };

        fetchData();
    }, [techArticleId]);

    useEffect(() => {
        hljs.highlightAll();
    }, [decodedData]);

    return (
        
        <>
        {decodedData.map(item => (
            <>
                <div className='code_area'>
                    <div className='code_container'>
                        <code>{item.program_heading}</code>
                        <pre>
                            <code key={item.techArticleId} className='javascript'>
                                <span>{item.program_code}</span>
                            </code>
                        </pre>
                    </div>
                </div>
                <br />
                <div className='code_area'>
                    <div class='code_container'>
                        <code>{item.output_heading}</code>
                        <pre>
                            <code key={item.techArticleId} className='javascript other_code'>
                                <span>{item.output_code}</span>
                            </code>
                        </pre>
                    </div>
                </div> <br />
                <div className='code_area'>
                    <div class='code_container'>
                        <code>{item.other_heading}</code>
                        <pre>
                            <code key={item.techArticleId} className='javascript other_code'>
                                <span>{item.other_code}</span>
                            </code>
                        </pre>
                    </div>
                </div>

                </>
            ))}
            </>
    );
};

export default CodeArea;
