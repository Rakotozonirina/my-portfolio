import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: "Page d'acceuil", href: '#', current: false},
  { name: 'Sur moi', href: '#', current: false},
  { name: 'Projet', href: '#', current: false},
  { name: 'Reconnaissance', href: '#', current: false},
  { name: 'Contact', href: '#', current: false},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center sm:max-md:grid sm:max-md:content-center sm:max-md:justify-center sm:max-md:relative max-sm:grid max-sm:content-center max-sm:justify-center justify-between">
                <div>
                    <h1 className='text-[#E0F4FF] font-semibold text-2xl' >Logo</h1>
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
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                            item.current ? 'bg-cyan-500 text-fuchsia-500' : 'text-[#E0F4FF] hover:bg-gray-700 hover:text-fuchsia-500',
                            'block rounded-md px-3 py-2 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute sm:max-md:absolute sm:max-md:right-0 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button className="w-[40px] cursor-pointer h-[28px] p-[2px] flex justify-between items-center border border-neutral-500 dark:bg-slate-900 bg-zinc-300 rounded-[30px] relative">
                        <div className={`w-[15px] absolute h-[15px]  bg-indigo-950 dark:bg-white duration-200 rounded-full`}></div>
                    </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-fuchsia-500',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}