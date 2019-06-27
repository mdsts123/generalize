import { param2Obj } from '@/utils';

const userMap = {
  admin: {
    role: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    name: 'Super Admin',
    uid: '001'
  },
  member: {
    role: ['member'],
    token: 'member',
    introduction: '我是成员',
    name: '成员',
    uid: '002'


  },
  groupLeader : {
    role: ['groupLeader'],
    token: 'groupLeader',
    introduction: '我是组长',
    name: '组长',
    uid: '003'
  },
  mult : {
    role: ['groupLeader','member'],
    token: 'mult',
    introduction: '我是多重身份',
    name: '多重身份',
    uid: '003'
  }
}

export default {
  loginByEmail: config => {
    const { email } = JSON.parse(config.body);
      return userMap[email.split('@')[0]];
  },
  getInfo: config => {
    const { token } = param2Obj(config.url);
    if (userMap[token]) {
      return userMap[token];
    } else {
      return Promise.reject('a');
    }
  },
  logout: () => 'success'
};
