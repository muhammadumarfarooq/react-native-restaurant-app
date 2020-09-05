import React, { useState } from 'react';
import yelp from "../api/yelp";

export default (searchTerm) => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");
  
  const onTermSubmit = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term: searchTerm,
          location: "New York",
          limit: 50
        }
      });
      setResult(response.data.businesses);
    } catch (err) {
      setError("Something went wrong!");
    }
    
  };
  
  return [result, error, onTermSubmit];
  
}
