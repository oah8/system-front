import request from '@/utils/request'

/*
登录日志管理相关的API请求函数
*/
const api_name = '/admin/system/sysLoginLog'

export default {
    getPageList(page, limit, searchObj) {
        return request({
          url: `${api_name}/${page}/${limit}`,
          method: 'get',
          params: searchObj
        })
    }
    
}