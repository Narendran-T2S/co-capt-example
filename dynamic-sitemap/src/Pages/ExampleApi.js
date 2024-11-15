import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { FRANCHISE_LIST } from '../config';
import { axiosInstance } from '../api';

const ExampleApi = () => {

  let pendingFranchiseList = [...FRANCHISE_LIST];

  useEffect(() => {
    console.log('Initial mount');
  }, []);

  const runDynamicSitemapScript = () => {
    console.log('Dynamic Sitemap Script started');
    processSitemapsSequentially();
  };

  const dynamicSitemapApiCall = async (franchiseId) => {
    const {data} = await axiosInstance.post('https://httpbin.org/post', {
        firstName: 'Fred',
        lastName: 'Flintstone',
        orders: [franchiseId]
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    return data;
  };
  
  const processSitemapsSequentially = async () => {
    for (const franchiseId of pendingFranchiseList) {
      try {
        console.log(`Processing sitemap for franchise ${franchiseId}`);
        const result = await dynamicSitemapApiCall(franchiseId); // Wait for the API call to complete
        console.log(`Result for sitemap of franchise ${franchiseId}:`, result); // Log the result for each item
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
      </div>
    </div>
  );
};

export { ExampleApi };
