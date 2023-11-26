import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useParams,
  useNavigate,
} from "react-router-dom";
import Header from "./Header";
import { IoMdArrowBack } from "react-icons/io";

const Contacts = () => {
  const { id } = useParams();
  const [contact, setContact] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back one page
  };

  useEffect(() => {
    if (id && !hasLoaded) {
      console.log(id);
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setContact(data);
          setHasLoaded(true);
          console.log(contact);
        });
    }
  }, []);

  return (
    <div className="max-w-[1100px] mx-auto">
      <Header />

      <div
        className="flex items-center gap-3 border-2 border-gray-100 w-[100px] justify-center rounded-md"
        onClick={goBack}
      >
        <IoMdArrowBack />
        Back
      </div>
      {!hasLoaded ? (
        <h1 className="text-2xl pb-10 text-center">Loading...</h1>
      ) : (
        <h1 className="text-2xl pb-10 text-center">{contact.name}</h1>
      )}

      <div className="flex flex-col items-center flex-wrap justify-center text-left ">
        <p>Username: {contact.username}</p>
        <p>Email: {contact.email}</p>
        <p>Address: {contact.address?.street} </p>
        <p>Phone: {contact.phone} </p>
        <p>Website: {contact.website} </p>
        <p>Company: {contact.company?.name} </p>
      </div>
    </div>
  );
};

export default Contacts;
