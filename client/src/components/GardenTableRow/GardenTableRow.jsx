import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const GardenTableRow = ({
    _id,
    title,
    imageURL,
    plantType,
    scientificName,
    moistureTolerance,
    sunTolerance,
    maxHeight,
    getPlants,
}) => {
    const deletePlant = (id) => {
        console.log("delete a plant");
        console.log("id");
        axios
        .delete(`/api/plants/${id}`)
        .then(() => {
          getPlants();
        })
        .catch(err => {
          console.log(err);
        });
      
      };
    return (
        <tr>
            <td>{title}</td>
            <td><img src={imageURL} alt={title} style={{height: "4em"}}></img>
            </td>
            <td>{plantType}</td>
            <td>{scientificName}</td>
            <td>{moistureTolerance}</td>
            <td>{sunTolerance}</td>
            <td>{maxHeight}</td>
            <td>
              <FontAwesomeIcon icon={faTrash} 
              onClick={() => {deletePlant(_id);
              }}
              />
              </td>












        </tr>
        
            
       
    );
};

GardenTableRow.propTypes = {
    
};

export default GardenTableRow;