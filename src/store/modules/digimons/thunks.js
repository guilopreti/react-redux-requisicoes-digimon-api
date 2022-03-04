import axios from "axios";
import { toast } from "react-toastify";

import { addDigimon } from "./actions";

const addDigimonsThunk = (digimon) => (dispatch) => {
  axios
    .get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
    .then((resp) => dispatch(addDigimon(resp.data[0])))
    .catch((_) => toast.error("Digimon Inexistente"));
};

export default addDigimonsThunk;
