import AssignmentList from './AssignmentList.js';
export default {
  components: { AssignmentList },

  template: `
   
    <section class="space-y-6">
    <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
    <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

    <form @submit.prevent="add">
     <div class="border border-gray-600 text-black">
     <input v-model="newAssignment" placeholder="New Assignment..........." class="p-2"/>
     <button type="submit" class="bg-white p-2 border-l">Add</button>
     </div>
    </form>
    </section>
    `,

  data() {
    return {
      assignments: [
        { name: 'Finish project', completed: false, id: 1 },
        { name: 'Read chapter 4', completed: false, id: 2 },
        { name: 'Turn in homework', completed: false, id: 3 },
      ],

      newAssignment: '',
    };
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(
          (assignment) => !assignment.completed
        ),
        completed: this.assignments.filter(
          (assignment) => assignment.completed
        ),
        oldest: this.assignments.sort((a, b) => a.id - b.id),
      };
    },
  },

  methods: {
    add() {
      this.assignments.push({
        name: this.newAssignment,
        completed: false,
        id: this.assignments.length + 1,
      });
      this.newAssignment = '';
    },
  },
};
