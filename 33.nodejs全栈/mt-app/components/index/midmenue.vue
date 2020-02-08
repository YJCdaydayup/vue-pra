<template>
    <div class="mid-menue">
      <ul class="menue">
        <li :class="{selected: item.selected}" v-for="(item, idx) in menue" :key="idx" @mouseenter="mouseenter(idx)">
          <span>{{item.title}}</span>
        </li>
      </ul>
      <div class="detail">
        <ul>
          <li v-for="(item, index) in curMenue.child">
            <div class="img">
              <img :src="item.img" alt="">
            </div>
            <div class="info">
              <h3>{{item.title}}</h3>
              <p class="hint">{{item.des}}</p>
              <div class="price">
                <span class="new-price">¥{{item.newPrice}}<span class="tail">/人均</span></span>
                <span v-if="item.oldPrice.length" class="old-price">门市价¥{{item.oldPrice}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<style lang="scss" rel="stylesheet/scss">

  ul li {
    list-style-type: none;
  }

  .mid-menue {
    margin: 160px 20px 0 20px;
    .menue {
      width: 100%;
      height: 44px;
      color: #fff;
      padding: 0 10px;
      background-color: #b9aa86;
      border: 1px solid #b9aa86;
      line-height: 44px;
      li {
        display: inline-block;
        padding: 0 10px;
        font-size: 16px;
        position: relative;
        margin-left: 1px;
        &::after {
          display: none;
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          border-width: 6px;
          border-style: solid;
          border-color: transparent transparent #fff transparent;
          transform: translate3d(-50%, 0 , 0);
        }
        &.selected {
          font-size: 17px;
        }
        &.selected::after {
          display: block;
        }
      }
    }
    .detail {
      cursor: pointer;
      width: 100%;
      border: 1px solid #ccc;
      margin-top: 10px;
      overflow: hidden;
      padding: 10px;
      li {
        width: 33.3333%;
        float: left;
        padding: 10px;
        transition: all 0.5s linear;
        box-sizing: border-box;
        &:hover {
          background-color: #ccc;
          border-radius: 3px;
        }
        .img {
          width: 100%;
          img {
            width: 100%;
            height: 200px;
          }
        }
        .info {
          >h3 {
            color: black;
            font-weight: bold;
            font-size: 15px;
          }
          .hint {
            font-size: 12px;
            color: rgba(29,29,29,0.6);
            margin: 3px 0;
          }
          .price {
            .new-price {
              color:  #b9aa86;
              font-size: 20px;
              font-weight: bolder;
              .tail {
                font-size: 12px;
              }
            }
            .old-price {
              position: relative;
              font-size: 13px;
              margin-left: 5px;
              color: rgba(29,29,29,0.6);
              &::after {
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                right: 0;
                border: 1px solid rgba(29,29,29,0.8);
                transform: scaleY(0.3333);
              }
            }
          }
        }
      }
    }
  }

</style>

<script>
    export default {
        data() {
            return {
                menue: [
                  {
                    type: 'gediao',
                    title: '有格调',
                    selected: false
                  },
                  {
                    type: 'all',
                    title: '全部',
                    selected: true
                  },
                  {
                    type: 'jucan',
                    title: '约会聚餐',
                    selected: false
                  },
                  {
                    type: 'spa',
                    title: '丽人SPA',
                    selected: false
                  },
                  {
                    type: 'pinzhi',
                    title: '品质出游',
                    selected: false
                  }
                ],
                type: 'all',
                midMenue: [
                  {
                    type: 'all',
                    child: [
                      {
                        img: 'https://p1.meituan.net/msmerchant/4b5b559580843d2ba35c2a1b984058951911260.jpg@368w_208h_1e_1c',
                        title: '茶聚场（王府井環店）',
                        des: '蛋糕3选1',
                        newPrice: '378',
                        oldPrice: '418'
                      },
                      {
                        img: 'https://p0.meituan.net/scarlett/0938786f28888cfcebdf59de23f87dd394965.png@368w_208h_1e_1c',
                        title: 'COSTA COFFEE',
                        des: '法式黄金可颂1个',
                        newPrice: '6',
                        oldPrice: '13'
                      },
                      {
                        img: 'https://p0.meituan.net/wedding/7f274360936a5233902be9afe5054eef4134276.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
                        title: '谦亨短发设计',
                        des:  '谦亨短发设计(新世界店)',
                        newPrice: '142',
                        oldPrice: ''
                      },
                      {
                        img: 'https://p0.meituan.net/mogu/fc091566222b23c51857ab4316633e43370925.jpg@368w_208h_1e_1c',
                        title: '祈年8号中餐厅',
                        des:  '单人点心自助午餐',
                        newPrice: '95',
                        oldPrice: '108'
                      },
                      {
                        img: 'https://p0.meituan.net/msmerchant/c08c616aa835bc7cebdc3bd17184afef312214.jpg@368w_208h_1e_1c',
                        title: '丰泽园饭店',
                        des:  '4人套餐，提供免费WiFi',
                        newPrice: '498',
                        oldPrice: '584'
                      },
                      {
                        img: 'https://p1.meituan.net/deal/201208/22/1_0822151022.jpg@368w_208h_1e_1c',
                        title: '保利国际影城（天安门店）',
                        des: '免押金，可停车，儿童票，有WiFi，杜比全景声厅，4K厅，巨幕厅，60帧厅',
                        newPrice: '22.9',
                        oldPrice: ''
                      }
                    ]
                  },
                  {
                    type: 'jucan',
                    child: [
                      {
                        img: 'https://p0.meituan.net/msmerchant/934922047bb7c77c428de2d6a1dfd3c0492637.jpg@368w_208h_1e_1c',
                        title: '茶聚场（王府井環店）',
                        des: '蛋糕3选1',
                        newPrice: '378',
                        oldPrice: '418'
                      },
                      {
                        img: 'https://p0.meituan.net/msmerchant/c08c616aa835bc7cebdc3bd17184afef312214.jpg@368w_208h_1e_1c',
                        title: 'COSTA COFFEE',
                        des: '法式黄金可颂1个',
                        newPrice: '6',
                        oldPrice: '13'
                      },
                      {
                        img: 'https://p1.meituan.net/msmerchant/c0856db45f31b04f6bb07a224b8f69c4806780.jpg@368w_208h_1e_1c',
                        title: '谦亨短发设计',
                        des:  '谦亨短发设计(新世界店)',
                        newPrice: '142',
                        oldPrice: ''
                      },
                      {
                        img: 'https://p0.meituan.net/mogu/fc091566222b23c51857ab4316633e43370925.jpg@368w_208h_1e_1c',
                        title: '祈年8号中餐厅',
                        des:  '单人点心自助午餐',
                        newPrice: '95',
                        oldPrice: '108'
                      },
                      {
                        img: 'https://p0.meituan.net/msmerchant/c08c616aa835bc7cebdc3bd17184afef312214.jpg@368w_208h_1e_1c',
                        title: '丰泽园饭店',
                        des:  '4人套餐，提供免费WiFi',
                        newPrice: '498',
                        oldPrice: '584'
                      },
                      {
                        img: 'https://p1.meituan.net/msmerchant/4a953fe54ad2c3cef9547fc41ba8df9193526.jpg@368w_208h_1e_1c',
                        title: '保利国际影城（天安门店）',
                        des: '免押金，可停车，儿童票，有WiFi，杜比全景声厅，4K厅，巨幕厅，60帧厅',
                        newPrice: '22.9',
                        oldPrice: ''
                      }
                    ]
                  },
                  {
                    type: 'spa',
                    child: [
                      {
                        img: 'https://p1.meituan.net/dpmerchantpic/4a73d606839dac72e55aea29f7e2dcfe79247.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
                        title: '茶聚场（王府井環店）',
                        des: '蛋糕3选1',
                        newPrice: '378',
                        oldPrice: '418'
                      },
                      {
                        img: 'https://p0.meituan.net/wedding/7f274360936a5233902be9afe5054eef4134276.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
                        title: 'COSTA COFFEE',
                        des: '法式黄金可颂1个',
                        newPrice: '6',
                        oldPrice: '13'
                      },
                      {
                        img: 'https://p1.meituan.net/dpmerchantpic/894a230555aedd63c423a454b48e5842180576.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
                        title: '谦亨短发设计',
                        des:  '谦亨短发设计(新世界店)',
                        newPrice: '142',
                        oldPrice: ''
                      },
                      {
                        img: 'https://p1.meituan.net/merchantpic/c8e78abbfee3ee594316fb4321fce48b217461.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
                        title: '祈年8号中餐厅',
                        des:  '单人点心自助午餐',
                        newPrice: '95',
                        oldPrice: '108'
                      },
                      {
                        img: 'https://p0.meituan.net/merchantpic/23361032b03b77963a0d909589e049f8202913.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
                        title: '丰泽园饭店',
                        des:  '4人套餐，提供免费WiFi',
                        newPrice: '498',
                        oldPrice: '584'
                      },
                      {
                        img: 'https://p1.meituan.net/dpmerchantpic/e8c38fe4ffdba01a22e597ebc6d9bb85237670.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
                        title: '保利国际影城（天安门店）',
                        des: '免押金，可停车，儿童票，有WiFi，杜比全景声厅，4K厅，巨幕厅，60帧厅',
                        newPrice: '22.9',
                        oldPrice: ''
                      }
                    ]
                  },
                  {
                    type: 'pinzhi',
                    child: [
                      {
                        img: 'https://p0.meituan.net/dnaimgdark/e9e28a2fe3f4ce57503e2a2b53e8458a5497506.jpg@368w_208h_1e_1c',
                        title: '茶聚场（王府井環店）',
                        des: '蛋糕3选1',
                        newPrice: '378',
                        oldPrice: '418'
                      },
                      {
                        img: 'https://p1.meituan.net/tdchotel/8d2d8549f205d79fbc2319f65ac1ff821861291.png@368w_208h_1e_1c',
                        title: 'COSTA COFFEE',
                        des: '法式黄金可颂1个',
                        newPrice: '6',
                        oldPrice: '13'
                      },
                      {
                        img: 'https://p0.meituan.net/dnaimgdark/077b8e8ff3cb035045836c0a6f06d01f4192087.jpg@368w_208h_1e_1c',
                        title: '谦亨短发设计',
                        des:  '谦亨短发设计(新世界店)',
                        newPrice: '142',
                        oldPrice: ''
                      },
                      {
                        img: 'https://p0.meituan.net/tdchotel/b90641df1318d69a5592a46afc5908ff710821.png@368w_208h_1e_1c',
                        title: '祈年8号中餐厅',
                        des:  '单人点心自助午餐',
                        newPrice: '95',
                        oldPrice: '108'
                      },
                      {
                        img: 'https://p1.meituan.net/tdchotel/38ccf10273ab82adbb6112b62c4583025255786.jpg@368w_208h_1e_1c',
                        title: '丰泽园饭店',
                        des:  '4人套餐，提供免费WiFi',
                        newPrice: '498',
                        oldPrice: '584'
                      },
                      {
                        img: 'https://p1.meituan.net/tdchotel/bfc639b6a1b6079bb3739b6a92384656424277.jpg@368w_208h_1e_1c',
                        title: '保利国际影城（天安门店）',
                        des: '免押金，可停车，儿童票，有WiFi，杜比全景声厅，4K厅，巨幕厅，60帧厅',
                        newPrice: '22.9',
                        oldPrice: ''
                      }
                    ]
                  },
                ]
            }
        },
        methods: {
         async mouseenter(index) {
            if (index === 0) {
              return;
            }
            for (let i = this.menue.length;i--;) {
              this.menue[i].selected = false;
            }
            this.menue[index].selected = true;
            this.type = this.menue[index].type;

          }
        },
        computed: {
          curMenue() {
            return this.midMenue.filter((item)=>item.type === this.type)[0]
          }
        }
    }
</script>


