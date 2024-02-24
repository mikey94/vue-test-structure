<template>
    <div>
        <h1>Counter with Vuex</h1>
        <div>{{ counter }}</div>
        <button @click="increment">Increment Counter</button>
        <button @click="decrement">Decrement Counter</button>
        <h2>Modified Value</h2>
        <div>{{ modifiedValue }}</div>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import store from '../store/store';

    export default {
        setup() {
            const counter = computed(() => {
                return store.state.counter
            })
            const modifiedValue = computed(() => {
                return store.getters.modifiedCounterValue
            })
            return {
                counter,
                modifiedValue
            };
        },
        methods: {
            increment() {
                store.commit('increment', { value: 1 })
            },
            decrement() {
                store.commit('decrement', { value: 1 })
            }
        }
    };
</script>