import Header from "./components/Header/Header"
import Hero from "./components/HeroSection/Hero"
import Logo from "@/pages/logo/page"
import Team from "@/pages/team/page"
import Achieve from "@/pages/achievements/page";
import Course from "@/pages/courses/page"
import Team2 from "./team2/page";
import Customer from "@/pages/customer/page";
import Footer from "./components/Footer/Footer"

export default function Home() {
  return (
    <div>
    <Header></Header>
    <Hero></Hero>
    <Logo></Logo>
    <Team></Team>
    <Achieve></Achieve>
    <Course></Course>
    <Team2></Team2>
    <Customer></Customer>
    <Footer></Footer>
    </div>
  )
}
