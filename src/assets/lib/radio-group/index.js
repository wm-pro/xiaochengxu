"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    field: true,
    relation: {
        name: 'radio',
        type: 'descendant',
        linked: function linked(target) {
            var _a = this.data,
                value = _a.value,
                disabled = _a.disabled;
            target.set({
                value: value,
                disabled: disabled || target.data.disabled
            });
        }
    },
    props: {
        value: null,
        disabled: Boolean
    },
    watch: {
        value: function value(_value) {
            var children = this.getRelationNodes('../radio/index');
            children.forEach(function (child) {
                child.set({ value: _value });
            });
        },
        disabled: function disabled(_disabled) {
            var children = this.getRelationNodes('../radio/index');
            children.forEach(function (child) {
                child.set({ disabled: _disabled || child.data.disabled });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImxpbmtlZCIsInRhcmdldCIsIl9hIiwiZGF0YSIsImRpc2FibGVkIiwic2V0IiwicHJvcHMiLCJCb29sZWFuIiwid2F0Y2giLCJjaGlsZHJlbiIsImdldFJlbGF0aW9uTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0FELFlBQVlFLGFBQVosQ0FBMEI7QUFDdEJDLFdBQU8sSUFEZTtBQUV0QkMsY0FBVTtBQUNOQyxjQUFNLE9BREE7QUFFTkMsY0FBTSxZQUZBO0FBR05DLGdCQUFRLGdCQUFVQyxNQUFWLEVBQWtCO0FBQ3RCLGdCQUFJQyxLQUFLLEtBQUtDLElBQWQ7QUFBQSxnQkFBb0JYLFFBQVFVLEdBQUdWLEtBQS9CO0FBQUEsZ0JBQXNDWSxXQUFXRixHQUFHRSxRQUFwRDtBQUNBSCxtQkFBT0ksR0FBUCxDQUFXO0FBQ1BiLHVCQUFPQSxLQURBO0FBRVBZLDBCQUFVQSxZQUFZSCxPQUFPRSxJQUFQLENBQVlDO0FBRjNCLGFBQVg7QUFJSDtBQVRLLEtBRlk7QUFhdEJFLFdBQU87QUFDSGQsZUFBTyxJQURKO0FBRUhZLGtCQUFVRztBQUZQLEtBYmU7QUFpQnRCQyxXQUFPO0FBQ0hoQixlQUFPLGVBQVVBLE1BQVYsRUFBaUI7QUFDcEIsZ0JBQUlpQixXQUFXLEtBQUtDLGdCQUFMLENBQXNCLGdCQUF0QixDQUFmO0FBQ0FELHFCQUFTRSxPQUFULENBQWlCLFVBQVVDLEtBQVYsRUFBaUI7QUFDOUJBLHNCQUFNUCxHQUFOLENBQVUsRUFBRWIsT0FBT0EsTUFBVCxFQUFWO0FBQ0gsYUFGRDtBQUdILFNBTkU7QUFPSFksa0JBQVUsa0JBQVVBLFNBQVYsRUFBb0I7QUFDMUIsZ0JBQUlLLFdBQVcsS0FBS0MsZ0JBQUwsQ0FBc0IsZ0JBQXRCLENBQWY7QUFDQUQscUJBQVNFLE9BQVQsQ0FBaUIsVUFBVUMsS0FBVixFQUFpQjtBQUM5QkEsc0JBQU1QLEdBQU4sQ0FBVSxFQUFFRCxVQUFVQSxhQUFZUSxNQUFNVCxJQUFOLENBQVdDLFFBQW5DLEVBQVY7QUFDSCxhQUZEO0FBR0g7QUFaRTtBQWpCZSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICBmaWVsZDogdHJ1ZSxcbiAgICByZWxhdGlvbjoge1xuICAgICAgICBuYW1lOiAncmFkaW8nLFxuICAgICAgICB0eXBlOiAnZGVzY2VuZGFudCcsXG4gICAgICAgIGxpbmtlZDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCB2YWx1ZSA9IF9hLnZhbHVlLCBkaXNhYmxlZCA9IF9hLmRpc2FibGVkO1xuICAgICAgICAgICAgdGFyZ2V0LnNldCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCB8fCB0YXJnZXQuZGF0YS5kaXNhYmxlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhblxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9yYWRpby9pbmRleCcpO1xuICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5zZXQoeyB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQ6IGZ1bmN0aW9uIChkaXNhYmxlZCkge1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9yYWRpby9pbmRleCcpO1xuICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5zZXQoeyBkaXNhYmxlZDogZGlzYWJsZWQgfHwgY2hpbGQuZGF0YS5kaXNhYmxlZCB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=