import React, { useState } from "react";

import TopBarContacts from "../../utils/json/topBarContacts.json";

import "./styles.scss";

const TopBar = () => {
  const [contacts] = useState(TopBarContacts);

  return (
    <div className="top-bar-container">
      <div className="top-bar-box">
        <ul>
          {contacts &&
            contacts.phones.map((i, index) => {
              return (
                <li key={i.id}>
                  <a href={i.ref}>{i.phone}</a>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
