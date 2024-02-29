import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHome, faWallet, faUser, faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  return (
    <>
      <div className='flex ml-[100px] mt-[150px]'>
        <div>
          <p className='w-[90px] h-[24px]'
            style={{
              fontFamily: 'Poppins',
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '24px',
              letterSpacing: '0em',
            }}>
            LET'S TALK
          </p>
        </div>
        <button className="absolute w-[200px] h-[50px] ml-[949px] rounded-tl-none rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] bg-black text-white shadow-md"
          style={{
            boxShadow: '10px 10px 15px 0px rgba(0, 0, 0, 0.4)'
          }}>
            <p className='relative'>
          Contact Us Now
              </p>
        </button>
      </div>

      <div className='mt-[-10px] ml-[100px]'>
        <p className='w-[464px] h-[54px]'
          style={{
            fontFamily: 'Poppins',
            fontSize: '36px',
            fontWeight: 600,
            lineHeight: '54px',
            letterSpacing: '0em',
          }}>
          Want to Reserve a table ?
        </p>
      </div>

      <div className="w-[1245px] h-[0.5px] mt-[46.5px] ml-[95px] border-t border-solid border-black">
      </div>

      <div className='mt-[41px] ml-[100px] w-[845px] h-[48px]'>
        <p className=''
          style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '23.8px',
            letterSpacing: '0em',
          }}>
          Lorem ipsum dolor sit amet consectetur. Gravida maecenas congue lectus et ut id pretium viverra placerat. Lorem <br />
          ipsum dolor sit. Lorem ipsum dolor sit amet
        </p>
      </div>
    </>
  )
}

export default ContactUs