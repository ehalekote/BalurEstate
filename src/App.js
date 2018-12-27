import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


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
        <h2>From Crop to Cup</h2>

          <p>Chikmagalur was the scene of all the action that saw India getting introduced to coffee. In the 17th century A.D. coffee first arrived in India when Baba Budan brought 7 seeds from Mocha, Yemen where he tasted the brew. It was much later in 1830 that the first formal plantation were started in Mysore state by Thomas Cannon – at none other than Balur Village!</p>

          <p>Balur estate was formally started in the 1840s by the partnership of Thomas Cannon, Col. Onslow and R.G. Allardyce and the first crop was recorded in 1952. It passed in to the hands of M/s Coffee lands in 1947, with whom it stayed up until 1971. It was then owned by Agro Pvt Ltd, and then a consortium of owners, before the Shivabadra estate aquired it a little over a decade ago.</p>

          <p>The estate produces fine Arabica, and quality Robusta coffees to suit a multitude of palettes along with other crops like pepper, vanilla and cardamom. Processing for specialty coffees is also done on a need basis. The theory of “Quality from crop to cup” best describes the planning and operation of Balur estate coffee.</p>

        <br/>

        <h2>A Tradition of Coffee</h2>

          <p>The estate is located 3000 plus feet above sea level, has 26 kilometers of internal roads and a large man-made lake that helps collect rainwater for irrigation. Numerous streams, and the venerated Hemavathy – that originates little above the estate – ensure perennial water supply as well as punctuate the landscape with pretty waterfalls. In 1961, the estate saw one of the worst rainfalls at 270 inches for the year, of which 128 inches was received during the month of July itself!  A lot of the plantation was destroyed, including 15 acres directly lost in landslides. It took the better part of the decade to reinvigorate the estate with fresh plantation. </p>
          
          <p>The Hemavathy river is our local ganges; it originates in Balur and runs through miles of ecoregions before draining in to Cavery. A large number of people depend on it for agriculture. To bring back the troubled Hemavathy to its old glory we have taken lot of measures within our farm and moving forward would like to involve the community by forming conservation cooperative along its basin.</p>

          <p>India is the only country that grows all of its coffee under the canopy of trees, there by preserving the ecosystem. Shade grown coffee plantations harbor diversity of living things like orchids, insects, birds and animals in the ecologically sensitive regions of the biodiversity-rich Western Ghats</p>

      </div>
    );

    let col1_Coffee=["/imgs/DSC07292-510x510.jpg","/imgs/demo-image-01.jpg","/imgs/photo9jpg.jpg"]

  {/*Conservation*/}
    let text_Conservation = (
      <div>
        <h2>A History of Conservation</h2>

          <p>Balur Estate lies amongst the Sahyadri Range of the Western Ghats, recently declared a UNESCO World Heritage site and home to a huge variety of flora and fauna – some unique to this part of the world.Not only is the coffee at Balur Estate has always been grown in a rainforest friendly plantation, the local traditions also embrace a deep respect for nature and a culture of co-existence with life around us. At the estate, you wake up to “SHADE GROWN” coffee that is grown responsibly.</p>

          <p>“The true meaning of life is to plant trees, under whose shade you do not expect to sit.”</p>

          <p>The Balur Estate management is committed to restoring and enhancing the land, water and wildlife through habitat management and wildlife conservation. Before our ownership the property was highly fragmented and abused. Our over a decade of toil has been about returning the land and water streams to its former glory, restoring what was lost. Trying and failing and learning from failure — has been the hallmark of our journey. Along this journey we were blessed to have come across and to team up with Dr. A. K. Chakravarthy, Head, Division of entomology and Nematology, Institute of horticultural research, Bangalore and Dr. N.E. Thyagaraj, Professor of entomology, Univ of agricultural sciences, Bangalore.</p>

        <br/>

        <h2>A Green Future</h2>

          <p>Under their stewardship and guidance we have been working on conservation projects to address issues like soil erosion, nutrient runoff, pesticide drift and loss of wildlife habitat. Conservation planning involves assessing a farm’s natural resource challenges and opportunities and identifying appropriate conservation practices. It is a valuable but often overlooked process that can help farmers streamline conservation efforts and integrate environmental management with agricultural production goals. Farm conservation plans are highly customized. They address not only where, when and how to implement practices, but also what is needed to continue or maintain practices over time – including renovation or enhancement of existing practices such as :</p>

          <p>
            <ul>
              <li>Advanced integrated pest management</li>
              <li>Planting native trees to improve soil quality and wildlife habitat</li>
              <li>Water resource protection</li>
              <li>On farm composting of organic waste</li>
              <li>Precision nutrient application</li>
              <li>Natural resource conservation</li>
            </ul>
          </p>

          <p>You can’t go back in time nor you can re-create what was before, but you can do the best you can to marshal the resources you have to be consistent with the ecology and the land will take care of itself. It won’t be the same, but it will be good in its own right. Looking to the future, through research, training and education we are looking forward to educate and exchanging our knowledge with youth groups, biologists, policy makers and environmentalist. Our vision is to leave this land in a better condition than when we found it so that the future generation can enjoy the beauty of western Ghats – scanning the horizon and listening intently for that flock of Malnad parrots flying across the canopy, a place where a young boy’s most fantastic childhood dream continues to come true.</p>

      </div>
    );

    
    let col1_Conservation=["/imgs/conservation1.jpg","/imgs/waterfall.jpg","/imgs/leaves.jpg"]
    
  {/*Accomodation*/}
    let text_Accomodation = (
      <div>
        <h2>A Beautiful Getaway</h2>

          <p>The Malenadu region is famous for its rains, hills, streams, waterfalls, the rolling mist, lush green forests and great food. Coupled with large, well run coffee plantations dating back over a century and a half, and a low population density, this is a perfect place for those who seek a few days of quiet and rest and rejuvenation.</p>

          <p>Balur Estate is a retreat for the rushed soul. Its about doing things at their pace, doing them right and in harmony with the nature. Everything in the plantation happens for a reason, and has a meaning. The coffee, the stream, the hills, the house and even the furniture all speak the same thought – that the best things in life need patience, perseverance and time.</p>

        <br/>

        <h2>Stay in History</h2>

          <p>Give yourself some time. Take a walk. Slow down your thoughts. Let the long history of the place, and its beautiful result, slowly seep into you and fill your lungs with fresh air, and the mind with fresh thoughts. The blissful surroundings highlight the virtue of slowness.</p>

          <p>Balur Estate has an old Heritage Bungalow from 1853, and recently renovated suites built to the same spec. We’re proud of our heritage, our hard work, our traditions and would love to share the same with you. We work with Linger to welcome guests who might like to experience the natural abundance that the place provides, or even learn a thing or two about the plantation and its activities. There are numerous old temples in the area, and its perfect for those who seek the outdoors on a good trek, run or a bike-ride.</p>

          <p><b>For reservations please reach out at stay@linger.in or call +91-959-005-0001</b></p>

      </div>
    );

    
    let col1_Accomodation=["/imgs/side_shot_house.jpeg","/imgs/img_1.JPG","/imgs/DSC06939-510x510.jpg"]
    
    return (
      <Router>
      <ScrollToTop>
        <div className="App">
        
        <Route path="/" component={Navbar} />

        {/* Home */}
        <Route path="/BalurEstate/" exact component={MainCover} />
        <Route path="/BalurEstate/" exact component={MainChoicePanel} />
        <Route path="/BalurEstate/" exact component={MainVideo} />

        {/* Coffee */}
        <Route 
                  path="/Coffee" exact 
                  render={(props) => <SecondaryCover text="Coffee" cover="/imgs/coffee_dry.JPG" />}
        />
        <Route 
                  path="/Coffee" exact 
                  render={(props) => <SecondaryContent text={text_Coffee} col1={col1_Coffee} />}
        />
      

        {/* Conservation */}
        <Route 
                  path="/Conservation" exact 
                  render={(props) => <SecondaryCover text="Conservation" cover="/imgs/conservation3.jpg" />}
        />
        <Route 
                  path="/Conservation" exact 
                  render={(props) => <SecondaryContent text={text_Conservation} col1={col1_Conservation}  />}
        />
        {/* Accomodation */}
        <Route 
                  path="/Accomodation" exact 
                  render={(props) => <SecondaryCover text="Accomodation" cover="/imgs/night.jpeg" />}
        />
        <Route 
                  path="/Accomodation" exact 
                  render={(props) => <SecondaryContent text={text_Accomodation} col1={col1_Accomodation}  />}
        />

        <Route path="/Accomodation" component={PointsOfInterest} />
        
        <Route path="/" component={Footer} />

        </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
