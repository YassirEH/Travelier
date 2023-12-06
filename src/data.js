import tour1 from "./images/tour1.png";
import tour2 from "./images/tour2.png";
import tour3 from "./images/tour3.png";
import tour4 from "./images/tour4.png";



const socialMediaLinks = {
    facebook: {
        id: 1,
        href: "https://www.facebook.com/travelier",
        text: "Facebook",
    },
    twitter: {
        id: 2,
        href: "https://www.twitter.com/travelier",
        text: "Twitter",
    },
    instagram: {
        id: 3,
        href: "https://www.instagram.com/travelier",
        text: "Instagram",
    },
};

const pageLinks = {
    home: {
        id: 1,
        href: "#home",
        text: "Home",
    },
    about: {
        id: 2,
        href: "#about",
        text: "About",
    },
    contact: {
        id: 3,
        href: "#contact",
        text: "Contact",
    },
};

const services = [
    {
        // END: abpxx6d04wxr
        id: 1,
        title: "Flight Booking",
        description: "Book your flights with ease.",
    },
    {
        id: 2,
        title: "Hotel Reservations",
        description: "Find the perfect hotel for your stay.",
    },
    {
        id: 3,
        title: "Car Rentals",
        description: "Rent a car for your travel needs.",
    },
];

const tours = [
    {
        id: 1,
        image: tour1,
        date: 'august 26th, 2020',
        title: 'Tibet Adventure',
        info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
        location: 'china',
        duration: 6,
        cost: 2100,
    },
    {
        id: 2,
        image: tour2,
        date: 'october 1th, 2020',
        title: 'best of java',
        info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
        location: 'indonesia',
        duration: 11,
        cost: 1400,
    },
    {
        id: 3,
        image: tour3,
        date: 'september 15th, 2020',
        title: 'explore hong kong',
        info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
        location: 'hong kong',
        duration: 8,
        cost: 5000,
    },
    {
        id: 4,
        image: tour4,
        date: 'december 5th, 2019',
        title: 'kenya highlights',
        info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
        location: 'kenya',
        duration: 20,
        cost: 3300,
    }
];

export { socialMediaLinks, pageLinks, services, tours };
