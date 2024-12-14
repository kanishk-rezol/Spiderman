declare module 'react-pdf' {
  import * as React from 'react';

  // Declare the components `Document` and `Page`
  export const Document: React.ComponentType<any>;
  export const Page: React.ComponentType<any>;

  // Declare `pdfjs`
  export const pdfjs: any;
}

// Extend JSX IntrinsicElements for web components
declare namespace JSX {
  interface IntrinsicElements {
    'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      url?: string;
    };
    'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      alt?: string;
      ar?: boolean;
      autoRotate?: boolean;
      cameraControls?: boolean;
    };
  }
}
