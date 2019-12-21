<template>
    <div class="flex column gapped-items">
        <form class="flex column gapped-items">
            <div>
                <label for="email">User email: </label>
                <input type="email" id="email" placeholder="Email" v-model="email">
            </div>
                
            <div>
                <label for="password">Password: </label>
                <input type="password" id="password" placeholder="Password" v-model="password">
            </div>
            <button @click="login" class="btn">Login</button>
        </form>
    </div>
    
</template>

<script>

export default {
    name: 'LoginForm',

    data: () => {
        return {
            email: '',
            password: '',
        }
    },

    methods: {
        login() {
            var user = {
                email: this.email,
                password: this.password
            };

            this.$store.dispatch('login', user);
        }
    }
}
</script>


<style >
    .flex {
        display: flex;
    }

    .column {
        flex-direction: row;
    }

    .column {
        flex-direction: column;
    }

    .btn {
        font: inherit;
        text-transform: uppercase;
        width: 25vw;
        height: 5vh;
        align-self: center;
    }
    
    .gapped-items > * {
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    input {
        padding: 5px;
        border-radius: 10px;
    }

    input:focus {
        outline: none;
    }    

</style>