type FuncType = {
  msToMinAndSec: (args: number) => string;
  numberWithCommas: (args: number) => string;
}

export const FUNC: FuncType = {
  msToMinAndSec: (millis: number): string => {
    const minutes = Math.floor(millis / 60000);
    const seconds = Math.round((millis % 60000) / 1000);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  },

  numberWithCommas: (x: number): string => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};
