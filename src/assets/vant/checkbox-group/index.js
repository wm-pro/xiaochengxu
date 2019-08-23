"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    field: true,
    relation: {
        name: 'checkbox',
        type: 'descendant',
        linked: function linked(target) {
            var _a = this.data,
                value = _a.value,
                disabled = _a.disabled;
            target.set({
                value: value.indexOf(target.data.name) !== -1,
                disabled: disabled || target.data.disabled
            });
        }
    },
    props: {
        max: Number,
        value: Array,
        disabled: Boolean
    },
    watch: {
        value: function value(_value) {
            var children = this.getRelationNodes('../checkbox/index');
            children.forEach(function (child) {
                child.set({ value: _value.indexOf(child.data.name) !== -1 });
            });
        },
        disabled: function disabled(_disabled) {
            var children = this.getRelationNodes('../checkbox/index');
            children.forEach(function (child) {
                child.set({ disabled: _disabled || child.data.disabled });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImxpbmtlZCIsInRhcmdldCIsIl9hIiwiZGF0YSIsImRpc2FibGVkIiwic2V0IiwiaW5kZXhPZiIsInByb3BzIiwibWF4IiwiTnVtYmVyIiwiQXJyYXkiLCJCb29sZWFuIiwid2F0Y2giLCJjaGlsZHJlbiIsImdldFJlbGF0aW9uTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0FELFlBQVlFLGFBQVosQ0FBMEI7QUFDdEJDLFdBQU8sSUFEZTtBQUV0QkMsY0FBVTtBQUNOQyxjQUFNLFVBREE7QUFFTkMsY0FBTSxZQUZBO0FBR05DLGdCQUFRLGdCQUFVQyxNQUFWLEVBQWtCO0FBQ3RCLGdCQUFJQyxLQUFLLEtBQUtDLElBQWQ7QUFBQSxnQkFBb0JYLFFBQVFVLEdBQUdWLEtBQS9CO0FBQUEsZ0JBQXNDWSxXQUFXRixHQUFHRSxRQUFwRDtBQUNBSCxtQkFBT0ksR0FBUCxDQUFXO0FBQ1BiLHVCQUFPQSxNQUFNYyxPQUFOLENBQWNMLE9BQU9FLElBQVAsQ0FBWUwsSUFBMUIsTUFBb0MsQ0FBQyxDQURyQztBQUVQTSwwQkFBVUEsWUFBWUgsT0FBT0UsSUFBUCxDQUFZQztBQUYzQixhQUFYO0FBSUg7QUFUSyxLQUZZO0FBYXRCRyxXQUFPO0FBQ0hDLGFBQUtDLE1BREY7QUFFSGpCLGVBQU9rQixLQUZKO0FBR0hOLGtCQUFVTztBQUhQLEtBYmU7QUFrQnRCQyxXQUFPO0FBQ0hwQixlQUFPLGVBQVVBLE1BQVYsRUFBaUI7QUFDcEIsZ0JBQUlxQixXQUFXLEtBQUtDLGdCQUFMLENBQXNCLG1CQUF0QixDQUFmO0FBQ0FELHFCQUFTRSxPQUFULENBQWlCLFVBQVVDLEtBQVYsRUFBaUI7QUFDOUJBLHNCQUFNWCxHQUFOLENBQVUsRUFBRWIsT0FBT0EsT0FBTWMsT0FBTixDQUFjVSxNQUFNYixJQUFOLENBQVdMLElBQXpCLE1BQW1DLENBQUMsQ0FBN0MsRUFBVjtBQUNILGFBRkQ7QUFHSCxTQU5FO0FBT0hNLGtCQUFVLGtCQUFVQSxTQUFWLEVBQW9CO0FBQzFCLGdCQUFJUyxXQUFXLEtBQUtDLGdCQUFMLENBQXNCLG1CQUF0QixDQUFmO0FBQ0FELHFCQUFTRSxPQUFULENBQWlCLFVBQVVDLEtBQVYsRUFBaUI7QUFDOUJBLHNCQUFNWCxHQUFOLENBQVUsRUFBRUQsVUFBVUEsYUFBWVksTUFBTWIsSUFBTixDQUFXQyxRQUFuQyxFQUFWO0FBQ0gsYUFGRDtBQUdIO0FBWkU7QUFsQmUsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XG4gICAgZmllbGQ6IHRydWUsXG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ2NoZWNrYm94JyxcbiAgICAgICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxuICAgICAgICBsaW5rZWQ6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgdmFsdWUgPSBfYS52YWx1ZSwgZGlzYWJsZWQgPSBfYS5kaXNhYmxlZDtcbiAgICAgICAgICAgIHRhcmdldC5zZXQoe1xuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZS5pbmRleE9mKHRhcmdldC5kYXRhLm5hbWUpICE9PSAtMSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQgfHwgdGFyZ2V0LmRhdGEuZGlzYWJsZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBtYXg6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IEFycmF5LFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhblxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9jaGVja2JveC9pbmRleCcpO1xuICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5zZXQoeyB2YWx1ZTogdmFsdWUuaW5kZXhPZihjaGlsZC5kYXRhLm5hbWUpICE9PSAtMSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlZDogZnVuY3Rpb24gKGRpc2FibGVkKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL2NoZWNrYm94L2luZGV4Jyk7XG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNoaWxkLnNldCh7IGRpc2FibGVkOiBkaXNhYmxlZCB8fCBjaGlsZC5kYXRhLmRpc2FibGVkIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==