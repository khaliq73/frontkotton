import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const MobileMenu = ({ isOpen, onClose, menuItems }) => {
  const [openItem, setOpenItem] = useState(null);
  const [openSubItem, setOpenSubItem] = useState(null);

  const handleItemClick = (itemLabel) => {
    setOpenItem(openItem === itemLabel ? null : itemLabel);
    // Close sub-item when parent closes
    if (openItem === itemLabel) {
      setOpenSubItem(null);
    }
  };

  const handleSubItemClick = (itemLabel, subItemLabel) => {
    const subItemKey = `${itemLabel}-${subItemLabel}`;
    setOpenSubItem(openSubItem === subItemKey ? null : subItemKey);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Menu</h2>
                <button 
                  onClick={onClose} 
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <div key={item.label} className="border-b border-gray-100 last:border-0">
                    {item.dropdown ? (
                      <>
                        {/* Main Item with Dropdown */}
                        <button
                          type="button"
                          onClick={() => handleItemClick(item.label)}
                          className="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium text-left"
                        >
                          <span>{item.label}</span>
                          <ChevronRight
                            className={`w-5 h-5 transition-transform flex-shrink-0 ${
                              openItem === item.label ? 'rotate-90' : ''
                            }`}
                          />
                        </button>

                        {/* Dropdown Content */}
                        <AnimatePresence>
                          {openItem === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pr-2 py-2 space-y-1">
                                {item.dropdown.map((subItem) => (
                                  <div key={subItem.path || subItem.label}>
                                    {subItem.subDropdown ? (
                                      <>
                                        {/* Sub-Item with Nested Dropdown */}
                                        <button
                                          type="button"
                                          onClick={() => handleSubItemClick(item.label, subItem.label)}
                                          className="w-full flex items-center justify-between py-2 px-3 text-gray-600 hover:text-black hover:bg-gray-50 rounded-md transition-colors text-left"
                                        >
                                          <span className="text-sm">{subItem.label}</span>
                                          <ChevronRight
                                            className={`w-4 h-4 transition-transform flex-shrink-0 ${
                                              openSubItem === `${item.label}-${subItem.label}`
                                                ? 'rotate-90'
                                                : ''
                                            }`}
                                          />
                                        </button>

                                        {/* Nested Dropdown Content */}
                                        <AnimatePresence>
                                          {openSubItem === `${item.label}-${subItem.label}` && (
                                            <motion.div
                                              initial={{ opacity: 0, height: 0 }}
                                              animate={{ opacity: 1, height: 'auto' }}
                                              exit={{ opacity: 0, height: 0 }}
                                              transition={{ duration: 0.2 }}
                                              className="overflow-hidden"
                                            >
                                              <div className="pl-4 pr-2 py-1 space-y-1">
                                                {subItem.subDropdown.map((subSubItem) => (
                                                  <Link
                                                    key={subSubItem.path}
                                                    to={subSubItem.path}
                                                    onClick={onClose}
                                                    className="block py-2 px-3 text-sm text-gray-500 hover:text-black hover:bg-gray-50 rounded-md transition-colors"
                                                  >
                                                    {subSubItem.label}
                                                  </Link>
                                                ))}
                                              </div>
                                            </motion.div>
                                          )}
                                        </AnimatePresence>
                                      </>
                                    ) : (
                                      /* Sub-Item without Nested Dropdown */
                                      <Link
                                        to={subItem.path}
                                        onClick={onClose}
                                        className="block py-2 px-3 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-md transition-colors"
                                      >
                                        {subItem.label}
                                      </Link>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      /* Item without Dropdown */
                      <Link
                        to={item.path}
                        onClick={onClose}
                        className="block py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
