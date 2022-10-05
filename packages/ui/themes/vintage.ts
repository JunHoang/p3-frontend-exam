import { Theme, merge } from "theme-ui"
import base from "./base"

// Use this gradient
// linear-gradient(30deg, rgba(231,152,89,0.95) 20%, rgba(214,83,206,1) 80%)

const vitange: Theme = merge(base, {
    fonts: {
        body: '"Dancing Script", serif',
        heading: '"Silkscreen", cursive',
        monospace: 'Gemunu Libre, monospace',
    },
    colors: {
        text: "black",
        background: "#2b2d2f",
        secondary: "#e8d1c5"
    },
    buttons: {
        primary: {
            fontFamily: "monospace",
            color: "white",
            borderRadius: "1",
            textTransform: "uppercase",
            bg: "#6e78ff",
            paddingX: '10px',
            transition: "background 100ms ease-in-out",
            "&:hover": {
                bg: "#a0c4ff",
                color: "black"
            },
        },
        secondary: {
            color: "purple",
            bg: "purple",
            "&:hover": {
                color: "purple"
            }
        }
    },
    cards: {
        primary: {
            background: "linear-gradient(30deg, rgba(255,102,99,1) 0%, rgba(254,177,68,1) 18%, rgba(253,253,151,1) 35%, rgba(158,224,158,1) 51%, rgba(125,209,242,1) 67%, rgba(204,153,201,1) 89%)",
            "&:hover": {
                background: "linear-gradient(330deg, rgba(255,102,99,1) 0%, rgba(254,177,68,1) 18%, rgba(253,253,151,1) 35%, rgba(158,224,158,1) 51%, rgba(125,209,242,1) 67%, rgba(204,153,201,1) 89%)",
                color: "black"
            }
        },
    },
    forms: {
        input: {
            fontFamily: "body",
            borderRadius: 1,
            backgroundColor: "secondary",
            border: "transparent",
            color: "black",
            outlineColor: "secondary",
            fontSize: 3,
        }
    },
    text: {
        heading: {
            letterSpacing: "1px"
        }
    }
})

export default vitange
