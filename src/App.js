import React from 'react';
import 'todomvc-app-css/index.css'
import 'todomvc-common/base.css'
import TodoApp from './TodoApp';
import store from './store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default App;
