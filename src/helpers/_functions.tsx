import { ITab, IHighlighterStyle } from '../helpers/interfaces';
type TabsType = Array<ITab>;

interface IFunc {
  msToMinAndSec: (args: number) => string;
  numberWithCommas: (args: number) => string;
  calcTransform: (tabs: TabsType, activeTab: ITab) => number;
  calcHighlighterStyle: (tabs: TabsType, activeTab: ITab) => IHighlighterStyle;
  getElementHeight: (className: string) => number;
  resizeElement: (className: string, newHeight: number) => void;
}

export const FUNC: IFunc = {
  msToMinAndSec: (millis: number): string => {
    const minutes = Math.floor(millis / 60000);
    const seconds = Math.round((millis % 60000) / 1000);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  },

  numberWithCommas: (x: number): string => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },

  calcTransform: (tabs: TabsType, activeTab: ITab): number => {
    const tabWidth = 100 / tabs.length;
    const tabIndex = tabs.indexOf(activeTab);

    return tabWidth * tabIndex * tabs.length;
  },

  calcHighlighterStyle: (tabs: TabsType, activeTab: ITab): IHighlighterStyle => {
    return {
      width: `calc(100% / ${tabs.length}`,
      transform: `translate(${FUNC.calcTransform(tabs, activeTab)}%, 0)`
    };
  },

  getElementHeight: (className: string): number => {
    const element = document.querySelector<HTMLElement>(className);

    if (element === null) {
      throw new Error(`Element is null, check the Class name ${className}`);
    }

    return element.getBoundingClientRect().height;
  },

  resizeElement: (className: string, newHeight: number): void => {
    const navigationEl = document.querySelector<HTMLElement>(className);

    if (navigationEl === null) {
      throw new Error(`Element is null, check the Class name ${className}`);
    }

    navigationEl.style.height = `${newHeight}px`;
  }
};

// const resizeElement = (className: string, newHeight: number): void => {
//   const navigationEl = document.querySelector<HTMLElement>(className);

//   if (navigationEl === null) {
//     throw new Error(`Element is null, check the Class name ${className}`);
//   }

//   navigationEl.style.height = `${newHeight}px`;
// }

