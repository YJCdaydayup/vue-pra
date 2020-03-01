<template>
    <a-table :columns="columns" :dataSource="data" bordered :pagination="false">
        <template
                v-for="col in ['name', 'age', 'address']"
                :slot="col"
                slot-scope="text, record, index"
        >
            <div :key="col">{{text}}</div>
        </template>
        <template slot="operation" slot-scope="text, record, index">
            <a-button class="primary" type="primary">+</a-button>
        </template>
    </a-table>
</template>
<script>
    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            width: '25%',
            scopedSlots: { customRender: 'name' },
        },
        {
            title: 'age',
            dataIndex: 'age',
            width: '15%',
            scopedSlots: { customRender: 'age' },
        },
        {
            title: 'address',
            dataIndex: 'address',
            width: '40%',
            scopedSlots: { customRender: 'address' },
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            scopedSlots: { customRender: 'operation' },
        },
    ];

    const data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            key: i.toString(),
            name: `Edrward ${i}`,
            age: 32,
            address: `London Park no. ${i}`,
        });
    }
    export default {
        data() {
            this.cacheData = data.map(item => ({ ...item }));
            return {
                data,
                columns,
            };
        },
        methods: {
            handleChange(value, key, column) {
                const newData = [...this.data];
                const target = newData.filter(item => key === item.key)[0];
                if (target) {
                    target[column] = value;
                    this.data = newData;
                }
            },
            edit(key) {
                const newData = [...this.data];
                const target = newData.filter(item => key === item.key)[0];
                if (target) {
                    target.editable = true;
                    this.data = newData;
                }
            },
            save(key) {
                const newData = [...this.data];
                const newCacheData = [...this.cacheData];
                const target = newData.filter(item => key === item.key)[0];
                const targetCache = newCacheData.filter(item => key === item.key)[0];
                if (target && targetCache) {
                    delete target.editable;
                    this.data = newData;
                    Object.assign(
                            targetCache,
                            target
                    );
                    this.cacheData = newCacheData;
                }
            },
            cancel(key) {
                const newData = [...this.data];
                const target = newData.filter(item => key === item.key)[0];
                if (target) {
                    Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
                    delete target.editable;
                    this.data = newData;
                }
            },
        },
    };
</script>
<style scoped>
    .editable-row-operations a {
        margin-right: 8px;
    }

    .primary {
        font-size: 20px;
        color: #fff;
        background-color: red;
        border: none;
    }

</style>