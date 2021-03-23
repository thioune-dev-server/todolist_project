<template>
  <div class="container-fluid">
      <div class="row">
          <div class="col-md-2 bg-light d-none d-md-block sidebar">
              <div class="left-sidebar">
                <h1>Todolist</h1>
                <br><input type="text" class="TodoList" placeholder="Ajouter une Todolist" v-model="todoListName" @keyup.enter="add"><br><br>
                <ul class="nav flex-column">
                    <li class="nav-item" v-for="(list,id) in Lists" v-bind:key="id"> 
                         <br><button @click="updateList(id)">{{list.name}} </button>
                    </li><br>
                </ul>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
    name: "Sidebar",
    data() {
        return {
            todoListName: '',
        }
    },
    methods: {
        ...mapActions("todolist", ["addTodolist"]),
        mounted() {
            this.addTodolist()
        },
        add() {
            const data = {
                tokenStored: this.getToken,
                name: this.todoListName,
            }
            this.addTodolist(data)
            this.todoListName = null
        },
        created() {
            this.$store.dispatch('todolist/actions/loadLists')
        },
        updateList(id) {
            this.$emit("change-list", id)
        }
    },
    computed: {
        ...mapGetters("account", ["getToken"]),
        ...mapState("todolist", ["Lists"])
    }
}
</script>

<style>

.sidebar {
    position: fixed;
    top: 56px;
    left: 0;
    bottom: 0; 
    z-index: 100;
    padding: 70px 0 0 10px;
    border-right: 1px solid #d3d3d3;
}

</style>