import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Contact = () => {
  return (
    <>
      <Header></Header>
      <div className="container">
        <h1 className="h3 text-uppercase text-primary text-center py-4">&mdash; Contact us &mdash;</h1>
        <div className="row">

          <div className="col-md-6 col-sm-12">
            <h2 className="h6 mb-4">Contact to our community support team</h2>
            <form className="row gy-3">
              <div className="col-md-6 col-sm-12">
                <div className="form-group">
                  <input type="text" id='fname' placeholder='First Name' className="form-control" />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="form-group">
                  <input type="text" id='lname' placeholder='Last Name' className="form-control" />
                </div>
              </div>
              <div className="col-md-12 col-sm-12">
                <div className="form-group">
                  <input type="email" id='email' required placeholder='Email' className="form-control" />
                </div>
              </div>
              <div className="col-md-12 col-sm-12">
                <div className="form-group">
                  <textarea name="message" required className='form-control' id="message" cols="8" rows="4" placeholder='Your Message'></textarea>
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
                  <button type="submit" className='btn btn-primary w-100 rounded-pill'>Send Message</button>
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
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28795.80056035731!2d84.6509586!3d25.5558568!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d5f58a0d42be1%3A0xb802c68a32c1aa04!2sArrah%2C%20Bihar!5e0!3m2!1sen!2sin!4v1674647482522!5m2!1sen!2sin" style={{"width":"100%","height":"300px"}} title="Location panditprogrammer" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div >
      <Footer></Footer>
    </>
  )
}

export default Contact