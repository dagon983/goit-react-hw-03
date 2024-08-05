import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import s from './ContactForm.module.css'

const ContactForm = ({handleSubmit}) => {

    const nameId = useId();
    const numberId = useId();

    const ValidationSchema = Yup.object().shape({
        name: Yup.string().min(3, "Minimum 3 symbols").max(50, "Maximum 50 symbols").required("Required"),
        number: Yup.string().min(3, "Minimum 3 symbols").max(50, "Maximum 50 symbols").required("Required"),
      });

  return (
    <Formik
    className={s.form} 
    initialValues={{
        name: "", 
        number: "",
    }}
    onSubmit={handleSubmit}
    validationSchema={ValidationSchema}>
        <Form className={s.formWrapper}>
            <div className={s.inputWrapper}>
                <label htmlFor={nameId}>Name</label>
                <Field className={s.inputs} type="text" name="name" id={nameId}/>
                <ErrorMessage name="name" component="span"></ErrorMessage>
            </div>

            <div className={s.inputWrapper}>
                <label htmlFor={numberId}>Number</label>
                <Field className={s.inputs} type="text" name="number" id={numberId}/>
                <ErrorMessage name="number" component="span"></ErrorMessage>
            </div>

            <button className={s.submitBtn} type="submit">Add contact</button>
        </Form>
        
    </Formik>
  )
}

export default ContactForm