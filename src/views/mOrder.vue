<!--  -->
<template>
  <div class="m-order">
    <!-- 添加 -->
    <section class="m-tool-bar">
      <Button type="primary">添加</Button>
      <Button type="error">删除</Button>
    </section>
    <!-- 列表 -->
    <section class>
      <Table border :columns="orderTitleCols" :data="orders">
        <template slot-scope="{ row }" slot="name">
          <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
          <Button type="error" size="small" @click="remove(index)">Delete</Button>
        </template>
      </Table>
    </section>
    <section class="m-sorter"></section>
    <!-- 分页 -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  created: function() {},

  components: {},

  computed: {
    ...mapGetters(["orderTitleCols", "orders"])
  },

  methods: {
    show(index) {
      alert("初始获得数据");
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.orders[index].name}<br>Age：${
          this.orders[index].age
        }<br>Address：${this.orders[index].address}`
      });
    },
    remove(index) {
      this.orders.splice(index, 1);
    }
  },

  mounted() {
    "报错！没有就删除。";
  }
};
</script>
<style lang="less" scoped>
.m-order {
  width: 980px;
  margin: 0 auto;
}
</style>
