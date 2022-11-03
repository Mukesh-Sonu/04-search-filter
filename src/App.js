import "./index.css";
import mock from "./Mock.json";

import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const [users, setUsers] = useState(mock);

  const handleChange = (e) => {
    setSearch(e.target.value);

    const newUsers = mock.filter((val) => {
      if (search === "") {
        return val;
      }
      if (val.first_name.toLowerCase().includes(search.toLowerCase())) {
        return val;
      }
      return "";
    });

    setUsers(newUsers);
  };

  return (
    <div>
      <div className="input-div">
        <input
          className="input-box"
          value={search}
          placeholder="Search..."
          onChange={handleChange}
        />
      </div>

      <div>
        <div className="display-users">
          {users.length ? (
            users.map((data, index) => {
              return <p key={index}>{data.first_name}</p>;
            })
          ) : (
            <div className="no-results">No Search Results😕</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
