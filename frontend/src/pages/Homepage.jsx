import "../styles/Home.css";
import React from "react";
import loginImage from "../assets/login-photo.jpg";
import MyButton from "../components/MyButton";
import PublicationCard from "../components/PublicationCard";

const Homepage = (props) => {
  return (
    <div>
      <div className="Hero">
        <div className="Hero-text-part">
          <div className="Hero-text-part-title">
            <h1>Un espace communautaire</h1>
            <h1 className="part-two">pensé pour vous</h1>
          </div>
          <p>
            Vous l'attendiez, nous l'avons fait ! Envie de boire un verre après
            une longue semaine, de trouver des copilotes de sports, des
            gourmands pour vous accompagner pendant la pause gouter... ? Laissez
            parlez vos envies sur Groupoconnect !{" "}
          </p>
          <MyButton icon="" title="Partager avec la communauté"></MyButton>
        </div>
        <div className="image-section">
          <img />
        </div>
      </div>
      <div className="social-wall">
        <div className="title-part">
          <h2 className="title-part-title">La galerie</h2>
          <p className="title-part-description">
            Retrouvez l'ensemble des publications de vos collègues. Vous êtes
            libre de commenter celles qui vous intéressent et d’enregistrer
            celles que vous préférez. Vous pouvez également partager vos envies
            à tout moment !
          </p>
        </div>
        <div className="wall-part">
          <div className="filter-bar">
            <h3>Filtrer par :</h3>
            <div className="filter-bar-cards">
              <div className="filter-bar-card">
                <h4>Récents</h4>
              </div>
              <div className="filter-bar-card">
                <h4>Populaires</h4>
              </div>
              <div className="filter-bar-card">
                <h4>Mes publications préférées</h4>
              </div>
              <div className="filter-bar-button">
                <MyButton icon="" title="Partager une publication">
                  <i class="fa-solid fa-plus"></i>
                </MyButton>
              </div>
            </div>
          </div>
          <div className="publications-section">
            <div className="publication-cards">
              <PublicationCard></PublicationCard>
              <PublicationCard></PublicationCard>
            </div>
          </div>
          <div className="post-of-the-day-part">
            <h3 className="post-of-the-day-part-title">Publication du jour</h3>
            <div className="post-of-the-day-part-content">
              <img />
              <p>
                Pendant mon voyage dans la Loire, je tenais un journal de toutes
                mes dépenses avec une description pour me souvenir en même temps
                de chaque activité !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
