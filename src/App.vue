<template>
    <div class="layout">
        <div class="layout__sidebar">
            <ul>
                <li><a href="#" @click.prevent="onSidebarClick(1)">Screen 1</a></li>
                <li><a href="#" @click.prevent="onSidebarClick(2)">Screen 2</a></li>
                <li><a href="#" @click.prevent="onSidebarClick(3)">Screen 3</a></li>
            </ul>
        </div>

        <div class="layout__content-area">
            <cars v-if="pageId === 1" />

            <!--            <RouterView />-->
        </div>
    </div>

</template>

<script lang="ts">
import {RouterView} from 'vue-router'
import {ref} from "vue";
import Cars from "@/components/cars.vue";

export default {
    components: {Cars},
    setup(props, ctx) {
        const contentData = ref('');
        const pageId = ref();

        const onSidebarClick = (id) => {
            pageId.value = id;

            fetch('http://api.upwork-test.local-dev/screens/' + id.toString()).then(res => {
                res.json().then(res => {
                    console.log(res);
                    contentData.value = res?.content || '';
                })
            })

        }

        return {
            onSidebarClick,
            contentData,
            pageId,
        };
    }
}
</script>
