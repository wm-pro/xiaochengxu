"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    props: {
        show: Boolean,
        mask: Boolean,
        message: String,
        forbidClick: Boolean,
        zIndex: {
            type: Number,
            value: 1000
        },
        type: {
            type: String,
            value: 'text'
        },
        loadingType: {
            type: String,
            value: 'circular'
        },
        position: {
            type: String,
            value: 'middle'
        }
    },
    methods: {
        clear: function clear() {
            this.set({
                show: false
            });
        },
        // for prevent touchmove
        noop: function noop() {}
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInByb3BzIiwic2hvdyIsIkJvb2xlYW4iLCJtYXNrIiwibWVzc2FnZSIsIlN0cmluZyIsImZvcmJpZENsaWNrIiwiekluZGV4IiwidHlwZSIsIk51bWJlciIsImxvYWRpbmdUeXBlIiwicG9zaXRpb24iLCJtZXRob2RzIiwiY2xlYXIiLCJzZXQiLCJub29wIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZRSxhQUFaLENBQTBCO0FBQ3RCQyxXQUFPO0FBQ0hDLGNBQU1DLE9BREg7QUFFSEMsY0FBTUQsT0FGSDtBQUdIRSxpQkFBU0MsTUFITjtBQUlIQyxxQkFBYUosT0FKVjtBQUtISyxnQkFBUTtBQUNKQyxrQkFBTUMsTUFERjtBQUVKYixtQkFBTztBQUZILFNBTEw7QUFTSFksY0FBTTtBQUNGQSxrQkFBTUgsTUFESjtBQUVGVCxtQkFBTztBQUZMLFNBVEg7QUFhSGMscUJBQWE7QUFDVEYsa0JBQU1ILE1BREc7QUFFVFQsbUJBQU87QUFGRSxTQWJWO0FBaUJIZSxrQkFBVTtBQUNOSCxrQkFBTUgsTUFEQTtBQUVOVCxtQkFBTztBQUZEO0FBakJQLEtBRGU7QUF1QnRCZ0IsYUFBUztBQUNMQyxlQUFPLGlCQUFZO0FBQ2YsaUJBQUtDLEdBQUwsQ0FBUztBQUNMYixzQkFBTTtBQURELGFBQVQ7QUFHSCxTQUxJO0FBTUw7QUFDQWMsY0FBTSxnQkFBWSxDQUFHO0FBUGhCO0FBdkJhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xuICAgIHByb3BzOiB7XG4gICAgICAgIHNob3c6IEJvb2xlYW4sXG4gICAgICAgIG1hc2s6IEJvb2xlYW4sXG4gICAgICAgIG1lc3NhZ2U6IFN0cmluZyxcbiAgICAgICAgZm9yYmlkQ2xpY2s6IEJvb2xlYW4sXG4gICAgICAgIHpJbmRleDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDEwMDBcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICd0ZXh0J1xuICAgICAgICB9LFxuICAgICAgICBsb2FkaW5nVHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdjaXJjdWxhcidcbiAgICAgICAgfSxcbiAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnbWlkZGxlJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAvLyBmb3IgcHJldmVudCB0b3VjaG1vdmVcbiAgICAgICAgbm9vcDogZnVuY3Rpb24gKCkgeyB9XG4gICAgfVxufSk7XG4iXX0=