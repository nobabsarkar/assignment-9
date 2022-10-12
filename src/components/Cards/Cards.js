import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Cards.css'
import {ArrowSmallRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const Cards = ({ router }) => {
      const { name, logo, total } = router || {};
      return (
            <div className='col-lg-3 mt-5 mb-3'>
                  <div className='border p-3 card_border'>
                        <img className='image_bg w-100' src={logo} alt="" />
                        <h2>{name}</h2>
                        <h5>Quiz: {total}</h5>
                        <button className='btn btn-warning icon_btn '>
                              <Link to={`/quiz/${router.id}`}>
                                    Quiz
                                    <ArrowSmallRightIcon className="text-blue-500 icon"></ArrowSmallRightIcon>
                              </Link>
                        </button>
                  </div>
            </div>
      );

}
export default Cards
