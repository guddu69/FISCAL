<<<<<<< HEAD
import React, { useState } from "react";
import "./family.css";
import { useFamilyContext } from './FamilyContext';

const Comparision = () => {
  
  // const { addFamilyMember } = useFamilyContext();

  const [familyMember, setFamilyMember] = useState({
    invested_year: "",
    future_year: "",
    Commodity: "",
  });

  const [familyMembers, setFamilyMembers] = useState([]);

  const handleChange = (e) => {
    const { invested_year, value } = e.target;
    setFamilyMember((prevState) => ({
      ...prevState,
      [invested_year]: value,
    }));
=======
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
>>>>>>> f91e3110de274a4c92195e4d080758afa38eee32
  };

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    // addFamilyMember(familyMember);
    setFamilyMembers([...familyMembers, familyMember]);
    setFamilyMember({
      invested_year: "",
      Commodity: "",
    });
  };

  const handleDelete = (index) => {
    const updatedFamilyMembers = familyMembers.filter((_, i) => i !== index);
    setFamilyMembers(updatedFamilyMembers);
  };

  return (
    <div className="container">
      <h2>Comparision</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>invested_year:</label>
          <input
            type="text"
            name="invested_year"
            value={familyMember.invested_year}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Commodity:</label>
          <select
            name="gender"
            value={familyMember.Commodity}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="male">Gold</option>
            <option value="female">Real_estate</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <button type="submit">Compare</button>
      </form>

      <div className="family-members">
        <h3>Graph:</h3>
        {familyMembers.map((member, index) => (
          <div key={index} className="family-member">
            <p>invested_year: {member.invested_year}</p>
            <p>Commodity: {member.commodity}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
=======
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
>>>>>>> f91e3110de274a4c92195e4d080758afa38eee32
      </div>
    </div>
  );
};

export default Comparision;
