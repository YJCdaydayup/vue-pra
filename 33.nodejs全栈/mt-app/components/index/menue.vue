<template>
    <div class="m-menu">
      <dl class="nav">
        <dt>全部分类</dt>
        <dd v-for="(item, index) in menue" :key="index">
          <i :class="item.type"/> {{item.name}} <span class="arrow"/>
        </dd>
      </dl>
    </div>
</template>
<style>

</style>

<script>
    export default {
        data() {
            return {
                menue: [
                  {
                    type: 'food',
                    name: '美食'
                  },
                  {
                    type: 'takeout',
                    name: '外卖'
                  }
                ]
            }
        }
    }
</script>


