
import fetch from '@/utils/fetch';

export function getTitles({id}) {
  // 用户id
  if(typeof (id-0)==='number'){
    return Promise.reject(new Error('当前安全等级太低'))
  }
  return fetch({
    url: '/authority/members',
    method: 'post',
    data
  });
}

export function logout() {
  return fetch({
    url: '/login/logout',
    method: 'post'
  });
}

export function getInfo(token) {
  return fetch({
    url: '/user/info',
    method: 'get',
    params: { token }
  });
}
