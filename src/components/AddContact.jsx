/* eslint-disable-next-line no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function AddContact({ addContact, contactToEdit, onEdit }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [job, setJob] = useState(''); // اضافه کردن state برای شغل
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (contactToEdit) {
      setName(contactToEdit.name);
      setPhone(contactToEdit.phone);
      setJob(contactToEdit.job || ''); // بارگذاری شغل در صورت ویرایش
      setEmail(contactToEdit.email || '');
    } else {
      setName('');
      setPhone('');
      setJob('');
      setEmail('');
    }
  }, [contactToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { name, phone, job, email }; // اضافه کردن شغل به اطلاعات مخاطب
    if (contactToEdit) {
      onEdit(contactToEdit.index, newContact);
    } else {
      addContact(newContact);
    }
    setName('');
    setPhone('');
    setJob('');
    setEmail('');
  };

  return (
    <form className="add-contact-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <br />
      <input 
        type="text" 
        placeholder="Phone" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
      />
      <br />
      <input 
        type="text" 
        placeholder="Job" 
        value={job} 
        onChange={(e) => setJob(e.target.value)} 
      />
      <br />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <br />
      <button type="submit">{contactToEdit ? 'Update' : 'Save'}</button>
    </form>
  );
}

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired,
  contactToEdit: PropTypes.object,
  onEdit: PropTypes.func.isRequired,
};

export default AddContact;
