import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/fip-logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItem =
    "relative font-medium transition hover:text-brandGold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-brandGold after:transition-all hover:after:w-full";

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8 py-4">

        {/* Logo */}
{/* Logo */}
<Link to="/" className="flex items-center gap-3">
  <img
    src={logo}
    alt="FIP Consultancy Logo"
    className="h-14 w-auto sm:h-16"
  />

  <div className="leading-tight">
    <p className="text-xl sm:text-2xl font-black text-brandBlue tracking-wide">
      FIP
    </p>
    <p className="text-sm sm:text-base font-semibold text-brandGold -mt-1">
      Consultancy
    </p>
  </div>
</Link>


        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10 text-brandBlue">
          <NavLink to="/" className={navItem}>Home</NavLink>
          <NavLink to="/finance" className={navItem}>Finance</NavLink>
          <NavLink to="/investments" className={navItem}>Investments</NavLink>
          <NavLink to="/property" className={navItem}>Property</NavLink>
          <NavLink to="/contact" className={navItem}>Contact</NavLink>

          <Link
            to="/pricing"
            className="bg-brandGold text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 shadow-sm transition"
          >
            Get Started @ ₹499
          </Link>
        </div>

        {/* Mobile Button */}
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
            className="fixed inset-0 z-50 bg-black/40"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl px-6 py-6 flex flex-col"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-10">
                <img src={logo} alt="FIP Logo" className="h-10" />
                <button onClick={() => setOpen(false)}>
                  <X size={28} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-6 text-lg text-brandBlue font-medium">
                {[
                  ["Home", "/"],
                  ["Finance", "/finance"],
                  ["Investments", "/investments"],
                  ["Property", "/property"],
                  ["Contact", "/contact"],
                ].map(([label, path]) => (
                  <Link
                    key={label}
                    to={path}
                    onClick={() => setOpen(false)}
                    className="hover:text-brandGold transition"
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              {/* CTA */}
              <div className="mt-auto pt-10">
                <Link
                  to="/pricing"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center bg-brandGold text-white py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition"
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
