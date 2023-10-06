import React, { Component } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const contactData = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };

    this.props.addContact(contactData);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className={css.contact_form}>
        <label htmlFor="name">
          <span className={css.input_names}> Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            value={this.state.name}
            onChange={this.onInputChange}
          />
        </label>
        <label htmlFor="number">
          <span className={css.input_names}>Phone number</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            required
            value={this.state.number}
            onChange={this.onInputChange}
          />
        </label>
        <button type="submit" className={css.add_btn}>
          Add contact
        </button>
      </form>
    );
  }
}
