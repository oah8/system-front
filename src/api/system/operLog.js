import request from '@/utils/request'

/*
操作日志管理相关的API请求函数
*/
const api_name = '/admin/system/sysOperLog'

export default {

    getPageList(page, limit, searchObj) {
        return request({
          url: `${api_name}/${page}/${limit}`,
          method: 'get',
          params: searchObj
        })
    }

}