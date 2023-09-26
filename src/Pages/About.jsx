import React from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import '../Styles/About.css'

function About() {
  return (
    <div>
      <aside className="assidee">
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <button className="Passide">
            <BiHomeAlt2 />
            HOME
          </button>
        </Link>
        <Link style={{ textDecoration: "none" }} to={"/About"}>
          <button className="Passide">
            <AiOutlineInfoCircle />
            ABOUT
          </button>
        </Link>
        <a href="https://www.linkedin.com/in/m4rtinluza4rdo/" style={{textDecoration:"none"}} to={"/About"}>
        <button className="Passide">
          <CiLinkedin />
          LINKEDIN
        </button>
        </a>
      </aside>
      <h1 className="Titulo">About this proyect</h1>
      <p className="Parrafos">
        El proyecto de Rick and Morty API fue creado con el propósito de
        practicar y aprender sobre el desarrollo de aplicaciones web. Se diseñó
        para aprovechar las funcionalidades y datos proporcionados por la API de
        Rick and Morty, permitiendo a los desarrolladores explorar y mostrar
        información sobre los personajes de la famosa serie de televisión.
      </p>
      <p className="Parrafos">
        Durante el desarrollo de este proyecto, se aplicaron buenas prácticas de
        programación, como la organización modular del código, la gestión
        adecuada de dependencias, y el uso de estándares de codificación limpios
        y legibles. También se pusieron en práctica conceptos de diseño de
        interfaz de usuario y experiencia de usuario para crear una aplicación
        intuitiva y atractiva.
      </p>
      <p className="Parrafos">
        Este proyecto está disponible en GitHub, con licencia abierta, para que
        cualquier persona interesada en aprender o colaborar pueda utilizarlo
        como recurso educativo. Los desarrolladores pueden estudiar el código
        fuente, clonar el repositorio, y contribuir con mejoras o
        personalizaciones según sus necesidades. En definitiva, el proyecto de
        Rick and Morty API representa un valioso recurso para la comunidad de
        desarrolladores que deseen aprender y practicar sus habilidades en el
        desarrollo web y la programación de aplicaciones.
      </p>
      <br />
      <p className="Parrafos">
        The Rick and Morty API project was created with the purpose of
        practicing and learning about web application development. It was
        designed to leverage the functionalities and data provided by the Rick
        and Morty API, enabling developers to explore and display information
        about the characters from the famous television series.
      </p>
      <p className="Parrafos">
        {" "}
        During the development of this project, good programming practices were
        applied, such as modular code organization, proper dependency
        management, and the use of clean and readable coding standards. Concepts
        of user interface and user experience design were also implemented to
        create an intuitive and appealing application.
      </p>
      <p className="Parrafos">
        This project is available on GitHub with an open-source license, so that
        anyone interested in learning or collaborating can use it as an
        educational resource. Developers can study the source code, clone the
        repository, and contribute with improvements or customizations according
        to their needs. Ultimately, the Rick and Morty API project represents a
        valuable resource for developers looking to learn and practice their
        skills in web development and application programming.
      </p>
    </div>
  );
}

export default About;
