<template>
    <section class="section">
        <div class="container">
            <h1 class="title">
                Home
            </h1>
            <p class="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus minus pariatur temporibus! Architecto
                assumenda culpa eaque illo laboriosam, minima nihil, nisi nulla quae quaerat quasi quibusdam veniam
                vitae voluptatem voluptatum!
            </p>

            <pre>{{ testResponse }}</pre>

            <router-link to="/about" class="button">About</router-link>
        </div>
    </section>
</template>


<script lang="ts">
import {onMounted, ref} from "vue";

export default {
    name: 'Home',
    setup(props, ctx) {
        const testResponse = ref({});

        onMounted(() => {
            fetch('http://api.upwork-test.local-dev/test').then(r => {
                r.json().then(r => {
                    testResponse.value = r;
                });
            })
        })

        return {
            testResponse,
        };
    }
};
</script>