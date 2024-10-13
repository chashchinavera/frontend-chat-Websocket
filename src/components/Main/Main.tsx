import { Link } from "react-router-dom";
import { useState } from "react";

const Main = () => {
  const [values, setValues] = useState({
    name: "",
    room: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="main">
      <form className="form">
        <label className="label">Join Chat</label>
        <input
          type="text"
          name="name"
          value={values.name}
          className="input"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Username"
          required
        />
        <input
          type="text"
          name="room"
          value={values.room}
          className="input"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Room"
          required
        />
        <Link to={`/chat?name=${values.name}&room=${values.room}`}>
          {values.name && values.room ? (
            <button className="button" type="submit">
              Sign in
            </button>
          ) : (
            <button className="button" type="submit" disabled>
              Sign in
            </button>
          )}
        </Link>
      </form>
    </div>
  );
};

export default Main;
