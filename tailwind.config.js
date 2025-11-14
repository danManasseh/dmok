module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(220, 10%, 80%)",
        input: "hsl(220, 10%, 80%)",
        ring: "hsl(218, 45%, 18%)",
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(220, 15%, 20%)",
        primary: {
          DEFAULT: "hsl(218, 45%, 18%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        secondary: {
          DEFAULT: "hsl(218, 40%, 35%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        tertiary: {
          DEFAULT: "hsl(12, 70%, 58%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        neutral: {
          DEFAULT: "hsl(0, 0%, 96%)",
          foreground: "hsl(220, 15%, 20%)",
        },
        success: "hsl(145, 60%, 40%)",
        warning: "hsl(25, 90%, 55%)",
        gray: {
          50: "hsl(220, 10%, 97%)",
          100: "hsl(220, 10%, 90%)",
          200: "hsl(220, 10%, 80%)",
          300: "hsl(220, 8%, 70%)",
          400: "hsl(220, 8%, 60%)",
          500: "hsl(220, 8%, 45%)",
          600: "hsl(220, 10%, 35%)",
          700: "hsl(220, 12%, 25%)",
          800: "hsl(220, 14%, 18%)",
          900: "hsl(220, 16%, 10%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        muted: {
          DEFAULT: "hsl(220, 10%, 90%)",
          foreground: "hsl(220, 8%, 45%)",
        },
        accent: {
          DEFAULT: "hsl(12, 70%, 58%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(220, 15%, 20%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(220, 15%, 20%)",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      fontSize: {
        'h1': '3rem',
        'h2': '2rem',
        'h3': '1.5rem',
        'body': '1rem',
        'small': '0.85rem',
      },
      letterSpacing: {
        'h1': '-0.025em',
      },
      lineHeight: {
        'h1': '1.2',
        'body': '1.5',
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, hsl(218, 45%, 18%) 0%, hsl(218, 40%, 35%) 100%)',
        'gradient-2': 'linear-gradient(120deg, hsl(12, 70%, 58%) 0%, hsl(25, 85%, 60%) 100%)',
        'button-border-gradient': 'linear-gradient(90deg, hsl(218, 60%, 40%) 0%, hsl(12, 70%, 58%) 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
