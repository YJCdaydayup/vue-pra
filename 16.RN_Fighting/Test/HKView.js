/**
 * Created by yangli on 2019/2/27.
 */
import HKTabbar from 'HKTabBar'

export default class HKView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabNames: ['首页','发现','发现','我的'],
            tabIconNames: ['1.jpg','2.jpg','3.jpg','4.jpg']
            tabSelectIconNames: ['a.jpg','b.jpg','c.jpg','d.jpg']
        }
    }

    render() {
        let tabNames = this.state.tabNames;
        let tabIconNames = this.state.tabIconNames;
        let tabSelectedImages = this.state.tabSelectIconNames;
        return (
            <ScrollableTabView
                renderTabBar={()=>{
                    return (
                        <HKTabbar
                            tabNames={tabNames}
                            tabIconNames={tabIconNames}
                            tabSelectImages={tabSelectedImages}
                        />
                    )
                }}
            >

            </ScrollableTabView>
        )
    }
}