<template>
  <div class="todolist">
    <h1 class="text-4xl text-gray-500">Todos</h1>
    <input placeholder="Ajouter une tâche" v-model="todolistName" @keyup.enter="add"/><br><br>
    <div>
        <ul class="flex justify-center">
            <li class="nav-item" v-for="(todo,id) in Lists[0].todos" v-bind:key="id"> 
                <input type="checkbox" v-model="completTodo"><span class="todo">{{todo.name}}</span>
                <button class="delete" v-on:click="deleteTodo">Supprimer</button>
            </li><br>
        </ul>
    </div>
    <div>
      <ul class="flex justify-center">
        <li>
          <button>Toutes les tâches</button>
        </li>
       <br><li>
          <button>Tâches faites</button>
        </li>
        <br><li>
          <button>Tâches à faire</button>
        </li>        
      </ul>
      <h3>Restantes :</h3>
      <h3>Achevées :</h3>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
    name: "Todos",
    data() {
        return {
            todolistName: ''
        }
    },
    props: ["listId"],
    methods: {
        ...mapActions("todolist", ["createTodo"]),
        mounted() {
            this.createTodo()
        },
        created() {
            this.$store.dispatch('todolist/actions/loadLists')
        },
        add() {
            const data = {
                tokenStored: this.getToken,
                name: this.todolistName,
                completed: 0,
                id: 0
            }
            this.createTodo(data)
            this.todolistName = ''
        }
    },
    computed: {
        ...mapGetters("account", ["getToken"]),
        ...mapState("todolist", ["Lists"]),
    }
}
</script>

<style>

.todolist {
    text-align: center;
}

.todo {
    font-size: 30px;
}

</style>