import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';
import img from '../image/project.jpg'

function Home() {
      const routers = useLoaderData();
      return (
            <div>
                  <div className="container mt-4">
                        <div className="row justify-content-center d-flex align-items-center">
                              {/* <Row xs={1} md={3} className="g-4 justify-content-center">
                                    {Array.from({ length: 1 }).map((_, idx) => (
                                          <Col>
                                                <Card>
                                                      <Card.Img variant="top" src={img} />
                                                      <Card.Body>
                                                            <Card.Title>New Project</Card.Title>
                                                            <Card.Text>
                                                                  i am creating a new react router project
                                                            </Card.Text>
                                                      </Card.Body>
                                                </Card>
                                          </Col>
                                    ))}
                              </Row> */}
                              <div className="col-lg-4">
                                    <div className='w-100'>
                                          <img className='w-100' src={img} alt="" />
                                    </div>
                              </div>
                              <div className="col-lg-4">
                                    <h2>I am Learning Web Developer</h2>
                                    <p>i am creating a new react router project</p>
                                    <button className='btn btn-warning'>Demo Button</button>
                              </div>

                        </div>
                  </div>
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
}

export default Home;