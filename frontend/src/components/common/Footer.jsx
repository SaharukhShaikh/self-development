import React from 'react';

const Footer = ({img}) => {
  return (
   <>
   <footer >
        <section class="footers">
            <div class="list">
                <div class="List-1">
                  <h3>Quick Links</h3>
                    
                        <p>Home</p>
                        <p>Things To Do</p>
                        <p>Tourist Attraction</p>
                        <p>Favorite</p>
                    
                 </div>
                 <div class="List-2">
                    <h3>Address</h3>
                    
                        <p>14, 1 Elps bridge ST,</p>
                        <p>auckland 3500, Ethiopia</p>
                        <p>+15 9900 990 009</p>
                        <p>contactus@ethiopia.com</p>
                    
                </div>
                <div>

       
                    <p>Subcribe to our newsletter</p>
                    <div class="para">
                       
                        <input type="text" class="footer-search" placeholder="Your email" />
                        <button class="footer-button">v</button>
                    </div>
                </div>
            </div>
        </section>
        <hr />
        <p class="base">Techie.io©All Rights Reserved</p>
        </footer>
</>
  );
};

export default Footer;
