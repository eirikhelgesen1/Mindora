'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase/client'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<null | object>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
    })
  }, [])

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <img
              alt="Mindora logo"
              src="/mindora-logo-no-text.svg"
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-bold text-[var(--color-primary)]">Mindora</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="#features" className="text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors duration-200">
            Funksjoner
          </a>
          <a href="#target" className="text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors duration-200">
            For hvem
          </a>
          <a href="#cta" className="text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors duration-200">
            Kom i gang
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {user ? (
            <Link href="/dashboard" className="text-sm font-semibold text-gray-900">
              Gå til dashboard <span aria-hidden="true">→</span>
            </Link>
          ) : (
            <div className="flex items-center gap-4">
              <Link href="/auth/login" className="text-sm text-[var(--color-primary)] hover:text-[var(--color-accent)]">Logg inn</Link>
              <Link href="/auth/signup">
                <button className="bg-green-900 text-white px-4 py-2 rounded-md hover:bg-[var(--color-accent)] transition text-sm">
                  Registrer deg
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <img
                alt="Mindora logo"
                src="/mindora-logo-no-text.svg"
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold text-indigo-600">Mindora</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#features"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Funksjoner
                </a>
                <a
                  href="#target"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  For hvem
                </a>
                <a
                  href="#cta"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Kom i gang
                </a>
              </div>
              <div className="py-6">
                {user ? (
                  <Link
                    href="/dashboard"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Gå til dashboard
                  </Link>
                ) : (
                  <div className="space-y-3">
                    <Link
                      href="/auth/login"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Logg inn
                    </Link>
                    <Link
                      href="/auth/signup"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-white bg-green-900 hover:bg-indigo-700 text-center"
                    >
                      Registrer deg
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
