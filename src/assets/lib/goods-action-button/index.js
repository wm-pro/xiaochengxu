"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var link_1 = require('./../mixins/link.js');
var button_1 = require('./../mixins/button.js');
var open_type_1 = require('./../mixins/open-type.js');
component_1.VantComponent({
    mixins: [link_1.link, button_1.button, open_type_1.openType],
    props: {
        text: String,
        loading: Boolean,
        disabled: Boolean,
        type: {
            type: String,
            value: 'danger'
        }
    },
    methods: {
        onClick: function onClick(event) {
            this.$emit('click', event.detail);
            this.jumpLink();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwibGlua18xIiwiYnV0dG9uXzEiLCJvcGVuX3R5cGVfMSIsIlZhbnRDb21wb25lbnQiLCJtaXhpbnMiLCJsaW5rIiwiYnV0dG9uIiwib3BlblR5cGUiLCJwcm9wcyIsInRleHQiLCJTdHJpbmciLCJsb2FkaW5nIiwiQm9vbGVhbiIsImRpc2FibGVkIiwidHlwZSIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiZXZlbnQiLCIkZW1pdCIsImRldGFpbCIsImp1bXBMaW5rIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBLElBQUlDLFNBQVNELFFBQVEsZ0JBQVIsQ0FBYjtBQUNBLElBQUlFLFdBQVdGLFFBQVEsa0JBQVIsQ0FBZjtBQUNBLElBQUlHLGNBQWNILFFBQVEscUJBQVIsQ0FBbEI7QUFDQUQsWUFBWUssYUFBWixDQUEwQjtBQUN0QkMsWUFBUSxDQUFDSixPQUFPSyxJQUFSLEVBQWNKLFNBQVNLLE1BQXZCLEVBQStCSixZQUFZSyxRQUEzQyxDQURjO0FBRXRCQyxXQUFPO0FBQ0hDLGNBQU1DLE1BREg7QUFFSEMsaUJBQVNDLE9BRk47QUFHSEMsa0JBQVVELE9BSFA7QUFJSEUsY0FBTTtBQUNGQSxrQkFBTUosTUFESjtBQUVGYixtQkFBTztBQUZMO0FBSkgsS0FGZTtBQVd0QmtCLGFBQVM7QUFDTEMsaUJBQVMsaUJBQVVDLEtBQVYsRUFBaUI7QUFDdEIsaUJBQUtDLEtBQUwsQ0FBVyxPQUFYLEVBQW9CRCxNQUFNRSxNQUExQjtBQUNBLGlCQUFLQyxRQUFMO0FBQ0g7QUFKSTtBQVhhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbnZhciBsaW5rXzEgPSByZXF1aXJlKFwiLi4vbWl4aW5zL2xpbmtcIik7XG52YXIgYnV0dG9uXzEgPSByZXF1aXJlKFwiLi4vbWl4aW5zL2J1dHRvblwiKTtcbnZhciBvcGVuX3R5cGVfMSA9IHJlcXVpcmUoXCIuLi9taXhpbnMvb3Blbi10eXBlXCIpO1xuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XG4gICAgbWl4aW5zOiBbbGlua18xLmxpbmssIGJ1dHRvbl8xLmJ1dHRvbiwgb3Blbl90eXBlXzEub3BlblR5cGVdLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHRleHQ6IFN0cmluZyxcbiAgICAgICAgbG9hZGluZzogQm9vbGVhbixcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnZGFuZ2VyJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgdGhpcy5qdW1wTGluaygpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=