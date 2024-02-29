import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
    return (
        <>
            <div className='flex'>

                <div className="relative mt-[123px] ml-[100px] w-[522px] h[270px]" >
                    <p style={{
                        fontFamily: 'Poppins',
                        fontSize: '64px',
                        fontWeight: 700,
                        lineHeight: '89.6px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                    }}>
                        Delicious <br/>
                        Food is Waiting <br/>
                        For You
                    </p>

                    <button
                        className="relative inline-block mt-4"
                        style={{
                            width: '290px',
                            height: '70px',
                            top: '62px',
                            borderRadius: '20px 20px 0px 20px',
                            background: '#000000',
                            boxShadow: '10px 10px 15px 0px #00000040',
                        }}
                    >
                        <p className="relative text-white w-[188px] h-[31px] font-poppins text-xl font-bold ml-[44px] mt-[-5px]">View Menu 
                        <FontAwesomeIcon icon={faArrowRight} className="relative text-white ml-[50px] mt-[-5px]  w-[30px] h-[30px]" />
                        </p>
                    </button>
                </div>

                <div className='relative w-[750px] h-[750px] mt-[18px] ml-[-32px]'>
                    <img className='w-[750px] h-[750px]'
                        src='https://s3-alpha-sig.figma.com/img/42d8/5481/dadd67ceaced54b792ba841859f8dc2d?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E9ggrU-tjVdwm-b66XAs5za6HUJbxPSkAX9jENW66agI7qiWoAZTMX~aZLowb~zGFUQfIxaQSlU7123VYllRBy-cvwzy5LeWD2RQg-GzV2pB680lkYWQkhoOwMY8N-Y0oJ7A1UxvxDpAO1aFQlLQarPuVQ4m9twf3pSlu4cakjBz1Pm5P9na-eaC46ba8BTvQpenTxzqRDnPlfEZT2pql6EpYApya5tDbLc5PbGvBPRAgCawreu30D7-pKDQwfmfPGrROY7DlcOLoaQgZvP5gAWDN-TE06J2Vh3aScHTOGH50JLHkQeHh1saAnwMNXczMvP5AAM3wc4ZgbhOAmEQ~g__'>
                    </img>
                </div>
            </div>

            <div className=' flex ml-[100px] mt-[-163px]'>

                <div
                    className="relative inline-block mt-4"
                    style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '10px',
                        background: '#FFFFFF',
                        boxShadow: '5px 5px 15px 0px #00000040',
                    }}
                >
                    <img
                        src="https://s3-alpha-sig.figma.com/img/e54c/2929/3261104f1dac43c591969213d7afb3b9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LEJwraO0H~Bld2qTHDyOmpkDaJFFEIO2GGL~PIjbki3gT9BcqcJxF95uIYv8UfqbPBzOe6TYnqYHbSJEBbXvi083ZTbD2oObYm-as-FctAemTdI7I2i-c5iJKP0gvwq9lv6iAoJqnXHLJLTWSBnBSvzkg4JEF24NhkWOFTDtcRTyJNuX5jdbaYlL34h7bdlNwIaT06-3Fo8tI05nyUfqFOTQ~vkNf-WuTUZt9YgAtG~4cROC9CvYCYXQRJ-LVKQC1FRs4myvAseoSK2lOW27Y-fCId5ybX4KzSP5uBQHWSehZxyW5yudyV7g4jDH9q2mN1B1UoCF1Ua5PxUpDkSFkg__"
                        alt="Your Image"
                        style={{
                            width: '30px',
                            height: '30px',
                            top: '15px', 
                            left: '15px', 
                            position: 'absolute',
                            borderRadius: '5px',
                        }}
                    />
                </div>

                <div className="relative inline-block mt-4"
                    style={{
                        width: '60px',
                        height: '60px',
                        // top: '80px',
                        left: '24px',
                        borderRadius: '10px',
                        background: '#FFFFFF',
                        boxShadow: '5px 5px 15px 0px #00000040',
                    }}
                >
                    <img
                        src='https://s3-alpha-sig.figma.com/img/53d0/a8ec/110dfc8105d659abdcf1baa69b75f71b?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fpH7K9AUhHnGCdsorn9u7-Xh7oc-GU50UPirbQ2MpjjFVXpLKwkElFWgqWdEXPdAPk2LXDyT7x-8JM60ZJoDUS64xn8O7HdhIA4BzZfJ3UcNmJOiK~bDB5npWcWPYoxW2nflIxhnpisDRVepOJGF0mmOJkMKC0YlG3ONAs~L~6yCzJj0yMXLS7Xpki~TcZ5r5gQA7jJpTF79ldfy2O4RuIpS6TWo2Y7WBIu4TkEuRPFzq60AxtbKK4oxpGDyXrSkc2BzSyq0WRM5SCAQy21P3VDKABuJbYP6bv2LcJ0cBnXqzO-f4Yev0wbUiDs64BdiP2FhHDxSN4L0TH4C~-yp~Q__'
                        alt="Your Image"
                        style={{
                            width: '34px',
                            height: '34px',
                            top: '15px',
                            left: '15px',
                            position: 'absolute',
                            borderRadius: '5px',
                        }}
                    />
                </div>

                <div className="relative inline-block mt-4"
                    style={{
                        width: '60px',
                        height: '60px',
                        left: '48px',
                        borderRadius: '10px',
                        background: '#FFFFFF',
                        boxShadow: '5px 5px 15px 0px #00000040',
                    }}
                >
                    <img
                        src="https://s3-alpha-sig.figma.com/img/1286/56b0/73ff4661c9732a52074e8d9c873428ec?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ILfQSvuRnHB36E9bhtCiE4OyCkajaB2JBRVYalW-Pft6mHYQyXmrNGnhouSkk8jEpqB0YKwpKvYvT8RBovAqMjvvWQO8murxZBvsv~kpW5jftdeydlpn4czCEisEBuoKGcKPbkea-dbxewjgNlaLvlgPCYdvj-50EjLNYvUWC49INW-tJeuClNyPfl6zQ7J8BRlER9SxfYKmTsj2bR~jSSinVlSLeGezoSAJUq2IHl8l6kLYPJRhv1P61N-WqtLfpYo~AghKHbzNicUrmbiuZa1oZqPMhMCCnLdtG4p9Ktfa0sBGRPvORvHjbJ0r1cw4atps7V8o5k0HETrf8OHhzA__"
                        alt="Your Image"
                        style={{
                            width: '34px',
                            height: '34px',
                            top: '15px',
                            left: '15px',
                            position: 'absolute',
                            borderRadius: '5px',
                        }}
                    />
                </div>

                <div
                    className="relative inline-block mt-4"
                    style={{
                        width: '60px',
                        height: '60px',
                        left: '72px',
                        borderRadius: '10px',
                        background: '#FFFFFF',
                        boxShadow: '5px 5px 15px 0px #00000040',
                    }}
                >
                    <img
                        src='https://s3-alpha-sig.figma.com/img/0f8f/8804/7a4e096b855ca12315c8308e7630c2ae?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kxk4RLYMwdNjs2cyPhA4wYWbD1gFTB0PkCmCbw9-orhD8evTnA9r-1lgvDSvQ9-BrA4CeQRZrR8izkfhnIwGsQC7Q9tdchwRA1hPThtPdw29-HllmNy8wpVtG0avcnDdgzSSO4fP4UTLrQ0VfiabUGYwaK2j3P0zO6ysQMSdodClj9q9aCvP1lS4DEQ9ECElvvr7fXQFn9ScY51KWm3l6e2Z73Hnc6H8rpGF8A1AJbaDlgPH4UXrEOkqDgpYnSvjLbBmHqGw9za0VsYvh3ek-ZYdx12Uwtk2yZevknQvCVSd2kWJTbaG3xdh0I7bAxwQgwYj~wZqhrIRAmuJJUZi6w__'
                        alt="Your Image"
                        style={{
                            width: '34px',
                            height: '34px',
                            top: '15px',
                            left: '15px',
                            position: 'absolute',
                            borderRadius: '5px',
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default Main