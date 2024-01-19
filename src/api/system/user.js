import request from '@/utils/request'

// 常量
const api_name = '/admin/system/sysUser'

export default {
    // 用户列表接口
    getPageList(page, limit, searchObj) {
        return request({
            // 接口路径
            // url: '/admin/system/sysUser/' + page + "/" + limit,
            url: `${api_name}/${page}/${limit}`,
            method: 'get', // 请求方式
            // 参数
            params: searchObj
        })
    },
    // 添加
    save(user) {
        return request({
            // 接口路径
            url: `${api_name}/save`,
            method: 'post',
            data: user
        })
    },
    // 根据id查询
    getUserId(id) {
        return request({
            // 接口路径
            url: `${api_name}/getUser/${id}`,
            method: 'get'
        })
    },
    // 修改接口
    update(user) {
        return request({
            // 接口路径
            url: `${api_name}/update`,
            method: 'post', // 提交方式
            data: user
        })
    },
    // 删除
    removeById(id) {
        return request({
            url: `${api_name}/remove/${id}`,
            method: 'delete'
        })
    }, 
    // 更改用户状态
    updateStatus(id, status) {
        return request({
            url: `${api_name}/updateStatus/${id}/${status}`,
            method: 'get'
        })
    }
}