/* eslint-disable-next-line no-unused-vars */
import React, { useState } from 'react';
import ContactList from './components/ContactList.jsx';
import AddContact from './components/AddContact.jsx';

import './App.css'; 

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddContact, setShowAddContact] = useState(false);
  const [contactToEdit, setContactToEdit] = useState(null); // State برای ویرایش مخاطب

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
    setShowAddContact(false);
  };

  const editContact = (index, updatedContact) => {
    const updatedContacts = contacts.map((contact, i) => 
      i === index ? updatedContact : contact
    );
    setContacts(updatedContacts);
    setContactToEdit(null); // Reset contactToEdit after editing
  };

  const deleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  const handleEditClick = (index) => {
    setContactToEdit({ ...contacts[index], index });
    setShowAddContact(true);
  };

  return (
    <div>
      <h1>Contact App</h1>
      <div className="search-container">
        <div className="circle tick">✔️</div>
        <div 
          className="circle plus" 
          onClick={() => {
            setShowAddContact(true);
            setContactToEdit(null); // Reset when adding new contact
          }} 
        >
          ➕
        </div>
        <input 
          type="text" 
          placeholder="Search contacts..." 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>
      <ContactList 
        contacts={contacts} 
        searchTerm={searchTerm} 
        editContact={handleEditClick} 
        deleteContact={deleteContact} 
      />
      {showAddContact && 
        <AddContact 
          addContact={addContact} 
          contactToEdit={contactToEdit} 
          onEdit={editContact} 
        />} 
    </div>
  );
}

export default App;
