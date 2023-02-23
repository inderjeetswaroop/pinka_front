<template>
    <div>

    </div>
</template>

<script>
export default({
    beforeCreate(){
        this.$Progress.start();
    },
    created(){
        this.$Progress.finish();
    }
})
</script>