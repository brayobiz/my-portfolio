import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./Contact.module.css";

const MAX_FILE_SIZE_MB = 5;

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    timeline: "",
    service: "",
    message: "",
    file: null,
    botcheck: false,
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name.trim()) errors.name = "Your name is required.";
    if (!values.email) {
      errors.email = "Your email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Please enter a valid email.";
    }
    if (!values.service) errors.service = "Please select a service.";
    if (!values.message.trim()) errors.message = "Please enter a message.";
    if (values.file) {
      const sizeMB = values.file.size / (1024 * 1024);
      const allowedTypes = ["image/png", "image/jpeg", "application/pdf"];
      if (sizeMB > MAX_FILE_SIZE_MB)
        errors.file = `File must be under ${MAX_FILE_SIZE_MB} MB.`;
      else if (!allowedTypes.includes(values.file.type))
        errors.file = "Only PNG, JPG, or PDF files are allowed.";
    }
    return errors;
  };

  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    setStatus("");
    setServerError(false);
    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("access_key", "dbe8deb1-6dea-4015-803b-4eeaab7ca47b");
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone || "Not provided");
      formData.append("company", values.company || "Not provided");
      formData.append("budget", values.budget || "Not provided");
      formData.append("timeline", values.timeline || "Not provided");
      formData.append("service", values.service);
      formData.append("message", values.message);
      if (values.file) formData.append("file", values.file);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setStatus("✅ Message sent successfully!");
        resetForm();
        setTimeout(() => setSuccess(false), 2500);
      } else {
        setServerError(true);
        setStatus("⚠️ Something went wrong — please try again.");
      }
    } catch (error) {
      console.error(error);
      setServerError(true);
      setStatus("❌ Network error — please retry.");
    } finally {
      setSubmitting(false);
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <section id="contact" className={styles.contact} data-aos="fade-up">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 data-aos="zoom-in">Let’s Connect</h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Have a project? Attach your brief or mockup below and let’s talk.
          </p>
        </div>

        <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
          {({ isSubmitting, status, setFieldValue, values }) => (
            <>
              <Form
                className={`${styles.form} ${serverError ? styles.shake : ""}`}
                data-aos="fade-up"
                data-aos-delay="200"
                aria-live="polite"
              >
                <div className={styles.gridTwo}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full name</label>
                    <Field id="name" name="name" placeholder="Brian Kangogo" />
                    <ErrorMessage name="name" component="div" className={styles.error} />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <Field id="email" name="email" type="email" placeholder="you@example.com" />
                    <ErrorMessage name="email" component="div" className={styles.error} />
                  </div>
                </div>

                <div className={styles.gridTwo}>
                  <div className={styles.formGroup}>
                    <label htmlFor="service">Service</label>
                    <Field as="select" id="service" name="service">
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="web-development">Web Development</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="bug-fixing">Bug Fixing</option>
                      <option value="email-template">Email Template Design</option>
                      <option value="other">Other</option>
                    </Field>
                    <ErrorMessage name="service" component="div" className={styles.error} />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="budget">Budget (optional)</label>
                    <Field id="budget" name="budget" placeholder="e.g., $500–$1,000" />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project..."
                  />
                  <ErrorMessage name="message" component="div" className={styles.error} />
                </div>

                {/* 📎 File Upload */}
                <div className={styles.formGroup}>
                  <label htmlFor="file">Attach file (optional)</label>
                  <input
                    id="file"
                    name="file"
                    type="file"
                    accept=".png,.jpg,.jpeg,.pdf"
                    onChange={(e) => setFieldValue("file", e.currentTarget.files[0])}
                  />
                  {values.file && (
                    <p className={styles.fileInfo}>
                      {values.file.name} ({(values.file.size / 1024 / 1024).toFixed(2)} MB)
                    </p>
                  )}
                  <ErrorMessage name="file" component="div" className={styles.error} />
                </div>

                <div className={styles.formActions}>
                  <button
                    type="submit"
                    className={`${styles.submitButton} ${success ? styles.success : ""}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : success ? "Sent" : "Send Message"}
                  </button>
                </div>
              </Form>

              {status && (
                <div className={styles.statusContainer}>    <p className={styles.status}>{status}</p>
                {status.startsWith("✅") && (
                  <a
                    href="https://calendly.com/YOUR-CALENDLY"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.consultButton}
                    >
                    Book 15-min consult →
      </a>
    )}
                </div>
              )}
            </>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Contact;