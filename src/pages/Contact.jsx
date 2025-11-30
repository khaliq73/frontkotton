import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/ui/ContactForm';

const Contact = () => {
  return (
    <div className="pt-[113px] min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <SectionTitle title="Contact Us" subtitle="Get in Touch" />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

