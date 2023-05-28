declare module 'codewonders-helpers';

declare module 'next-page-transitions' {
    import React from 'react';

    export const PageTransition: React.FC<React.PropsWithChildren<{
      timeout?: number;
      classNames?: string;
      loadingDelay?: number;
    }>>;
}