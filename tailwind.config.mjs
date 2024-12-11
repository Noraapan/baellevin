/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger?  */

  theme: {
    /* Tilføj din egen farvepalette nedenfor */
    colors: {
      //     "black-400": "rgba(77, 77, 77, 1)",
      "black-300": "rgba(120, 120, 120, 1)",
      "black-950": "rgba(3, 3, 3, 1)",
      "black-900": "rgba(5, 5, 5, 1)",
      "black-800": "rgba(13, 13, 13, 1)",
      "black-600": "rgba(26, 26, 26, 1)",
      "black-700": "rgba(18, 18, 18, 1)",
      "black-500": "rgba(31, 31, 31, 1)",
      "black-200": "rgba(166, 166, 166, 1)",
      "black-100": "rgba(209, 209, 209, 1)",
      "black-50": "rgba(232, 232, 232, 1)",
      "blue-400": "rgba(47, 124, 218, 1)",
      "blue-300": "rgba(99, 157, 228, 1)",
      "blue-950": "rgba(3, 9, 17, 1)",
      "blue-900": "rgba(6, 19, 35, 1)",
      "blue-800": "rgba(12, 38, 69, 1)",
      "blue-700": "rgba(18, 57, 104, 1)",
      "blue-600": "rgba(24, 76, 139, 1)",
      "blue-500": "rgba(30, 93, 171, 1)",
      "blue-200": "rgba(151, 190, 237, 1)",
      "blue-100": "rgba(203, 222, 246, 1)",
      "blue-50": "rgba(229, 239, 250, 1)",
      //     current: 'currentColor',
      //     'farvenavn': {
      //         50: '#hexkode',
      //         100: '#hexkode',
      //         200: '#hexkode',
      //         300: '#hexkode',
      //         400: '#hexkode',
      //         500: '#hexkode',
      //         600: '#hexkode',
      //         700: '#hexkode',
      //         800: '#hexkode',
      //         900: '#hexkode',
      //     },
      //     'white': '#fff',
      //     'black': '#000',
      // },

      /* Tilføj din egen spacing nedenfor */
      // spacing: {
      //     'm': '40px',
      // },

      /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
      // fontFamily: {
      //     sans: ['Prompt', 'sans-serif'],
      //     'display': ['Courier', 'monospace'], /* eksempel på ekstra font */
      // },

      /* Tilføj dit typografiske hierarki herunder */
      // fontSize: {
      //     base: ['1rem', { lineHeight: '1.5rem' }],
      //     large: ['2.5rem', { lineHeight: '3.75rem' }],
      //   },

      /* Tilføj dit fontvægt-hierarki nedenfor */
      //   fontWeight: {
      //     regular: '400',
      //   },

      /* Borders - borderstørrelser herunder */
      // borderWidth: {
      //     DEFAULT: '1px',
      //     0: '0px',
      //     2: '2px',
      // },

      /* Border radius størrelser herunder */
      // borderRadius: {
      //     DEFAULT: '1.25rem',
      //     none: '0px',
      // },

      /* Box shadows herunder */
      // boxShadow: {
      //     drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)', /* x y blur spread farve / opacity */
      // },

      extend: {
        spacing: {
          xss: "8px",
          xs: "16px",
          s: "24px",
          sm: "32px",
          m: "40px",
          ml: "48px",
          lg: "64px",
          xl: "80px",
          "2xl": "96px",
          "3xl": "112px",
          "4xl": "128px",
          "5xl": "160px",
          "6xl": "208px",
          "7xl": "320px",
          "8xl": "360px",
          "9xl": "424px",
          "spacing-xl": "80px",
          "spacing-6xl": "208px",
          "spacing-sm": "32px",
          "spacing-xs": "16px",
          "spacing-lg": "64px",
          "spacing-9xl": "424px",
          "spacing-2xl": "96px",
          "spacing-xss": "8px",
          "spacing-3xl": "112px",
          "spacing-8xl": "360px",
          "spacing-s": "24px",
          "spacing-m": "40px",
          "spacing-7xl": "320px",
          "spacing-ml": "48px",
          "spacing-5xl": "160px",
          "spacing-4xl": "128px",
          "shadow-drop-50": "50px",
          "shadow-inner-50": "50px",
          "font-size-50": "50px",
          "font-size-70": "70px",
          "font-size-65": "65px",
          "font-size-26": "26px",
          "font-size-20": "20px",
          "border-radius-34": "34px",
          "border-radius-50": "50px",
          "border-radius-none": "0px",
        },
        customProperties: {
          "font-family-h1": "Neue Haas Grotesk Display Pro",
          "font-family-h2": "Neue Haas Grotesk Display Pro",
          "font-family-h3": "Cooper std",
          "font-family-body": "Neue Haas Grotesk Display Pro",
        },
      },
    },
    plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/forms"),
      require("@tailwindcss/aspect-ratio"),
      require("@tailwindcss/container-queries"),
    ],
  },
};
