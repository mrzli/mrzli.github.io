import { AppContextData } from '../../app-setup/app-context';
import { AppGlobals } from '../../app-setup/app-globals';
import { AppEnv } from '../../app-setup/app-env';

export function createTestAppContextData(): AppContextData {
  return {
    globals: createTestAppGlobals(),
  };
}

export function createTestAppGlobals(): AppGlobals {
  return {
    env: createTestAppEnv(),
  };
}

export function createTestAppEnv(): AppEnv {
  return {
    BASE_URL: '',
    NODE_ENV: '',
    PUBLIC_URL: '',
    REACT_APP_BASE_URL: '',
  };
}
