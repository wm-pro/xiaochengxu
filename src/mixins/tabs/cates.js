import wepy from 'wepy'
export default class extends wepy.mixin {
    data = {
        cateList: [],
        active: 0
    }
    onLoad() {
        this.getCateList()
    }
    methods = {
        onChange(e) {
            console.log(e.detail);

        }
    }
    async getCateList() {
        const { data: res } = await wepy.get('/categories')
        if (res.meta.status != 200) {
            return wepy.baseToast('获取分类数据失败')
        }
        this.cateList = res.message
        this.$apply()
    }
}