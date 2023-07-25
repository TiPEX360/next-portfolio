import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Major_Mono_Display, Nixie_One } from "next/font/google";

export const fontNixieOne: NextFontWithVariable = Nixie_One({variable: '--font-nixie-one', weight: "400", subsets: ["latin"]})
export const fontMajorMonoDisplay: NextFontWithVariable = Major_Mono_Display({variable: '--font-major-mono-display', weight: "400", subsets: ["latin"]})