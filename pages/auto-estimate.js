import React from 'react';
import Nav from "../components/nav"
import Footer from "../components/footer"
// import MetaTags from 'react-meta-tags';

class AutoEstimate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      make: '',
      model: '',
      year: '',
      color: '',
      time: '',
      date: '',
      bestTime: '',
      bestDate: ''

    };
    this.handleChangeInputs = this.handleChangeInputs.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.SentMessage = this.SentMessage.bind(this);
    this.scroll = this.scroll.bind(this);
  }

  handleSubmit(e) {
    const { name, email, subject, make, model, year, color, time, date, bestTime, bestDate } = this.state;
    e.preventDefault();
    Email.send({
      SecureToken : "a4d1145c-bbaf-471e-a7d6-cd680cc48847",
      To : "psk65lava@gmail.com",
      From : email,
      Subject : `Auto Detailing Estimate` ,
      Name: name,
      Body : `<html>
                <h2>${name}</h2>
                <h3>${email}</h3>
                <p>${subject}</p>
                <p>${make}</p>
                <p>${model}</p>
                <p>${year}</p>
                <p>${color}</p>
                <p>${time}</p>
                <p>${date}</p>
                <p>${bestTime}</p>
                <p>${bestDate}</p>
              </html>`,
    })
    this.resetForm();
    this.SentMessage();
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      make: '',
      model: '',
      year: '',
      color: '',
      time: '',
      date: '',
      bestTime: '',
      bestDate: ''
    });
  }

  SentMessage() {
    const form = document.getElementById('form');
    form.classList.add('hidden');
    const textWrapper = document.querySelector('.ml16');
    textWrapper.classList.remove('d-none');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({ loop: true })
      .add({
        targets: '.ml16 .letter',
        translateY: [-100, 0],
        easing: 'easeOutExpo',
        duration: 100,
        delay: (el, i) => 30 * i
      }).add({
        targets: '.ml16',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000
      });
  }

  handleChangeInputs(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  scroll() {
    const anchor = document.querySelector('#message');
    anchor.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }

  render() {
    return (
      <>
        {/* <MetaTags>
          <title>Schedule your auto detailing estimate in Orange County, today!</title>
          <meta name="description" content="Schedule your auto detailing estimate in Orange County, today!" />
          <meta property="og:title" content="Essential Cleaning Options: Auto Detailing Estimate" />
          <meta property="og:image" content="http://essentialcleaningoptions.com/images/auto-detailing-meta.png" />
        </MetaTags> */}
        <div id="main" className="bg-off-white w-100 auto-estimate">
        <Nav />
          <div className="col-12 bottom">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <h1 className="text-font text-white text-center mt-4 mb-5 pt-5">Schedule Estimate</h1>
            </div>
          </div>
          <h1 id={'message'} className="ml16 d-none">Your Message Has Been Sent!<br></br><br></br> We will response with 24 hours</h1>
          <div id="form" className="col-lg-12 d-flex flex-column">
          <div className="row mx-2 my-4 justify-content-center">
            <div className="col-lg-6 col-md-10 col-sm-12 blur pb-3">
              <form onSubmit={this.handleSubmit} id="contact-form" className="mt-5 text-white">
                <div className="form-row d-flex flex-wrap justify-content-center">
                  <div className="form-group col-5 m-3">
                    <label className="mb-0">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChangeInputs}
                      required
                    />
                  </div>
                  <div className="form-group col-5 m-3">
                    <label className="mb-0">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChangeInputs}
                      required
                    />
                  </div>
                </div>
                <div className="form-row d-flex justify-content-center">
                  <div className="form-group col-11 px-3">
                    <label className="mb-0">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      value={this.state.subject}
                      onChange={this.handleChangeInputs}
                      required
                    />
                  </div>
                </div>
                <div className="form-row d-flex flex-wrap justify-content-center">
                  <div className="form-group col-5 m-3">
                    <label className="mb-0">Make</label>
                    <input
                      type="text"
                      className="form-control"
                      name="make"
                      value={this.state.make}
                      onChange={this.handleChangeInputs}
                      required
                    />
                  </div>
                  <div className="form-group col-5 m-3">
                    <label className="mb-0">Model</label>
                    <input
                      type="text"
                      className="form-control"
                      name="model"
                      value={this.state.model}
                      onChange={this.handleChangeInputs}
                      required
                    />
                  </div>
                </div>
                <div className="form-row d-flex flex-wrap justify-content-center">
                  <div className="form-group col-5 m-3">
                    <label className="mb-0">Year</label>
                    <input
                      type="text"
                      className="form-control"
                      name="year"
                      value={this.state.year}
                      onChange={this.handleChangeInputs}
                      required
                    />
                  </div>
                  <div className="form-group col-5 m-3">
                    <label className="mb-0">Color</label>
                    <input
                      type="text"
                      className="form-control"
                      name="color"
                      value={this.state.color}
                      onChange={this.handleChangeInputs}
                      required
                    />
                  </div>
                </div>
                <div className="form-row d-flex flex-wrap justify-content-center">
                  <div className="form-group col-5 m-3">
                    <label className="mb-0">Time of Service</label>
                    <input
                      type="text"
                      className="form-control"
                      name="time"
                      value={this.state.time}
                      onChange={this.handleChangeInputs}
                      required
                    />
                  </div>
                  <div className="form-group col-5 m-3">
                    <label className="mb-0">Date of Service</label>
                    <input
                      type="text"
                      className="form-control"
                      name="date"
                      value={this.state.date}
                      onChange={this.handleChangeInputs}
                      required
                    />
                  </div>
                </div>
                <div className="form-row d-flex flex-wrap justify-content-center">
                  <div className="form-group col-5 m-3">
                    <label className="mb-0">Best Time to Contact You</label>
                    <input
                      type="text"
                      className="form-control"
                      name="bestTime"
                      value={this.state.bestTime}
                      onChange={this.handleChangeInputs}
                      required
                    />
                  </div>
                  <div className="form-group col-5 m-3">
                    <label className="mb-0">Best Way To Contact You</label>
                    <input
                      type="text"
                      className="form-control"
                      name="bestDate"
                      value={this.state.bestDate}
                      onChange={this.handleChangeInputs}
                      required
                    />
                  </div>
                </div>
                  <div className="d-flex justify-content-center mt-3">
                    <button type="submit" onClick={this.scroll} className="btn shadow bg-success text-white col-sm-3 col-md-4 col-lg-4">
                      <a href="#message"></a>SEND MESSAGE</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default AutoEstimate;