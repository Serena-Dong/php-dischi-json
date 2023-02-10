const { createApp } = Vue;

const apiUri = 'http://127.0.0.1:5500/index.php';

const app = createApp({
    data() {
        return {
            discs: []
        }
    },
    methods: {
        fetchApi(endpoint, target) {
            axios.get(endpoint).then(res => { this[target] = res.data });
        }
    },
    created() {
        this.fetchApi(apiUri, 'discs')
    }

});

app.mount('#root');
