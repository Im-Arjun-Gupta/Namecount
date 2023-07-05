import React, { useEffect, useState } from 'react';
import './App.css';

const MockServiceData = [
  { name: 'Arjun' },
  { name: 'Vaidik' },
  { name: 'Harsh' },
  { name: 'Arjun' },
  { name: 'Arjun' },
  { name: 'Arjun' },
  { name: 'Vaidik' },
  { name: 'Vaidik' },
  { name: 'Arjun' },
  { name: 'Arjun' },
  { name: 'Arjun' },
  { name: 'Arjun' },
  { name: 'Arjun' },
  { name: 'Arjun' },
  { name: 'Arjun' },
];

function App() {
  const [data, setData] = useState([]);

  let arr = [];

  useEffect(() => {
    setData(MockServiceData);
  }, []);

  const getCount = (name) => {
    return data.filter((item) => item.name === name).length;
  };

  const getColor = (duplicateCount) => {
    if (duplicateCount > 0 && duplicateCount < 3) {
      return 'red';
    } else if (duplicateCount >= 3 && duplicateCount < 10) {
      return 'yellow';
    } else if (duplicateCount >= 10) {
      return 'green';
    }
    return 'white';
  };
  return (
    <div className="App">
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Duplicates</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} style={{ background: getColor(getCount(item.name)) }}>
            <td>{item.name}</td>
            <td>{getCount(item.name)}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default App;
