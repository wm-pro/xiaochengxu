"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var safe_area_1 = require('./../mixins/safe-area.js');
component_1.VantComponent({
    mixins: [safe_area_1.safeArea({ safeAreaInsetTop: true })],
    classes: ['title-class'],
    props: {
        title: String,
        fixed: Boolean,
        leftText: String,
        rightText: String,
        leftArrow: Boolean,
        border: {
            type: Boolean,
            value: true
        },
        zIndex: {
            type: Number,
            value: 120
        }
    },
    methods: {
        onClickLeft: function onClickLeft() {
            this.$emit('click-left');
        },
        onClickRight: function onClickRight() {
            this.$emit('click-right');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwic2FmZV9hcmVhXzEiLCJWYW50Q29tcG9uZW50IiwibWl4aW5zIiwic2FmZUFyZWEiLCJzYWZlQXJlYUluc2V0VG9wIiwiY2xhc3NlcyIsInByb3BzIiwidGl0bGUiLCJTdHJpbmciLCJmaXhlZCIsIkJvb2xlYW4iLCJsZWZ0VGV4dCIsInJpZ2h0VGV4dCIsImxlZnRBcnJvdyIsImJvcmRlciIsInR5cGUiLCJ6SW5kZXgiLCJOdW1iZXIiLCJtZXRob2RzIiwib25DbGlja0xlZnQiLCIkZW1pdCIsIm9uQ2xpY2tSaWdodCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQSxJQUFJQyxjQUFjRCxRQUFRLHFCQUFSLENBQWxCO0FBQ0FELFlBQVlHLGFBQVosQ0FBMEI7QUFDdEJDLFlBQVEsQ0FBQ0YsWUFBWUcsUUFBWixDQUFxQixFQUFFQyxrQkFBa0IsSUFBcEIsRUFBckIsQ0FBRCxDQURjO0FBRXRCQyxhQUFTLENBQUMsYUFBRCxDQUZhO0FBR3RCQyxXQUFPO0FBQ0hDLGVBQU9DLE1BREo7QUFFSEMsZUFBT0MsT0FGSjtBQUdIQyxrQkFBVUgsTUFIUDtBQUlISSxtQkFBV0osTUFKUjtBQUtISyxtQkFBV0gsT0FMUjtBQU1ISSxnQkFBUTtBQUNKQyxrQkFBTUwsT0FERjtBQUVKYixtQkFBTztBQUZILFNBTkw7QUFVSG1CLGdCQUFRO0FBQ0pELGtCQUFNRSxNQURGO0FBRUpwQixtQkFBTztBQUZIO0FBVkwsS0FIZTtBQWtCdEJxQixhQUFTO0FBQ0xDLHFCQUFhLHVCQUFZO0FBQ3JCLGlCQUFLQyxLQUFMLENBQVcsWUFBWDtBQUNILFNBSEk7QUFJTEMsc0JBQWMsd0JBQVk7QUFDdEIsaUJBQUtELEtBQUwsQ0FBVyxhQUFYO0FBQ0g7QUFOSTtBQWxCYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG52YXIgc2FmZV9hcmVhXzEgPSByZXF1aXJlKFwiLi4vbWl4aW5zL3NhZmUtYXJlYVwiKTtcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xuICAgIG1peGluczogW3NhZmVfYXJlYV8xLnNhZmVBcmVhKHsgc2FmZUFyZWFJbnNldFRvcDogdHJ1ZSB9KV0sXG4gICAgY2xhc3NlczogWyd0aXRsZS1jbGFzcyddLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgICAgIGZpeGVkOiBCb29sZWFuLFxuICAgICAgICBsZWZ0VGV4dDogU3RyaW5nLFxuICAgICAgICByaWdodFRleHQ6IFN0cmluZyxcbiAgICAgICAgbGVmdEFycm93OiBCb29sZWFuLFxuICAgICAgICBib3JkZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB6SW5kZXg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAxMjBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbkNsaWNrTGVmdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2stbGVmdCcpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrUmlnaHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrLXJpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==