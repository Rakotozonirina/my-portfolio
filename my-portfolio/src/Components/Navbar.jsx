import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"
import Lang from './Lang'
import LogoZo from '../Assets/Acceuil/zonirina-removebg-preview.png'
import Switch from './Switch'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const { t, i18n } = useTranslation();
  const navigation = [
    { name: t('acceuil'), href: '/', current: false},
    { name: 'Sur_moi', href: '/apropos', current: false},
    { name: 'Projet', href: '/projet', current: false},
    { name: 'Reconnaissance', href: '/reconnaissance', current: false},
    { name: 'Contact', href: '/contact', current: false},
  ]
  return (
    <Disclosure as="nav" className="bg-gray-800 z-20 dark:bg-gradient-to-b dark:from-indigo-200 dark:to-fuchsia-300 fixed top-0 left-0 w-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center sm:max-md:grid sm:max-md:content-center sm:max-md:justify-center sm:max-md:relative max-sm:grid max-sm:content-center max-sm:justify-center justify-between">
                <div>
                    <img src={LogoZo} alt="logo Zo" className='block object-cover h-[20dvh]' />
                </div> 
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center max-sm:justify-end sm:max-md:justify-end md:max-lg:justify-end lg:max-xl:justify-end xl:max-2xl:justify-end sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                            item.current ? 'bg-cyan-500 text-fuchsia-500' : 'text-[#E0F4FF] hover:bg-gray-700 hover:text-fuchsia-500 dark:hover:text-white',
                            'block rounded-md px-3 py-2 text-base font-Marker font-medium dark:text-neutral-700'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Switch/>
              <Lang/>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 dark:hover:text-white hover:text-fuchsia-500',
                    'block rounded-md px-3 py-2 text-base font-medium dark:text-neutral-700 font-Marker'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}