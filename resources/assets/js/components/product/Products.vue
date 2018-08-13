<template>

        <div class="row">
            <my-product v-for="product in products"
                        v-bind:data="products"
                        v-bind:key="products.id" :product="product"
                        :authenticatedUser="authenticateUser"


            >
            </my-product>
        </div>

</template>

<script>
    import Product from './Product';

    export default {
        data(){
            return {
                products: [],
                authenticateUser: this.$auth.getAuthenticatedUser(),
            }
        },
        components:{
          'my-product' : Product
        },

        created() {
            this.$http.get('/api/products')
                .then(response => {
                    this.products = response.body;
                });
        }
    }
</script>

<style>

</style>