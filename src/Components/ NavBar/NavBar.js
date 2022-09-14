import React from "react"
import NavBarCss from "../../Assets/css/NavBar.css"
import CartWidget from "./CartWidget"
import {BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ItemListContainer from '../ItemListContainer'

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    
    <Popover className="relative bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <Link to="/" style={{textDecoration:'none'}}>
                <i className="ri-computer-line" id="logoNavBar"></i>
                <p className="logoTitulo">Hard Solutions</p>
              </Link>
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <a href="/category/notebooks"
                    // className={classNames(
                    //   open ? 'text-gray-900' : 'text-gray-500',
                    //   'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    // )}
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}
                  >
                     
                    <span>Notebooks</span>
                    </a>
                    
                  
                  

                 
                </>
              )}
            </Popover>

            <a href="/category/Pc-armadas" className="text-base font-medium text-gray-500 hover:text-gray-900">
              PC Armadas
            </a>

            <a href="/category/hardware" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Hardware
            </a>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <a href="/category/software"
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}
                  >
                    <span>Software</span>
                    </a>
                  
                  
                 
                    
          
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-gray-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-gray-700"
            >
              Iniciar Sesion
            </a>
        
           
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900" id="divCart">
              <CartWidget />
            </a>
            
          </div>
        </div>
      </div>
      
   
     
    </Popover>
  
  )
}

