const Header = ({ loggedInUser, handleLogout }) => {
  return (
    <header>
      <h1 className="header-logo">Students</h1>
      {loggedInUser ? (
        <>
          <h4>Welcome aboard, {loggedInUser.username}</h4>
          <button className="logout-btn" onClick={() => handleLogout()}>
            Logout
          </button>
        </>
      ) : null}
    </header>
  );
};

export default Header;
