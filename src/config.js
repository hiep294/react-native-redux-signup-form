/**
 * config fonts
 */
import React from "react";
import { Container, Root } from 'native-base';

/**
 * config redux
 */
// set Provider
import { Provider } from 'react-redux';
// set store
import { createStore } from 'redux';
import rootReducer from './rootReducer'
const store = createStore(rootReducer)

export default function Configuration({ children }) {
  return (
    <Provider store={store}>
      <Root>
        <Container>
          {children}
        </Container>
      </Root>
    </Provider>
  );
}

