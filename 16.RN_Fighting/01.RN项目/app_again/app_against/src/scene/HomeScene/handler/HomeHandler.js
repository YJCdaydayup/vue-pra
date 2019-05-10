import LSCDataRespository from './../../../common/LSCDataRespository'
import CommonLogical from './../../../common/CommonLogical'
import HomeModel from './../model/HomeModel'

let lscDataRespository = new LSCDataRespository();

export default class HomeHandler {
    static LSCGetMainListData(url) {
        return new Promise((resolve, reject) => {
            lscDataRespository.fetchLSCDataRespository(url).then(result => {
                let models = [];
                if (result.items) {
                    let {items} = result;
                    items.map((item) => {
                        models.push(new HomeModel(item))
                    })
                    resolve(models);
                }
            }).catch(err => {
                CommonLogical.handlerCommonErrorLogical(err);
            })
        })
    }
}
