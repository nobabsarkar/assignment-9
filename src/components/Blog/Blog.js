import Accordion from 'react-bootstrap/Accordion';

function Blog() {
      return (
            <div className="container">
                  <div className="row justify-content-center">
                        <div className="col-lg-6">
                              <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                          <Accordion.Header>What is the Purpose of React Router?</Accordion.Header>
                                          <Accordion.Body>
                                                React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL
                                          </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                          <Accordion.Header>How Does Context Api Work?</Accordion.Header>
                                          <Accordion.Body>
                                                The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                                          </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                          <Accordion.Header>What is useref in React?</Accordion.Header>
                                          <Accordion.Body>
                                                Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with, React will set its .current property to the corresponding DOM node whenever that node changes.
                                          </Accordion.Body>
                                    </Accordion.Item>
                              </Accordion>
                        </div>
                  </div>
            </div>
      );
}

export default Blog;