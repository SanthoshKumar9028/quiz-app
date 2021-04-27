import { ReactNode } from "react";
import { Provider } from "react-redux";
import { AnyAction, Store, createStore } from "@reduxjs/toolkit";

import { render } from "@testing-library/react";

import { reducer } from "../redux";

function renderWithRedux(
  ui: ReactNode,
  {
    initialState,
    store = createStore(reducer, initialState),
  }: { initialState?: any; store?: Store<any, AnyAction> } = {}
) {
  return { ...render(<Provider store={store}> {ui} </Provider>), store };
}

export { renderWithRedux };
