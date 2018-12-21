import React, { Component } from 'react';

class Map extends Component {
    render() {
        let mapStyle = {
            border: '0'
          };

   return(
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d923694.2873288485!2d75.05542679728791!3d13.009229952465148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb32dee64c09eb%3A0x6ce8df9dccd798dc!2sBalur+Estate%2C+Karnataka+577122%2C+India!5e0!3m2!1sen!2sus!4v1545360200451" width="400" height="300" frameborder="0" style = {{mapStyle}} allowfullscreen></iframe>
      </div>
   );
   }
};
export default Map;