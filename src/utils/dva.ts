import { create } from 'dva-core';
import { createLogger } from 'redux-logger';

let app;
let store;
let dispatch;

function createApp(options: any) {
  const { models } = options;
  if (process.env.NODE_ENV === 'development') {
    options.onAction = [createLogger()]
  }
  app = create({
    ...options
  });
  // @ts-ignore
  if (!global.registered) models.forEach((model) => app.model(model));
  // @ts-ignore
  global.registered = true;
  app.start();

  store = app._store;
  app.getStore = () => store;

  dispatch = store.dispatch;

  app.dispatch = dispatch;
  return app
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch
  }
}
