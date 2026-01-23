import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "/assets/fip-logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItem = ({ isActive }) =>
    `relative font-medium transition ${
      isActive ? "text-brandGold" : "text-brandBlue"
    } 
     after:absolute after:left-0 after:-bottom-1 after:h-[2px]
     after:bg-brandGold after:transition-all
     ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-brandGold/10 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">

        {/* ================= LOGO ================= */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="FIP Consultancy Logo"
            className="h-12 sm:h-14 w-auto"
          />
          <div className="leading-tight">
            <p className="text-xl sm:text-2xl font-black text-brandBlue tracking-wide">
              FIP
            </p>
            <p className="text-sm font-semibold text-brandGold -mt-1">
              Consultancy
            </p>
          </div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden lg:flex items-center gap-10">
          <NavLink to="/" className={navItem}>Home</NavLink>
          <NavLink to="/finance" className={navItem}>Finance</NavLink>
          <NavLink to="/investments" className={navItem}>Investments</NavLink>
          <NavLink to="/property" className={navItem}>Property</NavLink>
          <NavLink to="/projects" className={navItem}>Our Projects</NavLink>
          <NavLink to="/about" className={navItem}>About Us</NavLink>
          <NavLink to="/contact" className={navItem}>Contact</NavLink>

          {/* CTA */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/pricing"
              className="ml-4 bg-brandGold text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
            >
              Get Started @ ₹499
            </Link>
          </motion.div>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-brandBlue"
        >
          <Menu size={30} />
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b">
                <img src={logo} alt="FIP Logo" className="h-10" />
                <button onClick={() => setOpen(false)}>
                  <X size={28} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-6 px-6 py-8 text-lg font-medium">
                {[
                  ["Home", "/"],
                  ["Finance", "/finance"],
                  ["Investments", "/investments"],
                  ["Property", "/property"],
                  ["Our Projects", "/projects"],
                  ["About Us", "/about"],
                  ["Contact", "/contact"],
                ].map(([label, path]) => (
                  <Link
                    key={label}
                    to={path}
                    onClick={() => setOpen(false)}
                    className="text-brandBlue hover:text-brandGold transition"
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              {/* CTA */}
              <div className="mt-auto px-6 pb-8">
                <Link
                  to="/pricing"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center bg-brandGold text-white py-4 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg transition"
                >
                  Get Started @ ₹499
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
