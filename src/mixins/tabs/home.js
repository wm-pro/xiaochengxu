import wepy from 'wepy'
export default class extends wepy.mixin {
    data = {
        swiperList: [],
        CateItems: [],
        floorData: []
    }
    onLoad() {
        this.getSwiperData(),
            this.getCateItems(),
            this.getFloorData()
    }
    methods = {
        goGoodsList(url) {
            wepy.navigateTo({
                url: url
            })

        }
    }
    async getSwiperData() {
        const { data: res } = await wepy.get('/home/swiperdata')
        if (res.meta.status != 200) {
            return wepy.baseToast()
        }
        this.swiperList = res.message
        this.$apply()
    }
    async getCateItems() {
        const { data: res } = await wepy.get('/home/catitems')
        if (res.meta.status != 200) {
            return wepy.baseToast('获取首页分类数据失败！')
        }
        this.CateItems = res.message
        this.$apply()
    }
    async getFloorData() {
        const { data: res } = await wepy.get('/home/floordata')
        if (res.meta.status != 200) {
            return wepy.baseToast('获取楼层数据失败')
        }
        this.floorData = res.message
        this.$apply()
    }
}