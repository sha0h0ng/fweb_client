import UserDetails from './UserDetails';

function UserProfile({ user }) {
  return (
    <div>
      <h1>
        Hello {user.name} {user.email}
      </h1>

      <UserDetails name={user.name} />
    </div>
  );
}

export default UserProfile;
