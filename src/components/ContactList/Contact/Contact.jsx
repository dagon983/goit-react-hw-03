import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import s from "./Contact.module.css"



const Contact = ({contacts, deleteContact}) => {
  return (
    <div className={s.wrapper}>
        
        <li className={s.li}>
            <p><FaUser className={s.icon}/>
            {contacts.name}</p>
            <p><FaPhone className={s.icon}/>
            {contacts.number}</p>
            <button className={s.deleteButton} type="button" onClick={() => deleteContact(contacts.id)}>Delete</button>
        </li>
           
        
    </div>
  )
}

export default Contact