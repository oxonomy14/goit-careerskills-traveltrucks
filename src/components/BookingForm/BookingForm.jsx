import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import { de } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-hot-toast';
import Loader from '../Loader/Loader';
import s from './BookingForm.module.css';

const schema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, 'Name ist zu kurz')
    .max(80, 'Max. 80 Zeichen')
    .required('Name ist erforderlich'),
  email: Yup.string()
    .trim()
    .email('Bitte gültige E-Mail eingeben')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 'Bitte gültige E-Mail eingeben')
    .required('E-Mail ist erforderlich'),
  bookingDate: Yup.date()
    .nullable()
    .min(
      new Date(new Date().setHours(0, 0, 0, 0)),
      'Datum darf nicht in der Vergangenheit liegen'
    )
    .required('Buchungsdatum ist erforderlich'),
  comment: Yup.string().max(500, 'Max. 500 Zeichen'),
});

const BookingForm = () => {
  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      // API-Call hier einbauen
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success('Danke für deine Anfrage!');
      resetForm();
    } catch (e) {
      toast.error('Senden fehlgeschlagen. Bitte erneut versuchen.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', bookingDate: null, comment: '' }}
      validationSchema={schema}
      validateOnBlur={true}
      validateOnChange={false}
      onSubmit={onSubmit}
    >
      {({ setFieldValue, values, isSubmitting }) => (
        <>
          {isSubmitting && <Loader />}
          <Form className={s.bookingCard}>
            <h3 className={s.title}>Book your campervan now</h3>
            <p className={s.subtitle}>
              Stay connected! We are always ready to help you.
            </p>
            <div className={s.field__wrapper}>
              <div className={s.field}>
                <Field name="name" placeholder="Name*" className={s.input} />
                <ErrorMessage name="name" component="div" className={s.error} />
              </div>

              <div className={s.field}>
                <Field name="email" placeholder="Email*" className={s.input} />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={s.error}
                />
              </div>

              <div className={s.field}>
                <DatePicker
                  selected={values.bookingDate}
                  onChange={(d) => setFieldValue('bookingDate', d)}
                  placeholderText="Booking date*"
                  minDate={new Date()}
                  locale={de}
                  dateFormat="dd.MM.yyyy"
                  className={s.input}
                  calendarClassName={s.dp} // <- WICHTIG: s.dp (siehe CSS)
                  showPopperArrow
                  formatWeekDay={(w) => w.slice(0, 3).toUpperCase()} // MON TUE ...
                />

                <ErrorMessage
                  name="bookingDate"
                  component="div"
                  className={s.error}
                />
              </div>

              <div className={s.field}>
                <Field
                  as="textarea"
                  name="comment"
                  placeholder="Comment"
                  className={s.textarea}
                />
                <ErrorMessage
                  name="comment"
                  component="div"
                  className={s.error}
                />
              </div>
            </div>
            <button type="submit" className={s.btn} disabled={isSubmitting}>
              {isSubmitting ? 'Senden…' : 'Send'}
            </button>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default BookingForm;
