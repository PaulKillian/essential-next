import React from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import HomeIcon from '@material-ui/icons/Home';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import { green } from '@material-ui/core/colors';
import RateReviewIcon from '@material-ui/icons/RateReview';
import WorkIcon from '@material-ui/icons/Work';
import DateRangeIcon from '@material-ui/icons/DateRange';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShown: false };
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleToggleClick(event) {
    this.setState(function (state) {
      if (!this.state.isShown) {
        const slide = document.querySelector('.navbar-nav');
        slide.classList.add('animate');
        return { isShown: true };
      } else {
        return { isShown: false };
      }
    });
  }

  hideMenu(event) {
    event.target.className === 'modal-overlay m-0 p-0 block' &&
      this.setState(function () {
        const side = document.querySelector('.block');
        side.classList.add('menu-bg');
        return { isShown: false };
      });
  }

  render() {
    let modalStyles = 'modal-overlay m-0 p-0';
    let cssClass = 'side-menu menu-bg text-dark';

    if (!this.state.isShown) {
      modalStyles += ' hide';
      cssClass = 'side-menu menu-bg pt-4 ';
    } else {
      modalStyles += ' block';
      cssClass += ' showMenu';
    }

    return (
      <>
        <div className={modalStyles} onClick={this.hideMenu}></div>
        <div className={ 'd-flex justify-content-end top col-sm-12 col-md-12 col-lg-12 position-absolute pr-3 mt-3' }>
          <div className={ 'row d-flex justify-content-end col-sm-2 col-md-2 col-lg-2' }>
            <FontAwesomeIcon icon={faBars} size="3x" className="hamburger-color  top pointer"
              onClick={() => this.handleToggleClick()}/>
          </div>
        </div>
        <div className={cssClass} onClick={this.hideMenu}>
          <ul className="navbar-nav ">
            <li className={'bg-footer shadowed col-12'}>
              <div className={'menu-logo ml-3 d-flex text-shadow '}>
                <div className={'text-primary'}>E</div>
                <div className={'text-success '}>C</div>
                <div className={'text-white '}>O</div>
              </div>
            </li >
            <HomeIcon style={{ color: green[500] }}/>
            <Link href="/" exact className="text-dark text-left nav-item mt-3 ml-3"><a>Home/Services</a>
              {/* <li>
                <hr className={'style'}></hr>
              </li> */}
            </Link>
            <DateRangeIcon style={{ color: green[500] }}/> 
            <Link href="/carpet-estimate" exact className="text-dark ml-3 nav-item"><a>Carpet/Upholstery Estimate</a></Link>
            {/* <li className="nav-item ml-3">
              <hr id={'second-to-last-hr'} className={'style'}></hr>
            </li> */}
            <DirectionsCarIcon style={{ color: green[500] }}/> 
            <Link href="/auto-estimate" exact className="text-dark ml-3 nav-item"><a>Auto Detailing Estimate</a>
              {/* <li>
                <hr className={'style'}></hr>
              </li> */}
            </Link>
            <WorkIcon style={{ color: green[500] }}/> 
            <Link href="/auto-services" className="text-dark ml-3 nav-item text-left"><a>Auto Services</a>
              {/* <li className="nav-item ml-3">
                <hr id={'last-hr'} className={'style'}></hr>
              </li> */}
            </Link>
            <li className={'bax-shad'}>
              <Accordion className={'text-left ml-2 nav-item accordion-bg col-12'}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div><PhotoCamera style={{ color: green[500] }} /> Photos</div>
                </AccordionSummary>
                <AccordionDetails className={'text-dark'}>
                  <div className={'d-flex flex-column'}>
                    <Link href="/carpet-photos" exact className="text-dark nav-item"><a>Carpet Cleaning</a></Link>
                    <Link href="/upholstery-photos" className="text-dark nav-item"><a>Upholstery Cleaning</a></Link>
                    <Link href="/auto-photos" exact className="text-dark nav-item"><a>Auto Detailing</a></Link>
                  </div>
                </AccordionDetails>
              </Accordion>
              <hr className={'style'}></hr>
            </li>
            <RateReviewIcon style={{ color: green[500] }} /> 
            <Link href="/reviews" className="text-dark nav-item ml-3 text-left"><a>Reviews</a>
              {/* <li className="nav-item ml-3"></li> */}
            </Link>
            <li>
              <hr className={'style'}></hr>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Navbar;