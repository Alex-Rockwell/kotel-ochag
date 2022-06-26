const placesData = [
  {
    regionName: "Алтайский край",
    regionId: 22,
    shops: [
      {
        cityName: "Барнаул",
        cityId: 22,
        shopName: "Газтеплотехника",
        shopId: 1,
        shopAdress: "ул. Юрина 190 Б",
        shopPhone: "83852440412",
        shopPhone2: "",
        shopTime: "Пн-пт:9.00-17.00; Сб:выходной; Вс:выходной",
        shopSite: "",
        shopMail: "",
        shopCoords: [53.370108, 83.696188],
      },
    ],
  },
  {
    regionName: "Калининградская обл.",
    regionId: 91,
    shops: [
      {
        cityName: "Калининград",
        cityId: 91,
        shopName: "Котлы и печи",
        shopId: 1,
        shopAdress: "Советский проспект 192 А",
        shopPhone: "(4012)523902",
        shopPhone2: "(4012)766616",
        shopTime: "Пн-пт: 10.00-18.00; Сб: 10.00-18.00; Вс: выходной;",
        shopSite: "http://www.kotly-klg.ru",
        shopMail: "",
        shopCoords: [54.745469, 20.467395],
      },
      {
        cityName: "Дорожный пос.",
        cityId: 91,
        shopName: "Котлы и печи",
        shopId: 1,
        shopAdress: "ул. Цветочная 23 А",
        shopPhone: "8(911)4603572",
        shopPhone2: "",
        shopTime: "Пн-пт: 10.00-19.00; Сб: 10.00-19.00; Вс: 10.00-19.00;",
        shopSite: "http://www.kotly-klg.ru",
        shopMail: "",
        shopCoords: [54.798177, 20.534185],
      },
    ],
  },
];

export default placesData;

// const placesData = [
//   {
//     regionName: 'Калининградская обл.',
//     regionId: 91,
//     shops: [
//       {
//         cityName: 'Калининград',
//         cityId: 91,
//         shopName: 'Котлы и печи',
//         shopId: 1,
//         shopAdress: 'Советский проспект 192 А',
//         shopPhone: '(4012)523902,766616',
//         shopTime: 'Пн-пт: 10.00-18.00; Сб: 10.00-18.00; Вс: выходной;',
//         shopSite: 'http://www.kotly-klg.ru',
//         shopMap: 'https://yandex.ru/map-widget/v1/?um=constructor%3A4296bd7e32b83278039d26e019becdc16e04252651e1c2c94c743fe211fa26f8&amp;source=constructor',
//       },
//       {
//         cityName: 'Дорожный пос.',
//         cityId: 91,
//         shopName: 'Котлы и печи',
//         shopId: 2,
//         shopAdress: 'ул. Цветочная 23 А',
//         shopPhone: '8(911)4603572',
//         shopTime: 'Пн-пт: 10.00-19.00; Сб: 10.00-19.00; Вс: 10.00-19.00;',
//         shopSite: 'http://www.kotly-klg.ru',
//         shopMap: 'https://yandex.ru/map-widget/v1/?um=constructor%3A818dd98d7e1d08f6348e102691d9ef3079c654a3c8537f45a31418a184be7690&amp;source=constructor',
//       },
//     ]
//   },
//   {
//     regionName: 'Ульяновская обл.',
//     regionId: 73,
//     shops: [
//       {
//         cityName: 'Ульяновск',
//         cityId: 73,
//         shopName: 'СервисГаз',
//         shopId: 1,
//         shopAdress: 'ул. 10-й проезд Инженерный 14',
//         shopPhone: '8(8422)250348, 8(8422)250349',
//         shopTime: 'Пн-пт: 7.30-16.30; Сб: выходной; Вс: выходной;',
//         shopSite: 'http://sgaz.ru',
//         shopMap: 'https://yandex.ru/map-widget/v1/?um=constructor%3Ae64936db24129838f5de642a5a7a832ef279ca462753ec955c44c58f01dd9e56&amp;source=constructor',
//       },
//       {
//         cityName: 'Ульяновск',
//         cityId: 73,
//         shopName: 'Сарай',
//         shopId: 2,
//         shopAdress: 'ул. Пушкарёва 11',
//         shopPhone: '8(8422)277884',
//         shopTime: 'Пн-пт: 8.00-22.00; Сб: 8.00-22.00; Вс: 8.00-22.00;',
//         shopSite: 'http://сарай73.рф/',
//         shopMap: 'https://yandex.ru/map-widget/v1/?um=constructor%3Aa6b40874cc371f85e67962350c5f792a1f2f3139310214e631ff50ce59006c7f&amp;source=constructor',
//       },
//       {
//         cityName: 'Ульяновск',
//         cityId: 73,
//         shopName: 'Сарай',
//         shopId: 3,
//         shopAdress: 'ул. Нариманова 55',
//         shopPhone: '8(8422)462596',
//         shopTime: 'Пн-пт: 8.00-22.00; Сб: 8.00-22.00; Вс: 8.00-22.00;',
//         shopSite: 'http://сарай73.рф/',
//         shopMap: 'https://yandex.ru/map-widget/v1/?um=constructor%3A91cf57b3712f9875aadad10235712683c2246035c5487f6b41dcb6e50283b652&amp;source=constructor',
//       },
//       {
//         cityName: 'Ульяновск',
//         cityId: 73,
//         shopName: 'Сарай',
//         shopId: 4,
//         shopAdress: 'ул. Ефремова 75',
//         shopPhone: '8(8422)691004',
//         shopTime: 'Пн-пт: 8.00-22.00; Сб: 8.00-22.00; Вс: 8.00-22.00;',
//         shopSite: 'http://сарай73.рф/',
//         shopMap: 'https://yandex.ru/map-widget/v1/?um=constructor%3A2d14e08701abedbf3e988080dbb154c3183113757b77b76c65d4a700cc932d85&amp;source=constructor',
//       },
//       {
//         cityName: 'Ульяновск',
//         cityId: 73,
//         shopName: 'Сарай',
//         shopId: 5,
//         shopAdress: 'пр-т Тюленева 2 Б',
//         shopPhone: '8(8422)500403',
//         shopTime: 'Пн-пт: 8.00-22.00; Сб: 8.00-22.00; Вс: 8.00-22.00;',
//         shopSite: 'http://сарай73.рф/',
//         shopMap: 'https://yandex.ru/map-widget/v1/?um=constructor%3A91577a14e9df38ce0f179ddde6eb093257d1feedeccbd38500b6e3bf070228ff&amp;source=constructor',
//       },
//       {
//         cityName: 'Ульяновск',
//         cityId: 73,
//         shopName: 'Сарай',
//         shopId: 6,
//         shopAdress: 'ул. Хрустальная 43 А',
//         shopPhone: '8(8422)368129',
//         shopTime: 'Пн-пт: 8.00-22.00; Сб: 8.00-22.00; Вс: 8.00-22.00;',
//         shopSite: 'http://сарай73.рф/',
//         shopMap: 'https://yandex.ru/map-widget/v1/?um=constructor%3A2ab683f8e0cb7370caf54efcdcb281fc6fc0c86056c98bc0aa98a664f16d0bbc&amp;source=constructor',
//       },
//     ]
//   },
//   {
//     regionName: 'Санкт-Петербург',
//     regionId: 78,
//     shops: [
//       {
//         cityName: 'Санкт-Петербург',
//         cityId: 78,
//         shopName: 'Газ-Инжиниринг',
//         shopId: 1,
//         shopAdress: 'ул. Химиков 18',
//         shopPhone: '8(812)7401575, 7401282',
//         shopTime: 'Пн-пт:интернет-магазин; Сб:интернет-магазин; Вс:интернет-магазин',
//         shopSite: 'http://gas-eng.ru',
//         shopMap: 'https://yandex.ru/map-widget/v1/?um=constructor%3A69a9f67782102fbcf483f4b052bf1d59117f8ee1f383f73c25aed1ba102a38f5&amp;source=constructor',
//       },
//     ]
//   },
//   {
//     regionName: 'республика Саха',
//     regionId: 14,
//     shops: [
//       {
//         cityName: 'Вилюйск г.',
//         cityId: 14,
//         shopName: 'ИП Иванов И.И.',
//         shopId: 1,
//         shopAdress: 'ул. Ярославская 40',
//         shopPhone: '(41132)43052',
//         shopTime: 'Пн-пт:10.00-19.00 обед 13-14; Сб:10.00-18.00 обед 13.00-13.30; Вс:10.00-18.00 обед 13.00-13.30',
//         shopSite: 'tabun22@mail.ru',
//         shopMap: 'https://yandex.ru/map-widget/v1/?um=constructor%3A57deb5aeb6b11ff72ffcef70820ff87f5e934708c0c86f2543d7828b8ede86ba&amp;source=constructor',
//       },
//     ]
//   },
// ]

// export default placesData