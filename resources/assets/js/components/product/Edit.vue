<template>
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="product.name">
                    </div>

                    <div class="form-group">
                        <label>Price</label>
                        <input type="number" class="form-control" v-model="product.price">
                    </div>

                    <div class="form-group">
                        <label>Description</label>
                        <textarea class="form-control" v-model="product.description"></textarea>
                    </div>

                    <button class="btn btn-success pull-right" @click="update"
                            v-show="product.name && product.price && product.description">Editar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swal from 'sweetalert2';

    export  default {
        created(){
            this.getProduct()
        },
        data(){
            return {
                product: {}
            }
        },

        methods:{
            getProduct(){
                this.$http.get('/api/products/' + this.$route.params.product)
                    .then(response => {
                        this.product = response.body
                    })
            },
            update(){
                this.$http.put('/api/products/' + this.$route.params.product, this.product)
                    .then(response => {
                        Swal("Updated!", "Your product has been updated", 'success');
                    });
            }
        }
    }
</script>