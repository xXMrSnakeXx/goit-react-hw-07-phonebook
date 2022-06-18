import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contactsApi';
import Notiflix from 'notiflix';

import s from './ContactForm.module.css';

export const ContactForm = () => {
  const [form, setForm] = useState({ name: '', phone: '' });
  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = { id: nanoid(), ...form };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      formReset();
      return alert(`Number: ${data.name} is already in phonebook`);
    }
    addContact(data);
    Notiflix.Notify.success(`Contact added!`);
    formReset();
  };

  const formReset = () => {
    setForm({ name: '', phone: '' });
  };

  const { name, phone } = form;
  return (
    <div className={s.contactform}>
      <form onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </form>
    </div>
  );
};
