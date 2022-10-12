import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';

const AllQuiz = () => {
      const routers = useLoaderData();
      return (
            <div>
                  <div className="container">
                        <div className="row g-3">
                              {
                                    routers.data.map(router => <Cards key={router.id}
                                          router={router}
                                         
                                    ></Cards>)
                              }
                        </div>
                  </div>
            </div>
      );
};

export default AllQuiz;