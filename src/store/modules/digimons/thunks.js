import axios from "axios";
import { addDigimon } from "./actions";

const addDigimonsThunk = (digimon) => (dispatch) => {
  axios
    .get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
    .then((resp) => dispatch(addDigimon(resp.data[0])))
    .catch((err) => console.log(err));
};

export default addDigimonsThunk;
