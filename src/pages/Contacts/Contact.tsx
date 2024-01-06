import BaseLayout from "../../layout/Base/BaseLayout";
import ContactForm from "./components/ContactForm";

const Contact = () => {
  return (
    <BaseLayout>
      <div className="w-4/5 mx-auto" data-aos="fade-up">
        <ContactForm />
      </div>
    </BaseLayout>
  );
};

export default Contact;
