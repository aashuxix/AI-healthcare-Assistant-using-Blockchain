import { Link } from "react-router-dom";
function Footer() {
    return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
<div className="container">
  <div className="row mb-5">
    <div className="col-md-3">
      <div className="ftco-footer-widget mb-4">
        <h2 className="ftco-heading-2">Blockchain Health Vault</h2>
        <p>An AI-powered healthcare platform offering symptom analysis, appointment scheduling, blockchain-secured medical records, and intelligent medical assistance — all in one place.</p>
      </div>
    </div>
    <div className="col-md-2">
      <div className="ftco-footer-widget mb-4 ml-md-5">
        <h2 className="ftco-heading-2">Quick Links</h2>
        <ul className="list-unstyled">
        <li><Link className="py-2 d-block"underline="none" variant="subtitle2" component={Link} to="/">
                          <span >Home</span>
                       </Link></li>
                        <li><Link className="py-2 d-block"underline="none" variant="subtitle2" component={Link} to="/contact">
                          <span >Contact</span>
                       </Link></li>
                       <li><Link className="py-2 d-block"underline="none" variant="subtitle2" component={Link} to="/blog">
                          <span >Blogs</span>
                       </Link></li>
                       <li><Link className="py-2 d-block"underline="none" variant="subtitle2" component={Link} to="/shop">
                          <span >Shop</span>
                       </Link></li>
        </ul>
      </div>
    </div>
    <div className="col-md-4 pr-md-4">
      <div className="ftco-footer-widget mb-4">
        <h2 className="ftco-heading-2">Recent Blog</h2>
        <div className="block-21 mb-4 d-flex">
          <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_1.jpg)'}} />
          <div className="text">
            <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
            <div className="meta">
              <div><a href="#"><span className="icon-calendar" /> Sept 15, 2018</a></div>
              <div><a href="#"><span className="icon-person" /> Admin</a></div>
              <div><a href="#"><span className="icon-chat" /> 19</a></div>
            </div>
          </div>
        </div>
        <div className="block-21 mb-4 d-flex">
          <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_2.jpg)'}} />
          <div className="text">
            <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
            <div className="meta">
              <div><a href="#"><span className="icon-calendar" /> Sept 15, 2018</a></div>
              <div><a href="#"><span className="icon-person" /> Admin</a></div>
              <div><a href="#"><span className="icon-chat" /> 19</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="ftco-footer-widget mb-4">
        <h2 className="ftco-heading-2">Office</h2>
        <div className="block-23 mb-3">
          <ul>
            <li><a href="ok"><span className="icon icon-envelope" /><span className="text"> nearestdoctor.reply@gmail.com</span></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</footer>
 );
}
export default Footer;