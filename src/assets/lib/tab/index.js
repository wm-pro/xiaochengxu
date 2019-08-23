"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    relation: {
        name: 'tabs',
        type: 'ancestor'
    },
    props: {
        dot: Boolean,
        info: null,
        title: String,
        disabled: Boolean,
        titleStyle: String
    },
    data: {
        width: null,
        inited: false,
        active: false,
        animated: false
    },
    watch: {
        title: 'update',
        disabled: 'update',
        dot: 'update',
        info: 'update',
        titleStyle: 'update'
    },
    methods: {
        update: function update() {
            var parent = this.getRelationNodes('../tabs/index')[0];
            if (parent) {
                parent.updateTabs();
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJwcm9wcyIsImRvdCIsIkJvb2xlYW4iLCJpbmZvIiwidGl0bGUiLCJTdHJpbmciLCJkaXNhYmxlZCIsInRpdGxlU3R5bGUiLCJkYXRhIiwid2lkdGgiLCJpbml0ZWQiLCJhY3RpdmUiLCJhbmltYXRlZCIsIndhdGNoIiwibWV0aG9kcyIsInVwZGF0ZSIsInBhcmVudCIsImdldFJlbGF0aW9uTm9kZXMiLCJ1cGRhdGVUYWJzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZRSxhQUFaLENBQTBCO0FBQ3RCQyxjQUFVO0FBQ05DLGNBQU0sTUFEQTtBQUVOQyxjQUFNO0FBRkEsS0FEWTtBQUt0QkMsV0FBTztBQUNIQyxhQUFLQyxPQURGO0FBRUhDLGNBQU0sSUFGSDtBQUdIQyxlQUFPQyxNQUhKO0FBSUhDLGtCQUFVSixPQUpQO0FBS0hLLG9CQUFZRjtBQUxULEtBTGU7QUFZdEJHLFVBQU07QUFDRkMsZUFBTyxJQURMO0FBRUZDLGdCQUFRLEtBRk47QUFHRkMsZ0JBQVEsS0FITjtBQUlGQyxrQkFBVTtBQUpSLEtBWmdCO0FBa0J0QkMsV0FBTztBQUNIVCxlQUFPLFFBREo7QUFFSEUsa0JBQVUsUUFGUDtBQUdITCxhQUFLLFFBSEY7QUFJSEUsY0FBTSxRQUpIO0FBS0hJLG9CQUFZO0FBTFQsS0FsQmU7QUF5QnRCTyxhQUFTO0FBQ0xDLGdCQUFRLGtCQUFZO0FBQ2hCLGdCQUFJQyxTQUFTLEtBQUtDLGdCQUFMLENBQXNCLGVBQXRCLEVBQXVDLENBQXZDLENBQWI7QUFDQSxnQkFBSUQsTUFBSixFQUFZO0FBQ1JBLHVCQUFPRSxVQUFQO0FBQ0g7QUFDSjtBQU5JO0FBekJhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xuICAgIHJlbGF0aW9uOiB7XG4gICAgICAgIG5hbWU6ICd0YWJzJyxcbiAgICAgICAgdHlwZTogJ2FuY2VzdG9yJ1xuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgZG90OiBCb29sZWFuLFxuICAgICAgICBpbmZvOiBudWxsLFxuICAgICAgICB0aXRsZTogU3RyaW5nLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgdGl0bGVTdHlsZTogU3RyaW5nXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgICBpbml0ZWQ6IGZhbHNlLFxuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICBhbmltYXRlZDogZmFsc2VcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIHRpdGxlOiAndXBkYXRlJyxcbiAgICAgICAgZGlzYWJsZWQ6ICd1cGRhdGUnLFxuICAgICAgICBkb3Q6ICd1cGRhdGUnLFxuICAgICAgICBpbmZvOiAndXBkYXRlJyxcbiAgICAgICAgdGl0bGVTdHlsZTogJ3VwZGF0ZSdcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi90YWJzL2luZGV4JylbMF07XG4gICAgICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LnVwZGF0ZVRhYnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19