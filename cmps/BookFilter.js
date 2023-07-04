export default {
  emits: ["filter"],
  template: `
    <input 
      v-model="filterBy.txt" 
      type="text" 
      placeholder="Search"
    />
    <input 
      v-model.number="filterBy.price" 
      type="number" 
      placeholder="filter by price"
    />
  `,
  data() {
    return {
      filterBy: {
        txt: "",
      },
    };
  },
  watch: {
    filterBy: {
      handler() {
        this.$emit("filter", this.filterBy);
      },
      deep: true,
    },
  },
};
