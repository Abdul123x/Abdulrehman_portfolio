import React, { useState } from 'react'
import "./Portfolio.css"
const Portfolio = () => {
  const [togglestate,setToggleState] = useState(1);

  const toggleTab = (index)=>{
    setToggleState(index);
  }
  return (
     <section className="qualification section">
      <h2 className="section__title">Qualification</h2>

      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={togglestate=== 1 ? "qualification__button qualification__active button--flex" :"qualification__button      button--flex"} onClick={()=>toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className={togglestate=== 2 ? "qualification__button qualification__active button--flex" :"qualification__button      button--flex"} onClick={()=>toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience              
          </div>
        </div>

        <div className="qualification__sections">
          <div className={togglestate ===1 ? "qualification__content qualification__content-active" :"qualification__content quali"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Web Design</h3>
                <span className="qualification__subtitle">Spain institute</span>
                 
                 <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2019-2020
                 </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>


            <div className="qualification__data">
              <div></div>

              
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title"> Art Director</h3>
                <span className="qualification__subtitle">Virtual University</span>
                 
                 <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2022 present
                 </div>
              </div>

            </div>




            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Web Development</h3>
                <span className="qualification__subtitle">Spain institute</span>
                 
                 <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2019-2020
                 </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>


            <div className="qualification__data">
              <div></div>

              
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title"> ux Expert</h3>
                <span className="qualification__subtitle">Virtual University</span>
                 
                 <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2022 present
                 </div>
              </div>

            </div>

            
          </div>



          <div className={togglestate ===2 ? "qualification__content qualification__content-active" :"qualification__content quali"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Produck Design</h3>
                <span className="qualification__subtitle">Spain institute</span>
                 
                 <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2019-2020
                 </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>


            <div className="qualification__data">
              <div></div>

              
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title"> UX Desi9gner</h3>
                <span className="qualification__subtitle">Virtual University</span>
                 
                 <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2022 present
                 </div>
              </div>

            </div>




            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Web DESigner</h3>
                <span className="qualification__subtitle">Spain institute</span>
                 
                 <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2019-2020
                 </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>


           

            
          </div>
        </div>
      </div>
     </section>
   
  )
}

export default Portfolio