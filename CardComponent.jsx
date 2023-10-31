import React from "react";

import Image1 from "/src/image/Image1.jpg";
import Image2 from "/src/image/Image2.jpg";
import Image3 from "/src/image/Image3.jpg";
import Image4 from "/src/image/Image4.jpg";
const bodyContent = [
  {
    imageContent: Image1,
    cardTitle: "Cartoon Image",
    cardDescription: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
  beatae fugit ad quae quia et nisi optio repudiandae dignissimos,
  exercitationem culpa ipsam consequatur harum numquam explicabo,
  dolores natus ut ipsum!`,
    cardButton: "see more",
  },
  {
    imageContent: Image2,
    cardTitle: "Cartoon Image",
    cardDescription: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
  beatae fugit ad quae quia et nisi optio repudiandae dignissimos,
  exercitationem culpa ipsam consequatur harum numquam explicabo,
  dolores natus ut ipsum!`,
    cardButton: "see more",
  },
  {
    imageContent: Image3,
    cardTitle: "Cartoon Image",
    cardDescription: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
  beatae fugit ad quae quia et nisi optio repudiandae dignissimos,
  exercitationem culpa ipsam consequatur harum numquam explicabo,
  dolores natus ut ipsum!`,
    cardButton: "see more",
  },
  {
    imageContent: Image4,
    cardTitle: "Cartoon Image",
    cardDescription: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
  beatae fugit ad quae quia et nisi optio repudiandae dignissimos,
  exercitationem culpa ipsam consequatur harum numquam explicabo,
  dolores natus ut ipsum!`,
    cardButton: "see more",
  },
];

function CardComponent() {
  return (
    <div>
      {bodyContent.map((item, index) => (
        <div className="card-container">
          <div className="row">
            <div className="col-lg-3 col-md-2 col-sm-12 p-5">1
              <div className="card">
                <img src={item.imageContent} className="card-top" />
                <h2 className="Card-title">{item.cardTitle}</h2>
                <p className="card-description">{item.cardDescription}</p>
                <button
                  className="btn btn-danger 
                "
                >
                  {item.cardButton}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default CardComponent;
