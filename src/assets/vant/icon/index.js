"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    props: {
        info: null,
        name: String,
        size: String,
        color: String,
        customStyle: String,
        classPrefix: {
            type: String,
            value: 'van-icon'
        }
    },
    methods: {
        onClick: function onClick() {
            this.$emit('click');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInByb3BzIiwiaW5mbyIsIm5hbWUiLCJTdHJpbmciLCJzaXplIiwiY29sb3IiLCJjdXN0b21TdHlsZSIsImNsYXNzUHJlZml4IiwidHlwZSIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiJGVtaXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0FELFlBQVlFLGFBQVosQ0FBMEI7QUFDdEJDLFdBQU87QUFDSEMsY0FBTSxJQURIO0FBRUhDLGNBQU1DLE1BRkg7QUFHSEMsY0FBTUQsTUFISDtBQUlIRSxlQUFPRixNQUpKO0FBS0hHLHFCQUFhSCxNQUxWO0FBTUhJLHFCQUFhO0FBQ1RDLGtCQUFNTCxNQURHO0FBRVRQLG1CQUFPO0FBRkU7QUFOVixLQURlO0FBWXRCYSxhQUFTO0FBQ0xDLGlCQUFTLG1CQUFZO0FBQ2pCLGlCQUFLQyxLQUFMLENBQVcsT0FBWDtBQUNIO0FBSEk7QUFaYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICBwcm9wczoge1xuICAgICAgICBpbmZvOiBudWxsLFxuICAgICAgICBuYW1lOiBTdHJpbmcsXG4gICAgICAgIHNpemU6IFN0cmluZyxcbiAgICAgICAgY29sb3I6IFN0cmluZyxcbiAgICAgICAgY3VzdG9tU3R5bGU6IFN0cmluZyxcbiAgICAgICAgY2xhc3NQcmVmaXg6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAndmFuLWljb24nXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19