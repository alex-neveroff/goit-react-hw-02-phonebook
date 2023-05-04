import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import SearchFilter from 'components/SearchFilter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  // deleteContact = todoId => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.filter(todo => todo.id !== todoId),
  //   }));
  // };

  handleFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  showContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => {
      const lowerName = contact.name.toLowerCase();
      const lowerFolter = filter.toLowerCase();
      return lowerName.includes(lowerFolter);
    });
  };

  render() {
    const { filter } = this.state;
    const filtredContacts = this.showContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <SearchFilter filter={filter} onChange={this.handleFilter} />

        <ContactList contacts={filtredContacts} />
      </>
    );
  }
}

export default App;
