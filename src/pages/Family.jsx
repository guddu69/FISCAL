import React, { useState } from "react";
import "./family.css";
import { useFamilyContext } from './FamilyContext';

const Family = () => {
  
  // const { addFamilyMember } = useFamilyContext();

  const [familyMember, setFamilyMember] = useState({
    name: "",
    age: "",
    relation: "",
    gender: "",
    yearlyIncome: "",
    moneyNeeded: "",
    year: "",
    cause: "",
  });

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
      name: "",
      age: "",
      relation: "",
      gender: "",
      yearlyIncome: "",
      moneyNeeded: "",
      year: "",
      cause: "",
    });
  };

  const handleDelete = (index) => {
    const updatedFamilyMembers = familyMembers.filter((_, i) => i !== index);
    setFamilyMembers(updatedFamilyMembers);
  };

  return (
    <div className="container">
      <h2>Add Family Member</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={familyMember.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={familyMember.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Relation with you:</label>
          <input
            type="text"
            name="relation"
            value={familyMember.relation}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={familyMember.gender}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Yearly Income (INR):</label>
          <input
            type="number"
            name="yearlyIncome"
            value={familyMember.yearlyIncome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Money Needed (INR):</label>
          <input
            type="number"
            name="moneyNeeded"
            value={familyMember.moneyNeeded}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Year:</label>
          <input
            type="number"
            name="year"
            value={familyMember.year}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Cause:</label>
          <input
            type="text"
            name="cause"
            value={familyMember.cause}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Member</button>
      </form>

      <div className="family-members">
        <h3>Family Members:</h3>
        {familyMembers.map((member, index) => (
          <div key={index} className="family-member">
            <p>Name: {member.name}</p>
            <p>Age: {member.age}</p>
            <p>Relation: {member.relation}</p>
            <p>Gender: {member.gender}</p>
            <p>Yearly Income: {member.yearlyIncome}</p>
            <p>Money Needed: {member.moneyNeeded}</p>
            <p>Year: {member.year}</p>
            <p>Cause: {member.cause}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Family;
