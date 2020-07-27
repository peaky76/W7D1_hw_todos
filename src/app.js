import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      toDoList: [
        { description: "Clean bathroom", priority: "low", isDone: true },
        { description: "Have a few beers", priority: "high", isDone: false },
        { description: "Change baby's nappy", priority: "low", isDone: false },
      ],
      newItem: "",
      priority: "",
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
