<template>
    <div>
        <h1>Feed</h1>
        <my-products>
        </my-products>
    </div>
</template>

<script>
    import Products from './product/Products';

    export default {
        components:{
            'my-products': Products
        }
    }
</script>