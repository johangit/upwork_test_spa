<style scoped lang="scss">
.cars {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    &__header {
        flex-grow: 0;
        flex-shrink: 0;
        padding: 20px;
    }

    &__content {
        padding: 20px;
        overflow: scroll;

        table {
            border: 1px solid #333;
            border-collapse: collapse;
            width: 100%;

            th, td {
                border: 1px solid #333;
                padding: 10px;
            }
        }
    }
}
</style>


<template>
    <div class="cars">

        <div class="cars__header">
            Search: <input type="text" @keyup="onInputKeyUp">
        </div>

        <div class="cars__content">
            <table>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Notes</th>
                </tr>

                <tr v-for="car in cars">
                    <td>{{ car.id }}</td>
                    <td>{{ car.title }}</td>
                    <td>{{ car.status }}</td>
                    <td>{{ car.notes }}</td>
                </tr>
            </table>
        </div>

    </div>
</template>


<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";

export default defineComponent({
    name: 'Cars',
    setup(props, ctx) {
        const cars = ref([]);

        const fetchCars = (search = '') => {
            fetch('http://api.upwork-test.local-dev/cars/' + '?search=' + search.toString()).then(res => {
                res.json().then(res => {
                    cars.value = res;
                })
            })
        };

        onMounted(fetchCars);

        let submitDataTimout = null;
        const delay = 300;

        const onInputKeyUp = (e: KeyboardEvent) => {
            const value = event.target.value;

            if (submitDataTimout) {
                clearTimeout(submitDataTimout)
            }
            submitDataTimout = setTimeout(() => {
                fetchCars(value)
            }, delay);


        };

        return {
            cars,
            onInputKeyUp,
        };
    },
});
</script>
