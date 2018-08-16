<template>
    <v-flex xs3>
        <v-card dark color="primary">
            <v-card-media src="/images/download.jpeg"  height="50px" witdh="100px"></v-card-media>
            <v-card-title primary-title>
                <div class="contenedor">
                    <h3><strong>{{ product.name }} </strong></h3>
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

    .contenedor{
        width: 100%;
    }
</style>