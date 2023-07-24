<template>
    <div>
        <h2>Persons List</h2>
        <TableComponent :columns="tableColumns" :data="productData" />
    </div>
</template>

<script>
import TableComponent from './components/TableComponent.vue';

export default {
    name: 'PersonsList',
    components: {
        TableComponent,
    },
    data() {
        return {
            tableColumns: [
                { id: 1, label: 'First name', field: 'first_name' },
                { id: 2, label: 'Last Name', field: 'last_name' },
                { id: 3, label: 'Phone', field: 'phone' },
            ],
            productData: [
                { id: 1, first_name: 'John', last_name: 'Johnson', phone: '+380956022984' },
                { id: 2, first_name: 'Artur', last_name: 'Johnson', phone: '+380956022984' },
            ],
        };
    },
};
</script>