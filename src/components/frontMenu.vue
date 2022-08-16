<template>
    <div>This is Mobile</div>
    <input type="number" placeholder="table" v-model="this.$store.state.toKitchen.table_id">
    <input type="number" placeholder="menu id" v-model="this.$store.state.toKitchen.menu_id">
    <input type="number" placeholder="equity" v-model="this.$store.state.toKitchen.equity">
    <div>
        <button @click="testfood()">Click to send to kitchen Table 1</button>
        <button>Click to send to kitchen Table 2</button>
    </div>
</template>

<script>
export default {
    name: 'frontMenu',
    methods:{
    },
    created: function(){
        console.log("Sending an order...")
        this.$store.state.connection = new WebSocket("ws://localhost:6666")

        this.$store.state.connection.onmessage =()=>{
            console.log("Succeed Sending")
        }
    }
}
</script>

<style>

</style>