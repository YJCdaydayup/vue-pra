/**
 * Created by yangli on 2019/4/23.
 */
export default class Utils {

    /**
     * 检查该Item是否收藏过
     **/
    static checkFavorate(item, items) {
        for (let i = 0; len = items.length, i < len; i++) {
            if (item.id.toString() === items[i]) {
                return true;
            }
        }
        return false;
    }
}