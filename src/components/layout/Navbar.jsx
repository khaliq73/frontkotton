import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, ChevronDown, Search, ShoppingBag, User } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'BUY 1, GET 1 FREE', path: '/collection/buy-1-get-1-free' },
    { label: 'NEW IN', path: '/collection/new-arrivals' },
    { label: 'BEST SELLERS', path: '/collection/best-sellers' },
    {
      label: 'COLLECTIONS',
      path: '/collections',
      dropdown: [
        { label: 'TIMELESS', path: '/collection/timeless' },
        { label: 'LEGACY LANE', path: '/collection/legacy-lane' },
        { label: 'BEYOND THE STREETS', path: '/collection/beyond-the-streets' },
        { label: 'GAME CHANGER', path: '/collection/game-changer' },
      ],
    },
    {
      label: 'TOPS',
      path: '/collection/tops',
      dropdown: [
        {
          label: 'HOODIES & SWEATSHIRTS',
          path: '/collection/hoodies-sweatshirts',
          subDropdown: [
            { label: 'HOODIES', path: '/collection/hoodies' },
            { label: 'SWEATSHIRTS', path: '/collection/sweatshirts' },
          ],
        },
        { label: 'VARSITY JACKETS', path: '/collection/varsity-jackets' },
        { label: 'CO-ORD SET', path: '/collection/co-ord-set' },
        {
          label: 'T-SHIRTS',
          path: '/collection/t-shirts',
          subDropdown: [
            { label: 'OVERSIZED T-SHIRTS', path: '/collection/oversized-t-shirts' },
            { label: 'POLO T-SHIRTS', path: '/collection/polo-t-shirts' },
            { label: 'BLANKS', path: '/collection/blanks' },
          ],
        },
        { label: 'OVERSIZED SHIRTS', path: '/collection/oversized-shirts' },
        { label: 'TANKS', path: '/collection/tanks' },
      ],
    },
    { label: 'BOTTOMS', path: '/collection/bottoms' },
    {
      label: 'KOTN BASICS',
      path: '/collection/kotn-basics',
      dropdown: [
        { label: 'SHORTS', path: '/collection/shorts' },
        { label: 'BOXER SHORTS', path: '/collection/boxer-shorts' },
        { label: 'PAJAMAS', path: '/collection/pajamas' },
      ],
    },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed left-0 right-0 z-50 transition-all duration-300 w-full ${
          isScrolled ? 'top-0 bg-white shadow-md' : 'top-[33px] bg-white'
        }`}
      >
        <div className="w-full max-w-full overflow-x-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
              <Link to="/" className="flex items-center flex-shrink-0 z-10">
                <span className="text-xl sm:text-2xl font-bold whitespace-nowrap">Kotton Fruit</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-4 xl:gap-6 absolute left-1/2 -translate-x-1/2">
                {menuItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.dropdown ? (
                      <button
                        className={`flex items-center gap-1 text-xs md:text-sm font-medium transition-colors uppercase whitespace-nowrap ${
                          location.pathname === item.path
                            ? 'text-black'
                            : 'text-gray-700 hover:text-black'
                        }`}
                      >
                        {item.label}
                        <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        className={`flex items-center gap-1 text-xs md:text-sm font-medium transition-colors uppercase whitespace-nowrap ${
                          location.pathname === item.path
                            ? 'text-black'
                            : 'text-gray-700 hover:text-black'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}

                    {/* Dropdown Menu with gap bridge */}
                    {item.dropdown && openDropdown === item.label && (
                      <>
                        {/* Gap bridge to prevent dropdown from closing */}
                        <div className="absolute top-full left-0 w-full h-2" />
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-lg py-2 min-w-[220px] z-50"
                          onMouseEnter={() => setOpenDropdown(item.label)}
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          {item.dropdown.map((subItem) => (
                            <div key={subItem.path} className="relative group">
                              <Link
                                to={subItem.path}
                                className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                              >
                                {subItem.label}
                                {subItem.subDropdown && <ChevronDown className="w-4 h-4 rotate-[-90deg]" />}
                              </Link>
                              {subItem.subDropdown && (
                                <>
                                  {/* Gap bridge for sub-dropdown */}
                                  <div className="absolute left-full top-0 w-2 h-full" />
                                  <div className="absolute left-full top-0 ml-0 bg-white shadow-lg rounded-lg py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                                    {subItem.subDropdown.map((subSubItem) => (
                                      <Link
                                        key={subSubItem.path}
                                        to={subSubItem.path}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                                      >
                                        {subSubItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>
                          ))}
                        </motion.div>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Icons */}
              <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0 z-10">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Search className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <User className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                  <ShoppingBag className="w-5 h-5" />
                  <span className="absolute top-0 right-0 w-4 h-4 bg-black text-white text-xs rounded-full flex items-center justify-center">
                    0
                  </span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 flex-shrink-0 z-10"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        menuItems={menuItems}
      />
    </>
  );
};

export default Navbar;
