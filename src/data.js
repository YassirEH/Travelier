import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPlane, faHotel, faCar } from "@fortawesome/free-solid-svg-icons";

const socialMediaLinks = {
    facebook: {
        id: 1,
        href: "https://www.facebook.com/travelier",
        text: "Facebook",
        icon: faFacebook,
    },
    twitter: {
        id: 2,
        href: "https://www.twitter.com/travelier",
        text: "Twitter",
        icon: faTwitter,
    },
    instagram: {
        id: 3,
        href: "https://www.instagram.com/travelier",
        text: "Instagram",
        icon: faInstagram,
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
        id: 1,
        title: "Flight Booking",
        description: "Book your flights with ease.",
        icon: faPlane,
    },
    {
        id: 2,
        title: "Hotel Reservations",
        description: "Find the perfect hotel for your stay.",
        icon: faHotel,
    },
    {
        id: 3,
        title: "Car Rentals",
        description: "Rent a car for your travel needs.",
        icon: faCar,
    },
];

export { socialMediaLinks, pageLinks, services };
