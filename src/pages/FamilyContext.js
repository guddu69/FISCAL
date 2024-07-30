import React, { createContext, useState, useContext } from 'react';

const FamilyContext = createContext();

export const useFamilyContext = () => useContext(FamilyContext);

export const FamilyProvider = ({ children }) => {
  const [familyMembers, setFamilyMembers] = useState([]);

  const addFamilyMember = (member) => {
    setFamilyMembers((prevMembers) => [...prevMembers, member]);
  };

  const deleteFamilyMember = (index) => {
    setFamilyMembers((prevMembers) =>
      prevMembers.filter((_, i) => i !== index)
    );
  };

  return (
    <FamilyContext.Provider value={{ familyMembers, addFamilyMember, deleteFamilyMember }}>
      {children}
    </FamilyContext.Provider>
  );
};
