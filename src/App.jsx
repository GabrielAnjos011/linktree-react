import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./App.css";

function App() {
  const [dataCreate, setDataCreate] = useState(new Date().getFullYear());

  return (
    <div className="container">
      <img
        className="avatar"
        src="https://github.com/GabrielAnjos011.png"
        alt="Foto de perfil"
      />
      <h1 className="title">Gabriel Garcia</h1>
      <p className="username">@gabriielgarcia_</p>
      <ul className="list">
        <li className="list-item">
          <a
            className="list-item-content"
            href="https://github.com/GabrielAnjos011"
            target="_blank"
          >
            <FaGithub size={24} />
            Github
          </a>
        </li>
        <li className="list-item">
          <a
            className="list-item-content"
            href="https://www.linkedin.com/in/gabrielgarcia011/"
            target="_blank"
          >
            <FaLinkedin size={24} />
            Linkedin
          </a>
        </li>
        <li className="list-item">
          <a
            className="list-item-content"
            href="https://www.instagram.com/gabriielgarcia_/"
            target="_blank"
          >
            <FaInstagram size={24} />
            Instagram
          </a>
        </li>
      </ul>

      <footer>
        <p className="content-footer">
          &copy; {dataCreate} &minus; Gabriel Garcia
        </p>
      </footer>
    </div>
  );
}

export default App;
