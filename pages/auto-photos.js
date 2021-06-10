import React, { useEffect } from 'react';
import Nav from "../components/nav"
import Footer from "../components/footer"

function AutoGallery() {
//   useEffect(() => {
//     const main = document.getElementById('main');
//     main.classList.remove('position-absolute');
//     main.classList.add('position-absolute');
//     document.title = 'Essential Cleaning Options: Auto detailing photos, Orange County';
//   });
  return (
    <>
    
      <Nav />  
      <div id="main" className="div1 w-100 marble pb-5">
        <h1 className="text-font text-dark pt-5 top1">Auto Detailing</h1>
        <h2 className="mt-4 text-dark text-center pt-5 pb-2">Tesla: Clay Polish & Sealant</h2>
        <div className="d-flex row mx-3 justify-content-center">
          <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/richa.webp" alt="image of car detail"></img>
          <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/richb.webp" alt="image of car detail"></img>
          <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/richc.webp" alt="image of car detail"></img>
          <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/richd.webp" alt="image of car detail"></img>
        </div>
        <h2 className="mt-4 text-dark text-center pt-5">Lexus: Clay Sealant & Wax</h2>
        <div className="d-flex row mx-3 pb-4 my-3 justify-content-center">
          <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/guya.webp" alt="image of car detail"></img>
          <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/guyb.webp" alt="image of car detail"></img>
          <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/guyc.webp" alt="image of car detail"></img>
          <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/guyd.webp" alt="image of car detail"></img>
        </div>
        <h2 className="mt-4 text-dark text-center pt-5">2008 Camry: Paint Polish & Seal</h2>
        <div className="d-flex row mx-3 pb-4 my-3 justify-content-center">
          <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/cam.jpg" alt="image of car detail"></img>
          <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/cam1.jpg" alt="image of car detail"></img>
          <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/cam3.jpg" alt="image of car detail"></img>
          <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/cam4.jpg" alt="image of car detail"></img>
          <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/cam5.jpg" alt="image of car detail"></img>
          <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/cam6.jpg" alt="image of car detail"></img>
          <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/cam7.jpg" alt="image of car detail"></img>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AutoGallery;