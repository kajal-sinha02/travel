import React from 'react';

const Heading = ({ title }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>{title}</h1>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'left',
    margin: '20px 0',
  },
  heading: {
    fontSize: '28px', // Adjust the size as needed
    fontWeight: 'bold',
    lineHeight: '1.2',
    fontFamily: 'Nunito, sans-serif', // Matching your preferences
    marginBottom : "50px"
  },
};

export default Heading;
