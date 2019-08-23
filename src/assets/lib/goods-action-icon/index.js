"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var link_1 = require('./../mixins/link.js');
var button_1 = require('./../mixins/button.js');
var open_type_1 = require('./../mixins/open-type.js');
component_1.VantComponent({
    classes: ['icon-class', 'text-class'],
    mixins: [link_1.link, button_1.button, open_type_1.openType],
    props: {
        text: String,
        info: String,
        icon: String,
        disabled: Boolean,
        loading: Boolean
    },
    methods: {
        onClick: function onClick(event) {
            this.$emit('click', event.detail);
            this.jumpLink();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwibGlua18xIiwiYnV0dG9uXzEiLCJvcGVuX3R5cGVfMSIsIlZhbnRDb21wb25lbnQiLCJjbGFzc2VzIiwibWl4aW5zIiwibGluayIsImJ1dHRvbiIsIm9wZW5UeXBlIiwicHJvcHMiLCJ0ZXh0IiwiU3RyaW5nIiwiaW5mbyIsImljb24iLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJsb2FkaW5nIiwibWV0aG9kcyIsIm9uQ2xpY2siLCJldmVudCIsIiRlbWl0IiwiZGV0YWlsIiwianVtcExpbmsiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0EsSUFBSUMsU0FBU0QsUUFBUSxnQkFBUixDQUFiO0FBQ0EsSUFBSUUsV0FBV0YsUUFBUSxrQkFBUixDQUFmO0FBQ0EsSUFBSUcsY0FBY0gsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZSyxhQUFaLENBQTBCO0FBQ3RCQyxhQUFTLENBQUMsWUFBRCxFQUFlLFlBQWYsQ0FEYTtBQUV0QkMsWUFBUSxDQUFDTCxPQUFPTSxJQUFSLEVBQWNMLFNBQVNNLE1BQXZCLEVBQStCTCxZQUFZTSxRQUEzQyxDQUZjO0FBR3RCQyxXQUFPO0FBQ0hDLGNBQU1DLE1BREg7QUFFSEMsY0FBTUQsTUFGSDtBQUdIRSxjQUFNRixNQUhIO0FBSUhHLGtCQUFVQyxPQUpQO0FBS0hDLGlCQUFTRDtBQUxOLEtBSGU7QUFVdEJFLGFBQVM7QUFDTEMsaUJBQVMsaUJBQVVDLEtBQVYsRUFBaUI7QUFDdEIsaUJBQUtDLEtBQUwsQ0FBVyxPQUFYLEVBQW9CRCxNQUFNRSxNQUExQjtBQUNBLGlCQUFLQyxRQUFMO0FBQ0g7QUFKSTtBQVZhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbnZhciBsaW5rXzEgPSByZXF1aXJlKFwiLi4vbWl4aW5zL2xpbmtcIik7XG52YXIgYnV0dG9uXzEgPSByZXF1aXJlKFwiLi4vbWl4aW5zL2J1dHRvblwiKTtcbnZhciBvcGVuX3R5cGVfMSA9IHJlcXVpcmUoXCIuLi9taXhpbnMvb3Blbi10eXBlXCIpO1xuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XG4gICAgY2xhc3NlczogWydpY29uLWNsYXNzJywgJ3RleHQtY2xhc3MnXSxcbiAgICBtaXhpbnM6IFtsaW5rXzEubGluaywgYnV0dG9uXzEuYnV0dG9uLCBvcGVuX3R5cGVfMS5vcGVuVHlwZV0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdGV4dDogU3RyaW5nLFxuICAgICAgICBpbmZvOiBTdHJpbmcsXG4gICAgICAgIGljb246IFN0cmluZyxcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIGxvYWRpbmc6IEJvb2xlYW5cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICB0aGlzLmp1bXBMaW5rKCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==