import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomerReviewsCarousel = () => {
    const reviews = [
        {
            id: 1, 
            text: 'Dining at Little Lemon was an absolute pleasure! The culinary experience was exceptional, ' +
            'with a menu that boasts a delightful array of dishes crafted with precision and using the freshest ingredients. ' +
            'What truly elevated the evening was the impeccable service – the staff was not only attentive but also genuinely ' +
            'passionate about the cuisine, offering insightful recommendations that enhanced our meal. ' +
            'The ambiance was warm and inviting, the presentation of each dish was a feast for the eyes, ' +
            'and the commitment to cleanliness and safety was reassuring. Little Lemon is a standout gem that seamlessly combines ' +
            'delectable cuisine with outstanding service, making it the perfect destination for a memorable dining experience.'
        },
        {
            id: 2,
            text: 'My recent dining experience at Little Lemon left me thoroughly impressed! From the moment we walked in, ' +
            'the chic ambiance set the stage for a fantastic evening. The menu offered a delightful variety of dishes, ' +
            'each bursting with unique flavors and made from high-quality ingredients. What stood out, however, was the ' +
            'impeccable service – the staff was not only attentive but also went out of their way to ensure every aspect ' +
            'of our meal was perfect. Our server\'s recommendations were spot-on, enhancing our culinary journey. The ' +
            'attention to detail was evident, from the exquisite presentation of each course to the well-paced timing ' +
            'that allowed us to savor every bite. The commitment to a clean and welcoming environment was also noteworthy. ' +
            'Little Lemon is undoubtedly a culinary gem, combining exquisite cuisine with exceptional service. ' +
            'I wholeheartedly recommend it for anyone seeking a memorable dining experience. ' +
            'I\'m already looking forward to my next visit!'
        }
    ];

    const awards = [
        'Best Restaurant 2023 Yorkville',
        'Chef of the Year Award',
        'Top 5 Best Vegan Menus 2022'
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            <section className="bg-#495E57 py-16" id="carousel">
            <h2 className="text-2xl font-bold mb-4">Our Customers Reviews</h2>
            {reviews.map((review) => (
                <div key={review.id} className="p-4">
                    <blockquote className="text-lg italic">{review.text}</blockquote>
                </div>
            ))}
            <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Little Lemon Awards</h2>
            <ul className="list-disc pl-6">
                {awards.map((award, index) => (
                <li key={index} className="mb-2">
                {award}
                </li>
            ))}
            </ul>
            </div>
            </section>
        </Slider>
    );
};

export default CustomerReviewsCarousel;