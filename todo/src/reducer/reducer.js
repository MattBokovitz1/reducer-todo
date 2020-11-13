import moment from "moment";

let initialState = {
  tasks: [
    {
      item: "Learn about reducers",
      completed: false,
      date_posted: moment().calendar(),
      id: 1,
    },
    {
      item: "laundry",
      completed: false,
      date_posted: moment().calendar(),
      id: 2,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        tasks: [
          ...state.tasks,
          {
            item: action.payload,
            id: Date.now(),
            completed: false,
            date_posted: moment().calendar(),
          },
        ],
      };

    case "CLEAR":
      return {
        tasks: state.tasks.filter((task) => {
          return task.completed === false;
        }),
      };
    default:
      return state;
  }
}

export default { reducer, initialState };
