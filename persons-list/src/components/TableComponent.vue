<template>
    <table class="table table-striped">
        <thead>
          <tr>
              <th scope="col" v-for="column in columns" :key="column.id">{{ column.label }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
              <td v-for="column in columns" :key="column.id">{{ item[column.field] }}</td>
          </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    name: 'TableComponent',
    props: {
        columns: {
            type: Array,
            required: true,
        },
        data: {
            type: Array,
            required: true,
        },
    },
};
</script>
<style scoped>
@import '@/assets/css/tables.css';
</style>