"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var ITEM_HEIGHT = 44;
component_1.VantComponent({
    classes: ['main-item-class', 'content-item-class', 'main-active-class', 'content-active-class', 'main-disabled-class', 'content-disabled-class'],
    props: {
        items: Array,
        mainActiveIndex: {
            type: Number,
            value: 0
        },
        activeId: {
            type: [Number, String]
        },
        maxHeight: {
            type: Number,
            value: 300
        }
    },
    data: {
        subItems: [],
        mainHeight: 0,
        itemHeight: 0
    },
    watch: {
        items: function items() {
            var _this = this;
            this.updateSubItems().then(function () {
                _this.updateMainHeight();
            });
        },
        maxHeight: function maxHeight() {
            this.updateItemHeight(this.data.subItems);
            this.updateMainHeight();
        },
        mainActiveIndex: 'updateSubItems'
    },
    methods: {
        // 当一个子项被选择时
        onSelectItem: function onSelectItem(event) {
            var item = event.currentTarget.dataset.item;
            if (!item.disabled) {
                this.$emit('click-item', item);
            }
        },
        // 当一个导航被点击时
        onClickNav: function onClickNav(event) {
            var index = event.currentTarget.dataset.index;
            var item = this.data.items[index];
            if (!item.disabled) {
                this.$emit('click-nav', { index: index });
            }
        },
        // 更新子项列表
        updateSubItems: function updateSubItems() {
            var _a = this.data,
                items = _a.items,
                mainActiveIndex = _a.mainActiveIndex;
            var _b = (items[mainActiveIndex] || {}).children,
                children = _b === void 0 ? [] : _b;
            this.updateItemHeight(children);
            return this.set({ subItems: children });
        },
        // 更新组件整体高度，根据最大高度和当前组件需要展示的高度来决定
        updateMainHeight: function updateMainHeight() {
            var _a = this.data,
                _b = _a.items,
                items = _b === void 0 ? [] : _b,
                _c = _a.subItems,
                subItems = _c === void 0 ? [] : _c;
            var maxHeight = Math.max(items.length * ITEM_HEIGHT, subItems.length * ITEM_HEIGHT);
            this.set({ mainHeight: Math.min(maxHeight, this.data.maxHeight) });
        },
        // 更新子项列表高度，根据可展示的最大高度和当前子项列表的高度决定
        updateItemHeight: function updateItemHeight(subItems) {
            var itemHeight = Math.min(subItems.length * ITEM_HEIGHT, this.data.maxHeight);
            return this.set({ itemHeight: itemHeight });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiSVRFTV9IRUlHSFQiLCJWYW50Q29tcG9uZW50IiwiY2xhc3NlcyIsInByb3BzIiwiaXRlbXMiLCJBcnJheSIsIm1haW5BY3RpdmVJbmRleCIsInR5cGUiLCJOdW1iZXIiLCJhY3RpdmVJZCIsIlN0cmluZyIsIm1heEhlaWdodCIsImRhdGEiLCJzdWJJdGVtcyIsIm1haW5IZWlnaHQiLCJpdGVtSGVpZ2h0Iiwid2F0Y2giLCJfdGhpcyIsInVwZGF0ZVN1Ykl0ZW1zIiwidGhlbiIsInVwZGF0ZU1haW5IZWlnaHQiLCJ1cGRhdGVJdGVtSGVpZ2h0IiwibWV0aG9kcyIsIm9uU2VsZWN0SXRlbSIsImV2ZW50IiwiaXRlbSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZGlzYWJsZWQiLCIkZW1pdCIsIm9uQ2xpY2tOYXYiLCJpbmRleCIsIl9hIiwiX2IiLCJjaGlsZHJlbiIsInNldCIsIl9jIiwiTWF0aCIsIm1heCIsImxlbmd0aCIsIm1pbiJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQSxJQUFJQyxjQUFjLEVBQWxCO0FBQ0FGLFlBQVlHLGFBQVosQ0FBMEI7QUFDdEJDLGFBQVMsQ0FDTCxpQkFESyxFQUVMLG9CQUZLLEVBR0wsbUJBSEssRUFJTCxzQkFKSyxFQUtMLHFCQUxLLEVBTUwsd0JBTkssQ0FEYTtBQVN0QkMsV0FBTztBQUNIQyxlQUFPQyxLQURKO0FBRUhDLHlCQUFpQjtBQUNiQyxrQkFBTUMsTUFETztBQUViWCxtQkFBTztBQUZNLFNBRmQ7QUFNSFksa0JBQVU7QUFDTkYsa0JBQU0sQ0FBQ0MsTUFBRCxF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TCxDQUFTLEVBQUVwQixZQUFZQSxVQUFkLEVBQVQsQ0FBUDtBQUNIO0FBakNJO0FBekNhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbnZhciBJVEVNX0hFSUdIVCA9IDQ0O1xuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XG4gICAgY2xhc3NlczogW1xuICAgICAgICAnbWFpbi1pdGVtLWNsYXNzJyxcbiAgICAgICAgJ2NvbnRlbnQtaXRlbS1jbGFzcycsXG4gICAgICAgICdtYWluLWFjdGl2ZS1jbGFzcycsXG4gICAgICAgICdjb250ZW50LWFjdGl2ZS1jbGFzcycsXG4gICAgICAgICdtYWluLWRpc2FibGVkLWNsYXNzJyxcbiAgICAgICAgJ2NvbnRlbnQtZGlzYWJsZWQtY2xhc3MnXG4gICAgXSxcbiAgICBwcm9wczoge1xuICAgICAgICBpdGVtczogQXJyYXksXG4gICAgICAgIG1haW5BY3RpdmVJbmRleDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlSWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ11cbiAgICAgICAgfSxcbiAgICAgICAgbWF4SGVpZ2h0OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMzAwXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgc3ViSXRlbXM6IFtdLFxuICAgICAgICBtYWluSGVpZ2h0OiAwLFxuICAgICAgICBpdGVtSGVpZ2h0OiAwXG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBpdGVtczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3ViSXRlbXMoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVNYWluSGVpZ2h0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbWF4SGVpZ2h0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1IZWlnaHQodGhpcy5kYXRhLnN1Ykl0ZW1zKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTWFpbkhlaWdodCgpO1xuICAgICAgICB9LFxuICAgICAgICBtYWluQWN0aXZlSW5kZXg6ICd1cGRhdGVTdWJJdGVtcydcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgLy8g5b2T5LiA5Liq5a2Q6aG56KKr6YCJ5oup5pe2XG4gICAgICAgIG9uU2VsZWN0SXRlbTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pdGVtO1xuICAgICAgICAgICAgaWYgKCFpdGVtLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2staXRlbScsIGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyDlvZPkuIDkuKrlr7zoiKrooqvngrnlh7vml7ZcbiAgICAgICAgb25DbGlja05hdjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuZGF0YS5pdGVtc1tpbmRleF07XG4gICAgICAgICAgICBpZiAoIWl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljay1uYXYnLCB7IGluZGV4OiBpbmRleCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8g5pu05paw5a2Q6aG55YiX6KGoXG4gICAgICAgIHVwZGF0ZVN1Ykl0ZW1zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIGl0ZW1zID0gX2EuaXRlbXMsIG1haW5BY3RpdmVJbmRleCA9IF9hLm1haW5BY3RpdmVJbmRleDtcbiAgICAgICAgICAgIHZhciBfYiA9IChpdGVtc1ttYWluQWN0aXZlSW5kZXhdIHx8IHt9KS5jaGlsZHJlbiwgY2hpbGRyZW4gPSBfYiA9PT0gdm9pZCAwID8gW10gOiBfYjtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlbUhlaWdodChjaGlsZHJlbik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXQoeyBzdWJJdGVtczogY2hpbGRyZW4gfSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIOabtOaWsOe7hOS7tuaVtOS9k+mrmOW6pu+8jOagueaNruacgOWkp+mrmOW6puWSjOW9k+WJjee7hOS7tumcgOimgeWxleekuueahOmrmOW6puadpeWGs+WumlxuICAgICAgICB1cGRhdGVNYWluSGVpZ2h0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIF9iID0gX2EuaXRlbXMsIGl0ZW1zID0gX2IgPT09IHZvaWQgMCA/IFtdIDogX2IsIF9jID0gX2Euc3ViSXRlbXMsIHN1Ykl0ZW1zID0gX2MgPT09IHZvaWQgMCA/IFtdIDogX2M7XG4gICAgICAgICAgICB2YXIgbWF4SGVpZ2h0ID0gTWF0aC5tYXgoaXRlbXMubGVuZ3RoICogSVRFTV9IRUlHSFQsIHN1Ykl0ZW1zLmxlbmd0aCAqIElURU1fSEVJR0hUKTtcbiAgICAgICAgICAgIHRoaXMuc2V0KHsgbWFpbkhlaWdodDogTWF0aC5taW4obWF4SGVpZ2h0LCB0aGlzLmRhdGEubWF4SGVpZ2h0KSB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5pu05paw5a2Q6aG55YiX6KGo6auY5bqm77yM5qC55o2u5Y+v5bGV56S655qE5pyA5aSn6auY5bqm5ZKM5b2T5YmN5a2Q6aG55YiX6KGo55qE6auY5bqm5Yaz5a6aXG4gICAgICAgIHVwZGF0ZUl0ZW1IZWlnaHQ6IGZ1bmN0aW9uIChzdWJJdGVtcykge1xuICAgICAgICAgICAgdmFyIGl0ZW1IZWlnaHQgPSBNYXRoLm1pbihzdWJJdGVtcy5sZW5ndGggKiBJVEVNX0hFSUdIVCwgdGhpcy5kYXRhLm1heEhlaWdodCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXQoeyBpdGVtSGVpZ2h0OiBpdGVtSGVpZ2h0IH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=