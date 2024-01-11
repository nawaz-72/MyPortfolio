import {Sora} from "@next/font/google"

const sora = Sora({
  subsets:['latin'],
  variable: '--font-sora',
  weight: ['100','300','400','500','600','700','800'],

})

import Nav from "../components/Nav"
import Header from "../components/Header"
import TopLeftImg from "../components/TopLeftImg"
import ParticlesContainer from "./ParticlesContainer"

const Layout = ({children}) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat font-sora relative ${sora.variable }` }>
    <TopLeftImg/>
    <Nav/>
    <Header/>
    <ParticlesContainer/>
    {children}
  </div>
  )
  
};

export default Layout;
