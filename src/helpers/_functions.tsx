import { ITab, IHighlighterStyle } from '../helpers/interfaces';
type TabsType = Array<ITab>;

interface IFunc {
  msToMinAndSec: (args: number) => string;
  numberWithCommas: (args: number) => string;
  calcTransform: (tabs: TabsType, activeTab: ITab) => number;
  calcHighlighterStyle: (tabs: TabsType, activeTab: ITab) => IHighlighterStyle;
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
  }
};
