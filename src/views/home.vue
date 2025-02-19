<template>
    content area
</template>


<script lang="ts">
import {onMounted, ref} from "vue";

export default {
    name: 'Home',
    setup(props, ctx) {
        onMounted(()=>{

            fetch('http://api.upwork-test.local-dev/home-test').then(res => {
                res.json().then(res => {
                    console.log('api response:');
                    console.log(res);
                })
            })

        })
    }
};
</script>