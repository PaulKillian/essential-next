import React, { useEffect } from 'react';
import Gallery from 'react-grid-gallery';
import Nav from "../components/nav"
import Footer from "../components/footer"

function UpholsteryGallery() {
  useEffect(() => {
    document.title = 'Essential Cleaning Options: Upholstery cleaning photos, Orange County';
  });
  const IMAGES = [{
    src: '/images/up1.jpg',
    thumbnail: '/images/up1.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: 'Residential', title: 'Residential' }]
  },
  {
    src: '/images/up2.jpg',
    thumbnail: '/images/up2.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: 'Residential', title: 'Residential' }]
  },
  {
    src: '/images/up3.jpg',
    thumbnail: '/images/up3.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: 'Residential', title: 'Residential' }]
  },
  {
    src: '/images/up4.jpg',
    thumbnail: '/images/up4.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: 'Residential', title: 'Residential' }]
  }];

  return (
    <>
    <Nav class={'mr-3'}/>
    <div id="main" className="div1 w-100 marble pb-5">
      <h1 className="text-font text-dark text-center mb-5 pt-5">Upholstery Cleaning</h1>
      <div className={'d-flex justify-content-center pb-5'}>
        <div style={{
          width: '87%'
        }}>
          < Gallery images={IMAGES} />
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default UpholsteryGallery;