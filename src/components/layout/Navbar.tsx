import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../common/LanguageSwitcher';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            onClick={() => setIsOpen(false)}
          >
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
              <rect width="48" height="48" rx="12" fill="#2C41EB"/>
              <path d="M23.9998 8C15.1634 8 8 15.1634 8 24.0002C8 32.8366 15.1634 40 23.9998 40C32.8366 40 40 32.8366 40 24.0002C40 15.1634 32.8366 8 23.9998 8Z" fill="#2C41EB"/>
              <path d="M31 16H17V19H31V16Z" fill="white"/>
              <path d="M18 21H30V24H18V21Z" fill="#FF8800"/>
              <path d="M24 26C21.2386 26 19 28.2386 19 31V36H24H29V31C29 28.2386 26.7614 26 24 26Z" fill="white"/>
            </svg>
            <span className="text-xl font-semibold text-primary-700">LawYaar</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium ${isActive('/') ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'}`}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium ${isActive('/about') ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'}`}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/services" 
              className={`text-sm font-medium ${isActive('/services') ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'}`}
            >
              {t('nav.services')}
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium ${isActive('/contact') ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'}`}
            >
              {t('nav.contact')}
            </Link>
            
            <LanguageSwitcher />

            <div className="flex items-center space-x-4">
              <Link to="/lawyer/login" className="btn-outline text-sm">
                {t('nav.lawyer_login')}
              </Link>
              <Link to="/client/login" className="btn-primary text-sm">
                {t('nav.client_login')}
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              className="text-neutral-600 hover:text-primary-600 focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-4 py-5 space-y-4">
            <Link 
              to="/" 
              className={`block text-base font-medium ${isActive('/') ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'}`}
              onClick={toggleMenu}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/about" 
              className={`block text-base font-medium ${isActive('/about') ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'}`}
              onClick={toggleMenu}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/services" 
              className={`block text-base font-medium ${isActive('/services') ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'}`}
              onClick={toggleMenu}
            >
              {t('nav.services')}
            </Link>
            <Link 
              to="/contact" 
              className={`block text-base font-medium ${isActive('/contact') ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'}`}
              onClick={toggleMenu}
            >
              {t('nav.contact')}
            </Link>
            
            <div className="pt-4 space-y-3">
              <Link 
                to="/lawyer/login" 
                className="btn-outline w-full flex justify-center"
                onClick={toggleMenu}
              >
                {t('nav.lawyer_login')}
              </Link>
              <Link 
                to="/client/login" 
                className="btn-primary w-full flex justify-center"
                onClick={toggleMenu}
              >
                {t('nav.client_login')}
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;