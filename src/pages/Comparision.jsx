// RelianceData.js
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
// import './RelianceData.css';

const Comparision = () => {
  const [year, setYear] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [company, setCompany] = useState('Reliance');

  useEffect(() => {
    fetch('/RELIANCE.csv')
      .then((response) => response.text())
      .then((text) => {
        Papa.parse(text, {
          header: true,
          complete: (results) => {
            setData(results.data);
          },
        });
      });
  }, []);

  const handleChange = (e) => {
    setYear(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = data.filter((row) => row.Date.startsWith(year));
    setFilteredData(filtered);
  };

  const renderClosePrices = () => {
    if (filteredData.length > 0) {
      return filteredData.map((row, index) => (
        <div key={index}>
          <p>{`Date: ${row.Date}, Close Price: ${row['Close']}`}</p>
        </div>
      ));
    } else {
      return <p>No data available for the year {year}</p>;
    }
  };

  return (
    <div className="reliance-container">
      <h2>Reliance Stock Data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter Year:</label>
          <input type="number" value={year} onChange={handleChange} />
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        <h3>{company} Close Prices for {year}</h3>
        {year && renderClosePrices()}
      </div>
    </div>
  );
};

export default Comparision;
