<template>
    <v-layout row wrap>
            <my-product v-for="(product, index) in products" :key="products.id"
                        @delete-product="deleteProduct(product)"
                        :authenticatedUser="authenticateUser"
                        v-bind:authenticateUser="authenticateUser"
                        v-bind:data="products"
                        :product="product"

            >
            </my-product>
    </v-layout>
</template>

<script>
    import Product from './Product';
    import Swal from 'sweetalert2';
    import axios from '../../packages/axios'

    export default {
        data(){
            return {
                products: [],
            }
        },
        components:{
          'my-product' : Product
        },
        computed:{
            getTokens(){
                return this.$store.getters.getToken;
            },
            authenticateUser(){
                return this.$store.getters.getUser
            }
        },

        methods:{
            deleteProduct(product){
                Swal({
                    title: "Are you sure",
                    text: "You will not be able to recover this Product",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6b55",
                    confirmButtonText: "Yes, delete it",
                    cancelButtonText: 'No, keep it',
                })
                    .then((result) => {
                        if (result.value) {
                            axios().delete('api/products/' + product.id)
                                .then(response => {
                                    let index = this.products.indexOf(product);
                                    console.log(index);
                                    this.products.splice(index, 1);
                                    Swal(
                                        'Deleted!',
                                        'Your product has been deleted.',
                                        'success'
                                    )
                            })
                        } else if (result.dismiss === Swal.DismissReason.cancel) {
                        Swal(
                            'Cancelled',
                            'Your product is safe :)',
                            'error'
                        )
                    }
                })
            }
        },

        created() {
            axios().get('/api/products')
                .then(response => {
                    this.products = response.data;
                });
        }
    }
</script>