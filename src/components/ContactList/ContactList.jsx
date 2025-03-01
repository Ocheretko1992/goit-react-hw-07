import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from "../../redux/contactsSlice";

const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {isLoading && !error && <b>Request in progress...</b>}

      {contacts.map((contact) => (
        <li key={contact.id} className={css.contactItem}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
