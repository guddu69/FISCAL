import React, { useState } from "react";
import "./family.css";
import { useFamilyContext } from './FamilyContext';

import graph from "../data/Screenshot.jpg"

const Comparision = () => {
  
  // const { addFamilyMember } = useFamilyContext();

  const [familyMember, setFamilyMember] = useState({
    invested_year: "",
    future_year: "",
    Commodity: "",
  });

  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage(!showImage);
  };



  const [familyMembers, setFamilyMembers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFamilyMember((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            type="number"
            name="invested_year"
            value={familyMember.invested_year}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Commodity:</label>
          <select
            name="commodity"
            value={familyMember.Commodity}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Gold">Gold</option>
            <option value="Real_estate">Real_estate</option>
           
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
            <button onClick={handleClick}>
        {showImage ? 'Hide Image' : 'Show Image'}
      </button>
      <button onClick={() => handleDelete(index)}>Delete</button>
      {showImage && <img src={graph} alt="Placeholder" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comparision;
