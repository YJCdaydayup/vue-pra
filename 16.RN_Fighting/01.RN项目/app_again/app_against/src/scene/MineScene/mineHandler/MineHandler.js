import FavorateHelper, {FAVORITE_SCHEME} from './../../../utils/FavorateHelper'
import HomeModel from './../../../scene/HomeScene/model/HomeModel'
import CommonLogical from './../../../common/CommonLogical'

let favorateHelper = new FavorateHelper(FAVORITE_SCHEME.MAIN);
export default class MineHandler {

    /**
     * 获取本地收藏的栏目(首页的收藏数据)
     */
    static getLocalFavoriteModel() {
        return new Promise((resolve, reject) => {
            favorateHelper.getAllLocalFavoriteModels().then(items => {
                let models = [];
                resolve(models);
                items.map((item) => {
                    models.push(new HomeModel(JSON.parse(item), true));
                })
            }).catch(err => {
                CommonLogical.handlerCommonErrorLogical(err);
            })
        })
    }
}
