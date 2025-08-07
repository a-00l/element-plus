import { defineComponent } from "vue";

export default defineComponent({
  name: 'VNodeRender',
  props: {
    message: {
      type: [String, Object],
      default: ''
    }
  },
  setup(props) {
    return () => props.message
  }
})
