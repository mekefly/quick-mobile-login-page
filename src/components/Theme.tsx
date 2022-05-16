import { em, ms, px, rgb, vw } from "@wormery/wtsc";
import { defineComponent } from "vue";
import { the, wtsc } from "../wtsc/wtsc";
import Login from "./Login";

let timout: any = null;
function wait(ms: number) {
  return new Promise((resolve, reject) => {
    clearTimeout(timout);
    timout = setTimeout(() => {
      console.log("Done waiting");
      resolve(ms);
    }, ms);
  });
}
export default defineComponent({
  name: "Theme",
  props: { isShow: { type: Boolean, default: false } },
  setup(props) {
    const w = wtsc.scoped("theme");
    const colors: { [key: string]: typeof wtsc.themeList[string][string] } = {};
    const themeModes = Object.values(wtsc.themeList);
    themeModes.forEach((theme) => {
      Object.keys(theme).forEach(
        (themeName) => (colors[themeName] = theme[themeName])
      );
    });

    return () => {
      return (
        <ul
          style={w.add
            .position("fixed")
            .add.bottom(px(0))
            .add.width(vw(100))
            .add.background(rgb(255, 255, 255))
            .add.padding(px(10), px(0), px(0), px(0))
            .add.listStyle("none")

            .if(!props.isShow, () => w.add.transform(`translateY(100%)`))
            .add.borderRadius(px(5), px(10), px(0), px(0))
            .add.transition(["all", ms(the.duration.out(w)), "ease"])

            .out()}
        >
          {Object.keys(colors).map((key) => {
            const color = colors[key];
            return (
              <li
                onClick={async () => {
                  wtsc
                    .global()
                    .add.transition("all", ms(wtsc.the.duration.out(w)), "ease")
                    .selector("*")
                    .out();
                  await wait(0);

                  wtsc.setTheme(key);

                  await wait(wtsc.the.duration.out(w));

                  wtsc.global().add.transition("none").selector("*").out();
                }}
                style={w.add
                  .padding(px(10))
                  .add.backgroundColor(color.color1)
                  .add.color(color.color2)
                  .add.borderTop(px(1), "solid", the.color2.out(w))
                  .add.fontSize(em(1.5))
                  .add.textAlign("center")
                  .out()}
              >
                {key}
              </li>
            );
          })}
        </ul>
      );
    };
  },
});
