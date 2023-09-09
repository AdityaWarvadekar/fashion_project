import React from 'react'
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
    <div className="footer-clean">
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="/">Web design</a></li>
                            <li><a href="/">Development</a></li>
                            <li><a href="/">Hosting</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="/">Company</a></li>
                            <li><a href="/">Team</a></li>
                            <li><a href="/">Legacy</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Careers</h3>
                        <ul>
                            <li><a href="/">Job openings</a></li>
                            <li><a href="/">Employee success</a></li>
                            <li><a href="/">Benefits</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row justify-content-center">
                <div className="col item social"><a href="/"><i className="fa-brands fa-facebook"></i></a><a href="/"><i className="fa-brands fa-twitter"></i></a><a href="/"><i className="fa-brands fa-snapchat"></i></a><a href="/"><i className="fa-brands fa-instagram"></i></a>
                        <p className="copyright">copyright adityawarvadekar © 2018</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    </>
  )
}

export default Footer