import React from 'react'

const Slide = ({slideData}) => {
  let hero = slideData.hero;
  let image = slideData.image;
  let text = slideData.text;
  const backgroundHeroImage = {
    backgroundImage: `url(${hero})`,
  }

  return <div className="slide" style={backgroundHeroImage}>
            <div className="slide-info">
              <img src={image} className="slide-info--image" alt="slide"/>
              <div className="slide-info--title">{text}</div>
            </div>
          </div>
}

export default Slide
