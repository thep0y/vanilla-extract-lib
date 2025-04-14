import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const themeContract = createThemeContract({
  color: {
    neutralForeground: {
      1: null,
      "1Hover": null,
      "1Pressed": null,
      "1Selected": null,
      2: null,
      "2Hover": null,
      "2Pressed": null,
      "2Selected": null,
      "2BrandHover": null,
      "2BrandPressed": null,
      "2BrandSelected": null,
      3: null,
      "3Hover": null,
      "3Pressed": null,
      "3Selected": null,
      "3BrandHover": null,
      "3BrandPressed": null,
      "3BrandSelected": null,
      4: null,
      disabled: null,
      invertedDisabled: null,
      "1Static": null,
      staticInverted: null,
      inverted: null,
      invertedHover: null,
      invertedPressed: null,
      invertedSelected: null,
      inverted2: null,
      onBrand: null,
      invertedLink: null,
      invertedLinkHover: null,
      invertedLinkPressed: null,
      invertedLinkSelected: null,
    },
    brandForeground: {
      link: null,
      linkHover: null,
      linkPressed: null,
      linkSelected: null,
      1: null,
      2: null,
      "2Hover": null,
      "2Pressed": null,
      inverted: null,
      invertedHover: null,
      invertedPressed: null,
      onLight: null,
      onLightHover: null,
      onLightPressed: null,
      onLightSelected: null,
    },
    neutralForeground2Link: null,
    neutralForeground2LinkHover: null,
    neutralForeground2LinkPressed: null,
    neutralForeground2LinkSelected: null,
    compoundBrandForeground: {
      1: null,
      "1Hover": null,
      "1Pressed": null,
    },
    neutralBackground: {
      1: null,
      "1Hover": null,
      "1Pressed": null,
      "1Selected": null,
      2: null,
      "2Hover": null,
      "2Pressed": null,
      "2Selected": null,
      3: null,
      "3Hover": null,
      "3Pressed": null,
      "3Selected": null,
      4: null,
      "4Hover": null,
      "4Pressed": null,
      "4Selected": null,
      5: null,
      "5Hover": null,
      "5Pressed": null,
      "5Selected": null,
      6: null,
      inverted: null,
      static: null,
      alpha: null,
      alpha2: null,
      disabled: null,
      invertedDisabled: null,
    },
    subtleBackground: {
      default: null,
      hover: null,
      pressed: null,
      selected: null,
      lightAlphaHover: null,
      lightAlphaPressed: null,
      lightAlphaSelected: null,
      inverted: null,
      invertedHover: null,
      invertedPressed: null,
      invertedSelected: null,
    },
    transparentBackground: {
      default: null,
      hover: null,
      pressed: null,
      selected: null,
    },
    neutralStencil: {
      1: null,
      2: null,
      "1Alpha": null,
      "2Alpha": null,
    },
    backgroundOverlay: null,
    scrollbarOverlay: null,
    brandBackground: {
      default: null,
      hover: null,
      pressed: null,
      selected: null,
      static: null,
      2: null,
      "2Hover": null,
      "2Pressed": null,
      "3Static": null,
      "4Static": null,
      inverted: null,
      invertedHover: null,
      invertedPressed: null,
      invertedSelected: null,
    },
    compoundBrandBackground: {
      default: null,
      hover: null,
      pressed: null,
    },
    neutralCardBackground: {
      default: null,
      hover: null,
      pressed: null,
      selected: null,
      disabled: null,
    },
    neutralStroke: {
      accessible: null,
      accessibleHover: null,
      accessiblePressed: null,
      accessibleSelected: null,
      1: null,
      "1Hover": null,
      "1Pressed": null,
      "1Selected": null,
      2: null,
      3: null,
      subtle: null,
      onBrand: null,
      onBrand2: null,
      onBrand2Hover: null,
      onBrand2Pressed: null,
      onBrand2Selected: null,
      disabled: null,
      invertedDisabled: null,
      alpha: null,
      alpha2: null,
    },
    brandStroke: {
      1: null,
      2: null,
      "2Hover": null,
      "2Pressed": null,
      "2Contrast": null,
    },
    compoundBrandStroke: {
      default: null,
      hover: null,
      pressed: null,
    },
    transparentStroke: {
      default: null,
      interactive: null,
      disabled: null,
    },
    strokeFocus: {
      1: null,
      2: null,
    },
    neutralShadow: {
      ambient: null,
      key: null,
      ambientLighter: null,
      keyLighter: null,
      ambientDarker: null,
      keyDarker: null,
    },
    brandShadow: {
      ambient: null,
      key: null,
    },
    palette: {
      red: {
        background1: null,
        background2: null,
        background3: null,
        foreground1: null,
        foreground2: null,
        foreground3: null,
        borderActive: null,
        border1: null,
        border2: null,
        foregroundInverted: null,
      },
      green: {
        background1: null,
        background2: null,
        background3: null,
        foreground1: null,
        foreground2: null,
        foreground3: null,
        borderActive: null,
        border1: null,
        border2: null,
        foregroundInverted: null,
      },
      darkOrange: {
        background1: null,
        background2: null,
        background3: null,
        foreground1: null,
        foreground2: null,
        foreground3: null,
        borderActive: null,
        border1: null,
        border2: null,
      },
      yellow: {
        background1: null,
        background2: null,
        background3: null,
        foreground1: null,
        foreground2: null,
        foreground3: null,
        borderActive: null,
        border1: null,
        border2: null,
        foregroundInverted: null,
      },
      berry: {
        background1: null,
        background2: null,
        background3: null,
        foreground1: null,
        foreground2: null,
        foreground3: null,
        borderActive: null,
        border1: null,
        border2: null,
      },
      lightGreen: {
        background1: null,
        background2: null,
        background3: null,
        foreground1: null,
        foreground2: null,
        foreground3: null,
        borderActive: null,
        border1: null,
        border2: null,
      },
      marigold: {
        background1: null,
        background2: null,
        background3: null,
        foreground1: null,
        foreground2: null,
        foreground3: null,
        borderActive: null,
        border1: null,
        border2: null,
      },
      // Additional color palettes
      darkRed: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
      cranberry: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
      pumpkin: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
      peach: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
      gold: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
      brass: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
      brown: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
      forest: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
      seafoam: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
      darkGreen: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
      lightTeal: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
      teal: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
      steel: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
      blue: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
      royalBlue: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
      cornflower: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
      navy: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
      lavender: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
      purple: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
      grape: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
      lilac: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
      pink: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
      magenta: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
      plum: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
      beige: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
      mink: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
      platinum: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
      anchor: {
        background2: null,
        foreground2: null,
        borderActive: null,
      },
    },
    status: {
      success: {
        background1: null,
        background2: null,
        background3: null,
        foreground1: null,
        foreground2: null,
        foreground3: null,
        foregroundInverted: null,
        borderActive: null,
        border1: null,
        border2: null,
      },
      warning: {
        background1: null,
        background2: null,
        background3: null,
        foreground1: null,
        foreground2: null,
        foreground3: null,
        foregroundInverted: null,
        borderActive: null,
        border1: null,
        border2: null,
      },
      danger: {
        background1: null,
        background2: null,
        background3: null,
        foreground1: null,
        foreground2: null,
        foreground3: null,
        foregroundInverted: null,
        borderActive: null,
        border1: null,
        border2: null,
        background3Hover: null,
        background3Pressed: null,
      },
    },
  },
  shadow: {
    2: null,
    4: null,
    8: null,
    "16": null,
    "28": null,
    "64": null,
    "2Brand": null,
    "4Brand": null,
    "8Brand": null,
    "16Brand": null,
    "28Brand": null,
    "64Brand": null,
  },
});

export const lightTheme = createTheme(themeContract, {
  color: {
    neutralForeground: {
      1: "#242424",
      "1Hover": "#242424",
      "1Pressed": "#242424",
      "1Selected": "#242424",
      2: "#424242",
      "2Hover": "#242424",
      "2Pressed": "#242424",
      "2Selected": "#242424",
      "2BrandHover": "#0f6cbd",
      "2BrandPressed": "#115ea3",
      "2BrandSelected": "#0f6cbd",
      3: "#616161",
      "3Hover": "#424242",
      "3Pressed": "#424242",
      "3Selected": "#424242",
      "3BrandHover": "#0f6cbd",
      "3BrandPressed": "#115ea3",
      "3BrandSelected": "#0f6cbd",
      4: "#707070",
      disabled: "#bdbdbd",
      invertedDisabled: "rgba(255, 255, 255, 0.4)",
      "1Static": "#242424",
      staticInverted: "#ffffff",
      inverted: "#ffffff",
      invertedHover: "#ffffff",
      invertedPressed: "#ffffff",
      invertedSelected: "#ffffff",
      inverted2: "#ffffff",
      onBrand: "#ffffff",
      invertedLink: "#ffffff",
      invertedLinkHover: "#ffffff",
      invertedLinkPressed: "#ffffff",
      invertedLinkSelected: "#ffffff",
    },
    brandForeground: {
      link: "#115ea3",
      linkHover: "#0f548c",
      linkPressed: "#0c3b5e",
      linkSelected: "#115ea3",
      1: "#0f6cbd",
      2: "#115ea3",
      "2Hover": "#0f548c",
      "2Pressed": "#0a2e4a",
      inverted: "#479ef5",
      invertedHover: "#62abf5",
      invertedPressed: "#479ef5",
      onLight: "#0f6cbd",
      onLightHover: "#115ea3",
      onLightPressed: "#0e4775",
      onLightSelected: "#0f548c",
    },
    neutralForeground2Link: "#424242",
    neutralForeground2LinkHover: "#242424",
    neutralForeground2LinkPressed: "#242424",
    neutralForeground2LinkSelected: "#242424",
    compoundBrandForeground: {
      1: "#0f6cbd",
      "1Hover": "#115ea3",
      "1Pressed": "#0f548c",
    },
    neutralBackground: {
      1: "#ffffff",
      "1Hover": "#f5f5f5",
      "1Pressed": "#e0e0e0",
      "1Selected": "#ebebeb",
      2: "#fafafa",
      "2Hover": "#f0f0f0",
      "2Pressed": "#dbdbdb",
      "2Selected": "#e6e6e6",
      3: "#f5f5f5",
      "3Hover": "#ebebeb",
      "3Pressed": "#d6d6d6",
      "3Selected": "#e0e0e0",
      4: "#f0f0f0",
      "4Hover": "#fafafa",
      "4Pressed": "#f5f5f5",
      "4Selected": "#ffffff",
      5: "#ebebeb",
      "5Hover": "#f5f5f5",
      "5Pressed": "#f0f0f0",
      "5Selected": "#fafafa",
      6: "#e6e6e6",
      inverted: "#292929",
      static: "#333333",
      alpha: "rgba(255, 255, 255, 0.5)",
      alpha2: "rgba(255, 255, 255, 0.8)",
      disabled: "#f0f0f0",
      invertedDisabled: "rgba(255, 255, 255, 0.1)",
    },
    subtleBackground: {
      default: "transparent",
      hover: "#f5f5f5",
      pressed: "#e0e0e0",
      selected: "#ebebeb",
      lightAlphaHover: "rgba(255, 255, 255, 0.7)",
      lightAlphaPressed: "rgba(255, 255, 255, 0.5)",
      lightAlphaSelected: "transparent",
      inverted: "transparent",
      invertedHover: "rgba(0, 0, 0, 0.1)",
      invertedPressed: "rgba(0, 0, 0, 0.3)",
      invertedSelected: "rgba(0, 0, 0, 0.2)",
    },
    transparentBackground: {
      default: "transparent",
      hover: "transparent",
      pressed: "transparent",
      selected: "transparent",
    },
    neutralStencil: {
      1: "#e6e6e6",
      2: "#fafafa",
      "1Alpha": "rgba(0, 0, 0, 0.1)",
      "2Alpha": "rgba(0, 0, 0, 0.05)",
    },
    backgroundOverlay: "rgba(0, 0, 0, 0.4)",
    scrollbarOverlay: "rgba(0, 0, 0, 0.5)",
    brandBackground: {
      default: "#0f6cbd",
      hover: "#115ea3",
      pressed: "#0c3b5e",
      selected: "#0f548c",
      static: "#0f6cbd",
      2: "#ebf3fc",
      "2Hover": "#cfe4fa",
      "2Pressed": "#96c6fa",
      "3Static": "#0f548c",
      "4Static": "#0c3b5e",
      inverted: "#ffffff",
      invertedHover: "#ebf3fc",
      invertedPressed: "#b4d6fa",
      invertedSelected: "#cfe4fa",
    },
    compoundBrandBackground: {
      default: "#0f6cbd",
      hover: "#115ea3",
      pressed: "#0f548c",
    },
    neutralCardBackground: {
      default: "#fafafa",
      hover: "#ffffff",
      pressed: "#f5f5f5",
      selected: "#ebebeb",
      disabled: "#f0f0f0",
    },
    neutralStroke: {
      accessible: "#616161",
      accessibleHover: "#575757",
      accessiblePressed: "#4d4d4d",
      accessibleSelected: "#0f6cbd",
      1: "#d1d1d1",
      "1Hover": "#c7c7c7",
      "1Pressed": "#b3b3b3",
      "1Selected": "#bdbdbd",
      2: "#e0e0e0",
      3: "#f0f0f0",
      subtle: "#e0e0e0",
      onBrand: "#ffffff",
      onBrand2: "#ffffff",
      onBrand2Hover: "#ffffff",
      onBrand2Pressed: "#ffffff",
      onBrand2Selected: "#ffffff",
      disabled: "#e0e0e0",
      invertedDisabled: "rgba(255, 255, 255, 0.4)",
      alpha: "rgba(0, 0, 0, 0.05)",
      alpha2: "rgba(255, 255, 255, 0.2)",
    },
    brandStroke: {
      1: "#0f6cbd",
      2: "#b4d6fa",
      "2Hover": "#77b7f7",
      "2Pressed": "#0f6cbd",
      "2Contrast": "#b4d6fa",
    },
    compoundBrandStroke: {
      default: "#0f6cbd",
      hover: "#115ea3",
      pressed: "#0f548c",
    },
    transparentStroke: {
      default: "transparent",
      interactive: "transparent",
      disabled: "transparent",
    },
    strokeFocus: {
      1: "#ffffff",
      2: "#000000",
    },
    neutralShadow: {
      ambient: "rgba(0, 0, 0, 0.12)",
      key: "rgba(0, 0, 0, 0.14)",
      ambientLighter: "rgba(0, 0, 0, 0.06)",
      keyLighter: "rgba(0, 0, 0, 0.07)",
      ambientDarker: "rgba(0, 0, 0, 0.2)",
      keyDarker: "rgba(0, 0, 0, 0.24)",
    },
    brandShadow: {
      ambient: "rgba(0, 0, 0, 0.3)",
      key: "rgba(0, 0, 0, 0.25)",
    },
    palette: {
      red: {
        background1: "#fdf6f6",
        background2: "#f1bbbc",
        background3: "#d13438",
        foreground1: "#bc2f32",
        foreground2: "#751d1f",
        foreground3: "#d13438",
        borderActive: "#d13438",
        border1: "#f1bbbc",
        border2: "#d13438",
        foregroundInverted: "#dc5e62",
      },
      green: {
        background1: "#f1faf1",
        background2: "#9fd89f",
        background3: "#107c10",
        foreground1: "#0e700e",
        foreground2: "#094509",
        foreground3: "#107c10",
        borderActive: "#107c10",
        border1: "#9fd89f",
        border2: "#107c10",
        foregroundInverted: "#359b35",
      },
      darkOrange: {
        background1: "#fdf6f3",
        background2: "#f4bfab",
        background3: "#da3b01",
        foreground1: "#c43501",
        foreground2: "#7a2101",
        foreground3: "#da3b01",
        borderActive: "#da3b01",
        border1: "#f4bfab",
        border2: "#da3b01",
      },
      yellow: {
        background1: "#fffef5",
        background2: "#fef7b2",
        background3: "#fde300",
        foreground1: "#817400",
        foreground2: "#817400",
        foreground3: "#fde300",
        borderActive: "#fde300",
        border1: "#fef7b2",
        border2: "#fde300",
        foregroundInverted: "#fef7b2",
      },
      berry: {
        background1: "#fdf5fc",
        background2: "#edbbe7",
        background3: "#c239b3",
        foreground1: "#af33a1",
        foreground2: "#6d2064",
        foreground3: "#c239b3",
        borderActive: "#c239b3",
        border1: "#edbbe7",
        border2: "#c239b3",
      },
      lightGreen: {
        background1: "#f2fbf2",
        background2: "#a7e3a5",
        background3: "#13a10e",
        foreground1: "#11910d",
        foreground2: "#0b5a08",
        foreground3: "#13a10e",
        borderActive: "#13a10e",
        border1: "#a7e3a5",
        border2: "#13a10e",
      },
      marigold: {
        background1: "#fefbf4",
        background2: "#f9e2ae",
        background3: "#eaa300",
        foreground1: "#d39300",
        foreground2: "#835b00",
        foreground3: "#eaa300",
        borderActive: "#eaa300",
        border1: "#f9e2ae",
        border2: "#eaa300",
      },
      // Additional color palettes
      darkRed: {
        background2: "#d69ca5",
        foreground2: "#420610",
        borderActive: "#750b1c",
      },
      cranberry: {
        background2: "#eeacb2",
        foreground2: "#6e0811",
        borderActive: "#c50f1f",
      },
      pumpkin: {
        background2: "#efc4ad",
        foreground2: "#712d09",
        borderActive: "#ca5010",
      },
      peach: {
        background2: "#ffddb3",
        foreground2: "#8f4e00",
        borderActive: "#ff8c00",
      },
      gold: {
        background2: "#ecdfa5",
        foreground2: "#6c5700",
        borderActive: "#c19c00",
      },
      brass: {
        background2: "#e0cea2",
        foreground2: "#553e06",
        borderActive: "#986f0b",
      },
      brown: {
        background2: "#ddc3b0",
        foreground2: "#50301a",
        borderActive: "#8e562e",
      },
      forest: {
        background2: "#bdd99b",
        foreground2: "#294903",
        borderActive: "#498205",
      },
      seafoam: {
        background2: "#a8f0cd",
        foreground2: "#00723b",
        borderActive: "#00cc6a",
      },
      darkGreen: {
        background2: "#9ad29a",
        foreground2: "#063b06",
        borderActive: "#0b6a0b",
      },
      lightTeal: {
        background2: "#a6e9ed",
        foreground2: "#00666d",
        borderActive: "#00b7c3",
      },
      teal: {
        background2: "#9bd9db",
        foreground2: "#02494c",
        borderActive: "#038387",
      },
      steel: {
        background2: "#94c8d4",
        foreground2: "#00333f",
        borderActive: "#005b70",
      },
      blue: {
        background2: "#a9d3f2",
        foreground2: "#004377",
        borderActive: "#0078d4",
      },
      royalBlue: {
        background2: "#9abfdc",
        foreground2: "#002c4e",
        borderActive: "#004e8c",
      },
      cornflower: {
        background2: "#c8d1fa",
        foreground2: "#2c3c85",
        borderActive: "#4f6bed",
      },
      navy: {
        background2: "#a3b2e8",
        foreground2: "#001665",
        borderActive: "#0027b4",
      },
      lavender: {
        background2: "#d2ccf8",
        foreground2: "#3f3682",
        borderActive: "#7160e8",
      },
      purple: {
        background2: "#c6b1de",
        foreground2: "#341a51",
        borderActive: "#5c2e91",
      },
      grape: {
        background2: "#d9a7e0",
        foreground2: "#4c0d55",
        borderActive: "#881798",
      },
      lilac: {
        background2: "#e6bfed",
        foreground2: "#63276d",
        borderActive: "#b146c2",
      },
      pink: {
        background2: "#f7c0e3",
        foreground2: "#80215d",
        borderActive: "#e43ba6",
      },
      magenta: {
        background2: "#eca5d1",
        foreground2: "#6b0043",
        borderActive: "#bf0077",
      },
      plum: {
        background2: "#d696c0",
        foreground2: "#43002b",
        borderActive: "#77004d",
      },
      beige: {
        background2: "#d7d4d4",
        foreground2: "#444241",
        borderActive: "#7a7574",
      },
      mink: {
        background2: "#cecccb",
        foreground2: "#343231",
        borderActive: "#5d5a58",
      },
      platinum: {
        background2: "#cdd6d8",
        foreground2: "#3b4447",
        borderActive: "#69797e",
      },
      anchor: {
        background2: "#bcc3c7",
        foreground2: "#202427",
        borderActive: "#394146",
      },
    },
    status: {
      success: {
        background1: "#f1faf1",
        background2: "#9fd89f",
        background3: "#107c10",
        foreground1: "#0e700e",
        foreground2: "#094509",
        foreground3: "#107c10",
        foregroundInverted: "#54b054",
        borderActive: "#107c10",
        border1: "#9fd89f",
        border2: "#107c10",
      },
      warning: {
        background1: "#fff9f5",
        background2: "#fdcfb4",
        background3: "#f7630c",
        foreground1: "#bc4b09",
        foreground2: "#8a3707",
        foreground3: "#bc4b09",
        foregroundInverted: "#faa06b",
        borderActive: "#f7630c",
        border1: "#fdcfb4",
        border2: "#bc4b09",
      },
      danger: {
        background1: "#fdf3f4",
        background2: "#eeacb2",
        background3: "#c50f1f",
        foreground1: "#b10e1c",
        foreground2: "#6e0811",
        foreground3: "#c50f1f",
        foregroundInverted: "#dc626d",
        borderActive: "#c50f1f",
        border1: "#eeacb2",
        border2: "#c50f1f",
        background3Hover: "#b10e1c",
        background3Pressed: "#960b18",
      },
    },
  },
  shadow: {
    2: "0 0 2px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.14)",
    4: "0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.14)",
    8: "0 0 2px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.14)",
    16: "0 0 2px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.14)",
    28: "0 0 8px rgba(0, 0, 0, 0.12), 0 14px 28px rgba(0, 0, 0, 0.14)",
    64: "0 0 8px rgba(0, 0, 0, 0.12), 0 32px 64px rgba(0, 0, 0, 0.14)",
    "2Brand": "0 0 2px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.25)",
    "4Brand": "0 0 2px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.25)",
    "8Brand": "0 0 2px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.25)",
    "16Brand": "0 0 2px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.25)",
    "28Brand": "0 0 8px rgba(0, 0, 0, 0.3), 0 14px 28px rgba(0, 0, 0, 0.25)",
    "64Brand": "0 0 8px rgba(0, 0, 0, 0.3), 0 32px 64px rgba(0, 0, 0, 0.25)",
  },
});

export const darkTheme = createTheme(themeContract, {
  color: {
    neutralForeground: {
      "1": "#ffffff",
      "2": "#d6d6d6",
      "3": "#adadad",
      "4": "#999999",
      "1Hover": "#ffffff",
      "1Pressed": "#ffffff",
      "1Selected": "#ffffff",
      "2Hover": "#ffffff",
      "2Pressed": "#ffffff",
      "2Selected": "#ffffff",
      "2BrandHover": "#479ef5",
      "2BrandPressed": "#2886de",
      "2BrandSelected": "#479ef5",
      "3Hover": "#d6d6d6",
      "3Pressed": "#d6d6d6",
      "3Selected": "#d6d6d6",
      "3BrandHover": "#479ef5",
      "3BrandPressed": "#2886de",
      "3BrandSelected": "#479ef5",
      disabled: "#5c5c5c",
      invertedDisabled: "rgba(255, 255, 255, 0.4)",
      "1Static": "#242424",
      staticInverted: "#ffffff",
      inverted: "#242424",
      invertedHover: "#242424",
      invertedPressed: "#242424",
      invertedSelected: "#242424",
      inverted2: "#242424",
      onBrand: "#ffffff",
      invertedLink: "#ffffff",
      invertedLinkHover: "#ffffff",
      invertedLinkPressed: "#ffffff",
      invertedLinkSelected: "#ffffff",
    },
    brandForeground: {
      "1": "#479ef5",
      "2": "#62abf5",
      link: "#479ef5",
      linkHover: "#62abf5",
      linkPressed: "#2886de",
      linkSelected: "#479ef5",
      "2Hover": "#96c6fa",
      "2Pressed": "#ebf3fc",
      inverted: "#0f6cbd",
      invertedHover: "#115ea3",
      invertedPressed: "#0f548c",
      onLight: "#0f6cbd",
      onLightHover: "#115ea3",
      onLightPressed: "#0e4775",
      onLightSelected: "#0f548c",
    },
    neutralForeground2Link: "#d6d6d6",
    neutralForeground2LinkHover: "#ffffff",
    neutralForeground2LinkPressed: "#ffffff",
    neutralForeground2LinkSelected: "#ffffff",
    compoundBrandForeground: {
      "1": "#479ef5",
      "1Hover": "#62abf5",
      "1Pressed": "#2886de",
    },
    neutralBackground: {
      "1": "#292929",
      "2": "#1f1f1f",
      "3": "#141414",
      "4": "#0a0a0a",
      "5": "#000000",
      "6": "#333333",
      "1Hover": "#3d3d3d",
      "1Pressed": "#1f1f1f",
      "1Selected": "#383838",
      "2Hover": "#333333",
      "2Pressed": "#141414",
      "2Selected": "#2e2e2e",
      "3Hover": "#292929",
      "3Pressed": "#0a0a0a",
      "3Selected": "#242424",
      "4Hover": "#1f1f1f",
      "4Pressed": "#000000",
      "4Selected": "#1a1a1a",
      "5Hover": "#141414",
      "5Pressed": "#050505",
      "5Selected": "#0f0f0f",
      inverted: "#ffffff",
      static: "#3d3d3d",
      alpha: "rgba(26, 26, 26, 0.5)",
      alpha2: "rgba(31, 31, 31, 0.7)",
      disabled: "#141414",
      invertedDisabled: "rgba(255, 255, 255, 0.1)",
    },
    subtleBackground: {
      default: "transparent",
      hover: "#383838",
      pressed: "#2e2e2e",
      selected: "#333333",
      lightAlphaHover: "rgba(36, 36, 36, 0.8)",
      lightAlphaPressed: "rgba(36, 36, 36, 0.5)",
      lightAlphaSelected: "transparent",
      inverted: "transparent",
      invertedHover: "rgba(0, 0, 0, 0.1)",
      invertedPressed: "rgba(0, 0, 0, 0.3)",
      invertedSelected: "rgba(0, 0, 0, 0.2)",
    },
    transparentBackground: {
      default: "transparent",
      hover: "transparent",
      pressed: "transparent",
      selected: "transparent",
    },
    neutralStencil: {
      "1": "#575757",
      "2": "#333333",
      "1Alpha": "rgba(255, 255, 255, 0.1)",
      "2Alpha": "rgba(255, 255, 255, 0.05)",
    },
    backgroundOverlay: "rgba(0, 0, 0, 0.5)",
    scrollbarOverlay: "rgba(255, 255, 255, 0.6)",
    brandBackground: {
      "2": "#082338",
      default: "#115ea3",
      hover: "#0f6cbd",
      pressed: "#0c3b5e",
      selected: "#0f548c",
      static: "#0f6cbd",
      "2Hover": "#0c3b5e",
      "2Pressed": "#061724",
      "3Static": "#0f548c",
      "4Static": "#0c3b5e",
      inverted: "#ffffff",
      invertedHover: "#ebf3fc",
      invertedPressed: "#b4d6fa",
      invertedSelected: "#cfe4fa",
    },
    compoundBrandBackground: {
      default: "#479ef5",
      hover: "#62abf5",
      pressed: "#2886de",
    },
    neutralCardBackground: {
      default: "#333333",
      hover: "#3d3d3d",
      pressed: "#2e2e2e",
      selected: "#383838",
      disabled: "#141414",
    },
    neutralStroke: {
      "1": "#666666",
      "2": "#525252",
      "3": "#3d3d3d",
      accessible: "#adadad",
      accessibleHover: "#bdbdbd",
      accessiblePressed: "#b3b3b3",
      accessibleSelected: "#479ef5",
      "1Hover": "#757575",
      "1Pressed": "#6b6b6b",
      "1Selected": "#707070",
      subtle: "#0a0a0a",
      onBrand: "#292929",
      onBrand2: "#ffffff",
      onBrand2Hover: "#ffffff",
      onBrand2Pressed: "#ffffff",
      onBrand2Selected: "#ffffff",
      disabled: "#424242",
      invertedDisabled: "rgba(255, 255, 255, 0.4)",
      alpha: "rgba(255, 255, 255, 0.1)",
      alpha2: "rgba(255, 255, 255, 0.2)",
    },
    brandStroke: {
      "1": "#479ef5",
      "2": "#0e4775",
      "2Hover": "#0e4775",
      "2Pressed": "#0a2e4a",
      "2Contrast": "#0e4775",
    },
    compoundBrandStroke: {
      default: "#479ef5",
      hover: "#62abf5",
      pressed: "#2886de",
    },
    transparentStroke: {
      default: "transparent",
      interactive: "transparent",
      disabled: "transparent",
    },
    strokeFocus: { "1": "#000000", "2": "#ffffff" },
    neutralShadow: {
      ambient: "rgba(0, 0, 0, 0.24)",
      key: "rgba(0, 0, 0, 0.28)",
      ambientLighter: "rgba(0, 0, 0, 0.12)",
      keyLighter: "rgba(0, 0, 0, 0.14)",
      ambientDarker: "rgba(0, 0, 0, 0.4)",
      keyDarker: "rgba(0, 0, 0, 0.48)",
    },
    brandShadow: { ambient: "rgba(0, 0, 0, 0.3)", key: "rgba(0, 0, 0, 0.25)" },
    palette: {
      red: {
        background1: "#3f1011",
        background2: "#751d1f",
        background3: "#d13438",
        foreground1: "#e37d80",
        foreground2: "#f1bbbc",
        foreground3: "#e37d80",
        borderActive: "#e37d80",
        border1: "#d13438",
        border2: "#e37d80",
        foregroundInverted: "#d13438",
      },
      green: {
        background1: "#052505",
        background2: "#094509",
        background3: "#107c10",
        foreground1: "#54b054",
        foreground2: "#9fd89f",
        foreground3: "#9fd89f",
        borderActive: "#54b054",
        border1: "#107c10",
        border2: "#9fd89f",
        foregroundInverted: "#107c10",
      },
      darkOrange: {
        background1: "#411200",
        background2: "#7a2101",
        background3: "#da3b01",
        foreground1: "#e9835e",
        foreground2: "#f4bfab",
        foreground3: "#e9835e",
        borderActive: "#e9835e",
        border1: "#da3b01",
        border2: "#e9835e",
      },
      yellow: {
        background1: "#4c4400",
        background2: "#817400",
        background3: "#fde300",
        foreground1: "#feee66",
        foreground2: "#fef7b2",
        foreground3: "#fdea3d",
        borderActive: "#feee66",
        border1: "#fde300",
        border2: "#fdea3d",
        foregroundInverted: "#817400",
      },
      berry: {
        background1: "#3a1136",
        background2: "#6d2064",
        background3: "#c239b3",
        foreground1: "#da7ed0",
        foreground2: "#edbbe7",
        foreground3: "#d161c4",
        borderActive: "#da7ed0",
        border1: "#c239b3",
        border2: "#d161c4",
      },
      lightGreen: {
        background1: "#063004",
        background2: "#0b5a08",
        background3: "#13a10e",
        foreground1: "#5ec75a",
        foreground2: "#a7e3a5",
        foreground3: "#3db838",
        borderActive: "#5ec75a",
        border1: "#13a10e",
        border2: "#3db838",
      },
      marigold: {
        background1: "#463100",
        background2: "#835b00",
        background3: "#eaa300",
        foreground1: "#f2c661",
        foreground2: "#f9e2ae",
        foreground3: "#efb839",
        borderActive: "#f2c661",
        border1: "#eaa300",
        border2: "#efb839",
      },
      darkRed: {
        background2: "#590815",
        foreground2: "#d69ca5",
        borderActive: "#ac4f5e",
      },
      cranberry: {
        background2: "#6e0811",
        foreground2: "#eeacb2",
        borderActive: "#dc626d",
      },
      pumpkin: {
        background2: "#712d09",
        foreground2: "#efc4ad",
        borderActive: "#df8e64",
      },
      peach: {
        background2: "#8f4e00",
        foreground2: "#ffddb3",
        borderActive: "#ffba66",
      },
      gold: {
        background2: "#6c5700",
        foreground2: "#ecdfa5",
        borderActive: "#dac157",
      },
      brass: {
        background2: "#553e06",
        foreground2: "#e0cea2",
        borderActive: "#c1a256",
      },
      brown: {
        background2: "#50301a",
        foreground2: "#ddc3b0",
        borderActive: "#bb8f6f",
      },
      forest: {
        background2: "#294903",
        foreground2: "#bdd99b",
        borderActive: "#85b44c",
      },
      seafoam: {
        background2: "#00723b",
        foreground2: "#a8f0cd",
        borderActive: "#5ae0a0",
      },
      darkGreen: {
        background2: "#063b06",
        foreground2: "#9ad29a",
        borderActive: "#4da64d",
      },
      lightTeal: {
        background2: "#00666d",
        foreground2: "#a6e9ed",
        borderActive: "#58d3db",
      },
      teal: {
        background2: "#02494c",
        foreground2: "#9bd9db",
        borderActive: "#4cb4b7",
      },
      steel: {
        background2: "#00333f",
        foreground2: "#94c8d4",
        borderActive: "#4496a9",
      },
      blue: {
        background2: "#004377",
        foreground2: "#a9d3f2",
        borderActive: "#5caae5",
      },
      royalBlue: {
        background2: "#002c4e",
        foreground2: "#9abfdc",
        borderActive: "#4a89ba",
      },
      cornflower: {
        background2: "#2c3c85",
        foreground2: "#c8d1fa",
        borderActive: "#93a4f4",
      },
      navy: {
        background2: "#001665",
        foreground2: "#a3b2e8",
        borderActive: "#546fd2",
      },
      lavender: {
        background2: "#3f3682",
        foreground2: "#d2ccf8",
        borderActive: "#a79cf1",
      },
      purple: {
        background2: "#341a51",
        foreground2: "#c6b1de",
        borderActive: "#9470bd",
      },
      grape: {
        background2: "#4c0d55",
        foreground2: "#d9a7e0",
        borderActive: "#b55fc1",
      },
      lilac: {
        background2: "#63276d",
        foreground2: "#e6bfed",
        borderActive: "#cf87da",
      },
      pink: {
        background2: "#80215d",
        foreground2: "#f7c0e3",
        borderActive: "#ef85c8",
      },
      magenta: {
        background2: "#6b0043",
        foreground2: "#eca5d1",
        borderActive: "#d957a8",
      },
      plum: {
        background2: "#5a003b",
        foreground2: "#d696c0",
        borderActive: "#ad4589",
      },
      beige: {
        background2: "#444241",
        foreground2: "#d7d4d4",
        borderActive: "#afabaa",
      },
      mink: {
        background2: "#343231",
        foreground2: "#cecccb",
        borderActive: "#9e9b99",
      },
      platinum: {
        background2: "#3b4447",
        foreground2: "#cdd6d8",
        borderActive: "#a0adb2",
      },
      anchor: {
        background2: "#202427",
        foreground2: "#bcc3c7",
        borderActive: "#808a90",
      },
    },
    status: {
      success: {
        background1: "#052505",
        background2: "#094509",
        background3: "#107c10",
        foreground1: "#54b054",
        foreground2: "#9fd89f",
        foreground3: "#9fd89f",
        foregroundInverted: "#0e700e",
        borderActive: "#54b054",
        border1: "#107c10",
        border2: "#9fd89f",
      },
      warning: {
        background1: "#4a1e04",
        background2: "#8a3707",
        background3: "#f7630c",
        foreground1: "#faa06b",
        foreground2: "#fdcfb4",
        foreground3: "#f98845",
        foregroundInverted: "#bc4b09",
        borderActive: "#faa06b",
        border1: "#f7630c",
        border2: "#f98845",
      },
      danger: {
        background1: "#3b0509",
        background2: "#6e0811",
        background3: "#c50f1f",
        foreground1: "#dc626d",
        foreground2: "#eeacb2",
        foreground3: "#eeacb2",
        foregroundInverted: "#b10e1c",
        borderActive: "#dc626d",
        border1: "#c50f1f",
        border2: "#dc626d",
        background3Hover: "#b10e1c",
        background3Pressed: "#960b18",
      },
    },
  },
  shadow: {
    "2": "0 0 2px rgba(0, 0, 0, 0.24), 0 1px 2px rgba(0, 0, 0, 0.28)",
    "4": "0 0 2px rgba(0, 0, 0, 0.24), 0 2px 4px rgba(0, 0, 0, 0.28)",
    "8": "0 0 2px rgba(0, 0, 0, 0.24), 0 4px 8px rgba(0, 0, 0, 0.28)",
    "16": "0 0 2px rgba(0, 0, 0, 0.24), 0 8px 16px rgba(0, 0, 0, 0.28)",
    "28": "0 0 8px rgba(0, 0, 0, 0.24), 0 14px 28px rgba(0, 0, 0, 0.28)",
    "64": "0 0 8px rgba(0, 0, 0, 0.24), 0 32px 64px rgba(0, 0, 0, 0.28)",
    "2Brand": "0 0 2px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.25)",
    "4Brand": "0 0 2px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.25)",
    "8Brand": "0 0 2px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.25)",
    "16Brand": "0 0 2px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.25)",
    "28Brand": "0 0 8px rgba(0, 0, 0, 0.3), 0 14px 28px rgba(0, 0, 0, 0.25)",
    "64Brand": "0 0 8px rgba(0, 0, 0, 0.3), 0 32px 64px rgba(0, 0, 0, 0.25)",
  },
});
