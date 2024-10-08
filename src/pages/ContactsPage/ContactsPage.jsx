import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import ContactList from "../../components/ContactList/ContactList";

import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectLoading } from "../../redux/contacts/selectors";

import css from "./ContactsPage.module.css"; // Не забудьте додати імпорт стилів

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.mainContent}>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <Error />}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
