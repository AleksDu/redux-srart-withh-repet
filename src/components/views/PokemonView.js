import { useState } from "react";
import { ToastContainer } from "react-toastify";
import PokemonForm from "../Pokemon/Form";
import PokemonInfo from "../Pokemon/Info";

export default function PokemonView() {
  const [pokemonName, setPokemonName] = useState("");

  return (
    <>
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
      <ToastContainer autoClose={3000} />
    </>
  );
}
