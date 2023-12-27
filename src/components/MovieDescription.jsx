import React, { useState } from "react";

const MovieDescription = ({ details }) => {
  const [status, setStatus] = useState();
  const handleChange = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div>
      {details.title}
      <div>
        <input
          type="radio"
          name="status"
          value="Holdlist"
          onChange={handleChange}
        />
        Hold List
        <input
          type="radio"
          name="status"
          value="Watching"
          onChange={handleChange}
        />
        Watching
        <input
          type="radio"
          name="status"
          value="Completed"
          onChange={handleChange}
        />
        Completed
      </div>
    </div>
  );
};

export default MovieDescription;
