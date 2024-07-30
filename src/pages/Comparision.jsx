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
      </div>
    </div>
  );
};

export default Comparision;
