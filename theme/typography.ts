import colors from './colors';

type textprops = {
  fontFamily: string,
  color: string,
  fontSize: number,
  fontStyle: "normal" | "italic",
  fontWeight: number | string,
};

export type Typography = {
  /**
   * Title is reserved for the title of a screen(Toolbar)
   * and the titles of Modal dialogs.
   */
  titleText: textprops,
  titleTextBold: textprops,
  /**
   * Use the Heading style for card titles.
   */
  headingText: textprops,
  headingTextBold: textprops,
  /**
   * Use the Subheading style to denote new sections within cards.
   */
  subheadingText: textprops,
  subheadingTextBold: textprops,
  /**
   * The Body text style is used widely throughout the UI.
   * Any text that isn’t a title, heading, subheading, label
   * or caption would generally use the Body style.
   */
  bodyText: textprops,
  bodyTextBold: textprops,
  /**
   * Use labels with form field and input elements to
   * signify the element’s function to the user.
   */
  labelText: textprops,
  labelTextBold: textprops,
  /**
   * Use the Caption style for help/hint text.
   * It’s used with some form fields which require a description,
   * and can also be used stand-alone within a card when necessary.
   */
  captionText: textprops,
  captionTextBold: textprops,
};

const fontFamily = 'sans-serif';
const fontWeightRegular = 'normal';
const fontWeightBold = 'bold';

const appbarTitleTextColor = colors.appbarTint;
const titleTextColor = colors.titleText;
const bodyTextColor = colors.bodyText;
const captionTextColor = colors.captionText;

const typography: Typography = {
  titleText: {
    fontFamily,
    color: appbarTitleTextColor,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  },
  titleTextBold: {
    fontFamily,
    color: appbarTitleTextColor,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  },
  headingText: {
    fontFamily,
    color: titleTextColor,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  },
  headingTextBold: {
    fontFamily,
    color: titleTextColor,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  },
  subheadingText: {
    fontFamily,
    color: titleTextColor,
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  },
  subheadingTextBold: {
    fontFamily,
    color: titleTextColor,
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  },
  bodyText: {
    fontFamily,
    color: bodyTextColor,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  },
  bodyTextBold: {
    fontFamily,
    color: bodyTextColor,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  },
  labelText: {
    fontFamily,
    color: titleTextColor,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  },
  labelTextBold: {
    fontFamily,
    color: titleTextColor,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  },
  captionText: {
    fontFamily,
    color: captionTextColor,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  },
  captionTextBold: {
    fontFamily,
    color: captionTextColor,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  },
};

export default typography;
