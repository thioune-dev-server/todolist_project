<template>
    <div> 
        <Message/>     
        <Sidebar v-on:change-list="changeList($event)"/>
        <Todos  :id="listId"/>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import Todos from '../components/Todos'
import Message from '../components/Message'

export default {
    name: 'Home',
    data() {
        return {
            listId: 0
        }
    },
    components: {
        Sidebar,
        Todos,
        Message
    },
    methods: {
        changeList(id) {
            this.listId = id
        }
    },
    computed: {
        
    }

}
</script>

<style scoped>


</style>
