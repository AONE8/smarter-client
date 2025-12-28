export const homeNavContent = {
  about: { uk: "Про нас", en: "About Us" },
  howItWorks: { uk: "Як це працює", en: "How It Works" },
  manufactures: { uk: "Виробники", en: "Manufactures" },
  login: { uk: "Увійти", en: "Login" },
};

export const headerTitle = {
  uk: "ШУКАЙ ШВИДКО ЗРУЧНО",
  en: "SEARCH FAST EASY",
};

export const ctaBtn = {
  signup: { uk: "Зареєструватись", en: "Sign Up" },
  try: { uk: "Спробувати", en: "Try It" },
};

export const aboutSectionContent = {
  goods: {
    uk: (brandName: React.JSX.Element) => (
      <>
        {brandName} — це вебзастосунок, завдяки якому користувач може знайти
        необхідний девайс за низькою ціною. До підтримуваних для пошуку девайсів
        є моноблоки, ноутбуки, смартгодинники та смартфони.
      </>
    ),
    en: (brandName: React.JSX.Element) => (
      <>
        {brandName} is a web application that allows users to find the necessary
        device at a low price. Supported devices for search include all-in-ones
        PCs, laptops, smartwatches, and smartphones.
      </>
    ),
  },
  marketpalace: {
    uk: (brandName: React.JSX.Element) => (
      <>
        {brandName} шукає девайси відомих світових виробників з найбільш низькою
        ціною з-поміж сотень продавців в одному з найбільших маркетплейсів.
      </>
    ),
    en: (brandName: React.JSX.Element) => (
      <>
        {brandName} searches for devices from well-known manufacturers at the
        lowest price among hundreds of sellers in one of the largest
        marketplaces.
      </>
    ),
  },

  history: {
    uk: (brandName: React.JSX.Element) => (
      <>
        Зареєструвавшись, Ви отримаєте можливість вести історію пошуку, перелік
        знайдених девайсів та бажаних товарів. Завдяки зручному інтерфейсу
        {brandName} здатен покращити користувацький досвід у пошуку лише
        необхідних та бажаних речей.
      </>
    ),
    en: (brandName: React.JSX.Element) => (
      <>
        By registering, you will be able to keep a search history, a list of
        found devices, and desired products. Thanks to the convenient interface,
        {brandName} can improve the user experience in searching for only
        necessary and desired items.
      </>
    ),
  },
};

export const stepsContent = {
  first: {
    uk: "Зареєструйтесь або увійдіть в систему, щоб отримати доступ до пошуковика девайсів.",
    en: "Register or log in to get access to the device search tool.",
  },
  second: {
    uk: "Заповніть форму. Введіть дані про бажаний товар та натисніть кнопку «Надіслати».",
    en: "Fill out the form. Enter the desired product information and click the 'Submit' button.",
  },
  third: {
    uk: "Отримайте гаджет з потрібними характеристиками та найнижчою ціною на маркетплейсі.",
    en: "Get a gadget with the desired specifications and the lowest price on the marketplace.",
  },
};

export const ctaContent = {
  headerTitle: {
    uk: "Заощаджуй час на пошуки свого улюбленого девайсу",
    en: "Save time searching for your favorite device",
  },

  formTitile: {
    uk: "Маєш вже обліковий запис?",
    en: "Already have an account?",
  },

  clearBtn: { uk: "Очистити", en: "Clear" },
  loginBtn: { uk: "Увійти", en: "Login" },
  formLabels: {
    email: {
      uk: "Електронна пошта",
      en: "E-mail",
    },
    password: {
      uk: "Пароль",
      en: "Password",
    },
  },
};

export const sectionTitles = {
  about: {
    uk: "Про нас",
    en: "About Us",
  },
  howItWorks: {
    uk: "Як це працює",
    en: "How It Works",
  },
  manufactures: {
    uk: "Виробники",
    en: "Manufactures",
  },
};

export const switchLangButton = {
  en: "English",
  uk: "Українська",
};
