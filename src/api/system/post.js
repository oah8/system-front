import request from '@/utils/request'

// 常量
const api_name = '/admin/system/sysPost'

export default {
    // 用户列表接口
    getPageList(page, limit, searchObj) {
        return request({
            // 接口路径
            // url: '/admin/system/sysPost/' + page + "/" + limit,
            url: `${api_name}/${page}/${limit}`,
            method: 'get', // 请求方式
            // 参数
            params: searchObj
        })
    },
    // 添加
    save(post) {
        return request({
            // 接口路径
            url: `${api_name}/save`,
            method: 'post',
            data: psot
        })
    },
    // 根据id查询
    getPostId(id) {
        return request({
            // 接口路径
            url: `${api_name}/getPost/${id}`,
            method: 'get'
        })
    },
    // 修改接口
    update(post) {
        return request({
            // 接口路径
            url: `${api_name}/update`,
            method: 'post', // 提交方式
            data: post
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