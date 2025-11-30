import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Truck } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';

const About = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Premium Quality',
      description: 'We source only the finest materials and maintain strict quality control standards.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Trusted by Many',
      description: 'Hundreds of businesses trust us for their wholesale streetwear needs.',
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping to get your orders to you on time.',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Reliable Service',
      description: 'Consistent quality and excellent customer service you can count on.',
    },
  ];

  return (
    <div className="pt-[113px] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=600&fit=crop"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Kotton Wholesale</h1>
            <p className="text-xl max-w-2xl">
              Your trusted partner for premium streetwear wholesale
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none mb-12"
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kotton Wholesale was founded with a simple mission: to provide businesses with
                high-quality streetwear at competitive wholesale prices. We understand the
                challenges of running a retail business, and we're here to make it easier.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our team has years of experience in the fashion industry, and we've built
                relationships with trusted manufacturers to bring you the best products. We
                carefully curate our collections to ensure every item meets our high standards
                for quality, style, and value.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you're a small boutique or a large retailer, we're committed to helping
                you succeed. From competitive pricing to flexible MOQ options, we work with you
                to meet your business needs.
              </p>
            </motion.div>

            <SectionTitle title="Why Choose Us" subtitle="Our Advantages" />

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-gray-50 rounded-lg"
                >
                  <div className="text-black mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <SectionTitle title="Our Values" subtitle="What We Stand For" />
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Quality First',
                  description: 'We never compromise on quality. Every product is carefully inspected before shipping.',
                },
                {
                  title: 'Customer Focus',
                  description: "Your success is our success. We're here to support your business every step of the way.",
                },
                {
                  title: 'Fair Pricing',
                  description: 'Transparent, competitive pricing with no hidden fees. What you see is what you get.',
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

