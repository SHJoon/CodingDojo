import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Tab from './components/Tab';

function App() {
  const [tabs, setTabs] = useState([
    {
      label:"Tab1",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      isSelected: false
    },
    {
      label:"Tab2",
      content:"Cras ut turpis semper, pretium velit in, scelerisque quam.",
      isSelected: false
    },
    {
      label:"Tab3",
      content:"Nulla facilisi. Donec nec elementum diam.",
      isSelected: false
    }
  ]);

  return (
    <div className="App">
      <div>
        {tabs.map((tab, i) => {
          return(
            <Tab
              selectedIdx={i}
              label={tab.label}
              tabs={tabs}
              setTabs={setTabs}
            />
          )
        })}
      </div>
      <div>
        {tabs.map((tab) => {
          return(
            tab.isSelected && <div>{ tab.content }</div>
        )})}
      </div>
    </div>
  );
}

export default App;
