import React from 'react';
import Card from './components/Card/Card';
import Table from './components/Table/Table';
import dummyData from './dummyData/dummyData';

const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Card>
        <Table data={dummyData} upcase={['status']} hasCheckbox />
      </Card>
    </div>
  );
};

export default App;
