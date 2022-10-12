import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Answer from '../Answer/Answer';

const Quiz = () => {
      const routers = useLoaderData();
      return (
            <div className='container'>
                  <div className="row justify-content-center">
                        {
                              routers.data.questions.map(router => <Answer key={router.id}
                                    router={router}
                                    name={routers.data.name}
                              ></Answer>)
                        }
                  </div>
            </div>
      );
};

export default Quiz;