import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHome, faWallet, faUser, faHeart , faComment } from '@fortawesome/free-solid-svg-icons';


const Items1 = () => {
  return (
    <>
    <div className='flex mt-[60px] '>
        <div className='ml-[100px]'>

          <img className=' relative w-[314px] h-[314px] z-10'
            src='https://s3-alpha-sig.figma.com/img/e929/2fdf/11a75152bc45063c0184bc4629e1da79?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xu2G-0iIXKdYcv1dPxPJf34T0wjfPbotL51JD1wiPt3HTED2geXnWXhszr9~rwF8MrJQWmfTZ4TqgpnU5KXx07QDHl5yjvnykpg1m~PKxaGfXKWKfiXESVmrLo8RdYNG7M7bRMQGEAeOu4lSxYPP5iNQb0hfRZfu2suKex6gHzQwFzlHvqcQi7KyF6nCdLPKnjErt5X4BxQOoZPY1DyP9RWegxyT55A~uPXr5CLH1Rge3mhDs8Kkreu4Kjey6YM1zc1Y1oR4Ip-68Ntel1jE97WuO6yKuZegGHvhS2-FXFYu3ZRSwo27UBH04IpwxfoS84eRNFH~nmLMXoceeVbdNA__'
          >
          </img>

          <div className="mt-[-177px] z-0 "
            style={{
              width: '314px',
              height: '324px',
              borderRadius: '50px',
              background: '#FFFFFF',
              boxShadow: '5px 5px 30px 0px #00000026',
            }}>
          </div>
          <p className='w-[129px] h-[30px] mt-[-139px] ml-[28px]' style={{
            fontFamily: 'Poppins',
            fontSize: '20px',
            fontWeight: 700,
            lineHeight: '30px',
            letterSpacing: '0em',
          }}>
            Crab Ramen
          </p>
          <p className='w-[99px] h-[18px] mt-[18px] ml-[28px]' style={{
            fontFamily: 'Poppins',
            fontSize: '12px',
            fontWeight: 500,
            lineHeight: '18px',
            letterSpacing: '0em',
          }}>
            Spicy with garlic
          </p>
          <p className='w-[59px] h-[20px] mt-[18px] ml-[28px]' style={{
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '24px',
            letterSpacing: '0em',
          }}>
            $ 20.00
          </p>
          <div className='relative z-10 bg-black w-[60px] h-[66.75px] ml-[218px]  flex items-center justify-center'
            style={{
              borderRadius: '15px 15px 40px 13px',
            }}
          >
            <FontAwesomeIcon icon={faShoppingCart} className='text-white' />
          </div>
        </div>

        <div className='ml-[60px]'>

          <img className=' relative w-[314px] h-[314px] z-10'
            src='https://s3-alpha-sig.figma.com/img/3b26/0115/0696d6d5c0ad38961a696571d3175a46?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oMA4KSaWwcUtEhUJ~R5mB9jO7G9UO76WK1kUcN3VscwFFYAF9-p0OUC5mfCZVnYa6wAZWUn-XvdAxymnlvnPGpdjVLAmKSozxeVkDUKGMd8JtZ62gzW-ykK~zzly9Z70v0CgpiHwpYewcP6JO3rLbpGgvud1M3zkDD7d4oe4WeZ7VJwW~uIH3I4E-LyRi~YE5Nv4MijEKsOu28xNKiKJmXK0gTDWnDaHhnLdIrL8NqamLDT2LD8mwlUNp-ci8fooHvq8kSDonJXDLDKDTUHRRGt1qrWBeiaaXKaoxszLWjg015vVFlv-8mPDjny7KwcnNGOT7fWroPcMid8JeyMxDA__'
          >
          </img>

          <div className="mt-[-177px] z-0 "
            style={{
              width: '314px',
              height: '324px',
              borderRadius: '50px',
              background: '#FFFFFF',
              boxShadow: '5px 5px 30px 0px #00000026',
            }}>
          </div>
          <p className='w-[139px] h-[30px] mt-[-139px] ml-[28px]' style={{
            fontFamily: 'Poppins',
            fontSize: '20px',
            fontWeight: 700,
            lineHeight: '30px',
            letterSpacing: '0em',
          }}>
            Chicken Slice
          </p>
          <p className='w-[99px] h-[18px] mt-[18px] ml-[28px]' style={{
            fontFamily: 'Poppins',
            fontSize: '12px',
            fontWeight: 500,
            lineHeight: '18px',
            letterSpacing: '0em',
          }}>
            Real Chicken
          </p>
          <p className='w-[59px] h-[20px] mt-[18px] ml-[28px]' style={{
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '24px',
            letterSpacing: '0em',
          }}>
            $ 15.00
          </p>
          <div className='relative z-10 bg-black w-[60px] h-[66.75px] ml-[218px]  flex items-center justify-center'
            style={{
              borderRadius: '15px 15px 40px 13px',
            }}
          >
            <FontAwesomeIcon icon={faShoppingCart} className='text-white' />
          </div>
        </div>

        <div className='ml-[126px] mt-[117px]'>
          <p className='w-[429px] h-[100px] '
            style={{
              fontFamily: 'Poppins',
              fontSize: '36px',
              fontWeight: 700,
              lineHeight: '50.4px',
              letterSpacing: '0em',
            }}>
            We have Delicious food <br />
            Tasty Food in town
          </p>
          <p className='w-[420px] h-[66px] mt-[6px] '
            style={{
              fontFamily: 'Poppins',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '22.4px',
              letterSpacing: '0em',
            }}>
            Lorem ipsum dolor sit amet consectetur. Gravida<br />
            maecenas congue lectus et ut id pretium viverra placerat.<br />
            Lorem ipsum dolor sit.
          </p>
        </div>
      </div>
</>
  )
}

export default Items1