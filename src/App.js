import React from "react";

import styles from './App.module.css';

import Card from './components/Card'
import Info from './components/Info'

function App() {
  return (
      <div className={styles.app}>
        <Card >
            <Info />
            <h1>about</h1>
            <h1>interest</h1>
            <h1>footer</h1>
        </Card>
      </div>
  );
}

export default App;
