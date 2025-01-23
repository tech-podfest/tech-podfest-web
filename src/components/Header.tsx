'use client'

import { Container } from '@/components/Container'
import Link from 'next/link'
import { motion } from 'framer-motion'
import logoImage from '@/images/logos/Tech_Podfest_logo.png'
import Image from 'next/image'

const navLinks = [
  { label: 'TPF25', href: '/tpf25', isActive: true },
  { label: 'TPF23', href: 'https://podfest.tech', isActive: false },
  // { label: 'TPF22', href: '/tpf22', isActive: false },
] as const

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <motion.div
        className="absolute inset-0 -z-10 backdrop-blur-[2px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <nav>
        <Container className="flex justify-between py-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <Link href="/" aria-label="Home">
              <Image
                src={logoImage}
                className="size-32"
                width={1000}
                height={1000}
                alt="Tech Podfest Logo"
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-8 pr-4"
          >
            {navLinks.map(({ label, href, isActive }) => (
              <Link
                key={href}
                href={href}
                className={`group relative text-lg font-medium transition-colors ${
                  isActive
                    ? 'text-cyan-500 dark:text-cyan-400'
                    : 'text-slate-500/90 hover:text-cyan-500 dark:text-slate-300/90 dark:hover:text-cyan-400'
                }`}
              >
                {label}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </motion.div>
        </Container>
      </nav>
    </header>
  )
}
