import './App.css';

import ProfilePage from './ProfilePage';


function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
      <ProfilePage userData={userData} />
    </div>
  );
}

export default App;
