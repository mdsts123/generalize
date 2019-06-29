<template>
  <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
    <FormItem label="昵称" prop="nickname">
      <Input v-model="formValidate.nickname" placeholder="请输入昵称"></Input>
    </FormItem>
    <FormItem label="用户名" prop="username">
      <Input v-model="formValidate.username" placeholder="请输入用户名"></Input>
    </FormItem>
    <FormItem label="密码" prop="password">
      <Input v-model="formValidate.password" placeholder="请输入密码"></Input>
    </FormItem>
    <FormItem label="确认密码" prop="confirm">
      <Input v-model="formValidate.confirm"></Input>
    </FormItem>
    <!-- <FormItem label="Date">
      <Row>
        <Col span="11">
          <FormItem prop="date">
            <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
          </FormItem>
        </Col>
        <Col span="2" style="text-align: center">-</Col>
        <Col span="11">
          <FormItem prop="time">
            <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
          </FormItem>
        </Col>
      </Row>
    </FormItem>-->
    <FormItem label="权限级别" prop="authority">
      <RadioGroup v-model="formValidate.authority">
        <Radio label="member">成员</Radio>
        <Radio label="groupLeader">管理员</Radio>
        <Radio label="usergroup">用户组</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="组别" prop="groupName">
      <Input v-model="formValidate.groupName" placeholder="请输入组别"></Input>
    </FormItem>
    <FormItem label="邮箱" prop="email">
      <Input v-model="formValidate.email" placeholder="邮箱"></Input>
    </FormItem>
    <FormItem label="邮箱绑定">
      <RadioGroup v-model="formValidate.emailBind">
        <Radio label="yes">已绑定</Radio>
        <Radio label="no">未绑定</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="手机号" prop="phoneNumber">
      <Input v-model="formValidate.phoneNumber" placeholder></Input>
    </FormItem>
    <FormItem label="手机绑定">
      <RadioGroup v-model="formValidate.phoneNumberBind">
        <Radio label="yes">已绑定</Radio>
        <Radio label="no">未绑定</Radio>
      </RadioGroup>
    </FormItem>

    <FormItem label="头像" prop>
      <!-- 预览上传列表 -->
      <div class="m-upload-list"></div>
      <!-- 上传按钮 action必填 无用-->
      <Upload
        ref="avatar"
        class="m-upload"
        :before-upload="handleRemoveDefaultUpload"
        :show-upload-list="false"
        type="drag"
        action=""
      >
        <div class="m-upload-button">
          <Icon type="camra" size="20"></Icon>
        </div>
      </Upload>
    </FormItem>

    <FormItem>
      <Button type="primary" @click="handleSubmit('formValidate')">确认</Button>
      <Button type="warning" @click="handleReset('formValidate')">重置</Button>
      <Button type="error" @click="handleCancel('formValidate')">取消</Button>
    </FormItem>
  </Form>
</template>
<script>
export default {
  data() {
    return {
      formValidate: {
        nickname: "",
        username: "",
        password: "",
        authority: "member", //默认
        groupNam: "",
        emailBind: "no",
        phoneNumberBind: "no",
        avatar:'',
        avatars: []
      },
      ruleValidate: {
        nickname: [
          {
            required: true,
            message: "The nickname cannot be empty",
            trigger: "blur"
          }
        ],
        username: [
          {
            required: true,
            message: "Mailbox cannot be empty",
            trigger: "blur"
          },
          { type: "email", message: "Incorrect email format", trigger: "blur" }
        ],
        password: [
          {
            required: true,
            message: "Please select the password",
            trigger: "change"
          }
        ],
        authority: [
          {
            required: true,
            message: "Please select authority",
            trigger: "change"
          }
        ],
        phoneNumber: [
          {
            message: "Please select authority",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleRemoveDefaultUpload(file){
      this.formValidate.avatar=file
      return false;
    },
    handleSubmit(formValidate) {
      this.$refs[formValidate].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(formValidate) {
      this.$refs[formValidate].resetFields();
    },
    handleCancel(formValidate) {
      this.$refs[formValidate].resetFields();
    }
  }
};
</script>
<style lang="less" scoped>
.m-upload {
  display: inline-block;
  width: 58px;
}
.m-upload-button {
  width: 58px;
  height: 58px;
  line-height: 58px;
}
</style>



