import colors, { Colors } from './colors';
import spacing, { Spacing } from './spacing';
import dimens from './dimens';
import typography, { Typography } from './typography';

export type Theme = {
  colors: Colors,
  dimens: any,
  spacing: Spacing,
  typography: Typography,
};

const theme: Theme = {
  colors,
  dimens,
  spacing,
  typography,
};

export default theme;
