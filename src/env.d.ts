interface Window {
  theme?: {
    themeValue: string;
    setPreference: () => void;
    reflectPreference: () => void;
    getTheme: () => string;
    setTheme: (val: string) => void;
  };
}

declare module "@citation-js/core" {
  export class Cite {
    constructor(data: string | object | any[], options?: any);
    get(): any[];
    format(format: string, options?: any): string | any;
  }
}

declare module "@citation-js/plugin-bibtex" {
  // Plugin auto-registers on import
}

declare module "@citation-js/plugin-csl" {
  // Plugin auto-registers on import
}
