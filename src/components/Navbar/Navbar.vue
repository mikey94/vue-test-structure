<template>
    <nav class="container">
        <img class="logo" alt="Vue logo" src="../../assets/buwa.png">
        <div class="contentWrapper">
            <div class="linkWrapper" v-for="(link, index) in links" :key="index">
                <p @click.prevent="onSelected(index)"  class="link" :class="{ active: hoverSelect === index }" @mouseenter="funcHoverSelect(index)" @mouseleave="funcHoverSelect(null)">{{link}}</p>
            </div>
        </div>
    </nav>
</template>


<script>
export default {
    props: ['onSelected'],
    data() {
        return {
            hoverSelect : null,
            title: 'VUE TEST',
            links: ['Counter', 'Crypto']
        }
    },
    methods: {
        funcHoverSelect(value) {
            this.hoverSelect = value;
        }
    }
}
</script>

<style scoped src="@/components/Navbar/Navbar.css">
    
</style>