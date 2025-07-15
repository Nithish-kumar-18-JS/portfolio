'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import MaterialSymbolsMenu from './icons/MaterialSymbolsMenu'
import MaterialSymbolsMenuOpen from './icons/MaterialSymbolsMenuOpen'
import { label } from 'framer-motion/client'
const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'My Projects' },
  { href: '/contact', label: 'Contact' },
  { href: '/about' , label: 'About Me'}
]

export default function ResponsiveHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div>
      {/* Desktop Navigation */}
      <nav className="flex justify-center py-6 max-sm:hidden max-md:hidden">
        <motion.ul
          initial="hidden"
          animate="visible"
          className="flex gap-10"
        >
          {menuItems.map((item, i) => {
            const isActive = pathname === item.href

            return (
              <motion.li
                custom={i}
                animate="visible"
                initial="hidden"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { 
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: i * 0.5,
                      type:"keyframes",
                      stiffness: 300,
                      damping: 20,
                    }
                  }
                }}
                key={item.label}
              >
                <a
                  href={item.href}
                  className={`relative text-[28px] font-bold text-white select-none 
                    ${isActive ? 'border-b-4 border-white' : ''}
                  `}
                >
                  {item.label}
                </a>
              </motion.li>
            )
          })}
        </motion.ul>
      </nav>

      {/* Mobile Hamburger Toggle */}
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
                <MaterialSymbolsMenu className="w-14 h-14 text-white" />
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
                <MaterialSymbolsMenuOpen className="w-14 h-14 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className="lg:hidden fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-black/90 z-40">
        <AnimatePresence>
          {open && (
            <motion.ul
              className="flex flex-col gap-6 text-center"
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {menuItems.map((item, i) => {
                const isActive = pathname === item.href

                return (
                  <motion.li
                    key={item.label}
                    custom={i}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { 
                        opacity: 1,
                        scale: 1,
                        transition: {
                          delay: i * 0.1,
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }
                      }
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`relative text-[28px] font-bold text-white select-none 
                        ${isActive ? 'border-b-4 border-white' : ''}
                      `}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                )
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
