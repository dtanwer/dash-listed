import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import PieWidget from "../../components/widget/PieWidget";
import Mychart from "../../components/Mychart/Mychart";
import { useState } from "react";
import Meeting from "../../components/widget/Meeting";


const Home = () => {
  const data=[
    {
      type:'earning',
      value:'2,129,430',
      ismoney:true
    },
    {
      type:'transaction',
      value:'1,520',
      ismoney:false
    },
    {
      type:'like',
      value:'9,721',
      ismoney:false
    },
    {
      type:'user',
      value:'892',
      ismoney:false
    }
  ]

  const [toggle, setToggle] = useState(true);
  const onclickMenu = () => {
    console.log(toggle);
    setToggle(!toggle);
  }
  return (
    <>
       <div id="menu" onClick={onclickMenu}>
          <div id="bar1" className="bar"></div>
          <div id="bar2" className="bar"></div>
          <div id="bar3" className="bar"></div>
        </div>
    <div className="container">
        {toggle ? (<div className="nav"  ><Sidebar /> </div>) : (<div className="change"><Sidebar /> </div>)}
      <div className="home">
        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
            {
              data.map(it=>(
                <Widget item={it} />
              ))
            }
          </div>
          <div className="charts">
            <Mychart />
          </div>
          <div className="widgets">
            <PieWidget />
            <Meeting/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
