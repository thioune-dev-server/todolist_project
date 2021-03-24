<template>
  <div class="todolist" v-show="this.getToken!=null">
    <h1 class="text-4xl text-gray-500">Todos</h1>
    <input placeholder="Ajouter une tâche" v-model="todolistName" @keyup.enter="add"/><br><br>
    <div>
        <ul class="flex justify-center">
            <li class="nav-item" v-for="(todo,id) in Lists[0].todos" v-bind:key="id"> 
                <input type="checkbox"><span class="todo">{{todo.name}} </span> 
                <button class="delete" v-on:click="del(id)">Supprimer</button>
            </li><br>
        </ul>
    </div>
    <div class="flex justify-center">
        <button>Toutes les tâches</button>
        <button>Tâches faites</button>
        <button>Tâches à faire</button>
        <br><br>
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
        ...mapActions("todolist", ["createTodo","deleteTodo"]),
        mounted() {
            this.createTodo()
            this.deleteTodo()
        },
        created() {
            this.$store.dispatch('todolist/actions/loadLists')
        },
        add() {
            const data = {
                tokenStored: this.getToken,
                name: this.todolistName,
                completed: 0,
                id: 1
            }
            this.createTodo(data)
            this.todolistName = ''
        },
        del(todoId) {
            const data = {
                tokenStored: this.getToken,
                id: todoId
            }
            this.deleteTodo(data)
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