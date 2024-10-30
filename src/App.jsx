import Greeting from './components/Greeting';
import UserProfile from './components/UserProfile';

function App() {
  const userObject = {
    name: 'John',
    email: 'john@gmail.com',
    phone: 1234567890,
  };

  return (
    <div>
      <h1>Hello World!</h1>
      <Greeting />
      <UserProfile user={userObject} />
    </div>
  );
}

export default App;
