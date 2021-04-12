import React from "react";
import "./myStyles.css";
import logo from "../src/images/logo.png";
import wrapper from "../src/images/wrapper.png";
import location from "../src/images/location.png";
import phone from "../src/images/phone.png";
import clock from "../src/images/clock.png";
import search from "../src/images/search.png";

function Stylesheet() {
  return (
    <div>
      <header className="header">
        <div className="preview_header">
          <a href="https://themeforest.net/item/old-haven-theme-for-old-age-home/20493705?_ga=2.144067573.1564753523.1611592197-1086609507.1611574133">
            <div className="logo">
              <img className="envato_logo" src={logo} />

              <span className="envato">envato</span>
              <span className="envato_market">market</span>
            </div>
          </a>

          <a href="https://themeforest.net/checkout/from_item/20493705?license=regular&support=bundle_6month&_ga=2.86460504.1564753523.1611592197-1086609507.1611574133">
            <button className="button">Buy Now</button>
          </a>
        </div>

        <div className="top_bar">
          <h3 className="top_bar_wrapper">Welcome to a New Lease of Life</h3>
          <div className="button_hover">
            <button className="btn_1">Donate now</button>
            <button className="btn_2">Donate now</button>
          </div>
        </div>
        <div className="wrapper">
          <a href="https://oldhaven.wpengine.com/">
            {" "}
            <img className="wrapper_logo" src={wrapper} />
          </a>

          <div className="envato_info">
           <div> <img classname="address" alt="address" src={location} /></div>
           <div><img className="contact" src={phone} /></div>
           <div><img className="hours_open" src={clock} /></div>
          </div>
          <div className="contact_text">
            <p className="para1">
              153 Crysta Vista
              <br /> New Jersey, NY 11334
            </p>
            <p className="para2">
              (1123) 224 366
              <br />
              info@gardenhaven.com
            </p>
            <p className="para3">
              6 hrs - 21 hrs
              <br /> 
              *Weekends working
            </p>
          </div>
        </div>

        <nav className="nav_bar">
          <ul>
            <li>
              <a href="https://oldhaven.wpengine.com/" className="active">
                Home
              </a>
            </li>

            <li>
              <a href="https://oldhaven.wpengine.com/volunteer/">Volunteer</a>
            </li>
            <li>
              <a href="https://oldhaven.wpengine.com/facilities/">Facilities</a>
            </li>
            <li>
              <a href="https://oldhaven.wpengine.com/donate/">Donate</a>
            </li>
            <li>
              <a href="https://oldhaven.wpengine.com/career/">Career</a>
            </li>
            <li>
             
              <a href="https://oldhaven.wpengine.com/causes-center-aligned/">Causes</a>
              <div className="column">
              <div className="column_1">
              <ul>
                <strong>CENTER-ALIGNED</strong>
                <li><a href="">Without Sidebar</a></li>
                <li><a href="">With left Sidebar</a></li>
                <li><a href="">With Right Sidebar</a></li>
                <li><a href="">With Both Sidebar</a></li>
                <li><a href="">Sticky left Sidebar</a></li>
                

              </ul>

              </div>


              <div className="column_2">
              <ul>
              <strong>BG DISABLED GRID</strong> 
                <li><a href="">With left Sidebar</a></li>
                <li><a href="#">Without Sidebar</a></li>
                <li><a href="">With Right Sidebar</a></li>
                <li><a href="">With Both Sidebar</a></li>
                <li><a href="">Sticky left Sidebar</a></li>
                


              </ul>
              </div>

              <div className="column_3">
              <ul>
              <strong>BG ENABLED GRID</strong>
                <li><a href="">Without Sidebar</a></li>
                <li><a href="">With left Sidebar</a></li>
                <li><a href="">With Right Sidebar</a></li>
                <li><a href="">With Both Sidebar</a></li>
                <li><a href="">Sticky left Sidebar</a></li>
                

              </ul>
              </div>

              <div className="column_4">
              <ul>
              <strong>LIST STYLE</strong>
                <li><a href="#">Without Sidebar</a></li>
                <li><a href="#">With left Sidebar</a></li>
                <li><a href="#">With Right Sidebar</a></li>
                <li><a href="#">With Both Sidebar</a></li>
                <li><a href="#">Sticky left Sidebar</a></li>
                

              </ul>
              </div>
              </div>
             
              </li>
              <li>
                <a href="https://oldhaven.wpengine.com/accommodation/" className="accomodation ">Accomodation</a>
              </li>
              <li>
                <div className="blog_list">
                  <ul>
                  <a href="https://oldhaven.wpengine.com/blog/">Blog</a>
                  <div className="blog_list_content">
               
                <li>Blog - Date And Author Left</li>
                <li>Blog - Date  Left</li>
                <li>Blog - Medium</li>
                <li>Blog - Medium Highlight</li>
                <li>Blog - Medium skin Highlight</li>
                </div>
                </ul>
                </div>
              </li>
          
            <li>
            <div className="Gallery">
                  <ul>
                  <a href="https://oldhaven.wpengine.com/portfolio/">Gallery</a>
                  <div className="Gallery_list_items">
                   <li>Portfolio - Art</li>
                <li>Portfolio - Classic</li>
                <li>Portfolio - Girly</li>
                <li>Portfolio - Icons Only</li> 
                <li>Portfolio - Minimal Icons</li>
                <li>Portfolio - Modern Title</li>
                <li>Portfolio - Presentation</li> 
                <li>Portfolio - Title & Icons Overlay</li>
                </div>
                </ul>
                </div>
            </li>

            <li>
            <a href="https://oldhaven.wpengine.com/shortcodes/" className="Element_list">Elements</a>
            <div className="Elements">
              
              <ul>
              <a href="#news" classname="Element_colomn_1"><strong>ELEMENT I</strong></a>
              
                <li>Blockquotes</li>
                <li>Buttons and Lists</li>
                <li>Carousel</li>
                <li>Columns</li>
                <li>Contact info</li>
              </ul>
             

              
              <ul>
              <a href="#news"><strong>ELEMENT II</strong></a>
              
                <li>Content Shortcodes</li>
                <li>Custom Posts</li>
                <li>Fancy Boxes</li>
                <li>Icon Boxes</li>
                <li>Image with caption</li>
              </ul>
              

             
              <ul>
              <a href="#news"><strong>ELEMENT III</strong></a>
              
                <li>Miscellaneous</li>
                <li>Number Counter</li>
                <li>Pricing Table</li>
                <li>Progress Bar</li>
                <li>Tabs & Toggles</li>
              </ul>
             

            
              <ul>
              <a href="#news"><strong>ELEMENT IV</strong></a>
              
                <li>Team</li>
                <li>Testimonial Carousel</li>
                <li>Testimonial</li>
                <li>Timeline</li>
                <li>Typography</li>
              </ul>
             
              </div>
            </li>
            
            <li>
              <a href="https://oldhaven.wpengine.com/contact/" className="contact_list">Contact</a>
              
            </li>

           <a href="#" target="_blank">
              <img className="search_bar" src={search} />
              </a>
    
           
          </ul>
        </nav>
      </header>
      <div class="form">
        <input type="text" name="name" required />
        <label for="name" class="label-name">
            <span class="content-name">Enter Keyword</span>
        </label>
    </div>
    </div>
  );
}

export default Stylesheet;
