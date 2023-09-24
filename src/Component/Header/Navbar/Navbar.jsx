import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
      return (
            <div>
                  <nav className='flex justify-between items-center shadow-md px-5 py-2'>
                        <Logo></Logo>
                        <ul className='flex gap-5'>
                              <li>
                                    <NavLink to='/'
                                          className={({ isActive, isPending }) =>
                                                isActive
                                                      ? "text-red-600 underline text-bold text-1xl"
                                                      : isPending
                                                            ? "pending"
                                                            : ""
                                          }
                                    >Home</NavLink>
                              </li>
                              <li>
                                    <NavLink to='/donation'
                                          className={({ isActive, isPending }) =>
                                                isActive
                                                      ? "text-red-600 underline text-bold text-1xl"
                                                      : isPending
                                                            ? "pending"
                                                            : ""
                                          }
                                    >Donation</NavLink>
                              </li>
                              <li>
                                    <NavLink to='/statistics'
                                          className={({ isActive, isPending }) =>
                                                isActive
                                                      ? "text-red-600 underline text-bold text-1xl"
                                                      : isPending
                                                            ? "pending"
                                                            : ""
                                          }
                                    >Statistics</NavLink>
                              </li>
                        </ul>
                  </nav>
            </div>
      );
};

export default Navbar;