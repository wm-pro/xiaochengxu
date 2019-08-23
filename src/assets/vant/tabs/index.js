"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var touch_1 = require('./../mixins/touch.js');
component_1.VantComponent({
    mixins: [touch_1.touch],
    classes: ['nav-class', 'tab-class', 'tab-active-class', 'line-class'],
    relation: {
        name: 'tab',
        type: 'descendant',
        linked: function linked(child) {
            this.child.push(child);
            this.updateTabs(this.data.tabs.concat(child.data));
        },
        unlinked: function unlinked(child) {
            var index = this.child.indexOf(child);
            var tabs = this.data.tabs;
            tabs.splice(index, 1);
            this.child.splice(index, 1);
            this.updateTabs(tabs);
        }
    },
    props: {
        color: String,
        sticky: Boolean,
        animated: Boolean,
        swipeable: Boolean,
        lineWidth: {
            type: Number,
            value: -1
        },
        lineHeight: {
            type: Number,
            value: -1
        },
        active: {
            type: Number,
            value: 0
        },
        type: {
            type: String,
            value: 'line'
        },
        border: {
            type: Boolean,
            value: true
        },
        duration: {
            type: Number,
            value: 0.3
        },
        zIndex: {
            type: Number,
            value: 1
        },
        swipeThreshold: {
            type: Number,
            value: 4
        },
        offsetTop: {
            type: Number,
            value: 0
        }
    },
    data: {
        tabs: [],
        lineStyle: '',
        scrollLeft: 0,
        scrollable: false,
        trackStyle: '',
        wrapStyle: '',
        position: ''
    },
    watch: {
        swipeThreshold: function swipeThreshold() {
            this.set({
                scrollable: this.child.length > this.data.swipeThreshold
            });
        },
        color: 'setLine',
        lineWidth: 'setLine',
        lineHeight: 'setLine',
        active: 'setActiveTab',
        animated: 'setTrack',
        offsetTop: 'setWrapStyle'
    },
    beforeCreate: function beforeCreate() {
        this.child = [];
    },
    mounted: function mounted() {
        var _this = this;
        this.setLine(true);
        this.setTrack();
        this.scrollIntoView();
        this.getRect('.van-tabs__wrap').then(function (rect) {
            _this.navHeight = rect.height;
            _this.observerContentScroll();
        });
    },
    destroyed: function destroyed() {
        this.createIntersectionObserver().disconnect();
    },
    methods: {
        updateTabs: function updateTabs(tabs) {
            tabs = tabs || this.data.tabs;
            this.set({
                tabs: tabs,
                scrollable: tabs.length > this.data.swipeThreshold
            });
            this.setActiveTab();
        },
        trigger: function trigger(eventName, index) {
            this.$emit(eventName, {
                index: index,
                title: this.data.tabs[index].title
            });
        },
        onTap: function onTap(event) {
            var index = event.currentTarget.dataset.index;
            if (this.data.tabs[index].disabled) {
                this.trigger('disabled', index);
            } else {
                this.trigger('click', index);
                this.setActive(index);
            }
        },
        setActive: function setActive(active) {
            if (active !== this.data.active) {
                this.trigger('change', active);
                this.set({ active: active });
                this.setActiveTab();
            }
        },
        setLine: function setLine(skipTransition) {
            var _this = this;
            if (this.data.type !== 'line') {
                return;
            }
            var _a = this.data,
                color = _a.color,
                active = _a.active,
                duration = _a.duration,
                lineWidth = _a.lineWidth,
                lineHeight = _a.lineHeight;
            this.getRect('.van-tab', true).then(function (rects) {
                var rect = rects[active];
                var width = lineWidth !== -1 ? lineWidth : rect.width / 2;
                var height = lineHeight !== -1 ? "height: " + lineHeight + "px;" : '';
                var left = rects.slice(0, active).reduce(function (prev, curr) {
                    return prev + curr.width;
                }, 0);
                left += (rect.width - width) / 2;
                var transition = skipTransition ? '' : "transition-duration: " + duration + "s; -webkit-transition-duration: " + duration + "s;";
                _this.set({
                    lineStyle: "\n            " + height + "\n            width: " + width + "px;\n            background-color: " + color + ";\n            -webkit-transform: translateX(" + left + "px);\n            transform: translateX(" + left + "px);\n            " + transition + "\n          "
                });
            });
        },
        setTrack: function setTrack() {
            var _this = this;
            var _a = this.data,
                animated = _a.animated,
                active = _a.active,
                duration = _a.duration;
            if (!animated) return '';
            this.getRect('.van-tabs__content').then(function (rect) {
                var width = rect.width;
                _this.set({
                    trackStyle: "\n            width: " + width * _this.child.length + "px;\n            left: " + -1 * active * width + "px;\n            transition: left " + duration + "s;\n            display: -webkit-box;\n            display: flex;\n          "
                });
                var props = { width: width, animated: animated };
                _this.child.forEach(function (item) {
                    item.set(props);
                });
            });
        },
        setActiveTab: function setActiveTab() {
            var _this = this;
            this.child.forEach(function (item, index) {
                var data = {
                    active: index === _this.data.active
                };
                if (data.active) {
                    data.inited = true;
                }
                if (data.active !== item.data.active) {
                    item.set(data);
                }
            });
            this.set({}, function () {
                _this.setLine();
                _this.setTrack();
                _this.scrollIntoView();
            });
        },
        // scroll active tab into view
        scrollIntoView: function scrollIntoView() {
            var _this = this;
            var _a = this.data,
                active = _a.active,
                scrollable = _a.scrollable;
            if (!scrollable) {
                return;
            }
            Promise.all([this.getRect('.van-tab', true), this.getRect('.van-tabs__nav')]).then(function (_a) {
                var tabRects = _a[0],
                    navRect = _a[1];
                var tabRect = tabRects[active];
                var offsetLeft = tabRects.slice(0, active).reduce(function (prev, curr) {
                    return prev + curr.width;
                }, 0);
                _this.set({
                    scrollLeft: offsetLeft - (navRect.width - tabRect.width) / 2
                });
            });
        },
        onTouchStart: function onTouchStart(event) {
            if (!this.data.swipeable) return;
            this.touchStart(event);
        },
        onTouchMove: function onTouchMove(event) {
            if (!this.data.swipeable) return;
            this.touchMove(event);
        },
        // watch swipe touch end
        onTouchEnd: function onTouchEnd() {
            if (!this.data.swipeable) return;
            var _a = this.data,
                active = _a.active,
                tabs = _a.tabs;
            var _b = this,
                direction = _b.direction,
                deltaX = _b.deltaX,
                offsetX = _b.offsetX;
            var minSwipeDistance = 50;
            if (direction === 'horizontal' && offsetX >= minSwipeDistance) {
                if (deltaX > 0 && active !== 0) {
                    this.setActive(active - 1);
                } else if (deltaX < 0 && active !== tabs.length - 1) {
                    this.setActive(active + 1);
                }
            }
        },
        setWrapStyle: function setWrapStyle() {
            var _a = this.data,
                offsetTop = _a.offsetTop,
                position = _a.position;
            var wrapStyle;
            switch (position) {
                case 'top':
                    wrapStyle = "\n            top: " + offsetTop + "px;\n            position: fixed;\n          ";
                    break;
                case 'bottom':
                    wrapStyle = "\n            top: auto;\n            bottom: 0;\n          ";
                    break;
                default:
                    wrapStyle = '';
            }
            // cut down `set`
            if (wrapStyle === this.data.wrapStyle) return;
            this.set({ wrapStyle: wrapStyle });
        },
        observerContentScroll: function observerContentScroll() {
            var _this = this;
            if (!this.data.sticky) {
                return;
            }
            var offsetTop = this.data.offsetTop;
            var windowHeight = wx.getSystemInfoSync().windowHeight;
            this.createIntersectionObserver().disconnect();
            this.createIntersectionObserver().relativeToViewport({ top: -(this.navHeight + offsetTop) }).observe('.van-tabs', function (res) {
                var top = res.boundingClientRect.top;
                if (top > offsetTop) {
                    return;
                }
                var position = res.intersectionRatio > 0 ? 'top' : 'bottom';
                _this.$emit('scroll', {
                    scrollTop: top + offsetTop,
                    isFixed: position === 'top'
                });
                _this.setPosition(position);
            });
            this.createIntersectionObserver().relativeToViewport({ bottom: -(windowHeight - 1 - offsetTop) }).observe('.van-tabs', function (res) {
                var _a = res.boundingClientRect,
                    top = _a.top,
                    bottom = _a.bottom;
                if (bottom < _this.navHeight) {
                    return;
                }
                var position = res.intersectionRatio > 0 ? 'top' : '';
                _this.$emit('scroll', {
                    scrollTop: top + offsetTop,
                    isFixed: position === 'top'
                });
                _this.setPosition(position);
            });
        },
        setPosition: function setPosition(position) {
            var _this = this;
            if (position !== this.data.position) {
                this.set({ position: position }).then(function () {
                    _this.setWrapStyle();
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwidG91Y2hfMSIsIlZhbnRDb21wb25lbnQiLCJtaXhpbnMiLCJ0b3VjaCIsImNsYXNzZXMiLCJyZWxhdGlvbiIsIm5hbWUiLCJ0eXBlIiwibGlua2VkIiwiY2hpbGQiLCJwdXNoIiwidXBkYXRlVGFicyIsImRhdGEiLCJ0YWJzIiwiY29uY2F0IiwidW5saW5rZWQiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJwcm9wcyIsImNvbG9yIiwiU3RyaW5nIiwic3RpY2t5IiwiQm9vbGVhbiIsImFuaW1hdGVkIiwic3dpcGVhYmxlIiwibGluZVdpZHRoIiwiTnVtYmVyIiwibGluZUhlaWdodCIsImFjdGl2ZSIsImJvcmRlciIsImR1cmF0aW9uIiwiekluZGV4Iiwic3dpcGVUaHJlc2hvbGQiLCJvZmZzZXRUb3AiLCJsaW5lU3R5bGUiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsYWJsZSIsInRyYWNrU3R5bGUiLCJ3cmFwU3R5bGUiLCJwb3NpdGlvbiIsIndhdGNoIiwic2V0IiwibGVuZ3RoIiwiYmVmb3JlQ3JlYXRlIiwibW91bnRlZCIsIl90aGlzIiwic2V0TGluZSIsInNldFRyYWNrIiwic2Nyb2xsSW50b1ZpZXciLCJnZXRSZWN0IiwidGhlbiIsInJlY3QiLCJuYXZIZWlnaHQiLCJoZWlnaHQiLCJvYnNlcnZlckNvbnRlbnRTY3JvbGwiLCJkZXN0cm95ZWQiLCJjcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlciIsImRpc2Nvbm5lY3QiLCJtZXRob2RzIiwic2V0QWN0aXZlVGFiIiwidHJpZ2dlciIsImV2ZW50TmFtZSIsIiRlbWl0IiwidGl0bGUiLCJvblRhcCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJkaXNhYmxlZCIsInNldEFjdGl2ZSIsInNraXBUcmFuc2l0aW9uIiwiX2EiLCJyZWN0cyIsIndpZHRoIiwibGVmdCIsInNsaWNlIiwicmVkdWNlIiwicHJldiIsImN1cnIiLCJ0cmFuc2l0aW9uIiwiZm9yRWFjaCIsIml0ZW0iLCJpbml0ZWQiLCJQcm9taXNlIiwiYWxsIiwidGFiUmVjdHMiLCJuYXZSZWN0IiwidGFiUmVjdCIsIm9mZnNldExlZnQiLCJvblRvdWNoU3RhcnQiLCJ0b3VjaFN0YXJ0Iiwib25Ub3VjaE1vdmUiLCJ0b3VjaE1vdmUiLCJvblRvdWNoRW5kIiwiX2IiLCJkaXJlY3Rpb24iLCJkZWx0YVgiLCJvZmZzZXRYIiwibWluU3dpcGVEaXN0YW5jZSIsInNldFdyYXBTdHlsZSIsIndpbmRvd0hlaWdodCIsInd4IiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJyZWxhdGl2ZVRvVmlld3BvcnQiLCJ0b3AiLCJvYnNlcnZlIiwicmVzIiwiYm91bmRpbmdDbGllbnRSZWN0IiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJzY3JvbGxUb3AiLCJpc0ZpeGVkIiwic2V0UG9zaXRpb24iLCJib3R0b20iXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0EsSUFBSUMsVUFBVUQsUUFBUSxpQkFBUixDQUFkO0FBQ0FELFlBQVlHLGFBQVosQ0FBMEI7QUFDdEJDLFlBQVEsQ0FBQ0YsUUFBUUcsS0FBVCxDQURjO0FBRXRCQyxhQUFTLENBQUMsV0FBRCxFQUFjLFdBQWQsRUFBMkIsa0JBQTNCLEVBQStDLFlBQS9DLENBRmE7QUFHdEJDLGNBQVU7QUFDTkMsY0FBTSxLQURBO0FBRU5DLGNBQU0sWUFGQTtBQUdOQyxnQkFBUSxnQkFBVUMsS0FBVixFQUFpQjtBQUNyQixpQkFBS0EsS0FBTCxDQUFXQyxJQUFYLENBQWdCRCxLQUFoQjtBQUNBLGlCQUFLRSxVQUFMLENBQWdCLEtBQUtDLElBQUwsQ0FBVUMsSUFBVixDQUFlQyxN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Y2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xudmFyIHRvdWNoXzEgPSByZXF1aXJlKFwiLi4vbWl4aW5zL3RvdWNoXCIpO1xuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XG4gICAgbWl4aW5zOiBbdG91Y2hfMS50b3VjaF0sXG4gICAgY2xhc3NlczogWyduYXYtY2xhc3MnLCAndGFiLWNsYXNzJywgJ3RhYi1hY3RpdmUtY2xhc3MnLCAnbGluZS1jbGFzcyddLFxuICAgIHJlbGF0aW9uOiB7XG4gICAgICAgIG5hbWU6ICd0YWInLFxuICAgICAgICB0eXBlOiAnZGVzY2VuZGFudCcsXG4gICAgICAgIGxpbmtlZDogZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUYWJzKHRoaXMuZGF0YS50YWJzLmNvbmNhdChjaGlsZC5kYXRhKSk7XG4gICAgICAgIH0sXG4gICAgICAgIHVubGlua2VkOiBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGQuaW5kZXhPZihjaGlsZCk7XG4gICAgICAgICAgICB2YXIgdGFicyA9IHRoaXMuZGF0YS50YWJzO1xuICAgICAgICAgICAgdGFicy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdGhpcy5jaGlsZC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUYWJzKHRhYnMpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBjb2xvcjogU3RyaW5nLFxuICAgICAgICBzdGlja3k6IEJvb2xlYW4sXG4gICAgICAgIGFuaW1hdGVkOiBCb29sZWFuLFxuICAgICAgICBzd2lwZWFibGU6IEJvb2xlYW4sXG4gICAgICAgIGxpbmVXaWR0aDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IC0xXG4gICAgICAgIH0sXG4gICAgICAgIGxpbmVIZWlnaHQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAtMVxuICAgICAgICB9LFxuICAgICAgICBhY3RpdmU6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnbGluZSdcbiAgICAgICAgfSxcbiAgICAgICAgYm9yZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAwLjNcbiAgICAgICAgfSxcbiAgICAgICAgekluZGV4OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMVxuICAgICAgICB9LFxuICAgICAgICBzd2lwZVRocmVzaG9sZDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDRcbiAgICAgICAgfSxcbiAgICAgICAgb2Zmc2V0VG9wOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIHRhYnM6IFtdLFxuICAgICAgICBsaW5lU3R5bGU6ICcnLFxuICAgICAgICBzY3JvbGxMZWZ0OiAwLFxuICAgICAgICBzY3JvbGxhYmxlOiBmYWxzZSxcbiAgICAgICAgdHJhY2tTdHlsZTogJycsXG4gICAgICAgIHdyYXBTdHlsZTogJycsXG4gICAgICAgIHBvc2l0aW9uOiAnJ1xuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgc3dpcGVUaHJlc2hvbGQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICBzY3JvbGxhYmxlOiB0aGlzLmNoaWxkLmxlbmd0aCA+IHRoaXMuZGF0YS5zd2lwZVRocmVzaG9sZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbG9yOiAnc2V0TGluZScsXG4gICAgICAgIGxpbmVXaWR0aDogJ3NldExpbmUnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnc2V0TGluZScsXG4gICAgICAgIGFjdGl2ZTogJ3NldEFjdGl2ZVRhYicsXG4gICAgICAgIGFuaW1hdGVkOiAnc2V0VHJhY2snLFxuICAgICAgICBvZmZzZXRUb3A6ICdzZXRXcmFwU3R5bGUnXG4gICAgfSxcbiAgICBiZWZvcmVDcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jaGlsZCA9IFtdO1xuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnNldExpbmUodHJ1ZSk7XG4gICAgICAgIHRoaXMuc2V0VHJhY2soKTtcbiAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB0aGlzLmdldFJlY3QoJy52YW4tdGFic19fd3JhcCcpLnRoZW4oZnVuY3Rpb24gKHJlY3QpIHtcbiAgICAgICAgICAgIF90aGlzLm5hdkhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgICAgICAgX3RoaXMub2JzZXJ2ZXJDb250ZW50U2Nyb2xsKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZGVzdHJveWVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKS5kaXNjb25uZWN0KCk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHVwZGF0ZVRhYnM6IGZ1bmN0aW9uICh0YWJzKSB7XG4gICAgICAgICAgICB0YWJzID0gdGFicyB8fCB0aGlzLmRhdGEudGFicztcbiAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICB0YWJzOiB0YWJzLFxuICAgICAgICAgICAgICAgIHNjcm9sbGFibGU6IHRhYnMubGVuZ3RoID4gdGhpcy5kYXRhLnN3aXBlVGhyZXNob2xkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlVGFiKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHRyaWdnZXI6IGZ1bmN0aW9uIChldmVudE5hbWUsIGluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KGV2ZW50TmFtZSwge1xuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5kYXRhLnRhYnNbaW5kZXhdLnRpdGxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25UYXA6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS50YWJzW2luZGV4XS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcignZGlzYWJsZWQnLCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2NsaWNrJywgaW5kZXgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0QWN0aXZlOiBmdW5jdGlvbiAoYWN0aXZlKSB7XG4gICAgICAgICAgICBpZiAoYWN0aXZlICE9PSB0aGlzLmRhdGEuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdjaGFuZ2UnLCBhY3RpdmUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHsgYWN0aXZlOiBhY3RpdmUgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVUYWIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0TGluZTogZnVuY3Rpb24gKHNraXBUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS50eXBlICE9PSAnbGluZScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIGNvbG9yID0gX2EuY29sb3IsIGFjdGl2ZSA9IF9hLmFjdGl2ZSwgZHVyYXRpb24gPSBfYS5kdXJhdGlvbiwgbGluZVdpZHRoID0gX2EubGluZVdpZHRoLCBsaW5lSGVpZ2h0ID0gX2EubGluZUhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVjdCgnLnZhbi10YWInLCB0cnVlKS50aGVuKGZ1bmN0aW9uIChyZWN0cykge1xuICAgICAgICAgICAgICAgIHZhciByZWN0ID0gcmVjdHNbYWN0aXZlXTtcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSBsaW5lV2lkdGggIT09IC0xID8gbGluZVdpZHRoIDogcmVjdC53aWR0aCAvIDI7XG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IGxpbmVIZWlnaHQgIT09IC0xID8gXCJoZWlnaHQ6IFwiICsgbGluZUhlaWdodCArIFwicHg7XCIgOiAnJztcbiAgICAgICAgICAgICAgICB2YXIgbGVmdCA9IHJlY3RzXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCBhY3RpdmUpXG4gICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnIpIHsgcmV0dXJuIHByZXYgKyBjdXJyLndpZHRoOyB9LCAwKTtcbiAgICAgICAgICAgICAgICBsZWZ0ICs9IChyZWN0LndpZHRoIC0gd2lkdGgpIC8gMjtcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNpdGlvbiA9IHNraXBUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICAgICAgOiBcInRyYW5zaXRpb24tZHVyYXRpb246IFwiICsgZHVyYXRpb24gKyBcInM7IC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogXCIgKyBkdXJhdGlvbiArIFwicztcIjtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgICAgICBsaW5lU3R5bGU6IFwiXFxuICAgICAgICAgICAgXCIgKyBoZWlnaHQgKyBcIlxcbiAgICAgICAgICAgIHdpZHRoOiBcIiArIHdpZHRoICsgXCJweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiArIGNvbG9yICsgXCI7XFxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXCIgKyBsZWZ0ICsgXCJweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKFwiICsgbGVmdCArIFwicHgpO1xcbiAgICAgICAgICAgIFwiICsgdHJhbnNpdGlvbiArIFwiXFxuICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0VHJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIGFuaW1hdGVkID0gX2EuYW5pbWF0ZWQsIGFjdGl2ZSA9IF9hLmFjdGl2ZSwgZHVyYXRpb24gPSBfYS5kdXJhdGlvbjtcbiAgICAgICAgICAgIGlmICghYW5pbWF0ZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgdGhpcy5nZXRSZWN0KCcudmFuLXRhYnNfX2NvbnRlbnQnKS50aGVuKGZ1bmN0aW9uIChyZWN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gcmVjdC53aWR0aDtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgICAgICB0cmFja1N0eWxlOiBcIlxcbiAgICAgICAgICAgIHdpZHRoOiBcIiArIHdpZHRoICogX3RoaXMuY2hpbGQubGVuZ3RoICsgXCJweDtcXG4gICAgICAgICAgICBsZWZ0OiBcIiArIC0xICogYWN0aXZlICogd2lkdGggKyBcInB4O1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGxlZnQgXCIgKyBkdXJhdGlvbiArIFwicztcXG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBwcm9wcyA9IHsgd2lkdGg6IHdpZHRoLCBhbmltYXRlZDogYW5pbWF0ZWQgfTtcbiAgICAgICAgICAgICAgICBfdGhpcy5jaGlsZC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc2V0KHByb3BzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzZXRBY3RpdmVUYWI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmNoaWxkLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogaW5kZXggPT09IF90aGlzLmRhdGEuYWN0aXZlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pbml0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5hY3RpdmUgIT09IGl0ZW0uZGF0YS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zZXQoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNldCh7fSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNldExpbmUoKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRUcmFjaygpO1xuICAgICAgICAgICAgICAgIF90aGlzLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gc2Nyb2xsIGFjdGl2ZSB0YWIgaW50byB2aWV3XG4gICAgICAgIHNjcm9sbEludG9WaWV3OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCBhY3RpdmUgPSBfYS5hY3RpdmUsIHNjcm9sbGFibGUgPSBfYS5zY3JvbGxhYmxlO1xuICAgICAgICAgICAgaWYgKCFzY3JvbGxhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmVjdCgnLnZhbi10YWInLCB0cnVlKSxcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJlY3QoJy52YW4tdGFic19fbmF2JylcbiAgICAgICAgICAgIF0pLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhYlJlY3RzID0gX2FbMF0sIG5hdlJlY3QgPSBfYVsxXTtcbiAgICAgICAgICAgICAgICB2YXIgdGFiUmVjdCA9IHRhYlJlY3RzW2FjdGl2ZV07XG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldExlZnQgPSB0YWJSZWN0c1xuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgYWN0aXZlKVxuICAgICAgICAgICAgICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXJyKSB7IHJldHVybiBwcmV2ICsgY3Vyci53aWR0aDsgfSwgMCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsTGVmdDogb2Zmc2V0TGVmdCAtIChuYXZSZWN0LndpZHRoIC0gdGFiUmVjdC53aWR0aCkgLyAyXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Ub3VjaFN0YXJ0OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLnN3aXBlYWJsZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0aGlzLnRvdWNoU3RhcnQoZXZlbnQpO1xuICAgICAgICB9LFxuICAgICAgICBvblRvdWNoTW92ZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5zd2lwZWFibGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy50b3VjaE1vdmUoZXZlbnQpO1xuICAgICAgICB9LFxuICAgICAgICAvLyB3YXRjaCBzd2lwZSB0b3VjaCBlbmRcbiAgICAgICAgb25Ub3VjaEVuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuc3dpcGVhYmxlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgYWN0aXZlID0gX2EuYWN0aXZlLCB0YWJzID0gX2EudGFicztcbiAgICAgICAgICAgIHZhciBfYiA9IHRoaXMsIGRpcmVjdGlvbiA9IF9iLmRpcmVjdGlvbiwgZGVsdGFYID0gX2IuZGVsdGFYLCBvZmZzZXRYID0gX2Iub2Zmc2V0WDtcbiAgICAgICAgICAgIHZhciBtaW5Td2lwZURpc3RhbmNlID0gNTA7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgJiYgb2Zmc2V0WCA+PSBtaW5Td2lwZURpc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlbHRhWCA+IDAgJiYgYWN0aXZlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKGFjdGl2ZSAtIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkZWx0YVggPCAwICYmIGFjdGl2ZSAhPT0gdGFicy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKGFjdGl2ZSArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0V3JhcFN0eWxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIG9mZnNldFRvcCA9IF9hLm9mZnNldFRvcCwgcG9zaXRpb24gPSBfYS5wb3NpdGlvbjtcbiAgICAgICAgICAgIHZhciB3cmFwU3R5bGU7XG4gICAgICAgICAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICAgICAgd3JhcFN0eWxlID0gXCJcXG4gICAgICAgICAgICB0b3A6IFwiICsgb2Zmc2V0VG9wICsgXCJweDtcXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICAgIFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICAgICAgICB3cmFwU3R5bGUgPSBcIlxcbiAgICAgICAgICAgIHRvcDogYXV0bztcXG4gICAgICAgICAgICBib3R0b206IDA7XFxuICAgICAgICAgIFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB3cmFwU3R5bGUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGN1dCBkb3duIGBzZXRgXG4gICAgICAgICAgICBpZiAod3JhcFN0eWxlID09PSB0aGlzLmRhdGEud3JhcFN0eWxlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuc2V0KHsgd3JhcFN0eWxlOiB3cmFwU3R5bGUgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9ic2VydmVyQ29udGVudFNjcm9sbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLnN0aWNreSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvZmZzZXRUb3AgPSB0aGlzLmRhdGEub2Zmc2V0VG9wO1xuICAgICAgICAgICAgdmFyIHdpbmRvd0hlaWdodCA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcigpLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKVxuICAgICAgICAgICAgICAgIC5yZWxhdGl2ZVRvVmlld3BvcnQoeyB0b3A6IC0odGhpcy5uYXZIZWlnaHQgKyBvZmZzZXRUb3ApIH0pXG4gICAgICAgICAgICAgICAgLm9ic2VydmUoJy52YW4tdGFicycsIGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG9wID0gcmVzLmJvdW5kaW5nQ2xpZW50UmVjdC50b3A7XG4gICAgICAgICAgICAgICAgaWYgKHRvcCA+IG9mZnNldFRvcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHJlcy5pbnRlcnNlY3Rpb25SYXRpbyA+IDAgPyAndG9wJyA6ICdib3R0b20nO1xuICAgICAgICAgICAgICAgIF90aGlzLiRlbWl0KCdzY3JvbGwnLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdG9wICsgb2Zmc2V0VG9wLFxuICAgICAgICAgICAgICAgICAgICBpc0ZpeGVkOiBwb3NpdGlvbiA9PT0gJ3RvcCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKVxuICAgICAgICAgICAgICAgIC5yZWxhdGl2ZVRvVmlld3BvcnQoeyBib3R0b206IC0od2luZG93SGVpZ2h0IC0gMSAtIG9mZnNldFRvcCkgfSlcbiAgICAgICAgICAgICAgICAub2JzZXJ2ZSgnLnZhbi10YWJzJywgZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIHZhciBfYSA9IHJlcy5ib3VuZGluZ0NsaWVudFJlY3QsIHRvcCA9IF9hLnRvcCwgYm90dG9tID0gX2EuYm90dG9tO1xuICAgICAgICAgICAgICAgIGlmIChib3R0b20gPCBfdGhpcy5uYXZIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSByZXMuaW50ZXJzZWN0aW9uUmF0aW8gPiAwID8gJ3RvcCcgOiAnJztcbiAgICAgICAgICAgICAgICBfdGhpcy4kZW1pdCgnc2Nyb2xsJywge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRvcCArIG9mZnNldFRvcCxcbiAgICAgICAgICAgICAgICAgICAgaXNGaXhlZDogcG9zaXRpb24gPT09ICd0b3AnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0UG9zaXRpb24ocG9zaXRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldFBvc2l0aW9uOiBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAocG9zaXRpb24gIT09IHRoaXMuZGF0YS5wb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHsgcG9zaXRpb246IHBvc2l0aW9uIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRXcmFwU3R5bGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19