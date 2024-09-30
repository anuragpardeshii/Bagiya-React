import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4"> 
      <div className="container text-center pt-5">
        <div className="row pt-5 pb-4">
          <div className="col-md-4 pb-5">
            <h5>About Bagiya</h5>
            <p>
              Bagiya is your interactive productivity app that helps you stay focused, earn virtual coins, and plant real trees. Turn your focus into a positive environmental impact.
            </p>
          </div>

          <div className="col-md-4">
            <h5>Team Bagiya</h5>
            <p>
              Join the community of passionate people who are making the world greener by planting trees with every task completed. Together, we can grow forests!
            </p>
          </div>

          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: pardeshianurag22@gmail.com</li>
              <li>Phone: +91 8435304050</li>
              <li>Address: 123 Green St, Treeville</li>
            </ul>
          </div>
        </div>

        <div className="row pt-5 pb-4">
          <div className="col-md-12">
            <p >
              &copy; {new Date().getFullYear()} Bagiya. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
