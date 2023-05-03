import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newContact = { id: nanoid(), name: this.state.name };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  reset = () => {
    this.setState({ name: '' });
  };

  inputNameId = nanoid();

  render() {
    const { contacts } = this.state;
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
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(({ id, name }) => (
            <li key={id} id={id} name={name}>
              {name}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
