import React, {useEffect, useState} from 'react';
import axios from "axios";

import GardenTableRow from "../../components/GardenTableRow/GardenTableRow"
const MyGarden = () => {


  const [plants, setPlants] = useState([]);
    
  useEffect(() => {
    getPlants();
  }, []);

  const getPlants = () => {
    axios
    .get("/api/plants")
    .then((response) => {
      console.log(response.data);
      setPlants(response.data);
    })
    .catch(err => {
      console.log(err);
    });
  };
  

  


return (
             <div className="container">
        <div className="row">    
        <div className="col s12">
        <h1 className="center-align">My Garden</h1>
            </div>
           </div>
           <div className="row">
               <div className= "col s12">
               <table className="striped">
        <thead>
          <tr>
              <th>Title</th>
              <th>Image</th>
              <th>Type</th>
              <th>Scientific Name</th>
              <th>Moisture Tolerance</th>
              <th>Sun Tolerance</th>
              <th>Max Height</th>
              <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {plants.map((plant) => (
           <GardenTableRow 
           key={plant._id} 
           {...plant} 
           getPlants={getPlants}/>
          ))}
            
        </tbody>
      </table>
    </div>
  </div> 
</div>
    );
            };

export default MyGarden;