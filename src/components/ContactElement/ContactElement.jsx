import css from './ContactElement.module.css';

export const ContactElement = ({ id, name, number, handleDeleteContact }) => {
  return (
    <li className={css.contactElement}>
      <p>
        &#8226; {name}: {number}
      </p>
      <button type="button" onClick={() => handleDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};
