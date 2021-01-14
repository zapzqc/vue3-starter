import http from '@/utils/http';
import { AxiosResponse } from 'axios';

// 使用接口定义登录接口返回的数据格式·
export interface ILogin{
  accessToken: string;
  message:string
}

// 添加API地址
const API = {
  login: '/login',
};

/**
 * 登录
 * @param userInfo 用户信息
 * @returns 验证结果
 */
export function login(userInfo:Record<string, unknown>):Promise<AxiosResponse<ILogin>> {
  return http.get<ILogin>(API.login, { data: userInfo });
}
