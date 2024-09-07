/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

function ContactList({ contacts, searchTerm, editContact, deleteContact }) {
  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact, index) => (
          <li key={index}>
            <div>
              {contact.name} - {contact.phone} - {contact.job} - {contact.email} {/* نمایش شغل و ایمیل */}
            </div>
            <div style={{ display: 'flex', gap: '5px' }}>
              <button onClick={() => editContact(index)}>Edit</button>
              <button onClick={() => deleteContact(index)}>Delete</button>
            </div>
          </li>
        ))
      ) : (
        <li>No contacts found</li>
      )}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
  editContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;

