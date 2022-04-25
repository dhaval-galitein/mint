import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import TabContainer from '../container/TabContainer';
import Home from './Home';
import ToDo from './ToDo';

const Pages = () => {
  return (
    <TabContainer>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<ToDo />} />
        </Routes>
      </Router>
    </TabContainer>
  );
};

export default Pages;
