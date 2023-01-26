import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Contact = () => {

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",

  })


  const setInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }


  const submitContactForm = async (e) => {
    e.preventDefault();
    let response;
    const { fname, lname, email, message } = user;

    if (fname.length !== 0 || lname.length !== 0 || email.length !== 0 || message.length !== 0) {

      const rdbUrl = "https://fir-example-7f419-default-rtdb.firebaseio.com/usersContact.json";
      response = await fetch(
        rdbUrl,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fname, lname, email, message
          })
        }
      );

    }

    console.log(response.status);
      alert(response.statusText);

  }


  return (
    <>
      <Header></Header>
      <div className="container">
        <h1 className="h3 text-uppercase text-primary text-center py-4">&mdash; Contact us &mdash;</h1>
        <div className="row">

          <div className="col-md-6 col-sm-12">
            <h2 className="h6 mb-4">Contact to our community support team</h2>
            <form className="row gy-3" method='post' >
              <div className="col-md-6 col-sm-12">
                <div className="form-group">
                  <input type="text" name='fname' value={user.fname} onChange={setInput} id='fname' placeholder='First Name' className="form-control" />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="form-group">
                  <input type="text" name='lname' value={user.lname} onChange={setInput} id='lname' placeholder='Last Name' className="form-control" />
                </div>
              </div>
              <div className="col-md-12 col-sm-12">
                <div className="form-group">
                  <input type="email" name='email' value={user.email} onChange={setInput} id='email' required placeholder='Email' className="form-control" />
                </div>
              </div>
              <div className="col-md-12 col-sm-12">
                <div className="form-group">
                  <textarea name="message" required className='form-control' onChange={setInput} id="message" cols="8" rows="4" placeholder='Your Message' value={user.message}></textarea>
                </div>
              </div>

              <div className="col-md-12 col-sm-12">
                <div className="form-group">
                  <p>
                    <input type="checkbox" required name="subscribe" id="subscribe" className='form-check-input me-3' />
                    <label htmlFor="subscribe">I agree all terms &amp; conditions.</label>
                  </p>
                </div>
              </div>

              <div className="col-md-12 col-sm-12">
                <div className="form-group">
                  <button type="submit" onClick={submitContactForm} className='btn btn-primary w-100 rounded-pill'>Send Message</button>
                </div>
              </div>
            </form>
          </div>


          <div className="col-md-6 col-sm-12">
            <div className="p-3">
              <h1 className="h6 text-primary">Address</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam iste impedit eius ab, adipisci voluptate quos saepe exercitationem consequuntur modi delectus, doloremque doloribus dolor iusto animi a minima vitae aperiam.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum minus amet inventore ea corrupti numquam, exercitationem aut! Error dignissimos voluptates nemo dolorem accusamus harum, aspernatur natus, nobis, suscipit dolores non!</p>
            </div>
          </div>
        </div>

        <div className="my-5">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28795.80056035731!2d84.6509586!3d25.5558568!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d5f58a0d42be1%3A0xb802c68a32c1aa04!2sArrah%2C%20Bihar!5e0!3m2!1sen!2sin!4v1674647482522!5m2!1sen!2sin" style={{ "width": "100%", "height": "300px" }} title="Location panditprogrammer" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div >
      <Footer></Footer>
    </>
  )
}

export default Contact