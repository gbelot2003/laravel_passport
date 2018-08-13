<template>
        <div class="col-md-4">
            <div class="thumbnail">
                <img src="/images/download.jpeg">
                <div class="caption">
                    <h3><strong>{{ product.name }}</strong></h3>
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
                    <p  v-if="product.user_id == authenticateUser.id">
                        <a href="#" class="btn btn-danger" role="button"
                        @click="$emit('delete-product')"
                        >
                            Borrar
                        </a>
                        <router-link class="btn btn-warning" :to="'/products/' + product.id + '/edit'">Edit</router-link>
                    </p>
                </div>
            </div>
        </div>
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