import React, { useContext } from 'react';
import { Text as RNText } from 'react-native';
import { ThemeContext, Theme } from '../theme';

const HEADING = 'heading';
const SUB_HEADING = 'subheading';
const BODY = 'body';
const LABEL = 'label';
const CAPTION = 'caption';

type TextType = 'heading' | 'subheading' | 'body' | 'label' | 'caption';

type TextProps = {
  /**
   * @type prop helps style Text with pre-defined styling defined in
   * typography.js. Possible value of type can be:
   * 1. 'heading'
   * 2. 'subheading'
   * 3. 'body'
   * 4. 'label'
   * 5. 'caption'
   *
   * default value: 'body'
   */
  type?: TextType,
  /**
   * @bold if enabled will use bold version of the
   * type mentioned.
   */
  bold?: boolean,
  /**
   * @style prop will overwrite the predefined styling for Text defined by
   * @type prop
   */
  style?: any,
};

const Text: React.SFC<TextProps> = ({
  type = 'body',
  bold = false,
  style = {},
  ...props
}) => {
  const theme = useContext(ThemeContext);
  return (
    <RNText
      style={[styles.text(type, bold, theme), style]}
      {...props}
    />
  );
};

const getTextStyle = (type: TextType, bold: boolean, theme: Theme) => {
  let style = '';
  switch (type) {
    case HEADING:
      style = 'headingText';
      break;
    case SUB_HEADING:
      style = 'subheadingText';
      break;
    case LABEL:
      style = 'labelText';
      break;
    case CAPTION:
      style = 'captionText';
      break;
    default:
      style = 'bodyText';
  }
  if (bold) {
    style += 'Bold';
  }
  return theme.typography[style];
};

const styles = {
  text: (type: TextType, bold: boolean, theme: Theme) => ({
    ...getTextStyle(type, bold, theme),
  }),
};

export default Text;
