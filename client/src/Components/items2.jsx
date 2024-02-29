import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHome, faWallet, faUser, faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

const Items2 = () => {
    return (
        <>
            <div className='flex mt-[150.25px] ml-[100px]'>
                <div className='relative w-[672px] h-[162px]'>
                    <p className='' style={{
                        fontFamily: 'Poppins',
                        fontSize: '36px',
                        fontWeight: 700,
                        lineHeight: '54px',
                        letterSpacing: '0em',
                    }}>
                        Our Team of registered nurses and <br />
                        skilled healthcare professionals<br />
                        provide in-home nursing
                    </p>
                    <p className='mt-[48px] w-[568px] h-[96px]' style={{
                        fontFamily: 'Poppins',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '23.8px',
                        letterSpacing: '0em',
                    }}>
                        Lorem ipsum dolor sit amet consectetur. Gravida maecenas congue lectus et ut<br />
                        id pretium viverra placerat. Lorem ipsum dolor sit. Lorem ipsum dolor sit amet<br />
                        consectetur. Gravida maecenas congue lectus et ut id pretium viverra placerat.<br />
                        Lorem ipsum dolor sit.
                    </p>
                </div>

                <div className='relative h-[454px]'>
                    <img className=' w-[524px]  scale-150 object-cover'
                        src='https://s3-alpha-sig.figma.com/img/c507/af5f/73da8e4787c251296f9753fddff4c64d?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LDwdUepPirBBZacXV-AbATmHVpyTRB3-f1rVaSAEoDjmW916wPQcCipPAnEN6wn5rDWbJbxG-hGG3wSX5h6jBTwOoX5L-kZKZgdRzWf3e5muAsr6toJhRw~OPL9DlBnVIUF1LmY4aF-w1jA2XgawCfC4DGkOMi~puRT87Ux-xj6hRVw~ZPuHuL1YOXeeeD-0K2GXxbos4yHrqQP~A9FHCJA2zVzlghOtNwIuGAtvobUSZSI8GroiGEY3hAl-ndMuEqSIrp8I7siW5g2F-YLK4ctaCc1bXg0lDD4iVzv04F6JjAHrFhZdupDK5SzxVKx1L6e4yE6DNuQQE~SgR9VJ~w__'
                    ></img>
                    <div className="z-10 relative w-[130px] h-[130px] ml-[370px] mt-[-400px] rounded-full bg-red-700 flex items-center justify-center">
                        <p className="text-white text-xl font-bold">$ 25.00</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Items2