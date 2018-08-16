<template>
    <v-flex xs4>
        <v-card dark color="primary">
            <v-card-media src="/images/download.jpeg"  height="50px" witdh="100px"></v-card-media>
            <v-card-title primary-title>
                <div>
                    <h3><strong>{{ product.name }} | {{ product.user_id }} | {{ authenticateUser }}</strong></h3>
                    <p>{{ product.price }}</p>
                    <hr>
                    <p>
                        <a href="#" class="btn btn-default">
                            Wish List
                        </a>
                        <a href="#" class="btn btn-success">
                            Buy there
                        </a>
                    </p>
                    <hr />

                </div>
            </v-card-title>
            <v-card-actions v-show="product.user_id == authenticateUser.id">
                <v-btn flat color="orange" @click="$emit('delete-product')">Borrar</v-btn>
                <router-link class="btn btn-warning" :to="'/products/' + product.id + '/edit'">Edit</router-link>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script>
    export default {
        props: ['product', 'authenticateUser'],
    }
</script>

<style>
    .thumbnail {
        background-color: #ffead7;
    }
</style>