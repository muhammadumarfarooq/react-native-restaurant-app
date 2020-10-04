import React, { useState, useEffect } from 'react';
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  
  const onTermSubmit = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term: searchTerm,
          location: "New York",
          limit: 50
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setError("Something went wrong!");
    }
    
  };
  
  useEffect(() => {
    onTermSubmit('pasta');
  }, []);
  
  return [results, error, onTermSubmit];
  
}
