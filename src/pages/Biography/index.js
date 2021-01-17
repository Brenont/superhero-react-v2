import { useLocation } from "react-router-dom";

const Biography = () => {
  const { state } = useLocation();
  const biographyData = state.bio;
  console.log(biographyData);

  return (
    <>
      <h1>BIOGRAFIA - {biographyData["full-name"]}</h1>
      <p>Publicador - {biographyData.publisher}</p>
      <p>Primeira aparição - {biographyData["first-appearance"]}</p>
    </>
  );
};

export default Biography;
