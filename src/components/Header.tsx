'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import MaterialSymbolsMenu from './icons/MaterialSymbolsMenu'
import MaterialSymbolsMenuOpen from './icons/MaterialSymbolsMenuOpen'
import { motion, AnimatePresence } from 'framer-motion';
export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <div>
    <nav className="flex justify-center py-6 max-sm:hidden max-md:hidden">
      <ul className="flex gap-10">
        {menuItems.map((item) => {
          const isActive = pathname === item.href

          return (
            <li key={item.label}>
              <a
                href={item.href}
                className={`relative text-[28px] font-bold text-white text-glow-white-500 select-none font-family: 'Poppins', sans-serif
                  ${isActive ? 'border-b-4 border-white' : ''}
                `}
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
    {/* Mobile responsive menu */}
     <div className="lg:hidden fixed top-6 right-6 z-50">
     <button onClick={() => setOpen(!open)} className="relative w-14 h-14">
  <AnimatePresence mode="wait">
    {!open ? (
      <motion.div
        key="menu"
        initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0"
      >
        <MaterialSymbolsMenu className="w-14 h-14" />
      </motion.div>
    ) : (
      <motion.div
        key="menuOpen"
        initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0"
      >
        <MaterialSymbolsMenuOpen className="w-14 h-14" />
      </motion.div>
    )}
  </AnimatePresence>
</button>
    </div>
    <div className="lg:hidden absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
        <AnimatePresence>
        {open && (
            <motion.ul className="flex flex-col gap-4">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href

                    return (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className={`relative text-[28px] font-bold text-white text-glow-white-500 select-none font-family: 'Poppins', sans-serif
                                  ${isActive ? 'border-b-4 border-white' : ''}
                                `}
                            >
                                {item.label}
                            </a>
                        </li>
                    )
                })}
            </motion.ul>
        )}
        </AnimatePresence>
    </div>
    </div>
  )
}
