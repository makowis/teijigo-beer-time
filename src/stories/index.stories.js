import { storiesOf } from "@storybook/vue";
import TbtBlink from "@/components/atoms/TbtBlink.vue";

storiesOf("TbtBlink", module).add("default", () => ({
  components: { TbtBlink },
  template: '<tbt-blink>test</tbt-blink>'
}));
