const CONTACTS_KEY = 'contacts';

const getContacts = () => JSON.parse(localStorage.getItem(CONTACTS_KEY)) ?? [];

const setContacts = data => localStorage.setItem('contacts', JSON.stringify(data));

export const contactsStorage = {
  get: getContacts,
  set: setContacts,
};
