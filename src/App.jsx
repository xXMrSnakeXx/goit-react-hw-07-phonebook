import { ContactForm } from './components/ContactForm';
import { ContactsList } from './components/ContactsList';
import { Filter } from './components/Filter';
import s from './App.module.css';

export const App = () => {
  return (
    <>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
};
