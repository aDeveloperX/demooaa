export const Colours = {
  lightGreen: "rgb(228, 239, 220)",
  midGreen: "rgb(126,171,85)",
  darkGreen: "rgb(94,129,63)",
  purple: "rgb(104, 52, 154)",
};

export interface ISectionTheme {
  headerColour: string;
  subHeaderColour: string;
  contentColour: string;
  textColour: string;
}

export const SectionColours = {
  green: {
    headerColour: Colours.darkGreen,
    subHeaderColour: Colours.darkGreen,
    contentColour: Colours.lightGreen,
    textColour: Colours.purple,
  } as ISectionTheme,
};
