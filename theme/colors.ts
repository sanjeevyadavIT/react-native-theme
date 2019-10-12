import { Colors } from "react-native/Libraries/NewAppScreen";

export type Colors = {
  /**
   * ========================= Primary color : (Brand color) =========================
   * primaryDark: color for the status bar and for dark tint
   * primary: to be used as a background color for appbar(toolbar)
   * appBarTintColor: to be used for appbar title text, appbar icons color and for back button
   *
   * Example: If primary color is dark, make appbarTintColor light
   */
  primaryDark: string,
  primary: string,
  appbarTint: string,
  /**
   * ========================= Secondary color =========================
   * secondaryLight: to be used for hover state
   * secondary: to be used as default button, checkbox, radio button and other component color
   * secondaryDark: to be used for active state
   */
  secondaryLight: string,
  secondary: string,
  secondaryDark: string,
  /**
   * The screen background.
   */
  background: string,
  /**
   * To be used as a default background for all components, like Card, List
   */
  surface: string,
  /**
   * Use it for card border
   */
  border: string,
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: string,
  /**
   * To be used for heading, subheading, label text
   */
  titleText: string,
  /**
   * The default color of text in many components.
   * To be used for normal text like paragraph
   */
  bodyText: string,
  /**
   * To be used for hint text component
   */
  captionText: string,
  /**
   * Success messages and icons.
   */
  success: string,
  /**
   * Error messages and icons.
   */
  error: string,
  // grey scale
  black: string,
  white: string,
};

const colors: Colors = {
  primaryDark: '#0D5DC8',
  primary: '#1C6CD1',
  appbarTint: '#fff',
  secondaryLight: '#53c3f8',
  secondary: '#1CB0F6',
  secondaryDark: '#0999dd',
  background: '#F7F6F4',
  surface: '#fff',
  border: '#d9d9d9',
  transparent: 'transparent',
  titleText: '#595959',
  bodyText: '#737373',
  captionText: '#8c8c8c',
  success: '#52c41a',
  error: '#ff190c',
  black: '#000000',
  white: '#ffffff',
};

export default colors;
