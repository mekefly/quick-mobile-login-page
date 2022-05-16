import { ms, PE, px, s } from "@wormery/wtsc";
import { defineComponent } from "vue";
import { the, wtsc } from "../wtsc/wtsc";
import LoginCheckbox from "./LoginCheckbox";
import LoginSubmit from "./LoginSubmit";
import { stateProps } from "./LoginTabs";
import LoginTextField from "./LoginTextField";
export default defineComponent({
  name: "LoginFrom",
  props: { ...stateProps },
  setup(props) {
    const w = wtsc.scoped("loginFrom");
    return () => {
      const isSigin = props.state == "sigin";
      const isSigup = props.state == "sigup";
      const fromDivStyle = w.add
        .display("flex")
        .add.justifyContent("space-between")
        .add.padding(px(10))
        .add.transition("all", ms(the.duration.out(w)), "ease")
        .out();

      return (
        <form>
          <div
            style={[
              fromDivStyle,
              w
                .if(isSigin, () =>
                  w.add
                    .transform(`scale(0.8)`)
                    .add.opacity(0)
                    .add.pointerEvents("none")
                )
                .out(),
            ]}
          >
            <LoginTextField label="First name" icon="user"></LoginTextField>
          </div>
          <div
            style={[
              fromDivStyle,
              w
                .if(isSigin, () =>
                  w.add
                    .transform(`scale(0.8)`)
                    .add.opacity(0)
                    .add.pointerEvents("none")
                )
                .out(),
            ]}
          >
            <LoginTextField label="Last name" icon="user"></LoginTextField>
          </div>
          <div
            style={[
              fromDivStyle,
              w.if(isSigin, () => w.add.transform(`translateY(-75%)`)).out(),
            ]}
          >
            <LoginTextField
              label="Email Address"
              icon="envelope"
            ></LoginTextField>
          </div>
          <div
            style={[
              fromDivStyle,
              w.if(isSigin, () => w.add.transform(`translateY(-50%)`)).out(),
            ]}
          >
            <LoginTextField label="Enter Password" icon="key"></LoginTextField>
          </div>
          <div
            style={[
              fromDivStyle,
              w
                .if(isSigin, () =>
                  w.add
                    .transform(`scale(0.8)`)
                    .add.opacity(0)
                    .add.pointerEvents("none")
                )
                .out(),
            ]}
          >
            <LoginTextField
              label="Again Enter Password"
              icon="lock"
            ></LoginTextField>
          </div>
          <div
            style={[
              fromDivStyle,
              w.if(isSigin, () => w.add.transform(`translateY(-200%)`)).out(),
            ]}
          >
            <LoginCheckbox label="Remember Me" />
            <label>Forget password</label>
          </div>
          <div style={fromDivStyle}>
            <LoginSubmit state={props.state}></LoginSubmit>
          </div>
        </form>
      );
    };
  },
});
