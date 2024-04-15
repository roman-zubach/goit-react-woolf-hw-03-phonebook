import { Component } from 'react';
import { ContactForm, ContactList, Filter, Section } from './components';
import { nanoid } from 'nanoid';
import { contactsStorage } from './storage/contactsStorage';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    this.setState({
      contacts: contactsStorage.get(),
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      contactsStorage.set(this.state.contacts);
    }
  }

  addContact = contact => {
    this.setState((current) => ({
      contacts: [{ id: nanoid(), ...contact }, ...current.contacts],
    }));
  };

  removeContact = removeId => {
    this.setState((current) => ({
      contacts: current.contacts.filter(({ id }) => id !== removeId),
    }));
  };

  isNameExist = newName => {
    return this.state.contacts.some(
      ({ name }) => name.toLowerCase() === newName.toLowerCase()
    );
  };

  updateFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = filter
      ? contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
      : contacts;

    return (
      <div>
        <Section>
          <h1>Phonebook</h1>
          <ContactForm
            save={this.addContact}
            isNameExist={this.isNameExist}
          />
        </Section>

        <Section>
          <h2>Contacts</h2>
          <Filter onChange={this.updateFilter} />
          <ContactList contacts={filteredContacts} handleRemove={this.removeContact} />
        </Section>
      </div>
    );
  }
}

export default App;
