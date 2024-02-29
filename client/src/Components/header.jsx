import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHome, faWallet, faUser, faHeart, faComment } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
    return (
        <div className=' flex h-[106px]'>
            <div className=' ml-[100px] mt-[31px]'>
                <p className='w-[90px] h-[48px]'
                    style={{
                        fontFamily: 'Poppins',
                        fontSize: '32px',
                        fontWeight: 600,
                        lineHeight: '48px',
                        letterSpacing: '0em',
                    }}>
                    Taste
                </p>
                <p className='mt-[6px] w-[104px] h-[24px]'
                    style={{
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '24px',
                        letterSpacing: '0em',
                    }}>
                    Lorem ipsum
                </p>
            </div>
            <div className='mt-[31px] ml-[1069px] relative z-10 bg-black w-[67px] h-[75px] flex items-center justify-center'
                style={{
                    borderRadius: '15px 15px 40px 13px',
                }}
            >
                <FontAwesomeIcon icon={faShoppingCart} className='text-white h-[38px] w-[39px]' />
            </div>
        </div>

    )
}

export default Header