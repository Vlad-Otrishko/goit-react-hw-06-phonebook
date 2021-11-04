
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import s from './App.module.css';


const App = () => {
  // задаем useState для contacts и Filter
  // для State contact - "ленивая инициализация". Начальное значение либо берется из localStorage,
  // либо из initial, при этосм проверка осуществляется только при первом рендере
  // const [contacts, setContacts] = useState(() =>
  //   JSON.parse(window.localStorage.getItem('phonebookContacts')) ?? initial);
  
    return (
      <div className={s.container}>
        <h1 className={s.headline}>Phone book</h1>
        <ContactForm/>
        <h2 className={s.headline}>Contacts</h2>
        <Filter/>
        <ContactList/>
      </div>
    );

}
export default App;
