import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FRANCHISE_LIST } from '../config';
import { axiosInstance } from '../api';

const Home = () => {

  let pendingFranchiseList = [...FRANCHISE_LIST];
  const [successMessages, setSuccessMessages] = useState([]);

  useEffect(() => {
    console.log('Initial mount');
  }, []);

  const runDynamicSitemapScript = () => {
    console.log('Dynamic Sitemap Script started');
    processSitemapsSequentially();
  };

  const dynamicSitemapApiCall = async (franchiseId) => {
    const { data } = await axiosInstance.post('https://ureu5o6khrqlhdimow2xk5izwm0cvaui.lambda-url.eu-west-2.on.aws', {
        franchise_id: franchiseId
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
    });
    return data;
  };
  
  const processSitemapsSequentially = async () => {
    for (const franchiseId of pendingFranchiseList) {
      try {
        console.log(`Processing sitemap for franchise ${franchiseId}`);
        const result = await dynamicSitemapApiCall(franchiseId); // Wait for the API call to complete
        setSuccessMessages((prevResults) => [...prevResults, { franchiseId, result }]);
        setTimeout(()=>{
          console.log(`Result for sitemap of franchise ${franchiseId}:`, result); // Log the result for each item
        }, 1000);
      } catch (error) {
        console.error(`Error fetching data for sitemap of franchise ${franchiseId}:`, error);
      }
    }
  };

  return (
    <div className="page-home">
      <div className="header">{'Dynamic Scripts'}</div>
      <div className="main textCenter">
        <button type="button" onClick={runDynamicSitemapScript} className="btn">{'RUN SCRIPT'}</button>  
        {successMessages.map((message, index) => (
          <div className='success-result' key={index}>{`Script for Franchise ID - ${message.franchiseId} completed`}</div>
        ))}
      </div>
    </div>
  );
};

export { Home };
