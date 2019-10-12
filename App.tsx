import React, { Children } from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import Text from './component/Text';
import { ThemeProvider, theme, Theme } from './theme';

const Toolbar: React.SFC = props => (
  <View style={styles.toolbar(theme)}>
    <Text style={theme.typography.titleText} bold>React Native Theme</Text>
  </View>
)

const Button: React.SFC = props => (
  <View style={styles.button(theme)}>
    <Text style={styles.buttonText(theme)}>{props.children}</Text>
  </View>
)

const App: React.SFC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={theme.colors.primaryDark} barStyle="dark-content" />
      <Toolbar />
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container(theme)}>
          <View style={styles.section(theme)}>
            <Text type="heading">This is a Heading</Text>
            <Text type="subheading">This is a SubHeading</Text>
            <Text type="body">This is a Body</Text>
            <Text>Default is a Body</Text>
            <Text type="label">This is a label</Text>
            <Text type="caption">This is a caption</Text>
          </View>
          <View style={styles.section(theme)}>
            <Text type="heading" bold>This is a Bold Heading</Text>
            <Text type="subheading" bold>This is a Bold SubHeading</Text>
            <Text type="body" bold>This is a Bold Body</Text>
            <Text type="label" bold>This is a Bold label</Text>
            <Text type="caption" bold>This is a Bold caption</Text>
          </View>
          <View style={styles.section(theme)}>
            <Text style={styles.successText(theme)}>This is a custom success Text</Text>
          </View>
          <View style={styles.section(theme)}>
            <Text style={styles.errorText(theme)}>This is a custom error Text</Text>
          </View>
          <Button>Button with secondary color</Button>
        </SafeAreaView>
      </ScrollView>
    </ThemeProvider>
  );
};

const styles = {
  toolbar: (theme: Theme) => ({
    height: theme.dimens.toolbarHeight,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    paddingLeft: theme.spacing.large,
  }),
  button: (theme: Theme) => ({
    padding: theme.spacing.small,
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
    borderWidth: 1,
    borderColor: theme.colors.secondaryDark,
    borderRadius: theme.dimens.borderRadius,
    marginTop: theme.spacing.large,
  }),
  buttonText: (theme: Theme) => ({
    color: theme.colors.white,
  }),
  container: (theme: Theme) => ({
    flex: 1,
    backgroundColor: theme.colors.background,
  }),
  section: (theme: Theme) => ({
    marginHorizontal: theme.spacing.large,
    marginTop: theme.spacing.large,
    padding: theme.spacing.small,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadisu: theme.dimens.borderRadius,
  }),
  successText: (theme: Theme) => ({
    fontSize: theme.dimens.customFontSize,
    color: theme.colors.success,
  }),
  errorText: (theme: Theme) => ({
    fontSize: theme.dimens.customFontSize,
    color: theme.colors.error,
  }),
};

export default App;
