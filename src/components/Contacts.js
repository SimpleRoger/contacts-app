import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Header from "./Header";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setContacts(data));
    setLoading(false);
  }, []);
  return (
    <div className="max-w-[1100px] mx-auto">
      <Header />
      {loading ? (
                <div className="flex flex-wrap justify-center">

        <p className="text-2xl">Loading...</p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {contacts.map((contact) => (
            <Link to={`/${contact.id}`} key={contact.id}>
              <div className="text-center hover:cursor-pointer cursor-pointer border-2 rounded-lg border-gray-500 py-10 w-[200px] m-5">
                {contact.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Contacts;
