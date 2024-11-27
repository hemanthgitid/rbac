import React from 'react'
import hm from '../Styles/Home1.module.css'
import h2_1 from '../Assets/h2_1.jpg'
import h2_2 from '../Assets/h2_2.jpg'
const Home1 = () => {
  return (
    <div className={hm.overall}>
            <div className={hm.div1}>
                <div className={hm.text1}>
                  <h1>1985</h1>
                </div>
                <img src={h2_1} alt='home1' width={300} height={350} className={hm.image1}/>
                <img src={h2_2} alt='home2'  width={300} height={350} className={hm.image2} />
            </div>
            <div className={hm.div2}>
               <h1 className={hm.m_plus_p_thin}>INTRODUCING A NEW RESIDENCE</h1>
               <p>Each apartment has been individually designed to maximize space and light.
                Smart Home Technology installed as standard in each apartment putting you in
               total control of your home at the touch of a button from wherever you might be.</p>
            </div>
    </div>
  )
}

export default Home1