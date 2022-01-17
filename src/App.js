import React from "react";

import styles from './App.module.css';

import Card from './components/Card'

function App() {
  return (
      <div className={styles.app}>
        <Card >
            <h1>hello</h1>
        </Card>
      </div>
  );
}

export default App;
