// Path: src/components/Contact.js
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './Contact.module.css';

const Contact = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    timeline: '',
    service: '',
    message: '',
    botcheck: false, // Honeypot field for Web3Forms
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.service) {
      errors.service = 'Please select a service';
    }
    if (!values.message) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    setStatus('');
    setSubmitting(true);

    // Prepare form data for Web3Forms
    const formData = {
      access_key: 'dbe8deb1-6dea-4015-803b-4eeaab7ca47b', // Your Web3Forms access key
      name: values.name,
      email: values.email,
      phone: values.phone || 'Not provided',
      company: values.company || 'Not provided',
      budget: values.budget || 'Not provided',
      timeline: values.timeline || 'Not provided',
      service: values.service,
      message: values.message,
      botcheck: values.botcheck, // Honeypot field (should be false)
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('Thank you! Your message was sent. Book a quick 15-min consult here.');
        resetForm();
        // Clear the status message after 3 seconds
        setTimeout(() => {
          setStatus('');
        }, 3000);
      } else {
        setStatus('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('Oops! Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.header}>
        <h2 data-aos="zoom-in">Get in Touch</h2>
        <p data-aos="fade-up" data-aos-delay="100">
          I’d love to hear from you! Drop me a message below.
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status }) => (
          <>
            <Form className={styles.form} data-aos="fade-up" data-aos-delay="200">
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    disabled={isSubmitting}
                  />
                  <ErrorMessage name="name" component="div" className={styles.error} />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    disabled={isSubmitting}
                  />
                  <ErrorMessage name="email" component="div" className={styles.error} />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number (Optional)</label>
                  <Field
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your Phone Number"
                    disabled={isSubmitting}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="company">Company/Organization (Optional)</label>
                  <Field
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Your Company"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="service">Service</label>
                  <Field
                    as="select"
                    id="service"
                    name="service"
                    disabled={isSubmitting}
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="bug-fixing">Bug Fixing</option>
                    <option value="email-template-design">Email Template Design</option>
                    <option value="other">Other</option>
                  </Field>
                  <ErrorMessage name="service" component="div" className={styles.error} />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="budget">Budget Range (Optional)</label>
                  <Field
                    type="text"
                    id="budget"
                    name="budget"
                    placeholder="e.g., $500-$1000"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="timeline">Project Timeline (Optional)</label>
                  <Field
                    type="text"
                    id="timeline"
                    name="timeline"
                    placeholder="e.g., 2 weeks"
                    disabled={isSubmitting}
                  />
                </div>
                <div className={styles.formGroup}>
                  {/* Empty div to maintain layout balance */}
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  disabled={isSubmitting}
                />
                <ErrorMessage name="message" component="div" className={styles.error} />
              </div>
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </Form>
            {status && (
              <div className={`${styles.statusContainer} ${styles.fade}`} data-aos="fade-up">
              <p className={styles.status}>{status}</p>
              <div style={{ marginTop: 12 }}>
              <a href="https://calendly.com/YOUR-CALENDLY" target="_blank" rel="noreferrer" className={styles.submitButton}>
                 Book 15-min consult
                </a>
                </div>
                </div>
            )}
          </>
        )}
      </Formik>
    </section>
  );
};

export default Contact;