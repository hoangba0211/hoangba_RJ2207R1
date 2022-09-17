// import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom"
// import { Category } from "../SelectPro/Category"
// import Product from "../SelectPro/Product"
// import { About } from "./About"
// import { Contact } from "./Contact"
// import { Home } from "./Home"

// export const LinkNav = () => {
//     return (
//         <BrowserRouter>
//             <div className="container">
//                 <ul>
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/about">About</Link></li>
//                     <li><Link to="/contact">Contact</Link></li>
//                     <li><Link to="/category">Select</Link></li>
//                 </ul>
//                 <hr />
//                 <div className="route-place">
//                     <Routes>
//                         <Route path="/" element={<Home/>}></Route>
//                         <Route path="about" element={<About/>}></Route>
//                         <Route path="contact" element={<Contact/>}></Route>
//                         <Route path="category" element={<Category/>}></Route>
//                         <Route path="/:categoryId" element={<Product/>} />
//                     </Routes>
//                 </div>
//             </div>
//         </BrowserRouter>
//     )
// }