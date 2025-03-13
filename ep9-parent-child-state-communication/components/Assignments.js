import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';
export default {
  components: { AssignmentList, AssignmentCreate },

  template: `
   
    <section class="space-y-6">
    <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
    <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

    <assignment-create @add="add"></assignment-create>

    
    </section>
    `,

  data() {
    return {
      assignments: [
        { name: 'Finish project', completed: false, id: 1 },
        { name: 'Read chapter 4', completed: false, id: 2 },
        { name: 'Turn in homework', completed: false, id: 3 },
      ],
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
    add(name) {
      this.assignments.push({
        name: name,
        completed: false,
        id: this.assignments.length + 1,
      });
    },
  },
};
