import React from 'react';
import './Answer.css'
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Answer = ({ router, name }) => {
      const { question, correctAnswer, options } = router;

      const handleClick = (answer) => {
            if (answer === correctAnswer) {
                  toast('Right')
            } else {
                  toast('Wrong')
            }
      }

      const handleIconClick = (correctAnswer) => {
            if (correctAnswer) {
                  toast(correctAnswer)
            }
      }

      return (
            // <div>
            <div className="col-lg-8">
                  <h1>{name}</h1>
                        <div className="card mt-5">
                              <div className="card-header">
                                    <div className='d-flex justify-content-between'>
                                    <p className='mb-0'>{question}</p>
                                    <EyeIcon onClick={() => handleIconClick(correctAnswer)} className="text-blue-500 icons"></EyeIcon>
                                    </div>
                              
                                    </div>
                                    <div className="card-body">
                                          <div className="row justify-content-center">
                                                <div className="col-lg-5 border m-2">
                                          <div className='bg_hover' >
                                                <label onClick={() => handleClick(options[0])} className='d-flex align-items-center justify-content-around p-3'  >
                                                      <input name='radio' type="radio" />
                                                      <p className='m-0'>{options[0]}</p>
                                                </label>
                                                      </div>
                                                      </div>
                                                      <div className="col-lg-5 border m-2">
                                          <div className='bg_hover' >
                                                <label onClick={() => handleClick(options[1])} className='d-flex align-items-center justify-content-around p-3 ' >
                                                <input name='radio' type="radio" />
                                                <p className='m-0'>{options[1]}</p>
                                                </label>
                                          </div>
                                                      </div>
                                                      <div className="col-lg-5 border m-2">
                                          <div className='bg_hover' >
                                               <label onClick={() => handleClick(options[2])} className='d-flex align-items-center justify-content-around p-3 ' >
                                               <input name='radio' type="radio" />
                                                <p className='m-0'>{options[2]}</p>
                                               </label>
                                                            </div>
                                                      </div>
                                                      <div className="col-lg-5 border m-2">
                                          <div className=" bg_hover" >
                                                <label onClick={() => handleClick(options[0])} className='d-flex align-items-center justify-content-around p-3'>
                                                <input name='radio' type="radio" />
                                                                  <p className='m-0'>{options[3]}</p>
                                                </label>
                                                            </div>
                                                      </div>
                                          </div>
                                    </div>
                              </div>
                  <ToastContainer />
                  </div>
            // </div>
      );
};

export default Answer;




