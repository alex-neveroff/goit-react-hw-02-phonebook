import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  inputNameId = nanoid();
  inputPhoneId = nanoid();

  render() {
    const { contacts, filter } = this.state;
    const filtredContacts = contacts.filter(contact => {
      const lowerName = contact.name.toLowerCase();
      const lowerFolter = filter.toLowerCase();
      return lowerName.includes(lowerFolter);
    });
    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.inputNameId}>
            Name
            <input
              type="text"
              name="name"
              id={this.inputNameId}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor={this.inputPhoneId}>
            Phone:
            <input
              type="tel"
              name="number"
              id={this.inputPhoneId}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <label htmlFor="filter-field">
          Find contacts by name
          <input
            id="filter-field"
            type="text"
            value={filter}
            onChange={this.handleFilter}
          />
        </label>
        <ul>
          {filtredContacts.map(({ id, name, number }) => (
            <li key={id} id={id} name={name} number={number}>
              {name}: {number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
