import { ContactElement } from 'components/ContactElement/ContactElement';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul className={css.contacts}>
      {contacts.map(contact => (
        <ContactElement
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};
