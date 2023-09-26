import React, { useState, useEffect } from "react";
import CharacterInfo from "./characterinfo";
import PantallaCarga from "./pantallaCarga";
import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import FooterWeb from "./Footer";
function Home() {
  const [characterData, setCharacterData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [searchId, setSearchId] = useState(""); // Nuevo estado para el ID de búsqueda

  useEffect(() => {
    async function fetchTotalPages() {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character/"
        );
        if (!response.ok) {
          throw new Error("No se pudo obtener la respuesta de la API.");
        }
        const data = await response.json();
        setTotalPages(data.info.pages);
      } catch (error) {
        console.error("Error al obtener el número total de páginas:", error);
      }
    }

    fetchTotalPages();
  }, []);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    } else {
      async function fetchCharacterData() {
        try {
          const response = await fetch(
            `https://rickandmortyapi.com/api/character/?page=${currentPage}`
          );
          if (!response.ok) {
            throw new Error("No se pudo obtener la respuesta de la API.");
          }
          const data = await response.json();
          setCharacterData(data.results);
          setIsLoading(false);
        } catch (error) {
          console.error("Error al obtener datos de la API:", error);
        }
      }

      setIsLoading(true);
      fetchCharacterData();
    }
  }, [currentPage, totalPages]);

  // Función para buscar por ID automáticamente al cambiar el valor del campo de entrada
  useEffect(() => {
    if (searchId) {
      async function searchCharacterById() {
        try {
          const response = await fetch(
            `https://rickandmortyapi.com/api/character/${searchId}`
          );
          if (!response.ok) {
            throw new Error(
              "No se pudo encontrar el personaje con el ID proporcionado."
            );
          }
          const data = await response.json();
          setCharacterData([data]);
          setIsLoading(false);
        } catch (error) {
          console.error("Error al buscar por ID:", error);
          setCharacterData([]);
          setIsLoading(false);
        }
      }

      setIsLoading(true);
      searchCharacterById();
    } else {
      // Si el campo de búsqueda está vacío, cargar todos los personajes nuevamente
      setCurrentPage(1); // Reiniciar la página a la primera
      setSearchId(""); // Limpiar el campo de búsqueda

      // También puedes agregar lógica para cargar todos los personajes aquí
      async function fetchAllCharacters() {
        try {
          const response = await fetch(
            "https://rickandmortyapi.com/api/character/"
          );
          if (!response.ok) {
            throw new Error("No se pudo obtener la respuesta de la API.");
          }
          const data = await response.json();
          setCharacterData(data.results);
          setIsLoading(false);
        } catch (error) {
          console.error("Error al obtener todos los personajes:", error);
        }
      }

      setIsLoading(true);
      fetchAllCharacters();
    }
  }, [searchId]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div>
      <aside className="assidee">
            <Link style={{ textDecoration: "none" }} to={"/"}>
        <button className="Passide">
          <BiHomeAlt2 />
          HOME
        </button>
        </Link>
        <Link style={{textDecoration:"none"}} to={"/About"}>
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
      <h1 style={{ color: "white", fontSize: "50px", margin: "0" }}>
        Rick and Morty
      </h1>
      <p style={{ color: "white", fontSize: "30px", margin: "0" }}>
        characters
      </p>

      {/* Campo de entrada para el ID de búsqueda */}
      <div className="search-container">
        <input
          className="buscar"
          type="text"
          placeholder="insert id ..."
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <p style={{ color: "white", fontSize: "small" }}>1 to 826</p>
      </div>
      <div className="botonesparapaginas">
        <button className="buttonpage" onClick={handlePreviousPage}>
          Back
        </button>
        <span>
          {currentPage}-{totalPages}
        </span>
        <button className="buttonpage" onClick={handleNextPage}>
          Next
        </button>
      </div>
      {isLoading ? (
        <PantallaCarga />
      ) : (
        
        <div className="ContainerGeneral">
          <CharacterInfo characterData={characterData} />
        </div>
      )}

      <div className="botonesparapaginas">
        <button className="buttonpage" onClick={handlePreviousPage}>
          Back
        </button>
        <span>
          {currentPage}-{totalPages}
        </span>
        <button className="buttonpage" onClick={handleNextPage}>
          Next
        </button>
      </div>
      <FooterWeb/>
    </div>
  );
}

export default Home;
