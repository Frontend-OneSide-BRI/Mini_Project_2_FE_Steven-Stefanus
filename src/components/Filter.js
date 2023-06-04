import React from "react";
import "./Home.css";

const Filter = ({ category, searchTerm }) => {
  const cards = [
    { image: "https://koinworks.com/wp-content/uploads/2019/07/1180w-600h_061819_event-D23-Lion-King-Screenings-780x440.jpg", category: "animal", name: "Image1", caption: "The lion and its son roam the savannah together, a symbol of strength and familial bond",alt: "lion"  },
    { image: "https://media.istockphoto.com/id/516318760/id/foto/rubah-merah-vulpes-vulpes.jpg?s=612x612&w=0&k=20&c=tc30gujF_YY_6fh1W23qqH086MPkWwV6WV4Ckqg8Xm8=", category: "animal", name: "Image2", caption: "The fox's gaze is filled with cunning and curiosity, reflecting its clever nature.",alt: "fox" },
    { image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2ljfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", category: "music", name: "Guitar", caption: "Person play guitar",alt:"music" },
    { image: "https://media.istockphoto.com/id/1364102953/id/foto/teman-teman-makan-sayap-ayam.jpg?s=612x612&w=0&k=20&c=wZ0rMQhhzXNZilGRNhIzAN157tzS0ATcw24DeJ9u2Kc=", category: "food", name: "Image4", caption: "Grilled chicken wings with sauce",alt:"Chicken" },
    { image: "https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=815&q=80", category: "people", name: "Image5", caption: "Laughing together during daytime", alt:"people" },
    { image: "https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80", category: "music", name: "Image6", caption: "Person playing drum", alt:"drum" },
  ];

  const filteredCards = category !== "all"
    ? cards.filter(
        (card) =>
          card.category === category &&
          (card.caption.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (card.alt && card.alt.toLowerCase().includes(searchTerm.toLowerCase())))
      )
    : cards.filter(
        (card) =>
          card.caption.toLowerCase().includes(searchTerm.toLowerCase()) ||
          card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (card.alt && card.alt.toLowerCase().includes(searchTerm.toLowerCase()))
      );

  const handleImageClick = (name) => {
    console.log(`Clicked on image: ${name}`);
  };

  return (
    <>
      {filteredCards.map((card, index) => (
        <div className="card" key={index}>
          <div className="image-container">
            <div className="image-item" onClick={() => handleImageClick(card.name)}>
              <img src={card.image} alt={`Image ${index + 1}`} />
              <div className="image-caption">{card.caption}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Filter;
