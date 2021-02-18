import React, {useEffect, useState} from 'react';
import axios from "axios";
const MyGarden = () => {


  const [plants, setPlants] = useState([]);
    
  useEffect(() => {
    axios
    .get("/api/plant")
    .then((response) => {
      console.log(response.data);
      setPlants(response.data);
    })
    .catch((err => {
      console.log(err);
    }),
  }, []);

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
          {plants.map(
            ({
              _id,
              title,
              imageURL,
              plantType,
              sciName,
              moisture,
              sunTolerance,
              maxHeight,
            }) => (
            <tr key={_id}>
            <td>{title}</td>
            <td><img src={imageURL} alt={plant} style={{height: "4em"}}></img></td>
            <td>{plantType}</td>
            <td>{sciName}</td>
            <td>{moisture}</td>
            <td>{sunTolerance}</td>
            <td>{maxHeight}</td>
            <td>Checkbox?</td>
          </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  </div> 
</div>
    );
};

export default MyGarden;