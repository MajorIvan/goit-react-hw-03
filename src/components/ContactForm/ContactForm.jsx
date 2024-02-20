import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const userSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    number: Yup.string()
        .min(3, "To short")
        .max(50, "To long")
        .required("This is a required field"),
});

const ContactForm = ({ onAdd }) => {
  const nameId = useId();
  const numberId = useId();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        onAdd({ id: nanoid(), ...values });
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label htmlFor={nameId}>Name</label>
        <Field
            className={css.field}
            type="text"
            name="name"
            id={nameId}
            />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label htmlFor={numberId}>Number</label>
        <Field 
            className={css.field} 
            type="tel" 
            name="number" 
            id={numberId} />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
