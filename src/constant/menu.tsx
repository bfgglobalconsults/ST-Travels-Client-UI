const MENUITEMS: IMenuItemProps[] = [
  {
    title: "home",
    type: "sub",
    link: "/home/flight/modern",
    megaMenu: false,
  },
  {
    title: "hotel",
    type: "sub",
    link: "/home/hotels/classic",
    megaMenu: false,
  },
  {
    title: "tour",
    type: "sub",
    link: "/home/tour/modern",
    megaMenu: false,
  },
  {
    title: "Visa",
    type: "sub",
    link: "/en/visa",
    megaMenu: false,
  },
  // {
  //   title: "Outsourcing",
  //   type: "sub",
  //   link: "/pages/other-pages/contact-us-1",
  //   megaMenu: false,
  // },
  {
    title: "About Us",
    type: "sub",
    link: "/pages/other-pages/about-us-2",
    megaMenu: false,
  },
  {
    title: "Contact Us",
    type: "sub",
    link: "/pages/other-pages/contact-us-1",
    megaMenu: false,
  },
];

export default MENUITEMS;

export const RightNavMenuItem: IRightNavMenuItem[] = [
  {
    title: "currency",
    type: [
      {
        id: 1,
        currency: "USD",
        name: "USD",
        symbol: "$",
        value: 1,
      },
      {
        id: 2,
        currency: "EUR",
        name: "EUR",
        symbol: "€",
        value: 0.997,
      },
      {
        id: 3,
        currency: "INR",
        name: "INR",
        symbol: "₹",
        value: 79.9,
      },
      {
        id: 4,
        currency: "AUD",
        name: "AUD",
        symbol: "$",
        value: 79.9,
      },
      {
        id: 5,
        currency: "NGN",
        name: "NGN",
        symbol: "₦",
        value: 1400,
      },
    ],
  },
  {
    title: "language",
    option: [
      { id: 1, lang: "en", language: "ENG" },
      { id: 2, lang: "fr", language: "FRE" },
      { id: 3, lang: "es", language: "SPA" },
      { id: 4, lang: "ar", language: "ARB" },
    ],
  },
  { title: "user" },
  { title: "setting" },
];


export const currencyDropDownData = {
  title: "currency",
  type: [
    {
      id: 1,
      currency: "USD",
      name: "USD",
      symbol: "$",
      value: 1,
    },
    {
      id: 2,
      currency: "EUR",
      name: "EUR",
      symbol: "€",
      value: 0.997,
    },
    {
      id: 3,
      currency: "INR",
      name: "INR",
      symbol: "₹",
      value: 79.9,
    },
    {
      id: 4,
      currency: "AUD",
      name: "AUD",
      symbol: "$",
      value: 79.9,
    },
    {
      id: 5,
      currency: "NGN",
      name: "NGN",
      symbol: "₦",
      value: 1400,
    },
  ],
};

export const languageDropDownData = {
  title: "language",
  option: [
    { id: 1, lang: "en", language: "ENG" },
    { id: 2, lang: "fr", language: "FRE" },
    { id: 3, lang: "es", language: "SPA" },
    { id: 4, lang: "ar", language: "ARB" },
  ],
}