// @ts-ignore TS being TS
import codegenNativeComponentUntyped from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type { ViewProps, HostComponent } from 'react-native';

// eslint-disable-next-line @typescript-eslint/ban-types
const codegenNativeComponent = codegenNativeComponentUntyped as <T extends {}>(
  name: string
) => HostComponent<T>;

interface NativeProps extends ViewProps {}

export default codegenNativeComponent<NativeProps>('RNGestureHandlerRootView');
