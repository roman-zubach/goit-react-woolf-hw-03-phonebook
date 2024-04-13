import { Component } from 'react';
import './assets/index.css';

const defaultState = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = defaultState;

  clearState = () => {
    this.setState(defaultState);
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { save, isNameExist } = this.props;
    const { name, number } = this.state;

    const handleSubmit = event => {
      event.preventDefault();

      const { name, number } = this.state;

      if (isNameExist(name)) {
        window.alert(`${name} is already in contacts.`);

        return;
      }

      save({ name, number });

      this.clearState();
    };

    return (
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="number">Number</label>
          <input
            value={number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
