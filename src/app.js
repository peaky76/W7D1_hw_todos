import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      toDoList: [
        { description: "Clean bathroom", priority: "low", isDone: false },
        { description: "Have a few beers", priority: "high", isDone: false },
        { description: "Change baby's nappy", priority: "low", isDone: false },
      ],
      newItem: "",
    },
    methods: {
      addNewItem: function () {
        this.toDoList.push({
          description: this.newItem,
          priority: "low",
          isDone: false,
        });
        this.newItem = "";
      },

      markDone: function (index) {
        this.toDoList[index].isDone = !this.toDoList[index].isDone;
      },
    },
  });
});
