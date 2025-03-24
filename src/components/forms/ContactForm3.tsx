const ContactForm3 = () => {
  return (
    <div className="panel-body">
      <div className="row g-3">
        <div className="col-sm-6">
          <div className="row g-3">
            <div className="col-12">
              <input
                type="text"
                className="form-control "
                placeholder="Your Name*"
              />
            </div>
            <div className="col-12">
              <input
                type="email"
                className="form-control "
                placeholder="Your Email*"
              />
            </div>
            <div className="col-12">
              <input
                type="tel"
                className="form-control "
                placeholder="Your Phone*"
              />
            </div>
            <div className="col-12">
              <input
                type="text"
                className="form-control "
                placeholder="Your Website*"
              />
            </div>
            <div className="col-12">
              <input
                type="text"
                className="form-control "
                placeholder="Subject*"
              />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <textarea
            className="form-control  h-100"
            rows={8}
            placeholder="Your Message*"
          ></textarea>
        </div>
        <div className="col-12 text-end">
          <button className="btn btn-primary">Send Message</button>
        </div>
      </div>
    </div>
  );
};
export default ContactForm3;
