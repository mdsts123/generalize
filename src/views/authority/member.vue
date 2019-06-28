<!--  -->
<template>
  <div class>
    <Table border :columns="titles" :data="datas">
      <template slot-scope="{row}" slot="uid">
        <b>{{row.UID}}</b>
      </template>
      <template slot-scope="{row,index}" slot="action">
        <Button type="primary" @click="handleEdit(index)">编辑</Button>
        <Button type="error" @click="handleCancle(index)">删除</Button>
      </template>
    </Table>
    <EditMember></EditMember>
  </div>
</template>

<script>
import EditMember from '@/views/components/FormMember'
export default {
  data() {
    return {
      titles: [
        {
          title: "UID",
          slot: "uid"
        },
        {
          title: "昵称",
          key: "nickname"
        },
        {
          title: "用户名",
          key: "username"
        },
        {
          title: "权限级别",
          key: "grade"
        },
        {
          title: "组别",
          key: "group"
        },
        {
          title: "邮箱",
          key: "email"
        },
        {
          title: "手机号码",
          key: "phonenumber"
        },
        {
          title: "注册时间",
          key: "registrationTime"
        },
        {
          title: "注册方式",
          key: "registrationMode"
        },
        {
          title: "状态",
          key: "status"
        },
        {
          title: "操作",
          slot: "action",
          width: 200,
          align: "center",

        }
      ],
      datas: [
        {
          UID: "1",
          nickname: "2",
          username: "2",
          grade: "2",
          group: "2",
          email: "3",
          phonenumber: "3",
          registrationTime: "2",
          registrationMode: "2",
          status: "32"
        }
      ]
    };
  },

  created: function() {},

  components: {EditMember},

  computed: {},

  methods: {
    handleEdit(index) {
      //调用状态
      console.log(index);
    },
    handleCancle(index) {
      //使用状态
    }
  },

  mounted() {
    "报错！没有就删除。";
  }
};
</script>
<style  scoped>
</style>