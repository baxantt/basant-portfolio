// Allow importing React components written as .jsx without TypeScript errors.
// This gives a safe but permissive typing (ComponentType<any>) so the
// compiler/editor stops complaining while you gradually migrate to TSX.
import type { ComponentType } from 'react';

declare module '*.jsx' {
  const component: ComponentType<any>;
  export default component;
}

declare module '*.js' {
  const value: any;
  export default value;
}
