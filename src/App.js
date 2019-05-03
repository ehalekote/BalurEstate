import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";


//Images
import coffee_dry from "./imgs/coffee_dry.JPG"
import conservation3 from "./imgs/conservation3.jpg"
import conservation4 from "./imgs/conservation4.jpg"
import night from "./imgs/night.jpeg"
import coffeeFlower from "./imgs/coffeeFlower.jpg"
import coffeeHands from "./imgs/coffeeHands.jpg"
import green1 from "./imgs/green1.jpg"
// import green2 from "./imgs/green2.jpg"
import cardamom from "./imgs/cardamom.jpg"
import conservation1  from "./imgs/conservation1.jpg"
import atmosphere  from "./imgs/atmosphere.jpg"
import waterfall  from "./imgs/waterfall.jpg"
import leaves  from "./imgs/leaves.jpg"
import sideShot  from "./imgs/sideShot.jpeg"
import windowShot  from "./imgs/windowShot.JPG"
import hall  from "./imgs/hall.jpg"
import diningRoom  from "./imgs/diningRoom.jpg"
import bedroom  from "./imgs/bedroom.jpg"



//Components
import Navbar from "./components/Navbar/Navbar";
import MainCover from "./components/MainCover/MainCover";
import Footer from "./components/Footer/Footer"
import MainChoicePanel from './components/MainChoicePanel/MainChoicePanel';
import MainVideo from "./components/MainVideo/MainVideo"
import SecondaryCover from "./components/SecondaryCover/SecondaryCover";
import SecondaryContent from "./components/SecondaryContent/SecondaryContent";
import PointsOfInterest from "./components/PointsOfInterest/PointsOfInterest";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";


class App extends Component {
  render() {

  {/*Coffee*/}
    let text_Coffee = (
      <div>
        <h2>A Tradition of Coffee</h2>

          <p>Balur estate was formally started in the 1840s by the partnership of Thomas Cannon, Col. Onslow and R.G. Allardyce. Today, it is under the responsible stewardship of fourth generation coffee planters.</p>

          <p>BIndia is the only country that grows all of its coffee under the canopy of native trees, there by preserving the local ecosystem and maintaining it’s biodiversity. “Shade grown coffee” plantations harbor a diversity of plants, insects, and animals that make up the ecologically sensitive Western Ghats region.</p>

          <p>Balur estate is nestled on the slopes of the western ghats at over 3000 feet elevation.The estate produces quality Arabica and Robusta coffee along with other crops like pepper, cocao, nutmeg and cardamom.</p>

        <br/>

        <h2>What Makes Our Coffee So Unique</h2>

          <p>Our farm is unique in its location and elevation—these two conditions help us create exceptional coffee.Like fine wine, our coffee is processed with the utmost attention at each processing stage from picking to milling. We still pick every bean by hand, manually harvesting only when the fruits are cherry red, and using no mechanical harvesting that would mix bitter green beans in with matured red fruit.</p>
        
        <br/>

        <h2>Our Commitment ot Quality Coffee</h2>

          <p>State of the art machinery and skilled workers are employed to ensure coffee that is consistently defect free. We follow multiple post harvesting processing methods like wet processing, semi washed and naturals based on client requirements.</p>
          <p>Working closely with clients and industry experts from across the globe, we produce traceable micro-lots, using unique techniques such as yeast fermentation, carbon maceration, and natural maceration.Even with the most proven methods and techniques in place, we are constantly exploring different methods of coffee processing.The phrase “quality from crop to cup” best describes the planning and operation of Balur estate coffee.</p>


      </div>
    );

    let col1_Coffee=[coffeeFlower,green1,coffeeHands,cardamom]

  {/*Conservation*/}
    let text_Conservation = (
      <div>
        <h2>A History of Conservation</h2>

          <p>Balur Estate lies amongst the Sahyadri Range of the Western Ghats, recently declared a UNESCO World Heritage site and home to a huge variety of flora and fauna – some unique to this part of the world. Not only has the coffee at Balur Estate always been grown in a rainforest friendly plantation,but  the local traditions also embrace a deep respect for nature and a culture of co-existence with life around us. At the estate, you wake up to agricultural practice that puts the environment first. Numerous streams, notably the venerated Hemavathy River, originate just above the estate, and ensure a perennial water supply along with beautiful landscapes and waterfalls.</p>

          <p>“The true meaning of life is to plant trees, under whose shade you do not expect to sit.”</p>

          <p>The Balur Estate management is committed to restoring and enhancing the land, water and wildlife through habitat management and wildlife conservation. Our two decades of stewardship has been about returning the land and water to its former glory, restoring what was lost. Along this journey we were blessed to have the technical expertise of entomologists Dr. A. K. Chakravarthy, and Dr. N.E. Thyagaraj.</p>

        <br/>

        <h2>A Green Future</h2>

          <p>We have been working on conservation projects to address issues like soil erosion, nutrient runoff, pesticide drift and loss of wildlife habitats. Our technical advisors help us maintain existing practices and also bring new ones such as integrated pest management, planting native trees to improve soil quality and wildlife habitat, farm composting of organic waste, precision nutrient application, and natural resource conservation.</p>

          <p>Looking to the future, through research, training, and education we hope to educate and exchange our knowledge with youth groups, biologists, policy makers and environmentalist. Our vision is to leave this land in a better condition than when we found it so that the future generations can enjoy the beauty of the Western Ghats.</p>

          <p>For green and roasted coffee purchase  please email:</p>

      </div>
    );

    
    let col1_Conservation=[atmosphere,waterfall,conservation1]
    
  {/*Accomodation*/}
    let text_Accomodation = (
      <div>
        <h2>A Beautiful Boutique Getaway</h2>

          <p>The Malenadu region is famous for its rains, hills, streams, waterfalls, the rolling mist, lush green forests, and great food. Coupled with large well-run coffee plantations dating back over a century and a half and a low population density, this is the perfect place for travelers who seek leisure and tranquility</p>

          <p>Balur Estate is a retreat for the rushed soul. It’s about doing things at your pace, doing them right, and in harmony with nature. Everything in the plantation happens for a reason, and has a meaning. The coffee, the stream, the hills, the house and even the furniture all speak the same thoughts – that the best things in life need patience, perseverance and time.</p>

        <br/>

        <h2>Stay in History</h2>

          <p>Balur Estate offers accommodations through 6 renovated, eco-friendly, and classic Indo-English style suites across 3 of the estate’s original buildings from 1853. These accommodations are right in the midst of lush coffee plantations, offering spectacular views of the mountains.</p>


        <br/>

        <h2>A Customized Experience</h2>

          <p>We’re proud of our heritage, our hard work, our traditions and would love to share them with you. We work with the “Linger Company” in Bangalore to welcome guests who want to experience Balur estate.Whether you want to learn about the plantation, visit the surrounding historical sites, or trek through natural beauty, there is something here for you. Your travel will support our small businesses and local economy. We are more than happy to help you customize your trip and accommodate your needs.
          </p>

          <p style={{paddingBottom:"5%"}} ><b>For reservations please reach out at stay@linger.in or call +91-959-005-0001</b></p>

          <PointsOfInterest />

      </div>
    );

    
    let col1_Accomodation=[sideShot, diningRoom, hall,bedroom]
    
    return (
      <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <div className="App">
        
        <Route path="/" component={Navbar} />

        {/* Home */}
        <Route path="/" exact component={MainCover} />
        <Route path="/" exact component={MainChoicePanel} />
        
        {/* <Route path="/" exact component={MainVideo} /> */}

        {/* Coffee */}
        <Route 
                  path="/Coffee" exact 
                  render={(props) => <SecondaryCover text="Coffee" cover={coffee_dry} />}
        />
        <Route 
                  path="/Coffee" exact 
                  render={(props) => <SecondaryContent text={text_Coffee} col1={col1_Coffee} />}
        />
      

        {/* Conservation */}
        <Route 
                  path="/Conservation" exact 
                  render={(props) => <SecondaryCover text="Conservation" cover={conservation4} />}
        />
        <Route 
                  path="/Conservation" exact 
                  render={(props) => <SecondaryContent text={text_Conservation} col1={col1_Conservation}  />}
        />
        {/* Accomodation */}
        <Route 
                  path="/Accomodation" exact 
                  render={(props) => <SecondaryCover text="Ecotourism" cover={night} />}
        />
        <Route 
                  path="/Accomodation" exact 
                  render={(props) => <SecondaryContent text={text_Accomodation} col1={col1_Accomodation}  />}
        />

        {/* <Route path="/Accomodation" component={PointsOfInterest} /> */}
        
        <Route path="/" component={Footer} />

        </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
