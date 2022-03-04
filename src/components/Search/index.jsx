import { useState } from "react";
import { useDispatch } from "react-redux";
import addDigimonsThunk from "../../store/modules/digimons/thunks";

const Search = () => {
  const [digimon, setDigimon] = useState(" ");

  const dispatch = useDispatch();

  return (
    <section>
      <h2>Procure por um Digimon!</h2>
      <div>
        <input
          placeholder="Digimon..."
          onChange={(evt) => setDigimon(evt.target.value)}
        />
        <button onClick={() => dispatch(addDigimonsThunk(digimon))}>
          Pesquisar
        </button>
      </div>
    </section>
  );
};

export default Search;
