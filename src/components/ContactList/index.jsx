import './assets/index.css';

export const ContactList = ({ contacts, handleRemove}) => {
  return <ul className='contact-list'>
    {contacts.map(({ id, name, number }) => (
      <li className='contact-item' key={id}>
        <p>{name} {number}</p>
        <button type='button' onClick={() => handleRemove(id)}>Remove</button>
      </li>
    ))}
  </ul>;
};
