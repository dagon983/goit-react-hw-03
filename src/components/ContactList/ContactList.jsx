import Contact from "./Contact/Contact";
import s from "./ContactList.module.css"

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={s.ContactList}>
        {
            contacts.map((contacts) => {
             return  <Contact contacts={contacts} deleteContact={deleteContact} key={contacts.id}/> 
            })
        }
    
    </ul>
  )
}

export default ContactList