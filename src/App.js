import React, { useState, useEffect } from 'react';
import './App.css';

const planetsData = [
  { 
    


    name: 'Slunce',
    description: 'Slunce je hvězda umístěná ve středu naší sluneční soustavy, která poskytuje energii a světlo, nezbytné pro život na Zemi. Je to masivní sférický plazmový útvar, skládající se převážně z vodíku a hélia, který vytváří obrovské množství energie díky jaderným reakcím v jeho nitru. Slunce má klíčový vliv na zemské klima, počasí a ekosystémy, ovlivňuje také magnetické pole planety a je základním zdrojem energie pro fotosyntézu rostlin. Jeho povrchová teplota dosahuje přibližně 5500 °C a jeho průměr je asi 1,4 milionu kilometrů, což ho činí největší objektem v naší sluneční soustavě.',
      
    },
  { 
    


    name: 'Merkur',
    description: 'Merkur je nejblíže Slunci umístěná planeta v naší sluneční soustavě a také nejmenší z planet. Je to skalnatá a vyprahlá planeta, která má velmi tenkou atmosféru a žádné měsíce. Své jméno získal po římském bohu obchodu a cestování, což odráží jeho rychlý pohyb na obloze. Merkur má extrémní teplotní rozdíly mezi jeho slunnou a stinnou stranou, přičemž teploty na povrchu dosahují až 430 °C na denní straně a klesají na -180 °C na noční straně. Jeho povrch je pokryt krátery a prasklinami, což svědčí o jeho starobě a historii bombardování meteority. Navzdory své blízkosti k Slunci bylo na Merkuru objeveno vodu v podobě ledu v trvale stinných kráterech na polárních oblastech.',
      
    },
  { 
    name: 'Venuše',
    description: 'Venuše je druhou planetou od Slunce v naší sluneční soustavě a je podobná velikosti jako Země. Její atmosféra je složena z hustého oblaku kysličníku uhličitého s vysokým obsahem síry a kyselých aerosolů. Tato atmosféra vytváří skleníkový efekt, což způsobuje extrémní skok v teplotě povrchu planety. Venuše má nejteplejší povrch ze všech planet, s teplotami dosahujícími až 470 °C, což je dostatečně horké na to, aby tál olovo. Její povrch je geologicky mladý, s množstvím sopečných útvarů a hladinami lávy, které naznačují nedávnou sopečnou aktivitu. Vzhledem k extrémním teplotám a tlaku je povrch Venuše nehostinný a nepříznivý pro život, ačkoli zkoumání její atmosféry poskytuje důležité poznatky o tom, jak mohou být planety v naší sluneční soustavě formovány a vývojem prostředí pro život.',
    
  },
  { 
    name: 'Země',
    description: 'Země je třetí planetou od Slunce v naší sluneční soustavě a jedinou planetou, na které je známo, že existuje život. Je to rovněž největší pevná planeta, která obíhá kolem Slunce, a má unikátní charakteristiky, které ji dělají vhodnou pro rozvoj a udržení života',
    
  },
  { 
    


    name: 'Mars',
    description: 'Mars, čtvrtá planeta od Slunce v naší sluneční soustavě, je fascinujícím objektem zájmu vědců i laické veřejnosti. Je to skalnatá planeta s povrchovými rysy, které naznačují její geologickou aktivitu a historii vodní eroze',
      
    },
    { 
    


      name: 'Jupiter',
      description: 'Jupiter, pátá planeta od Slunce v naší sluneční soustavě, je obrovská plynná planeta, která dominuje svým hmotným objemem a gravitací. Je to největší planeta ve sluneční soustavě a má velký vliv na dynamiku celého slunečního systému.',
        
      },
      { 
    


        name: 'Saturn',
        description: 'Saturn, šestá planeta od Slunce v naší sluneční soustavě, je fascinujícím objektem svého druhu. Je známý svými nádhernými prstenci, které ho činí jednou z nejrozpoznatelnějších planet.',
          
        },
        { 
    


          name: 'Uran',
          description: 'Uran je sedmá planeta od Slunce v naší sluneční soustavě a je jedním z tzv. plynných obrů. Je to obrovská planeta s hustou atmosférou a složitým magnetickým polem.',
            
          },
          { 
    


            name: 'Nepput',
            description: 'Neptun je osmá a poslední planeta od Slunce v naší sluneční soustavě. Je to plynný obr s podobnými vlastnostmi jako Uran a další plynné giganty.',
              
            },
  
];


const PlanetList = ({ planets, onSelect }) => (
  <div className="list">
    <h2>Seznam planet</h2>
    <ul>
      {planets.map((planet, index) => (
        <li key={index} onClick={() => onSelect(planet)}>
          {planet.name}
        </li>
      ))}
    </ul>
  </div>
);

const PlanetDetail = ({ planet }) => (
  <div className="planat-detail">
    <h2>Informace o planetách</h2>
    {planet && (
      <div>
        <h3>{planet.name}</h3>
        <p>{planet.description}</p>
      </div>
    )}
  </div>
);

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [loading, setLoading] = useState(false);
  const [planetData, setPlanetData] = useState(null);

  useEffect(() => {
    if (selectedPlanet) {
      setLoading(true);
      setTimeout(() => {
        const data = planetsData.find(planet => planet.name === selectedPlanet.name);
        setPlanetData(data);
        setLoading(false);
      }, 1000);
    }
  }, [selectedPlanet]);

  const handlePlanetSelect = (planet) => {
    setSelectedPlanet(planet);
  };

  return (
    <div className="App">
      <div className="container">
        <PlanetList planets={planetsData} onSelect={handlePlanetSelect} />
        {loading ? (
          <p></p>
        ) : (
          <PlanetDetail planet={planetData} />
        )}
      </div>
    </div>
  );
}

export default App;
