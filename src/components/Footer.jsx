import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-container">
            <ul>
              <li>Solutions</li>
              <li>Video maker</li>
              <li>Music visualizers</li>
              <li>Lyric video maker</li>
              <li>Stream overlays</li>
              <li>Slideshow Maker</li>
              <li>Corporate Videos</li>
              <li>Stories</li>
              <li>Promo Videos</li>
              <li>Video ads</li>
              <li>Music Video Maker</li>
              <li>Logo Animation</li>
              <li>Christmas wishes</li>
            </ul>

            <ul>
              <li>video types</li>
              <li>Intros</li>
              <li>Music Visualization</li>
              <li>Lyric video</li>
              <li>Slideshow</li>
              <li>Video Ads</li>
              <li>Youtuber</li>
              <li>Stream Overlays</li>
              <li>Employer Branding</li>
              <li>Holidays & Sales</li>
              <li>Product Promo</li>
              <li>Browse all</li>
            </ul>

            <ul>
              <li>Pricing</li>
              <li>Subscription plans</li>
              <li>Pricing FAQ</li>
            </ul>

            <ul>
              <li>Resources</li>
              <li>Help</li>
              <li>Affiliate program</li>
              <li>Design Community</li>
              <li>Sell your templates</li>
              <li>Blog</li>
            </ul>

            <ul>
              <li>Company</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Terms & Conditions</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="after-footer">
            <h3>© {new Date().getFullYear()} videobolt.net</h3>
            <div className="after-footer__socials">
              <a href="#home">
                <BsFacebook />
              </a>
              <a href="#home">
                <AiFillYoutube />
              </a>
              <a href="#home">
                <BsTwitter />
              </a>
              <a href="#home">
                <BsLinkedin />
              </a>
              <a href="#home">
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
