import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './NavigationBar/Navbar';
import MineSummary from './CarbonMineSummary/MineSummary';
import MineLocation from './MineLocations/mineLocation'; // Ensure the component name matches here
import EmissionSummary from './EmissionSummry/EmissionSummry';
import MineDetail from './EmissionSummry/MineDetail'; // Import the MineDetail component
import GapAnalysis from './GapAnalysis/GapAnalysis';
import Mainneutrality from './carbon_neutrality/Mainneutrality';
import CleanTechnologies from './carbon_neutrality/CleanTechnologies';
import RenewableEnergy from './carbon_neutrality/RenewableEnergy'; // Adjust the path if necessary
import CarbonCredits from './carbon_neutrality/CarbonCredits';
import Afforestation from './carbon_neutrality/Afforestation';
import Homepage from './Homepage/homepage1';
import Neutrality from './neutrality/neutrality';
import Footer from './Homepage/Footer/Footer';

import ALPApp from './CoalMines/ALP/App'; // Import the ALP component
import AKWMCApp from './CoalMines/AKWMC/App';
import BangwarApp from './CoalMines/Bangwar/App';
import BANSRAApp from './CoalMines/BANSRA/App';
import BHANORAApp from './CoalMines/BHANORA-WB/App';
import BHUBANESWARIApp from './CoalMines/BHUBANESWARI/App';
import CHURCHAApp from './CoalMines/charcha-chattisgarh/App';
import CHORAApp from './CoalMines/CHORA-BLOCK/App';
import DIPKAApp from './CoalMines/DIPKA/App';
import DudhichuaApp from './CoalMines/Dudhichua/App';
import GevraApp from './CoalMines/Gevra-Open-Cast/App';
import GodavarikhaniApp from './CoalMines/Godavarikhani/App';
import HaldibariApp from './CoalMines/haldibari/App';
import JayantApp from './CoalMines/Jayant/App';
import JhanjharaApp from './CoalMines/Jhanjhara/App';
import KhairahaApp from './CoalMines/Khairaha/App';
import KUSMUNDAApp from './CoalMines/KUSMUNDA/App';
import KuyaKocpApp from './CoalMines/KuyaKocp/App';
import LakhanpurApp from './CoalMines/Lakhanpur/App';
import MoharApp from './CoalMines/mohar-moher/App';
import GODHURApp from './CoalMines/GODHUR-KUSUNDA/App';
import NigahiApp from './CoalMines/Nigahi/App';
import PHULARITANDApp from './CoalMines/PHULARITAND/App';
import SHARDAApp from './CoalMines/SHARDA-HIGHWALL/App';
import ShyamsunorpurApp from './CoalMines/Shyamsunorpur/App';
import TETULMARIApp from './CoalMines/TETULMARI/App';
import AKASHApp from './CoalMines/NEW-AKASH/App';
import GDKApp from './CoalMines/GDK/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar /> {/* Navbar is placed here to be common for all routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Homepage/>
              
            </>
          }
        />
        <Route
          path="/MineSummary"
          element={
            <>
              <MineSummary />
              
            </>
          }
        />
        <Route
          path="/mineLocation"
          element={
            <>
              <MineLocation />
              
            </>
          }
        />
        <Route
          path="/EmissionSummary"
          element={
            <>
              <EmissionSummary />
             
            </>
          }
        />
        <Route
          path="/GapAnalysis"
          element={
            <>
              <GapAnalysis />
             
            </>
          }
        />
        
        <Route path="/Neutrality" element={<Neutrality />} /> 

        <Route path="/Mainneutrality" element={<Mainneutrality />} />
        <Route path="/CleanTechnologies" element={<CleanTechnologies />} />
        <Route path="/RenewableEnergy" element={<RenewableEnergy/>}/>
        <Route path="/CarbonCredits" element={<CarbonCredits/>}/>
        <Route path="/Afforestation" element={<Afforestation/>}/>
        <Route
          path="/mine/:sno" // Route for individual mine details
          element={
            <>
              <MineDetail />
              
            </>
          }
        />
        {/* Corrected Route for ALP */}
        <Route path="/CoalMines/ALP" element={ 
          <>
            <ALPApp />
          </>
        } />
        <Route path="/CoalMines/AKWMC" element={ 
          <>
            <AKWMCApp />
          </>
        } />
        <Route path="/CoalMines/Bangwar" element={ 
          <>
            <BangwarApp />
          </>
        } />
        <Route path="/CoalMines/BANSRA" element={ 
          <>
            <BANSRAApp />
          </>
        } />
        <Route path="/CoalMines/BHANORA-WB" element={ 
          <>
            <BHANORAApp/>
          </>
        } />
        <Route path="/CoalMines/BHUBANESWARI" element={ 
          <>
            <BHUBANESWARIApp/>
          </>
        } />
        <Route path="/CoalMines/charcha-chattisgarh" element={ 
          <>
            <CHURCHAApp/>
          </>
        } />
        <Route path="/CoalMines/CHORA-BLOCK" element={ 
          <>
            <CHORAApp/>
          </>
        } />
        <Route path="/CoalMines/DIPKA" element={ 
          <>
            <DIPKAApp/>
          </>
        } />
        <Route path="/CoalMines/Dudhichua" element={ 
          <>
            <DudhichuaApp/>
          </>
        } />
        <Route path="/CoalMines/Gevra-Open-Cast" element={ 
          <>
            <GevraApp/>
          </>
        } />
        <Route path="/CoalMines/Godavarikhani" element={ 
          <>
            <GodavarikhaniApp/>
          </>
        } />
        <Route path="/CoalMines/haldibari" element={ 
          <>
            <HaldibariApp/>
          </>
        } />
        <Route path="/CoalMines/Jayant" element={ 
          <>
            <JayantApp/>
          </>
        } />
        <Route path="/CoalMines/Jhanjhara" element={ 
          <>
            <JhanjharaApp/>
          </>
        } />
        <Route path="/CoalMines/Khairaha" element={ 
          <>
            <KhairahaApp/>
          </>
        } />
        <Route path="/CoalMines/KUSMUNDA" element={ 
          <>
            <KUSMUNDAApp/>
          </>
        } />
        <Route path="/CoalMines/KuyaKocp" element={ 
          <>
            <KuyaKocpApp/>
          </>
        } />
        <Route path="/CoalMines/Lakhanpur" element={ 
          <>
            <LakhanpurApp/>
          </>
        } />
        <Route path="/CoalMines/mohar-moher" element={ 
          <>
            <MoharApp/>
          </>
        } />
        <Route path="/CoalMines/GODHUR-KUSUNDA" element={ 
          <>
            <GODHURApp/>
          </>
        } />
        <Route path="/CoalMines/Nigahi" element={ 
          <>
            <NigahiApp/>
          </>
        } />
        <Route path="/CoalMines/PHULARITAND" element={ 
          <>
            <PHULARITANDApp/>
          </>
        } />
        <Route path="/CoalMines/SHARDA-HIGHWALL" element={ 
          <>
            <SHARDAApp/>
          </>
        } />
        <Route path="/CoalMines/Shyamsunorpur" element={ 
          <>
            <ShyamsunorpurApp/>
          </>
        } />
        <Route path="/CoalMines/TETULMARI" element={ 
          <>
            <TETULMARIApp/>
          </>
        } />
        <Route path="/CoalMines/NEW-AKASH" element={ 
          <>
            <AKASHApp/>
          </>
        } />
        <Route path="/CoalMines/GDK" element={ 
          <>
            <GDKApp/>
          </>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
