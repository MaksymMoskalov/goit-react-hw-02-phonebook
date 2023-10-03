import React, { Component } from 'react';
import { ContactList } from 'components/contactList/ContactList';
import { ContactForm } from 'components/contactForm/ContactForm';
import { Filter } from 'components/filter/Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contactData => {
    if (
      this.state.contacts.some(
        contact =>
          contact.name.toLocaleLowerCase() ===
          contactData.name.toLocaleLowerCase()
      )
    ) {
      alert(`${contactData.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contactData],
      };
    });
  };

  removeContacts = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  handlFiltration = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  filteredContacts = () => {
    const normalizedContacts = this.state.filter.toLocaleLowerCase();
    return this.state.contacts.filter(contact => {
      return contact.name.toLocaleLowerCase().includes(normalizedContacts);
    });
  };

  render() {
    const afterFiltration = this.filteredContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          addContact={this.addContact}
          globalContacts={this.state.contacts}
        />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handlFiltration} />
        <ContactList contacts={afterFiltration} onDelit={this.removeContacts} />
      </div>
    );
  }
}
