import Header from './components/Header';

function App() {
  return (
    <div style={styles.container}>
      <Header />
      <p style={styles.text}>
        Successfully set up!
        </p>
    </div>
  );
}
const styles = {
  container:{
    maxWidth: '1200px',
    margin: '0 auto', 
    padding: '1rem'
  },
  text: {
    textAlign: 'center',
    fontSize: '1.1rem'
  }
};

export default App;