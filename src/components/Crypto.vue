<template>
    <div class="content">
        <h1>Crypto Assets</h1>
        <table>
            <thead>
                <tr>
                   <th>Crypto</th>
                   <th>Symbol</th> 
                   <th>Price</th> 
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in cryptoList" :key="index" :class="index % 2 == 0 ? 'grey' : 'white'">
                    <td>{{ item.name }}</td>
                    <td>{{ item.symbol }}</td>
                    <td>{{ item.priceUsd }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { getCryptoAssetsApi } from '../api/cryptoService'
    export default {
        data() {
            return {
                cryptoList: []
            }
        },
        methods: {
            async getCryptoAssets() {
                const resObject = getCryptoAssetsApi()
                const obj = await resObject
                this.cryptoList = obj.data.data
            }
        },
        mounted() {
            this.getCryptoAssets()
        },
        created() {
            // this.getCryptoAssets()
        }
    }
</script>

<style scoped>
td {
    text-align: start;
    width: 10rem;
}
th {
    text-align: start;
}
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.grey {
    background-color: lightgrey;
}
.white {
    background-color: white;
}
</style>