import React from 'react';
import { Popover, Transition } from '@headlessui/react';
import { LABEL_URL_PAIRS } from '../../data/label-url-pairs';
import { ScreenRoutes } from './ScreenRoutes';
import Icon from '@mdi/react';
import { mdiClose, mdiMenu } from '@mdi/js';

export function Layout(): React.ReactElement {
  const items = LABEL_URL_PAIRS;

  return (
    <div className={'min-w-full min-h-[100vh] bg-gray-50'}>
      <div
        className={
          'relative lg:mx-auto lg:max-w-screen-lg xl:max-w-screen-xl p-4 lg:px-8 lg:pt-0 lg:pb-8 overflow-hidden'
        }
      >
        <div className={'hidden max-w-7xl mx-auto px-6 lg:block'}>
          <nav
            className={'relative flex items-center h-10 justify-center'}
            aria-label={'Global'}
          >
            <div className={'flex space-x-10'}>
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  className={'font-medium text-gray-500 hover:text-gray-900'}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <Popover className={'lg:hidden'}>
          <Popover.Button
            className={
              'absolute right-2 top-2 bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
            }
          >
            <span className={'sr-only'}>Open main menu</span>
            <Icon className={'h-6 w-6'} path={mdiMenu} aria-hidden={'true'} />
          </Popover.Button>

          <Transition
            as={React.Fragment}
            enter={'duration-150 ease-out'}
            enterFrom={'opacity-0 scale-95'}
            enterTo={'opacity-100 scale-100'}
            leave={'duration-100 ease-in'}
            leaveFrom={'opacity-100 scale-100'}
            leaveTo={'opacity-0 scale-95'}
          >
            <Popover.Panel
              focus={true}
              className={
                'absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden'
              }
            >
              <div
                className={
                  'relative rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'
                }
              >
                <div className={'absolute top-1 right-1'}>
                  <Popover.Button
                    className={
                      'bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                    }
                  >
                    <span className={'sr-only'}>Close menu</span>
                    <Icon
                      className={'h-6 w-6'}
                      path={mdiClose}
                      aria-hidden={'true'}
                    />
                  </Popover.Button>
                </div>
                <div className={'px-2 pt-2 pb-3'}>
                  {items.map((item) => (
                    <a
                      key={item.label}
                      href={item.url}
                      className={
                        'block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      }
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main className={'mx-auto'}>
          <ScreenRoutes />
        </main>
      </div>
    </div>
  );
}
