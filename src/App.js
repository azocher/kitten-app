import React from 'react';
import logo from './logo.svg';
import './App.css';
import KittenBio from './KittenBio'

const catInfo = {
  Pickles: [
    "Loves trash",
    "Loves making toys out of trash",
    "Has gingivitis"
  ],
  Pierre: [
    "Pierre is a fictional cat"
  ],
  Oreo: [
    "Heavy",
    "Grumpy",
    "Not a cookie",
    "Sometimes goes by Oscar"
  ]
}

function App() {
  return (
    <div className="App">
      <KittenBio name={"Pickles"} catInfo={catInfo.Pickles} />
      <KittenBio name={"Pierre"} catInfo={catInfo.Pierre} />
      <KittenBio name={"Oreo"} catInfo={catInfo.Oreo} />
    </div>
  );
}

export default App;
