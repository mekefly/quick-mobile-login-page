import { defineComponent } from "vue";
export default defineComponent({
  props: { value: { type: String, default: "" } },
  setup(props) {
    return () => <input type="button" value={props.value} />;
  },
});
