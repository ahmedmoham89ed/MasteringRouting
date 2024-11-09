import React from "react";
import {createBrowserRouter,createRoutesFromElements, Navigate, Route} from "react-router-dom";
import LayoutRoot from "../assets/Pages/Layout";
import QuickStart from "../assets/Pages/Learn/QuickStart";
import FormLearn from "../assets/Pages/Learn/FormLearn";
import LearnLayout from "../assets/Pages/Learn/LearnLayout";
import Download from "../assets/Pages/Learn/Download";
import Describing from "../assets/Pages/Learn/Describing";
import AddingInteractivity from "../assets/Pages/Learn/AddingInteractivity";
import EscapeHatches from "../assets/Pages/Learn/EscapeHatches";
import ManagingState from "../assets/Pages/Learn/ManagingState";
import Tutorial from "../assets/Pages/Learn/Tutorial";
import Home from "../assets/Pages/Home"
import About from "../assets/Pages/About";
import Blog from "../assets/Pages/Blog";
import ContactUs from "../assets/Pages/ContactUs";
import Settings from "../assets/Pages/Settings";
import Login from "../assets/Pages/Login";
import ProductAuth from "../assets/Auth/ProductAuth";
import ErrorHandlingElement from "../assets/Error/ErrorHandlingElement"
import PageNotFound from "../assets/Error/PageNotFound";
const islogged=true;
const userData:{email:string}|null=islogged?{email:"ahmed3moha.2med@gmail.com"}:null;

const router = createBrowserRouter(
    createRoutesFromElements(
    <> 
      /* Pages Layout */ 
      <Route path="/" element={<LayoutRoot/>} errorElement={<ErrorHandlingElement/>}>
            <Route index element={<Home/>} errorElement={<ErrorHandlingElement/>}/>
            <Route path="/About" element={<About/>} errorElement={<ErrorHandlingElement/>}/>
            <Route path="/Blog" element={<Blog/>} errorElement={<ErrorHandlingElement/>}/>
            <Route path="/ContactUs" element={<ContactUs/>} errorElement={<ErrorHandlingElement/>}/>
            <Route path="/Settings" element={<ProductAuth isAllowed={islogged} redirect="/Login" data={userData} ><Settings/></ProductAuth>} errorElement={<ErrorHandlingElement statusCode={404} title="Page Not Found"/>} />
            <Route path="/Login" element={<ProductAuth isAllowed={!islogged}  redirect="/Settings" data={userData}><Login/></ProductAuth>} errorElement={<ErrorHandlingElement/>}/>
      </Route>

      /* learn Layout */
      <Route path="/Learn" element={<LearnLayout/>}>
           <Route index element={<QuickStart />} />
           <Route path="Download" element={<Download/>} />
           <Route path="Describing" element={<Describing/>} />
           <Route path="FormLearn" element={<FormLearn/>} />
           <Route path="AddingInteractivity" element={<AddingInteractivity/>} />
           <Route path="EscapeHatches" element={<EscapeHatches/>} />
           <Route path="ManagingState" element={<ManagingState/>} />
           <Route path="Tutorial" element={<Tutorial/>} />
      </Route>
      
      /* Error Layout */
      <Route path="*" element={<PageNotFound/>} />

    </>
    
));

export default router;







