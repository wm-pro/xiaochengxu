"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var utils_1 = require('./../common/utils.js');
var DEFAULT_DURATION = 200;
component_1.VantComponent({
    classes: ['active-class'],
    props: {
        valueKey: String,
        className: String,
        itemHeight: Number,
        visibleItemCount: Number,
        initialOptions: {
            type: Array,
            value: []
        },
        defaultIndex: {
            type: Number,
            value: 0
        }
    },
    data: {
        startY: 0,
        offset: 0,
        duration: 0,
        startOffset: 0,
        options: [],
        currentIndex: 0
    },
    created: function created() {
        var _this = this;
        var _a = this.data,
            defaultIndex = _a.defaultIndex,
            initialOptions = _a.initialOptions;
        this.set({
            currentIndex: defaultIndex,
            options: initialOptions
        }).then(function () {
            _this.setIndex(defaultIndex);
        });
    },
    computed: {
        count: function count() {
            return this.data.options.length;
        },
        baseOffset: function baseOffset() {
            var data = this.data;
            return data.itemHeight * (data.visibleItemCount - 1) / 2;
        },
        wrapperStyle: function wrapperStyle() {
            var data = this.data;
            return ["transition: " + data.duration + "ms", "transform: translate3d(0, " + (data.offset + data.baseOffset) + "px, 0)", "line-height: " + data.itemHeight + "px"].join('; ');
        }
    },
    watch: {
        defaultIndex: function defaultIndex(value) {
            this.setIndex(value);
        }
    },
    methods: {
        onTouchStart: function onTouchStart(event) {
            this.set({
                startY: event.touches[0].clientY,
                startOffset: this.data.offset,
                duration: 0
            });
        },
        onTouchMove: function onTouchMove(event) {
            var data = this.data;
            var deltaY = event.touches[0].clientY - data.startY;
            this.set({
                offset: utils_1.range(data.startOffset + deltaY, -(data.count * data.itemHeight), data.itemHeight)
            });
        },
        onTouchEnd: function onTouchEnd() {
            var data = this.data;
            if (data.offset !== data.startOffset) {
                this.set({
                    duration: DEFAULT_DURATION
                });
                var index = utils_1.range(Math.round(-data.offset / data.itemHeight), 0, data.count - 1);
                this.setIndex(index, true);
            }
        },
        onClickItem: function onClickItem(event) {
            var index = event.currentTarget.dataset.index;
            this.setIndex(index, true);
        },
        adjustIndex: function adjustIndex(index) {
            var data = this.data;
            index = utils_1.range(index, 0, data.count);
            for (var i = index; i < data.count; i++) {
                if (!this.isDisabled(data.options[i])) return i;
            }
            for (var i = index - 1; i >= 0; i--) {
                if (!this.isDisabled(data.options[i])) return i;
            }
        },
        isDisabled: function isDisabled(option) {
            return utils_1.isObj(option) && option.disabled;
        },
        getOptionText: function getOptionText(option) {
            var data = this.data;
            return utils_1.isObj(option) && data.valueKey in option ? option[data.valueKey] : option;
        },
        setIndex: function setIndex(index, userAction) {
            var _this = this;
            var data = this.data;
            index = this.adjustIndex(index) || 0;
            var offset = -index * data.itemHeight;
            if (index !== data.currentIndex) {
                return this.set({ offset: offset, currentIndex: index }).then(function () {
                    userAction && _this.$emit('change', index);
                });
            } else {
                return this.set({ offset: offset });
            }
        },
        setValue: function setValue(value) {
            var options = this.data.options;
            for (var i = 0; i < options.length; i++) {
                if (this.getOptionText(options[i]) === value) {
                    return this.setIndex(i);
                }
            }
            return Promise.resolve();
        },
        getValue: function getValue() {
            var data = this.data;
            return data.options[data.currentIndex];
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwidXRpbHNfMSIsIkRFRkFVTFRfRFVSQVRJT04iLCJWYW50Q29tcG9uZW50IiwiY2xhc3NlcyIsInByb3BzIiwidmFsdWVLZXkiLCJTdHJpbmciLCJjbGFzc05hbWUiLCJpdGVtSGVpZ2h0IiwiTnVtYmVyIiwidmlzaWJsZUl0ZW1Db3VudCIsImluaXRpYWxPcHRpb25zIiwidHlwZSIsIkFycmF5IiwiZGVmYXVsdEluZGV4IiwiZGF0YSIsInN0YXJ0WSIsIm9mZnNldCIsImR1cmF0aW9uIiwic3RhcnRPZmZzZXQiLCJvcHRpb25zIiwiY3VycmVudEluZGV4IiwiY3JlYXRlZCIsIl90aGlzIiwiX2EiLCJzZXQiLCJ0aGVuIiwic2V0SW5kZXgiLCJjb21wdXRlZCIsImNvdW50IiwibGVuZ3RoIiwiYmFzZU9mZnNldCIsIndyYXBwZXJTdHlsZSIsImpvaW4iLCJ3YXRjaCIsIm1ldGhvZHMiLCJvblRvdWNoU3RhcnQiLCJldmVudCIsInRvdWNoZXMiLCJjbGllbnRZIiwib25Ub3VjaE1vdmUiLCJkZWx0YVkiLCJyYW5nZSIsIm9uVG91Y2hFbmQiLCJpbmRleCIsIk1hdGgiLCJyb3VuZCIsIm9uQ2xpY2tJdGVtIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJhZGp1c3RJbmRleCIsImkiLCJpc0Rpc2FibGVkIiwib3B0aW9uIiwiaXNPYmoiLCJkaXNhYmxlZCIsImdldE9wdGlvblRleHQiLCJ1c2VyQWN0aW9uIiwiJGVtaXQiLCJzZXRWYWx1ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZ2V0VmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFC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RUFBeUM7QUFDckMsb0JBQUksS0FBS0ssYUFBTCxDQUFtQnBDLFFBQVErQixDQUFSLENBQW5CLE1BQW1DdEQsS0FBdkMsRUFBOEM7QUFDMUMsMkJBQU8sS0FBSzhCLFFBQUwsQ0FBY3dCLENBQWQsQ0FBUDtBQUNIO0FBQ0o7QUFDRCxtQkFBT1MsUUFBUUMsT0FBUixFQUFQO0FBQ0gsU0F4RUk7QUF5RUxDLGtCQUFVLG9CQUFZO0FBQ2xCLGdCQUFJL0MsT0FBTyxLQUFLQSxJQUFoQjtBQUNBLG1CQUFPQSxLQUFLSyxPQUFMLENBQWFMLEtBQUtNLFlBQWxCLENBQVA7QUFDSDtBQTVFSTtBQXhEYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vdXRpbHNcIik7XG52YXIgREVGQVVMVF9EVVJBVElPTiA9IDIwMDtcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xuICAgIGNsYXNzZXM6IFsnYWN0aXZlLWNsYXNzJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdmFsdWVLZXk6IFN0cmluZyxcbiAgICAgICAgY2xhc3NOYW1lOiBTdHJpbmcsXG4gICAgICAgIGl0ZW1IZWlnaHQ6IE51bWJlcixcbiAgICAgICAgdmlzaWJsZUl0ZW1Db3VudDogTnVtYmVyLFxuICAgICAgICBpbml0aWFsT3B0aW9uczoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICB2YWx1ZTogW11cbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdEluZGV4OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIHN0YXJ0WTogMCxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgc3RhcnRPZmZzZXQ6IDAsXG4gICAgICAgIG9wdGlvbnM6IFtdLFxuICAgICAgICBjdXJyZW50SW5kZXg6IDBcbiAgICB9LFxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCBkZWZhdWx0SW5kZXggPSBfYS5kZWZhdWx0SW5kZXgsIGluaXRpYWxPcHRpb25zID0gX2EuaW5pdGlhbE9wdGlvbnM7XG4gICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleDogZGVmYXVsdEluZGV4LFxuICAgICAgICAgICAgb3B0aW9uczogaW5pdGlhbE9wdGlvbnNcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXRJbmRleChkZWZhdWx0SW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGNvdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLm9wdGlvbnMubGVuZ3RoO1xuICAgICAgICB9LFxuICAgICAgICBiYXNlT2Zmc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIHJldHVybiAoZGF0YS5pdGVtSGVpZ2h0ICogKGRhdGEudmlzaWJsZUl0ZW1Db3VudCAtIDEpKSAvIDI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyYXBwZXJTdHlsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvbjogXCIgKyBkYXRhLmR1cmF0aW9uICsgXCJtc1wiLFxuICAgICAgICAgICAgICAgIFwidHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCBcIiArIChkYXRhLm9mZnNldCArIGRhdGEuYmFzZU9mZnNldCkgKyBcInB4LCAwKVwiLFxuICAgICAgICAgICAgICAgIFwibGluZS1oZWlnaHQ6IFwiICsgZGF0YS5pdGVtSGVpZ2h0ICsgXCJweFwiXG4gICAgICAgICAgICBdLmpvaW4oJzsgJyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIGRlZmF1bHRJbmRleDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldEluZGV4KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgIHN0YXJ0WTogZXZlbnQudG91Y2hlc1swXS5jbGllbnRZLFxuICAgICAgICAgICAgICAgIHN0YXJ0T2Zmc2V0OiB0aGlzLmRhdGEub2Zmc2V0LFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Ub3VjaE1vdmU6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICB2YXIgZGVsdGFZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIC0gZGF0YS5zdGFydFk7XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgb2Zmc2V0OiB1dGlsc18xLnJhbmdlKGRhdGEuc3RhcnRPZmZzZXQgKyBkZWx0YVksIC0oZGF0YS5jb3VudCAqIGRhdGEuaXRlbUhlaWdodCksIGRhdGEuaXRlbUhlaWdodClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvblRvdWNoRW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGlmIChkYXRhLm9mZnNldCAhPT0gZGF0YS5zdGFydE9mZnNldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IERFRkFVTFRfRFVSQVRJT05cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB1dGlsc18xLnJhbmdlKE1hdGgucm91bmQoLWRhdGEub2Zmc2V0IC8gZGF0YS5pdGVtSGVpZ2h0KSwgMCwgZGF0YS5jb3VudCAtIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5kZXgoaW5kZXgsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrSXRlbTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICB0aGlzLnNldEluZGV4KGluZGV4LCB0cnVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRqdXN0SW5kZXg6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBpbmRleCA9IHV0aWxzXzEucmFuZ2UoaW5kZXgsIDAsIGRhdGEuY291bnQpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGluZGV4OyBpIDwgZGF0YS5jb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQoZGF0YS5vcHRpb25zW2ldKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gaW5kZXggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKGRhdGEub3B0aW9uc1tpXSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpc0Rpc2FibGVkOiBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdXRpbHNfMS5pc09iaihvcHRpb24pICYmIG9wdGlvbi5kaXNhYmxlZDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0T3B0aW9uVGV4dDogZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICByZXR1cm4gdXRpbHNfMS5pc09iaihvcHRpb24pICYmIGRhdGEudmFsdWVLZXkgaW4gb3B0aW9uXG4gICAgICAgICAgICAgICAgPyBvcHRpb25bZGF0YS52YWx1ZUtleV1cbiAgICAgICAgICAgICAgICA6IG9wdGlvbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0SW5kZXg6IGZ1bmN0aW9uIChpbmRleCwgdXNlckFjdGlvbikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgaW5kZXggPSB0aGlzLmFkanVzdEluZGV4KGluZGV4KSB8fCAwO1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IC1pbmRleCAqIGRhdGEuaXRlbUhlaWdodDtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gZGF0YS5jdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXQoeyBvZmZzZXQ6IG9mZnNldCwgY3VycmVudEluZGV4OiBpbmRleCB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlckFjdGlvbiAmJiBfdGhpcy4kZW1pdCgnY2hhbmdlJywgaW5kZXgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHsgb2Zmc2V0OiBvZmZzZXQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gdGhpcy5kYXRhLm9wdGlvbnM7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRPcHRpb25UZXh0KG9wdGlvbnNbaV0pID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRJbmRleChpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLm9wdGlvbnNbZGF0YS5jdXJyZW50SW5kZXhdO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=