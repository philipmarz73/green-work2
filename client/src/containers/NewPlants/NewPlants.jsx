import React, { useState } from 'react';
import axios from "axios";
import GardenTable from "../../components/GardenTable/GardenTable";

const NewPlants = () => {
    const [title, setTitle] = useState("");
    const [plantType, setplantType] = useState("");
    const [sciName, setSciName] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [maxHeight, setMaxHeight] = useState("");
    // const [added, setAdded] = useState(false);
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/api/plantAsk", {
                imageURL: imageURL,
                title: title,
                sciName: sciName,
                type: plantType,
                // sunTolerance: sunTolerance,
                maxHeight: maxHeight,


            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    
    return (

        <div className="container">
        <div className="row">    
        <div className="col">
        <h1 className="center-align">Learn About New Plants</h1>
            </div> 
        </div>
        
  
  <div className="row">
    <form className="col s12"> onSubmit={handleFormSubmit}>
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Plant Name" 
          id="title" 
          type="text" 
          name="title" 
          value={title} 
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          />
          <label htmlFor="title">Plant Name</label>
        </div>
        <div className="input-field col s6">
          <input placeholder="PLant Name" id="title" type="text"/>
          <label htmlfor="title">Plant Name</label>
        </div>
      </div>
      <div className="input-field col s6">
          <input placeholder="Plant Name" id="title" type="text"/>
          <label htmlFor="title">Plant Name</label>
        </div>
        <div className="input-field col s6">
          <input placeholder="PLant Name" id="title" type="text"/>
          <label htmlfor="title">Plant Name</label>
        </div>
        <div className="row">
            <div className="col s12">
                <button className="waves-effect waves-light btn">
                    Find These Plants
                </button>
            </div>
        </div>
      </form>
    </div>
   </div>     
   
      
    );
        
    
  };
        
    
       
       
        
      

export default NewPlants;
