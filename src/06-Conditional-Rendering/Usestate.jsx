const UserStatus = ({ loggedIn, isAdmin }) => {
  if (loggedIn && isAdmin) {
    return <h1>Welcome, Admin!</h1>;
  } else if (loggedIn) {
    return <h1>Welcome, User!</h1>;
  } else {
    return <h1>Please log in</h1>;
  }
};

function All() {
  return (
    <section>
    
    <UserStatus loggedIn ={true} isAdmin={true} />

    </section>
  )
}

export default All;
