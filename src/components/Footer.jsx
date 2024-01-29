import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='container'>
      <footer className='row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
        <div className='col mb-3'>
          <h5>ABOUT OUR ONLINE LIBRARY</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-2'>
              <Link to='/privacy' className='nav-link p-0 text-body-secondary'>
                Privacy Policy
              </Link>
            </li>
            <li className='nav-item mb-2'>
              <Link to='/terms' className='nav-link p-0 text-body-secondary'>
                Terms of Use
              </Link>
            </li>
            <li className='nav-item mb-2'>
              <Link to='/cookies' className='nav-link p-0 text-body-secondary'>
                About Cookies
              </Link>
            </li>
            <li className='nav-item mb-2'>
              <Link
                to='/manage-cookies'
                className='nav-link p-0 text-body-secondary'
              >
                Manage Cookies
              </Link>
            </li>
            <li className='nav-item mb-2'>
              <Link
                to='/accessibility'
                className='nav-link p-0 text-body-secondary'
              >
                Accessibility
              </Link>
            </li>
          </ul>
        </div>
        <div className='col mb-3'>
          <h5>HELP & SUPPORT</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-2'>
              <Link to='/contact' className='nav-link p-0 text-body-secondary'>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className='col mb-3'>
          <h5>Schedule</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-2'>Monday-Sunday</li>
            <li className='nav-item mb-2'>9am-11pm</li>
          </ul>
        </div>
        <div className='col mb-3'>
          <h5>Follow Us</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-2'>
              <a
                href='https://github.com/collaboration-work/team-7-react-project'
                className='nav-link p-0 text-body-secondary'
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <div className='col mb-3'>
          <h5>Address</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-2'>Virkesvägen 2, 12030, Stockholm</li>
          </ul>
        </div>
        <hr style={{ width: "100%" }} />
        <div className='d-flex justify-content-between w-100'>
          <div className='col mb-3'>
            <p className='text-body-secondary' style={{ fontSize: "larger" }}>
              TEAM 7
            </p>
          </div>
          <div className='col mb-3'>
            <svg className='bi me-2' width='40' height='32'>
              <use xlinkHref='#bootstrap'></use>
            </svg>
            <p className='text-body-secondary' style={{ fontSize: "smaller" }}>
              Copyright ©2024 Google Books, Inc or related companies. All rights
              reserved, including rights for text and data mining and training
              of artificial technologies or similar technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
