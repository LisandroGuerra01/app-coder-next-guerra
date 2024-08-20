import ContactForm from '../../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="p-5 bg-gray-100 items-center justify-center">
      <div ><h3 className='text-indigo-600 text-2xl px-4'>Dejanos tu mensaje</h3></div>
      <br />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
