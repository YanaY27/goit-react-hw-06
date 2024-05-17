import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={s.contact}>
      <div>
        <p className={s.name}>
          <IoMdPerson />
          {name}
        </p>
        <p className={s.number}>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <button className={s.btn} onClick={handleDeleteContact}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
