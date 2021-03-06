import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import { green } from '@material-ui/core/colors';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
// import MetaTags from 'react-meta-tags';
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      backgroundColor: '#216B9E'
    }
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <>
      {/* <MetaTags>
        <title>Essential Cleaning Options: Carpet Cleaning, Upholstery Cleaning, Auto detailing services and prices in Orange County, California</title>
        <meta name="description" content="Essential Cleaning Options: Carpet Cleaning, Upholstery Cleaning, Auto detailing services and prices in Orange County, California" />
        <meta property="og:title" content="Essential Cleaning Options" />
        <meta property="og:image" content="http://essentialcleaningoptions.com/images/meta.png" />
      </MetaTags> */}
      <div id="main" className="col-12 bottom marble">
        <div className="container pt-5">
          <div id="services" className="row card-parallax mx-1 d-flex justify-content-center mb-5">
            <div className="col-lg-5 col-md-12 bg-white card-shadow">
              <h2 className={'display-4 text-center pt-3 bg-footer'}>CARPET CLEANING</h2>
              <hr className={'style'}></hr>
              <p className="p-2">I provide low-moisture cleaning with the use of a rotary
              and/or orbital machine. I also provide a plant-based, low moisture encapsulating
                green cleaning solution for all types of carpets.<br></br><br></br>
                The carpets are pre-sprayed, with detailed attention to moisture control. The carpets
                are then agitated with either a soft brush or carpet pad. This is followed by a cotton
                or microfiber pad for dirt and soil extraction from the carpet fibers.</p>
              <div className={'d-flex justify-content-center pb-2'}>
                <div className={classes.root}>
                  <Button >
                    <PhotoCamera className={'text-white'}/> 
                    <Link href="/carpet-photos" className="nav-link text-white text-center pr-1">
                    <a className={'text-white pl-1'}>Photos</a></Link>
                  </Button>
                </div>
              </div>
            </div>
            <img src="../images/carpet6.webp" className="row card-h bottom card-shadow col-lg-5 col-md-12"></img>
          </div>
          <div className="row mx-1 d-flex justify-content-center mb-5">
            <div className="col-lg-5 col-md-12 bg-white card-shadow">
              <h2 className={'display-4 text-center pt-3 bg-footer'}>UPHOLSTERY CLEANING</h2>
              <hr className={'style'}></hr>
              <p className="p-2">Furniture is thoroughly vacuumed and pre-sprayed with a low moisture, neutral pH
              cleaner/deodorizer. This is done by using a handheld orbital machine for optimal stain/soil removal.
              <br></br><br></br>
              NOTE:
              It is highly recommended that your furniture tag be inspected prior to cleaning for proper cleaning method.</p>
              <div className={'d-flex justify-content-center'}>
                <div className={classes.root}>
                  <Button >
                    <PhotoCamera className={'text-white'}/> 
                    <Link href="/upholstery-photos" className="nav-link text-white text-center pr-1">
                    <a className={'text-white pl-1'}>Photos</a></Link>
                  </Button>
                </div>
              </div>
            </div>
            <img id={'second'} src="../images/coucha.webp" className="row col-lg-5 card-h bottom card-shadow col-md-12"></img>
          </div>
          <div className="row mx-1 d-flex justify-content-center mb-5">
            <div className="col-lg-5 col-md-12 bg-white card-shadow">
              <h2 className={'display-4 text-center pt-3 bg-footer'}>AUTO DETAILING</h2>
              <hr className={'style'}></hr>
              <p className="p-2"></p>
              <div className={'d-flex justify-content-center'}>
                <div className={classes.root}>
                  <Button >
                    <PhotoCamera className={'text-white'}/> 
                    <Link href="/auto-photos" className="nav-link text-white text-center pr-1">
                    <a className={'text-white pl-1'}>Photos</a></Link>
                  </Button>
                </div>
              </div>
              <div className={'d-flex justify-content-center pb-2'}>
                <div className={classes.root}>
                  <Button >
                  <MonetizationOnIcon className={'text-white'}/>
                    <Link href="/auto-services" className="nav-link text-white text-center pr-1">
                    <a className={'pl-1 text-white'}>Detailing Services and Prices</a></Link>
                  </Button>
                </div>
              </div>
            </div>
            <img id={'third'} src="../images/buff.jpg" className="row card-h bottom col-lg-5 card-shadow col-md-12"></img>
          </div>
          <div className={'d-flex flex-wrap justify-content-center align-items-center'}>
            <img className={'col-6 col-lg-4 pb-5'} src={'../images/waterless.png'} />
            <a className={classes.root} href={'https://www.buydualpolymer.com/#KENMENDOZA'} target="blank">
              <span className={'p-3 border'}>Shop Dualpolymer Products!</span></a>
          </div>
          <div class="d-flex flex-wrap justify-content-center align-items-center pb-5">
            <div class="col-6 col-lg-4">Highest Quality Commercial Cleaning</div>
            <a class={classes.root} href="https://www.simplycrystalclean.net/" target="blank">
              <span class="p-3 border">simplycrystalclean.net</span></a></div>
        </div>
      </div>
    </>
  );
}

export default Home;