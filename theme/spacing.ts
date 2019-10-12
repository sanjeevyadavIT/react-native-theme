/**
 * NOTE:
 *
 * Spacing should be consistent and whitespace thought of as a first class technique up
 * there with color and typefaces.
 *
 * To scale or shrink overall spacing, change @param baseSpacing value.
 */
export type Spacing = {
  tiny: number,
  small: number,
  medium: number,
  large: number,
};

const baseSpacing: number = 10;

const spacing: Spacing = {
  tiny: baseSpacing * 0.4,
  small: baseSpacing * 0.8,
  medium: baseSpacing * 1.2,
  large: baseSpacing * 1.6,
};

export default spacing;
