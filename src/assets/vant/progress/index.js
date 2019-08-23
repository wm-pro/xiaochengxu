"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var color_1 = require('./../common/color.js');
component_1.VantComponent({
    props: {
        inactive: Boolean,
        percentage: Number,
        pivotText: String,
        pivotColor: String,
        showPivot: {
            type: Boolean,
            value: true
        },
        color: {
            type: String,
            value: color_1.BLUE
        },
        textColor: {
            type: String,
            value: '#fff'
        }
    },
    data: {
        pivotWidth: 0,
        progressWidth: 0
    },
    watch: {
        pivotText: 'getWidth',
        showPivot: 'getWidth'
    },
    computed: {
        portionStyle: function portionStyle() {
            var width = (this.data.progressWidth - this.data.pivotWidth) * this.data.percentage / 100 + 'px';
            var background = this.getCurrentColor();
            return "width: " + width + "; background: " + background + "; ";
        },
        pivotStyle: function pivotStyle() {
            var color = this.data.textColor;
            var background = this.data.pivotColor || this.getCurrentColor();
            return "color: " + color + "; background: " + background;
        },
        text: function text() {
            return this.data.pivotText || this.data.percentage + '%';
        }
    },
    mounted: function mounted() {
        this.getWidth();
    },
    methods: {
        getCurrentColor: function getCurrentColor() {
            return this.data.inactive ? '#cacaca' : this.data.color;
        },
        getWidth: function getWidth() {
            var _this = this;
            this.getRect('.van-progress').then(function (rect) {
                _this.set({
                    progressWidth: rect.width
                });
            });
            this.getRect('.van-progress__pivot').then(function (rect) {
                _this.set({
                    pivotWidth: rect.width || 0
                });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiY29sb3JfMSIsIlZhbnRDb21wb25lbnQiLCJwcm9wcyIsImluYWN0aXZlIiwiQm9vbGVhbiIsInBlcmNlbnRhZ2UiLCJOdW1iZXIiLCJwaXZvdFRleHQiLCJTdHJpbmciLCJwaXZvdENvbG9yIiwic2hvd1Bpdm90IiwidHlwZSIsImNvbG9yIiwiQkxVRSIsInRleHRDb2xvciIsImRhdGEiLCJwaXZvdFdpZHRoIiwicHJvZ3Jlc3NXaWR0aCIsIndhdGNoIiwiY29tcHV0ZWQiLCJwb3J0aW9uU3R5bGUiLCJ3aWR0aCIsImJhY2tncm91bmQiLCJnZXRDdXJyZW50Q29sb3IiLCJwaXZvdFN0eWxlIiwidGV4dCIsIm1vdW50ZWQiLCJnZXRXaWR0aCIsIm1ldGhvZHMiLCJfdGhpcyIsImdldFJlY3QiLCJ0aGVuIiwicmVjdCIsInNldCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQSxJQUFJQyxVQUFVRCxRQUFRLGlCQUFSLENBQWQ7QUFDQUQsWUFBWUcsYUFBWixDQUEwQjtBQUN0QkMsV0FBTztBQUNIQyxrQkFBVUMsT0FEUDtBQUVIQyxvQkFBWUMsTUFGVDtBQUdIQyxtQkFBV0MsTUFIUjtBQUlIQyxvQkFBWUQsTUFKVDtBQUtIRSxtQkFBVztBQUNQQyxrQkFBTVAsT0FEQztBQUVQUCxtQkFBTztBQUZBLFNBTFI7QUFTSGUsZUFBTztBQUNIRCxrQkFBTUgsTUFESDtBQUVIWCxtQkFBT0csUUFBUWE7QUFGWixTQVRKO0FBYUhDLG1CQUFXO0FBQ1BILGtCQUFNSCxNQURDO0FBRVBYLG1CQUFPO0FBRkE7QUFiUixLQURlO0FBbUJ0QmtCLFVBQU07QUFDRkMsb0JBQVksQ0FEVjtBQUVGQyx1QkFBZTtBQUZiLEtBbkJnQjtBQXVCdEJDLFdBQU87QUFDSFgsbUJBQVcsVUFEUjtBQUVIRyxtQkFBVztBQUZSLEtBdkJlO0FBMkJ0QlMsY0FBVTtBQUNOQyxzQkFBYyx3QkFBWTtBQUN0QixnQkFBSUMsUUFBUSxDQUFDLEtBQUtOLElBQUwsQ0FBVUUsYUFBVixHQUEwQixLQUFLRixJQUFMLENBQVVDLFVBQXJDLElBQW1ELEtBQUtELElBQUwsQ0FBVVYsVUFBN0QsR0FBMEUsR0FBMUUsR0FBZ0YsSUFBNUY7QUFDQSxnQkFBSWlCLGFBQWEsS0FBS0MsZUFBTCxFQUFqQjtBQUNBLG1CQUFPLFlBQVlGLEtBQVosR0FBb0IsZ0JBQXBCLEdBQXVDQyxVQUF2QyxHQUFvRCxJQUEzRDtBQUNILFNBTEs7QUFNTkUsb0JBQVksc0JBQVk7QUFDcEIsZ0JBQUlaLFFBQVEsS0FBS0csSUFBTCxDQUFVRCxTQUF0QjtBQUNBLGdCQUFJUSxhQUFhLEtBQUtQLElBQUwsQ0FBVU4sVUFBVixJQUF3QixLQUFLYyxlQUFMLEVBQXpDO0FBQ0EsbUJBQU8sWUFBWVgsS0FBWixHQUFvQixnQkFBcEIsR0FBdUNVLFVBQTlDO0FBQ0gsU0FWSztBQVdORyxjQUFNLGdCQUFZO0FBQ2QsbUJBQU8sS0FBS1YsSUFBTCxDQUFVUixTQUFWLElBQXVCLEtBQUtRLElBQUwsQ0FBVVYsVUFBVixHQUF1QixHQUFyRDtBQUNIO0FBYkssS0EzQlk7QUEwQ3RCcUIsYUFBUyxtQkFBWTtBQUNqQixhQUFLQyxRQUFMO0FBQ0gsS0E1Q3FCO0FBNkN0QkMsYUFBUztBQUNMTCx5QkFBaUIsMkJBQVk7QUFDekIsbUJBQU8sS0FBS1IsSUFBTCxDQUFVWixRQUFWLEdBQXFCLFNBQXJCLEdBQWlDLEtBQUtZLElBQUwsQ0FBVUgsS0FBbEQ7QUFDSCxTQUhJO0FBSUxlLGtCQUFVLG9CQUFZO0FBQ2xCLGdCQUFJRSxRQUFRLElBQVo7QUFDQSxpQkFBS0MsT0FBTCxDQUFhLGVBQWIsRUFBOEJDLElBQTlCLENBQW1DLFVBQVVDLElBQVYsRUFBZ0I7QUFDL0NILHNCQUFNSSxHQUFOLENBQVU7QUFDTmhCLG1DQUFlZSxLQUFLWDtBQURkLGlCQUFWO0FBR0gsYUFKRDtBQUtBLGlCQUFLUyxPQUFMLENBQWEsc0JBQWIsRUFBcUNDLElBQXJDLENBQTBDLFVBQVVDLElBQVYsRUFBZ0I7QUFDdERILHNCQUFNSSxHQUFOLENBQVU7QUFDTmpCLGdDQUFZZ0IsS0FBS1gsS0FBTCxJQUFjO0FBRHBCLGlCQUFWO0FBR0gsYUFKRDtBQUtIO0FBaEJJO0FBN0NhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbnZhciBjb2xvcl8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb2xvclwiKTtcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xuICAgIHByb3BzOiB7XG4gICAgICAgIGluYWN0aXZlOiBCb29sZWFuLFxuICAgICAgICBwZXJjZW50YWdlOiBOdW1iZXIsXG4gICAgICAgIHBpdm90VGV4dDogU3RyaW5nLFxuICAgICAgICBwaXZvdENvbG9yOiBTdHJpbmcsXG4gICAgICAgIHNob3dQaXZvdDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogY29sb3JfMS5CTFVFXG4gICAgICAgIH0sXG4gICAgICAgIHRleHRDb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcjZmZmJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIHBpdm90V2lkdGg6IDAsXG4gICAgICAgIHByb2dyZXNzV2lkdGg6IDBcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIHBpdm90VGV4dDogJ2dldFdpZHRoJyxcbiAgICAgICAgc2hvd1Bpdm90OiAnZ2V0V2lkdGgnXG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBwb3J0aW9uU3R5bGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB3aWR0aCA9ICh0aGlzLmRhdGEucHJvZ3Jlc3NXaWR0aCAtIHRoaXMuZGF0YS5waXZvdFdpZHRoKSAqIHRoaXMuZGF0YS5wZXJjZW50YWdlIC8gMTAwICsgJ3B4JztcbiAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kID0gdGhpcy5nZXRDdXJyZW50Q29sb3IoKTtcbiAgICAgICAgICAgIHJldHVybiBcIndpZHRoOiBcIiArIHdpZHRoICsgXCI7IGJhY2tncm91bmQ6IFwiICsgYmFja2dyb3VuZCArIFwiOyBcIjtcbiAgICAgICAgfSxcbiAgICAgICAgcGl2b3RTdHlsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbG9yID0gdGhpcy5kYXRhLnRleHRDb2xvcjtcbiAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kID0gdGhpcy5kYXRhLnBpdm90Q29sb3IgfHwgdGhpcy5nZXRDdXJyZW50Q29sb3IoKTtcbiAgICAgICAgICAgIHJldHVybiBcImNvbG9yOiBcIiArIGNvbG9yICsgXCI7IGJhY2tncm91bmQ6IFwiICsgYmFja2dyb3VuZDtcbiAgICAgICAgfSxcbiAgICAgICAgdGV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5waXZvdFRleHQgfHwgdGhpcy5kYXRhLnBlcmNlbnRhZ2UgKyAnJSc7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5nZXRXaWR0aCgpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnZXRDdXJyZW50Q29sb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuaW5hY3RpdmUgPyAnI2NhY2FjYScgOiB0aGlzLmRhdGEuY29sb3I7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFdpZHRoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5nZXRSZWN0KCcudmFuLXByb2dyZXNzJykudGhlbihmdW5jdGlvbiAocmVjdCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzV2lkdGg6IHJlY3Qud2lkdGhcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5nZXRSZWN0KCcudmFuLXByb2dyZXNzX19waXZvdCcpLnRoZW4oZnVuY3Rpb24gKHJlY3QpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgICAgICBwaXZvdFdpZHRoOiByZWN0LndpZHRoIHx8IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=