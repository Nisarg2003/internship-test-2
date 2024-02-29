import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHome, faPlus, faWallet, faUser, faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import image1 from '../Images/image1.png'
import image from '../Images/image.png'
const AppDetails = () => {
    return (
        <>
            <div className='flex  ml-[100px] h-[749px]'>

                <div>
                    <div className='relative z-10 bg-black w-[61.81px] h-[68.76px] ml-[262px]  flex items-center justify-center'
                        style={{
                            borderRadius: '15px 15px 40px 13px',
                        }}
                    >
                        <FontAwesomeIcon icon={faShoppingCart} className='text-white' />
                    </div>

                    <div className=' relative w-[340px] mt-[-34.76px] h-[710px] ml-[5px] rounded-[40px] bg-[#ffffff]'>
                    </div>
                    <p className='relative mt-[-622px] ml-[28px]'
                        style={{
                            fontFamily: 'Poppins',
                            fontSize: '24px',
                            fontWeight: 700,
                            lineHeight: '36px',
                            letterSpacing: '0em',
                        }}
                    >
                        Delicious Food
                    </p>
                    <p className='relative ml-[28px]'
                        style={{
                            fontFamily: 'Poppins',
                            fontSize: '14px',
                            fontWeight: 400,
                            lineHeight: '21px',
                            letterSpacing: '0em',
                        }}
                    >
                        We made fresh & healthy food
                    </p>

                    <div className='flex'>

                        <div
                            className="relative inline-block mt-[17px] ml-[29px]"
                            style={{
                                width: '47px',
                                height: '47px',
                                background: '#FFFFFF',
                                boxShadow: '5px 5px 15px 0px #00000040',
                            }}
                        >
                            <img
                                src="https://s3-alpha-sig.figma.com/img/e54c/2929/3261104f1dac43c591969213d7afb3b9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LEJwraO0H~Bld2qTHDyOmpkDaJFFEIO2GGL~PIjbki3gT9BcqcJxF95uIYv8UfqbPBzOe6TYnqYHbSJEBbXvi083ZTbD2oObYm-as-FctAemTdI7I2i-c5iJKP0gvwq9lv6iAoJqnXHLJLTWSBnBSvzkg4JEF24NhkWOFTDtcRTyJNuX5jdbaYlL34h7bdlNwIaT06-3Fo8tI05nyUfqFOTQ~vkNf-WuTUZt9YgAtG~4cROC9CvYCYXQRJ-LVKQC1FRs4myvAseoSK2lOW27Y-fCId5ybX4KzSP5uBQHWSehZxyW5yudyV7g4jDH9q2mN1B1UoCF1Ua5PxUpDkSFkg__"
                                alt="Your Image"
                                style={{
                                    width: '26px',
                                    height: '26px',
                                    top: '10px',
                                    left: '10px',
                                    position: 'absolute',
                                    borderRadius: '5px',
                                }}
                            />
                        </div>

                        <div
                            className="relative inline-block mt-[17px] ml-[30px]"
                            style={{
                                width: '47px',
                                height: '47px',
                                background: '#FFFFFF',
                                boxShadow: '5px 5px 15px 0px #00000040',
                            }}
                        >
                            <img
                                src='https://s3-alpha-sig.figma.com/img/53d0/a8ec/110dfc8105d659abdcf1baa69b75f71b?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fpH7K9AUhHnGCdsorn9u7-Xh7oc-GU50UPirbQ2MpjjFVXpLKwkElFWgqWdEXPdAPk2LXDyT7x-8JM60ZJoDUS64xn8O7HdhIA4BzZfJ3UcNmJOiK~bDB5npWcWPYoxW2nflIxhnpisDRVepOJGF0mmOJkMKC0YlG3ONAs~L~6yCzJj0yMXLS7Xpki~TcZ5r5gQA7jJpTF79ldfy2O4RuIpS6TWo2Y7WBIu4TkEuRPFzq60AxtbKK4oxpGDyXrSkc2BzSyq0WRM5SCAQy21P3VDKABuJbYP6bv2LcJ0cBnXqzO-f4Yev0wbUiDs64BdiP2FhHDxSN4L0TH4C~-yp~Q__'
                                alt="Your Image"
                                style={{
                                    width: '26px',
                                    height: '26px',
                                    top: '10px',
                                    left: '10px',
                                    position: 'absolute',
                                    borderRadius: '5px',
                                }}
                            />
                        </div>


                        <div
                            className="relative inline-block mt-[17px] ml-[30px]"
                            style={{
                                width: '47px',
                                height: '47px',
                                background: '#FFFFFF',
                                boxShadow: '5px 5px 15px 0px #00000040',
                            }}
                        >
                            <img
                                src='https://s3-alpha-sig.figma.com/img/1286/56b0/73ff4661c9732a52074e8d9c873428ec?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ILfQSvuRnHB36E9bhtCiE4OyCkajaB2JBRVYalW-Pft6mHYQyXmrNGnhouSkk8jEpqB0YKwpKvYvT8RBovAqMjvvWQO8murxZBvsv~kpW5jftdeydlpn4czCEisEBuoKGcKPbkea-dbxewjgNlaLvlgPCYdvj-50EjLNYvUWC49INW-tJeuClNyPfl6zQ7J8BRlER9SxfYKmTsj2bR~jSSinVlSLeGezoSAJUq2IHl8l6kLYPJRhv1P61N-WqtLfpYo~AghKHbzNicUrmbiuZa1oZqPMhMCCnLdtG4p9Ktfa0sBGRPvORvHjbJ0r1cw4atps7V8o5k0HETrf8OHhzA__'
                                alt="Your Image"
                                style={{
                                    width: '26px',
                                    height: '26px',
                                    top: '10px',
                                    left: '10px',
                                    position: 'absolute',
                                    borderRadius: '5px',
                                }}
                            />
                        </div>

                        <div
                            className="relative inline-block mt-[17px] ml-[30px]"
                            style={{
                                width: '47px',
                                height: '47px',
                                background: '#000000',
                                boxShadow: '5px 5px 15px 0px #00000040',
                            }}
                        >
                            <img
                                src="https://s3-alpha-sig.figma.com/img/3b33/97ed/27202d7efb5b5715441ace1de1c08d01?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P6N5OUBraAfMh00qzF-Yq~6SVKtndap17VfGCukZhXf8KbxylwrvApkrtm8FC5lVqcZqFFy4iCoyRSxlF2ZRKBK65CrdMuCHnnmMq6hK8ynJrWYOd1othKrR5ido0~OBkeVHh4-G8c4bvclvwSqimpxwzTbOPpPCWC5-L4C7BtSNSrYSQ5nIR-QGhMOThsF4yJnbFwpCltyEDkSZI5gT7imCpSGc-f2ouUKt~uYm1t9Nsvk6Aql8amVS3MOCYYZ06-r1AaAwZRx2FNF-K9Iv00OlHJiotBr8vNijWFNi1kQy6MmiXVba3pGjmKuWmumkQRPFL3-Gi5rBCde5iovVsg__" alt="Your Image"
                                style={{
                                    width: '26px',
                                    height: '26px',
                                    top: '10px',
                                    left: '10px',
                                    position: 'absolute',
                                    borderRadius: '5px',

                                }}
                            />
                        </div>
                    </div>

                    <div className='flex mt-[14px] '>
                        <div className='ml-[28px]'>

                            <img className=' relative w-[163px] h-[163px] z-10'
                                src='https://s3-alpha-sig.figma.com/img/e929/2fdf/11a75152bc45063c0184bc4629e1da79?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xu2G-0iIXKdYcv1dPxPJf34T0wjfPbotL51JD1wiPt3HTED2geXnWXhszr9~rwF8MrJQWmfTZ4TqgpnU5KXx07QDHl5yjvnykpg1m~PKxaGfXKWKfiXESVmrLo8RdYNG7M7bRMQGEAeOu4lSxYPP5iNQb0hfRZfu2suKex6gHzQwFzlHvqcQi7KyF6nCdLPKnjErt5X4BxQOoZPY1DyP9RWegxyT55A~uPXr5CLH1Rge3mhDs8Kkreu4Kjey6YM1zc1Y1oR4Ip-68Ntel1jE97WuO6yKuZegGHvhS2-FXFYu3ZRSwo27UBH04IpwxfoS84eRNFH~nmLMXoceeVbdNA__'
                            >
                            </img>

                            <div className="relative mt-[-102px] "
                                style={{
                                    width: '163px',
                                    height: '180px',
                                    borderRadius: '25px',
                                    background: '#FFFFFF',
                                    boxShadow: '5px 5px 30px 0px #00000026',
                                }}>
                            </div>
                            <p className='relative mt-[-90px] ml-[28px] text-black' style={{
                                fontFamily: 'Poppins',
                                fontSize: '16px',
                                fontWeight: 600,
                                lineHeight: '24px',
                                letterSpacing: '0em',
                            }}>
                                Crab Ramen
                            </p>
                            <p className='relative w-[83px] h-[15px] mt-[2px] ml-[28px] text-black' style={{
                                fontFamily: 'Poppins',
                                fontSize: '10px',
                                fontWeight: 500,
                                lineHeight: '15px',
                                letterSpacing: '0em',
                            }}>
                                Spicy with garlic
                            </p>
                            <p className='relative w-[59px] h-[24px] mt-[5px] ml-[28px]' style={{
                                fontFamily: 'Poppins',
                                fontSize: '16px',
                                fontWeight: 600,
                                lineHeight: '24px',
                                letterSpacing: '0em',
                            }}>
                                $ 20.00
                            </p>
                        </div>

                        <div className='ml-[10px]'>

                            <img className=' relative w-[163px] h-[163px] z-10'
                                src='https://s3-alpha-sig.figma.com/img/3b26/0115/0696d6d5c0ad38961a696571d3175a46?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oMA4KSaWwcUtEhUJ~R5mB9jO7G9UO76WK1kUcN3VscwFFYAF9-p0OUC5mfCZVnYa6wAZWUn-XvdAxymnlvnPGpdjVLAmKSozxeVkDUKGMd8JtZ62gzW-ykK~zzly9Z70v0CgpiHwpYewcP6JO3rLbpGgvud1M3zkDD7d4oe4WeZ7VJwW~uIH3I4E-LyRi~YE5Nv4MijEKsOu28xNKiKJmXK0gTDWnDaHhnLdIrL8NqamLDT2LD8mwlUNp-ci8fooHvq8kSDonJXDLDKDTUHRRGt1qrWBeiaaXKaoxszLWjg015vVFlv-8mPDjny7KwcnNGOT7fWroPcMid8JeyMxDA__'
                            >
                            </img>

                            <div className="relative mt-[-102px] "
                                style={{
                                    width: '163px',
                                    height: '180px',
                                    borderRadius: '25px',
                                    background: '#FFFFFF',
                                    boxShadow: '5px 5px 30px 0px #00000026',
                                }}>
                            </div>
                            <p className='relative mt-[-90px] ml-[28px] text-black' style={{
                                fontFamily: 'Poppins',
                                fontSize: '16px',
                                fontWeight: 600,
                                lineHeight: '24px',
                                letterSpacing: '0em',
                            }}>
                                Chicken Slice
                            </p>
                            <p className='relative w-[83px] h-[15px] mt-[2px] ml-[28px] text-black' style={{
                                fontFamily: 'Poppins',
                                fontSize: '10px',
                                fontWeight: 500,
                                lineHeight: '15px',
                                letterSpacing: '0em',
                            }}>
                                Real Chicken
                            </p>
                            <p className='relative w-[59px] h-[24px] mt-[5px] ml-[28px]' style={{
                                fontFamily: 'Poppins',
                                fontSize: '16px',
                                fontWeight: 600,
                                lineHeight: '24px',
                                letterSpacing: '0em',
                            }}>
                                $ 15.00
                            </p>
                        </div>

                    </div>

                    <div className="relative w-[257px] h-[90px] mt-[40px] ml-[28px] bg-[#FCFCFC] rounded-[20px] bg-white shadow-md"
                        style={{ boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.1)' }}>
                    </div>

                    <p className='relative w-[78px] h-[21px] mt-[-80px] ml-[56px] text-black'
                        style={{
                            fontFamily: 'Poppins',
                            fontSize: '14px',
                            fontWeight: 600,
                            lineHeight: '21px',
                            letterSpacing: '0em',
                        }}>
                        Eggs Curry
                    </p>
                    <p className='relative w-[127px] mt-[1px] h-[15px] ml-[56px] text-black'
                        style={{
                            fontFamily: 'Poppins',
                            fontSize: '10px',
                            fontWeight: 400,
                            lineHeight: '15px',
                            letterSpacing: '0em',
                        }}>
                        Eggs to tomato and soup
                    </p>
                    <p className='relative w-[49px] mt-[5px] h-[21px] ml-[56px] text-black'
                        style={{
                            fontFamily: 'Poppins',
                            fontSize: '14px',
                            fontWeight: 600,
                            lineHeight: '21px',
                            letterSpacing: '0em',
                        }}>
                        $ 10.00
                    </p>
                    <img className='relative ml-[240px] w-[120px] h-[120px] z-10 mt-[-85px]'
                        src='https://s3-alpha-sig.figma.com/img/42d8/5481/dadd67ceaced54b792ba841859f8dc2d?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E9ggrU-tjVdwm-b66XAs5za6HUJbxPSkAX9jENW66agI7qiWoAZTMX~aZLowb~zGFUQfIxaQSlU7123VYllRBy-cvwzy5LeWD2RQg-GzV2pB680lkYWQkhoOwMY8N-Y0oJ7A1UxvxDpAO1aFQlLQarPuVQ4m9twf3pSlu4cakjBz1Pm5P9na-eaC46ba8BTvQpenTxzqRDnPlfEZT2pql6EpYApya5tDbLc5PbGvBPRAgCawreu30D7-pKDQwfmfPGrROY7DlcOLoaQgZvP5gAWDN-TE06J2Vh3aScHTOGH50JLHkQeHh1saAnwMNXczMvP5AAM3wc4ZgbhOAmEQ~g__'>
                    </img>

                    <div className='relative mt-[21px] ml-[28px] w-[280px] h-[61px] bg-[#000000] rounded-[25px]'>
                        <FontAwesomeIcon icon={faHome} className='text-white w-[18px] h-[18px] ml-[35px] mt-[22px] ' />


                        <FontAwesomeIcon icon={faWallet} className='text-white w-[21.38px] h-[18px] ml-[55px] mt-[22px]' />

                        <FontAwesomeIcon icon={faComment} className='text-white w-[18px] h-[18px] ml-[45px] mt-[22px]' />
                        <FontAwesomeIcon icon={faUser} className='text-white w-[18px] h-[18px] ml-[45px] mt-[22px]' />

                    </div>

                </div>

                <div className='relative ml-[16px] w-[460px]'>
                    <div className=' w-[340px] mt-[30px] h-[710px] rounded-[40px] ml-[42px] bg-[#ffffff]'>

                    </div>
                    <img className=' relative z-10 mt-[-608px] ml-[-0px] w-[382px] h-[360px] object-cover scale-110 '
                        src='https://s3-alpha-sig.figma.com/img/42d8/5481/dadd67ceaced54b792ba841859f8dc2d?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E9ggrU-tjVdwm-b66XAs5za6HUJbxPSkAX9jENW66agI7qiWoAZTMX~aZLowb~zGFUQfIxaQSlU7123VYllRBy-cvwzy5LeWD2RQg-GzV2pB680lkYWQkhoOwMY8N-Y0oJ7A1UxvxDpAO1aFQlLQarPuVQ4m9twf3pSlu4cakjBz1Pm5P9na-eaC46ba8BTvQpenTxzqRDnPlfEZT2pql6EpYApya5tDbLc5PbGvBPRAgCawreu30D7-pKDQwfmfPGrROY7DlcOLoaQgZvP5gAWDN-TE06J2Vh3aScHTOGH50JLHkQeHh1saAnwMNXczMvP5AAM3wc4ZgbhOAmEQ~g__'>
                    </img>

                    <p className='mt-[30px] w-[120px] h-[36px] ml-[76px]'
                        style={{
                            fontFamily: 'Poppins',
                            fontSize: '24px',
                            fontWeight: 600,
                            lineHeight: '36px',
                            letterSpacing: '0em',
                        }}
                    >
                        Egg Curry
                    </p>
                    <p className='mt-[15px] w-[238px] h-[51px] ml-[76px]'
                        style={{
                            fontFamily: 'Poppins',
                            fontSize: '12px',
                            fontWeight: 400,
                            lineHeight: '16.8px',
                            letterSpacing: '0em',
                        }}
                    >
                        Lorem ipsum dolor sit amet is ams con <br />
                        sectetur. Gravida maecenas congue <br />
                        lectus et ut id.
                    </p>
                    <p className='mt-[40px] w-[52px] h-[15px] ml-[76px]'
                        style={{
                            fontFamily: 'Poppins',
                            fontSize: '10px',
                            fontWeight: 400,
                            lineHeight: '15px',
                            letterSpacing: '0em',
                        }}
                    >
                        Total Price
                    </p>
                    <p className=' w-[56px] h-[24px] ml-[76px]'
                        style={{
                            fontFamily: 'Poppins',
                            fontSize: '16px',
                            fontWeight: 600,
                            lineHeight: '24px',
                            letterSpacing: '0em',
                        }}
                    >
                        $ 10.00
                    </p>

                    <div className=' w-[30px] h-[30px] bg-[#EDEDED] ml-[244px] mt-[-30px] rounded-[25px]'>
                        <FontAwesomeIcon icon={faHeart} className="bg-transparant m-[7px] w-4 h-4" />
                    </div>
                    <button class="relative  z-10 w-[165px] h-[50px] ml-[295px]  mt-[-295px] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[0px] bg-black shadow-md text-white"
                        style={{
                            boxShadow: '10px 10px 15px 0px rgba(0, 0, 0, 0.4)'
                        }}>
                        <div className='relative flex'>
                            <p className='w-[82px] h-[20px] ml-[24px]'>
                                Add To Cart
                            </p>
                            <div className=' w-[26px] h-[26px] bg-[#EDEDED] ml-[9px] rounded-[25px]'>
                                <FontAwesomeIcon icon={faPlus} className='mt-[-185px] text-black' />
                            </div>
                        </div>
                    </button>

                </div>

                <div className='ml-[-25px] mt-[219px]'>
                    <div className='w-[298px] h-[54px]'>
                        <p className=''
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: '36px',
                                fontWeight: 700,
                                lineHeight: '54px',
                                letterSpacing: '0em',
                            }}>
                            App is Available
                        </p>
                    </div>
                    <div className='mt-[36px] w-[424px] h-[72px] '>
                        <p className=''
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: '14px',
                                fontWeight: 400,
                                lineHeight: '23.8px',
                                letterSpacing: '0em',
                                align: 'justified'
                            }}>
                            Lorem ipsum dolor sit amet consectetur. Gravida maecenas <br />
                            congue lectus et ut id pretium viverra placerat. Lorem ipsum <br />
                            dolor sit. Lorem ipsum
                        </p>
                    </div>

                    <div className='flex mt-[44px]'>
                        <img src={image1} className='w-[101px] h-[30px]'/>
                        <img src={image} className='w-[101px] h-[30px] ml-[10px]'/>

                    </div>
                </div>


            </div>


        </>
    )
}

export default AppDetails