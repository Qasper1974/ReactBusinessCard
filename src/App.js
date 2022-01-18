import React from "react";

import styles from './App.module.css';

import Card from './components/Card'
import Info from './components/Info'
import Footer from './components/Footer'

function App() {
  return (
      <div className={styles.app}>
        <Card >
            <Info />
            <h2 className={styles.title}>About</h2>
            <p className={styles.paragraph}>ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus</p>
            <h2 className={styles.title}>Interest</h2>
            <p className={styles.paragraph}>malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget</p>
            <Footer />
        </Card>
      </div>
  );
}

export default App;
