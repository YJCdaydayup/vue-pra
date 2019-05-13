import LSCDataRespository from './../../../common/LSCDataRespository'
import CommonLogical from './../../../common/CommonLogical'
import HomeModel from './../model/HomeModel'
import FavorateHelper, {FAVORITE_SCHEME} from './../../../utils/FavorateHelper'

let lscDataRespository = new LSCDataRespository();
let favorateHelper = new FavorateHelper(FAVORITE_SCHEME.MAIN);

export default class HomeHandler {
    static LSCGetMainListData(url) {
        return new Promise((resolve, reject) => {
            lscDataRespository.fetchLSCDataRespository(url).then(result => {
                let models = [];
                if (result.items) {
                    favorateHelper.getAllLocalKeys().then(keys => {
                        let {items} = result;
                        items.map((item) => {
                            models.push(new HomeModel(item, this.LSCCheckHasFavoritedItem(item.id.toString(),keys)))
                        })
                        resolve(models);
                    })
                }
            }).catch(err => {
                CommonLogical.handlerCommonErrorLogical(err);
            })
        })
    }

    static LSCCheckHasFavoritedItem(key, keys) {
       return keys.indexOf(key) > -1;
    }

    static addFavoriteItem(key, data) {
        favorateHelper.saveMainListItem(key, data);
    }

    static removeFavoriteItem(key) {
        favorateHelper.removeMainListItem(key);
    }
}
