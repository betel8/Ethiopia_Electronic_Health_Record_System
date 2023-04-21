import '../css/common.css';
import './about us.css';
import Content from './Content';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer';
function Welcome (props){
  const Contents=[{
    "title":"Vission",
    "text":"being acknowledged nationally as the leader in encouraging top-notch patient care, advocacy, and"+
              " professional fulfillment in the field of medicine and its specializations."},{
    "title":"Goal",
    "text":"Our goal is for all patients who join our system to receive the best care possible "+
          "that is provided at the appropriate time, location, and cost. We are committed to "+
          "developing an environment inside our organization where our patients, staff, and "+
        "physicians are respected. We value you selecting Ethiopian Electronic Health Record System."},{
    "title":"MoH",
    "text":"The Ministry of Health is a federal government ministry of Ethiopia, responsible for public health concerns."
        }
  ];
  return(
    <section className="About_us"> 
      
      <Header pageTitle={"About us"} pageHandler={props.pageHandler}/>
      <div className='contentHolder'>
        <div className='content'>
          <div className='description'>
            <h1>Enhancing Care</h1>
            <p >Our system's mission is to register and save time and energy in order to ensure the accessibility
              accuracy, availability, integrity, and security of patient health information and to create healthier communities
              and enhance the quality of life for patients, physicians, and/or caregivers.</p>
          </div>
        </div>
        <Content contentvalue={Contents}/>           
      </div>
      <Footer pageTitle={"About us"}/>
    </section>   
    );

 }

export default Welcome