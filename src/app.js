import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      toDoList: [
        { description: "Clean bathroom", priority: "low" },
        { description: "Have a few beers", priority: "high" },
        { description: "Change baby's nappy", priority: "low" },
      ],
      newItem: "",
    },
    methods: {
      addNewItem: function () {
        this.toDoList.push({
          description: this.newItem,
          priority: "low",
        });
        this.newItem = "";
      },
    },
  });
});
