export default class Tool {
    static $(id) {
        if (typeof id === 'string' && id.length > 0) {
            let el = document.getElementById(id);
            if (el) {
                return el;
            }else {
                throw `id为${id}的元素不存在`;
            }
        }else {
            throw '元素id类型错误'
        }
    }
}
