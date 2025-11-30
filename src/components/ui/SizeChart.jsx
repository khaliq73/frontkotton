import { motion } from 'framer-motion';

const SizeChart = () => {
  const sizes = [
    { size: 'S', chest: '38-40"', length: '27"', sleeve: '24"' },
    { size: 'M', chest: '40-42"', length: '28"', sleeve: '25"' },
    { size: 'L', chest: '42-44"', length: '29"', sleeve: '26"' },
    { size: 'XL', chest: '44-46"', length: '30"', sleeve: '27"' },
    { size: 'XXL', chest: '46-48"', length: '31"', sleeve: '28"' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8"
    >
      <h3 className="text-xl font-semibold mb-4">Size Chart</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="p-3 text-left font-semibold">Size</th>
              <th className="p-3 text-left font-semibold">Chest</th>
              <th className="p-3 text-left font-semibold">Length</th>
              <th className="p-3 text-left font-semibold">Sleeve</th>
            </tr>
          </thead>
          <tbody>
            {sizes.map((item, index) => (
              <motion.tr
                key={item.size}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="p-3 font-medium">{item.size}</td>
                <td className="p-3">{item.chest}</td>
                <td className="p-3">{item.length}</td>
                <td className="p-3">{item.sleeve}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500 mt-4">
        * Measurements are approximate. For custom sizing, please contact us via WhatsApp.
      </p>
    </motion.div>
  );
};

export default SizeChart;

