import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getHero } from "../../services/hero.service";

const Home = () => {
  const [id, setId] = useState();
  const [hero, setHero] = useState(false);

  const handleSearch = async () => {
    const data = await getHero(id);
    setHero(data);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h1>Busque um Heroi</h1>
        <input
          placeholder="Heroi ID"
          onChange={(event) => setId(event.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>

      <section>
        {hero && <h2>{hero.name}</h2>}
        {hero.image && <img src={hero.image.url} alt="hero" />}
        <br />
        {hero && (
          <Link
            to={{
              pathname: "/bio",
              state: { bio: hero.biography },
            }}
          >
            Veja a biografia
          </Link>
        )}
      </section>
    </div>
  );
};

export default Home;
