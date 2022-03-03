import { useSelector } from "react-redux";

const DigimonList = () => {
  const digimons = useSelector((state) => state.digimons);

  return (
    <div>
      <ul>
        {digimons.map(({ name, img, level }, index) => {
          return (
            <li key={index}>
              <h3>{name}</h3>
              <img src={img} alt={name} />
              <p>{level}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DigimonList;
