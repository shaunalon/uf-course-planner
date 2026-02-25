function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>🐊 UF Course Planner</h1>
      <p style={styles.subtitle}>Plan your 4-year academic journey</p>
    </header>
  );
}

const styles = {
  header: {
    textAlign: 'center',
    padding: '2rem',
    background: 'linear-gradient(135deg, #0021A5 50%, #FA4616 50%)',    color: 'white',
    marginBottom: '2rem',
    borderRadius: '8px'
  },
  title: {
    fontSize: '2.5rem',
    margin: '0 0 0.5rem 0'
  },
  subtitle: {
    fontSize: '1.1rem',
    margin: 0,
    opacity: 0.9
  }
};

export default Header;