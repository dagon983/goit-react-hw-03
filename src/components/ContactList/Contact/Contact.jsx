import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import s from "./Contact.module.css"



const Contact = ({contacts, deleteContact}) => {
  return (
    <div className={s.wrapper}>
        {
            contacts.map(item => (
                <li className={s.li} key={item.id}>
                    <p><FaUser className={s.icon}/>
                    {item.name}</p>
                    <p><FaPhone className={s.icon}/>
                    {item.number}</p>
                    <button className={s.deleteButton} type="button" onClick={() => deleteContact(item.id)}>Delete</button>
                </li>
            ))
        }
    </div>
  )
}

export default Contact