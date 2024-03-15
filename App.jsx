import React, { useState } from 'react';
import './styles.css'; // Import the CSS file with the provided styles
import jsPDF from 'jspdf';

function App() {

  

  const [districts, setDistricts] = useState([

    //generate fake data  of political parts


    { id: 1, name: "District 1", details: [{ pop: 100000, nbcandi: 500 }] },

    { id: 1, name: "District 1", details: [{ pop: 100000, nbcandi: 500 }] },
    { id: 2, name: "District 2", details: [{ pop: 200000, nbcandi: 600 }] },
    { id: 3, name: "District 3", details: [{ pop: 150000, nbcandi: 450 }] },
    { id: 4, name: "District 4", details: [{ pop: 180000, nbcandi: 550 }] },
    { id: 5, name: "District 5", details: [{ pop: 220000, nbcandi: 700 }] },
    { id: 1, name: "District 1" },
    { id: 2, name: "District 2" },
    { id: 3, name: "District 3" },
    { id: 4, name: "District 4" },
    { id: 5, name: "District 5" },

  ]);



  const [selectedItem, setSelectedItem] = useState([]);

  // Handler function to handle selection changes
  const handleOnChange = (event) => {
    setSelectedItem(event.target.value);
    setShowDetails(true);
  };

  //getting the district chosen 
  const getDistrictDetails = () => {
    const district = districts.find((district) => district.name === selectedItem);
    return district ? district.details : [];
  };
  //showing district details
  const [showDetails, setShowDetails] = useState(false);
  // State for toggle
  const [isFiltered, setIsFiltered] = useState(false);


  // Function to toggle the filter
  const toggleFilter = () => {
    setIsFiltered(!isFiltered);
  };
  const cancelFilter = () => {
    setIsFiltered(!isFiltered);
  }




  return (
    <>
      <h2 id='title'>Elections des conseillers régionaux 2024</h2><div className="App">
      <div className="verticale_line"></div> {/* Vertical line */}
      <div className="container">
        <div className="circonscription">
          <span>Circonscription</span> {/* Title for Circonscription select */}
          <select id="circonscritpion" name="circonscritpion" className="select" >
            <option value="defaulted">Selectionner... </option>
            {/* Options for Circonscription select */}
          </select>
        </div>
        <span className="empty_box"></span> {/* Empty box */}
        <div className="partis">
          <span>Partis Politiques</span> {/* Title for Partis Politiques select */}
          <select value={selectedItem} onChange={handleOnChange} id="partis" name="partis" className="select">
            <option value="defaulted">Selectionner... </option>
            {districts.map(option => (
              <option key={option.id} value={option.name}>{option.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="toggle">

        {isFiltered ? (<button className="cancel" onClick={cancelFilter}>
          <p>Cancel</p>
        </button>) : ""}

       <button className="filtering" onClick={toggleFilter}>
          <p>Filter</p> {/* Toggle button text */}
        </button>

      </div>

    </div>
     
     <div className='filter_district'>

        {/*{selectedItem !== "defaulted" && isFiltered && showDetails && selectedItem && (
          <div className='selected_items'>
            <h2>You have selected: {selectedItem}</h2>
            <table>
              <thead>
                <tr>
                  <th>Population</th>
                  <th>Nombre de candidats</th>
                </tr>
              </thead>
              <tbody>
                {getDistrictDetails().map((detail, index) => (
                  <tr key={index}>
                    <td>{detail.pop} habitants</td>
                    <td>{detail.nbcandi} candidats</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {/* selectedItem !== "defaulted" && isFiltered && showDetails && selectedItem && (
          <div className='selected_items'>
            <h2>You have selected : {selectedItem}</h2>
            <ul>
              {getDistrictDetails().map((detail,index)=>(
                <li key={index}>The population in this district is : {detail.pop} and the number of candidates is {detail.nbcandi}</li>
              ))}
            </ul>
      </div>)}*/}
    </div > 
    <div className='list_candidature'>
      <h2>Liste des candidatures</h2>
    <div className='buttons'> 
          <button className='button_c'>Exporter en pdf</button>
          <button className='button_c'>Exporter en excel</button>
          <button className='button_ca' id='button_diff'> <strong>+</strong> Nouvelle candidature</button>
    </div>
        {/*working with the rendered list  */} 
        {selectedItem !== "defaulted" && isFiltered && showDetails && selectedItem && (
          <div className='selected_items'>
           {/*<h2>You have selected: {selectedItem}</h2> */} 
            <table>
              <thead>
                <tr>
                  <th>Liste</th>
                  <th>Circonscription</th>
                  <th>Nombre de Sieges</th>
                  <th>Tête de Liste</th>
                  <th>Nombre de Candidats</th>
                  <th>Date d'enregistrement</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {getDistrictDetails().map((detail, index) => (
                  <tr key={index}>
                    <td>{detail.pop} habitants</td>
                    
                    <td>{detail.nbcandi} candidats</td>
                    <td>{detail.nbcandi} candidats</td>
                    <td>{detail.nbcandi} candidats</td>
                    <td>{detail.nbcandi} candidats</td>
                    <td>{detail.nbcandi} candidats</td>
                    <td>{detail.nbcandi} candidats</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
       {/*
       selectedItem !== "defaulted" && isFiltered && showDetails && selectedItem && (
          <div className='selected_items'>
            <h2>You have selected : {selectedItem}</h2>
            <ul>
              {getDistrictDetails().map((detail,index)=>(
                <li key={index}>The population in this district is : {detail.pop} and the number of candidates is {detail.nbcandi}</li>
              ))}
            </ul>
      </div>)
       */}
    </div>
    </>
  );
}


export default App;
