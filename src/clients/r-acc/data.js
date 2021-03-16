import background from "./assets/perks.jpg";

import image_1 from "./assets/1.jpg";
import image_2 from "./assets/2.jpg";
import image_3 from "./assets/3.jpg";
import image_4 from "./assets/4.jpg";
import image_5 from "./assets/5.jpg";
import image_6 from "./assets/6.jpg";
import image_7 from "./assets/7.jpg";
import image_8 from "./assets/8.jpg";
import image_9 from "./assets/9.jpg";
import image_10 from "./assets/10.jpg";
import image_11 from "./assets/11.jpg";
import image_12 from "./assets/12.jpg";

let data = {
    name: "RACHANA",
    favicon: "",
    background: background,
    pageTitle: "RACHANA",
    mainMenuItems: [
        {
            name: "Portfolio",
            url: "#portfolio",
        },
        {
            name: "Contact",
            url: "#contact",
        },
    ],
    imagePageName: "Portfolio",
    images: [
        image_1, image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9, image_10, image_11, image_12,
    ],
    email: 'a@b.com',
    contact_no: '9898989898',
    address: "some street, some area,<br> some city<br>",
    socialMediaLinks: {}
};

export {data as default};