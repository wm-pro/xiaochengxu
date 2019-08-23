"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    field: true,
    relation: {
        name: 'radio-group',
        type: 'ancestor'
    },
    classes: ['icon-class', 'label-class'],
    props: {
        name: null,
        value: null,
        disabled: Boolean,
        labelDisabled: Boolean,
        labelPosition: String,
        checkedColor: String
    },
    methods: {
        emitChange: function emitChange(value) {
            var instance = this.getRelationNodes('../radio-group/index')[0] || this;
            instance.$emit('input', value);
            instance.$emit('change', value);
        },
        onChange: function onChange(event) {
            this.emitChange(event.detail.value);
        },
        onClickLabel: function onClickLabel() {
            if (!this.data.disabled && !this.data.labelDisabled) {
                this.emitChange(this.data.name);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImNsYXNzZXMiLCJwcm9wcyIsImRpc2FibGVkIiwiQm9vbGVhbiIsImxhYmVsRGlzYWJsZWQiLCJsYWJlbFBvc2l0aW9uIiwiU3RyaW5nIiwiY2hlY2tlZENvbG9yIiwibWV0aG9kcyIsImVtaXRDaGFuZ2UiLCJpbnN0YW5jZSIsImdldFJlbGF0aW9uTm9kZXMiLCIkZW1pdCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJkZXRhaWwiLCJvbkNsaWNrTGFiZWwiLCJkYXRhIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZRSxhQUFaLENBQTBCO0FBQ3RCQyxXQUFPLElBRGU7QUFFdEJDLGNBQVU7QUFDTkMsY0FBTSxhQURBO0FBRU5DLGNBQU07QUFGQSxLQUZZO0FBTXRCQyxhQUFTLENBQUMsWUFBRCxFQUFlLGFBQWYsQ0FOYTtBQU90QkMsV0FBTztBQUNISCxjQUFNLElBREg7QUFFSE4sZUFBTyxJQUZKO0FBR0hVLGtCQUFVQyxPQUhQO0FBSUhDLHVCQUFlRCxPQUpaO0FBS0hFLHVCQUFlQyxNQUxaO0FBTUhDLHNCQUFjRDtBQU5YLEtBUGU7QUFldEJFLGFBQVM7QUFDTEMsb0JBQVksb0JBQVVqQixLQUFWLEVBQWlCO0FBQ3pCLGdCQUFJa0IsV0FBVyxLQUFLQyxnQkFBTCxDQUFzQixzQkFBdEIsRUFBOEMsQ0FBOUMsS0FBb0QsSUFBbkU7QUFDQUQscUJBQVNFLEtBQVQsQ0FBZSxPQUFmLEVBQXdCcEIsS0FBeEI7QUFDQWtCLHFCQUFTRSxLQUFULENBQWUsUUFBZixFQUF5QnBCLEtBQXpCO0FBQ0gsU0FMSTtBQU1McUIsa0JBQVUsa0JBQVVDLEtBQVYsRUFBaUI7QUFDdkIsaUJBQUtMLFVBQUwsQ0FBZ0JLLE1BQU1DLE1BQU4sQ0FBYXZCLEtBQTdCO0FBQ0gsU0FSSTtBQVNMd0Isc0JBQWMsd0JBQVk7QUFDdEIsZ0JBQUksQ0FBQyxLQUFLQyxJQUFMLENBQVVmLFFBQVgsSUFBdUIsQ0FBQyxLQUFLZSxJQUFMLENBQVViLGFBQXRDLEVBQXFEO0FBQ2pELHFCQUFLSyxVQUFMLENBQWdCLEtBQUtRLElBQUwsQ0FBVW5CLElBQTFCO0FBQ0g7QUFDSjtBQWJJO0FBZmEsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XG4gICAgZmllbGQ6IHRydWUsXG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ3JhZGlvLWdyb3VwJyxcbiAgICAgICAgdHlwZTogJ2FuY2VzdG9yJ1xuICAgIH0sXG4gICAgY2xhc3NlczogWydpY29uLWNsYXNzJywgJ2xhYmVsLWNsYXNzJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbmFtZTogbnVsbCxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBsYWJlbERpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBsYWJlbFBvc2l0aW9uOiBTdHJpbmcsXG4gICAgICAgIGNoZWNrZWRDb2xvcjogU3RyaW5nXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGVtaXRDaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9yYWRpby1ncm91cC9pbmRleCcpWzBdIHx8IHRoaXM7XG4gICAgICAgICAgICBpbnN0YW5jZS4kZW1pdCgnaW5wdXQnLCB2YWx1ZSk7XG4gICAgICAgICAgICBpbnN0YW5jZS4kZW1pdCgnY2hhbmdlJywgdmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmVtaXRDaGFuZ2UoZXZlbnQuZGV0YWlsLnZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGlja0xhYmVsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5kaXNhYmxlZCAmJiAhdGhpcy5kYXRhLmxhYmVsRGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRDaGFuZ2UodGhpcy5kYXRhLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=