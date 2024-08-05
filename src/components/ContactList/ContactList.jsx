import Contact from "./Contact/Contact"

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
    <Contact contacts={contacts} deleteContact={deleteContact}/>
    </ul>
  )
}

export default ContactList