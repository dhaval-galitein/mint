import React from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { v4 as uuidv4 } from 'uuid';
import 'react-tabs/style/react-tabs.css';
import { Button, Col, Nav, Row, Tab, Tabs } from 'react-bootstrap';

const TabContainer = ({ children }) => {
  const [tabs, setTabs] = React.useState([{ id: uuidv4(), title: 'Tab 1' }]);
  const [count, setCount] = React.useState(1);
  const [key, setKey] = React.useState(tabs?.[0]?.id);

  const handleAddTab = () => {
    const id = uuidv4();
    setTabs([...tabs, { title: `tab ${count + 1}`, id }]);
    setCount((prevCount) => prevCount + 1);
    setKey(id);
  };

  const handleRemoveTab = (id) => {
    const tempTabs = tabs.filter((item) => item?.id !== id);
    if (tempTabs.length) {
    } else {
      tempTabs.push({ id: uuidv4(), title: `Tab ${count + 1}` });
      setCount((prevCount) => prevCount + 1);
    }
    setKey(key === id ? tempTabs[0]?.id : key);
    setTabs([...tempTabs]);
  };

  if (true) {
    return (
      <div>
        <Tab.Container id="left-tabs-example" activeKey={key}>
          <Row>
            <Col sm={12}>
              <Nav variant="pills" style={{ cursor: 'default' }}>
                {tabs.map(({ id, title }) => (
                  <Nav.Item>
                    <Nav.Link eventKey={id} onClick={() => setKey(id)}>
                      {title}
                      <span
                        onClick={(e) => handleRemoveTab(id)}
                        style={{ marginLeft: 10, cursor: 'pointer' }}
                      >
                        ❌
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                ))}
                <Nav.Item onClick={handleAddTab}>
                  <Nav.Link style={{ cursor: 'pointer' }}>+</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                {tabs.map(({ id }) => (
                  <Tab.Pane eventKey={id}>{children}</Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }

  return (
    <Tabs>
      <TabList>
        {tabs.map(({ title, id }) => (
          <Tab key={id}>
            {title}
            <Button onClick={() => handleRemoveTab(id)} variant="outline-dark">
              ✖
            </Button>
          </Tab>
        ))}
        <Button size="sm" onClick={handleAddTab} variant="outline-primary">
          +
        </Button>
      </TabList>
      {tabs.map(({ id }) => (
        <TabPanel key={id}>{children}</TabPanel>
      ))}
    </Tabs>
  );
};

export default TabContainer;
