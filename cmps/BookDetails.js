export default {
  props: ["book"],
  template: `<section class="book-details">
    <h2>{{book.title}}</h2>
    <h3>{{book.price}}</h3>
    <button @click="onClose">X</button>
            
  </section>`,
  data() {
    return {
      message: `asdas`,
    };
  },
  methods: {
    onClose() {
      this.$emit("close");
    },
  },
};
