import React from 'react'
import logo1 from './Assets/logo1.jpg'
import './Footer.css'
import { FaFacebookF,FaTwitter } from "react-icons/fa";
import West from './Assets/West.jpg'
import Master from './Assets/Master.jpg'
import visa from './Assets/visa.jpg'
import pay from './Assets/pay.jpg'

function Footer() {
  return (
    <div className='colorback'>

        <div>
            <div className='imgecom'>
                <div>
                <img src={logo1}  width='50' height='50' className='imags' ></img>
                <label className='word1 ms-2'>E-Comm </label>


                <div className='parg'>
                    <p>Lorem Ipsum is simply dummy text of the<br></br> printing and typesetting industry. Lorem <br></br>Ipsum has been the industry's standard<br></br> dummy text ever.Since the 1500s, when <br></br>an unknown printer.</p>
                </div>
                </div>

                <div>
                    <label className='follow'>Follow Us</label>


                    <div className='since'>
                    <label>Since the 1500s, when an unknown <br></br>printer took a galley of type and<br></br> scrambled.</label>
                    </div>

                    <div className='factwit'>
                        <FaFacebookF className='face' color='#385C8E'/>
                        <FaTwitter className='twit ms-5' color='#03A9F4'/>
                    </div>
                </div>

                <div>
                    <label className='follow'>Contact Us</label>

                    <div className='conus'>
                        <label>E-Comm , 4578<br></br> Marmora Road,<br></br> Glasgow D04 89GR</label>
                    </div>
                </div>
            </div>
        </div>


        <div>
            <div className='commonman'>
                <div>
                    <label className='headingtitlw'>Infomation</label>


                    <div className='subhead'>
                        <div>About Us</div>
                        <div>Infomation </div>
                        <div>Privacy Policy</div>
                        <div>Terms & Conditions</div>
                    </div>
                </div>

                <div>
                    <label className='headingtitlw'>Service</label>

                    <div className='subhead'>
                        <div>About Us</div>
                        <div>Infomation </div>
                        <div>Privacy Policy</div>
                        <div>Terms & Conditions</div>
                    </div>
                </div>

                <div>
                    <label className='headingtitlw'>My Account</label>

                    <div className='subhead'>
                        <div>About Us</div>
                        <div>Infomation </div>
                        <div>Privacy Policy</div>
                        <div>Terms & Conditions</div>
                    </div>

                </div>

                <div>
                    <label className='headingtitlw'> Our Offers</label>

                    <div className='subhead'>
                        <div>About Us</div>
                        <div>Infomation </div>
                        <div>Privacy Policy</div>
                        <div>Terms & Conditions</div>
                    </div>

                </div>

            </div>
        </div>


        <div className='bottomline'>

        </div>


        <div className='ecomcont'>
            <div className='Ecommerce'>
                <label>© 2018 Ecommerce theme by www.bisenbaev.com</label>
            </div>

            <div>
                <img src={West}  width='50' height='35' className='ms-3'></img>
                <img src={Master}  width='50' height='35'className='ms-3'></img>
                <img src={pay}  width='50' height='35' className='ms-3'></img>
                <img src={visa}  width='50' height='35' className='ms-3'></img>
            </div>
        </div>

    </div>
  )
}

export default Footer