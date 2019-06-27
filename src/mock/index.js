import Mock from 'mockjs';
import loginAPI from './login';


// 登录相关
Mock.mock(/\/login\/loginbyemail/, 'post', loginAPI.loginByEmail);
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout);
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getInfo)
// Mock.mock(/\/authority\/members\.*/, 'get', loginAPI.getInfo)
///authority/getMembers


export default Mock;
