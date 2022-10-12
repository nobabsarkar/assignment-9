import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Assignment from '../Assignment/Assignment';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
      const recharts = useLoaderData();
      console.log(recharts.data)
      const data = [
            {
                  total: 8,

            },
            {
                  total: 9,

            },
            {
                  total: 8,

            },
            {
                  total: 11,

            },
      ];
      return (
            <div className='container'>
                  <div className="row">
                        <div className="col-lg-8">
                              <h2>Statistics</h2>


                              <LineChart width={500} height={400} data={data}>
                                    <Line type="monotone" dataKey='total' stroke="#82ca9d" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                              </LineChart>
                  
                              {/* {
                                    recharts.data.map(rechart => <Assignment key={rechart}
                                    rechart={rechart}
                                    ></Assignment>)
                              } */}
                              
                        </div>
                  </div>
            </div>
      );
};

export default Statistics;