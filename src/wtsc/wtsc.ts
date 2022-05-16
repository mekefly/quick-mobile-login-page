import { defTypeWTSC, defWTSC, ms, rgb, setConfig } from "@wormery/wtsc";
import { ref } from "vue";
setConfig({
  vueRef: ref,
  defaultIsReactive: true,
  warn: { all: true, autoInput: false },
});

export const wtsc = defTypeWTSC({
  defThemeKeys(p) {
    return {
      color1: p(rgb(100, 100, 255)),
      color2: p(rgb(255, 255, 255)),
      duration: p(600),
    };
  },
  themeList: {
    blue: {
      blue: {
        color1: rgb(100, 100, 255),
        color2: rgb(255, 255, 255),
        duration: 600,
      },
      DarkBlue: {
        color1: rgb(19, 15, 64),
        color2: rgb(223, 228, 234),
        duration: 600,
      },
    },
    dark: {
      dark: {
        color1: rgb(52, 73, 94),
        color2: rgb(206, 214, 224),
        duration: 600,
      },
    },
    warm: {
      pink: {
        color1: rgb(255, 192, 203),
        color2: rgb(47, 53, 66),
        duration: 600,
      },
    },
    bright: {
      白蓝: {
        color1: rgb(241, 242, 246),
        color2: rgb(52, 31, 151),
        duration: 600,
      },
      白灰: {
        color1: rgb(241, 242, 246),
        color2: rgb(83, 92, 104),
        duration: 600,
      },
      白红: {
        color1: rgb(241, 242, 246),
        color2: rgb(229, 80, 57),
        duration: 600,
      },
    },
  },
});
export const { the } = wtsc;
// wtsc.setTheme("dark");
