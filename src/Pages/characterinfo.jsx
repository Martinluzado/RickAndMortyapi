import React from "react";
import { CgGenderMale } from "react-icons/cg";
import { CgGenderFemale } from "react-icons/cg";
import "../Styles/character.css";
import { Link } from "react-router-dom";

function CharacterInfo({ characterData }) {
  const Color = {
    alive: "#A7CB54",
    dead: "red",
    unknown: "gray",
  };

  return (
    <div>
      {characterData ? (
        <div>
          <div className="General">
            {characterData.map((character) => (
              <div key={character.id}>
                <div>
                  <div className="Tarjeta">
                    <p className="ID">{character.id}</p>
                    <img className="ImagenChica" src={character.image} alt="" />
                    <div
                      style={{
                        textAlign: "left",
                        alignItems: "left",
                        marginLeft: "10px",
                      }}
                    >
                      <p className="nombre">{character.name}</p>
                      <p className="genero">
                        {character.gender === "Male" ? (
                          <CgGenderMale />
                        ) : character.gender === "Female" ? (
                          <CgGenderFemale />
                        ) : null}
                        {character.gender}
                      </p>
                      <p
                        style={{ color: Color[character.status.toLowerCase()] }}
                        className="estado"
                      >
                        {character.status}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default CharacterInfo;
