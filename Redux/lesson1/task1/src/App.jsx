import React from 'react';

import ThemedButton from './ThemedButton.jsx';
import { themes, ThemeContext } from './themes-context.js';

class App extends React.Component {
  state = {
    theme: themes.light,
  };

  // eslint-disable-next-line class-methods-use-this
  toggleTheme = () => {
    const newTheme = this.state.theme === themes.dark ? themes.light : themes.dark;
    this.setState({
      theme: newTheme,
    });
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemedButton onClick={this.toggleTheme}>Dynamic Theme</ThemedButton>

          <ThemedButton onClick={this.toggleTheme}>Default Theme</ThemedButton>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
