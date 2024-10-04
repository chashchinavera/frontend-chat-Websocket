const Main = () => {
  return (
    <div className="main">
      <form className="form">
        <label className="label">Join Chat</label>
        <input
          type="text"
          name="username"
          value=""
          className="input"
          onChange={() => {}}
          autoComplete="off"
          placeholder="Username"
        />
        <input
          type="text"
          name="room"
          value=""
          className="input"
          onChange={() => {}}
          autoComplete="off"
          placeholder="Room"
          
        />
      </form>
    </div>
  );
};

export default Main;
