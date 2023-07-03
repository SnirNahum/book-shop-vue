export default {
  template: `
        <input v-model="filterBy.txt" type="text" @input="onSetFilterBy" placeholder="Search"/>
    `,
  data() {
    return {
      filterBy: {
        txt: "",
      },
    };
  },
  computed: {
    onSetFilterBy() {
      this.$emit("filter", this.filterBy);
    },
  },
};
