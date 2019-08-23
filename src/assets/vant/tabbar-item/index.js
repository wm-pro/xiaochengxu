"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    props: {
        info: null,
        icon: String,
        dot: Boolean
    },
    relation: {
        name: 'tabbar',
        type: 'ancestor',
        linked: function linked(target) {
            this.parent = target;
        }
    },
    data: {
        active: false
    },
    methods: {
        onClick: function onClick() {
            if (this.parent) {
                this.parent.onChange(this);
            }
            this.$emit('click');
        },
        setActive: function setActive(_a) {
            var active = _a.active,
                color = _a.color;
            if (this.data.active !== active) {
                return this.set({ active: active, color: color });
            }
            return Promise.resolve();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInByb3BzIiwiaW5mbyIsImljb24iLCJTdHJpbmciLCJkb3QiLCJCb29sZWFuIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImxpbmtlZCIsInRhcmdldCIsInBhcmVudCIsImRhdGEiLCJhY3RpdmUiLCJtZXRob2RzIiwib25DbGljayIsIm9uQ2hhbmdlIiwiJGVtaXQiLCJzZXRBY3RpdmUiLCJfYSIsImNvbG9yIiwic2V0IiwiUHJvbWlzZSIsInJlc29sdmUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0FELFlBQVlFLGFBQVosQ0FBMEI7QUFDdEJDLFdBQU87QUFDSEMsY0FBTSxJQURIO0FBRUhDLGNBQU1DLE1BRkg7QUFHSEMsYUFBS0M7QUFIRixLQURlO0FBTXRCQyxjQUFVO0FBQ05DLGNBQU0sUUFEQTtBQUVOQyxjQUFNLFVBRkE7QUFHTkMsZ0JBQVEsZ0JBQVVDLE1BQVYsRUFBa0I7QUFDdEIsaUJBQUtDLE1BQUwsR0FBY0QsTUFBZDtBQUNIO0FBTEssS0FOWTtBQWF0QkUsVUFBTTtBQUNGQyxnQkFBUTtBQUROLEtBYmdCO0FBZ0J0QkMsYUFBUztBQUNMQyxpQkFBUyxtQkFBWTtBQUNqQixnQkFBSSxLQUFLSixNQUFULEVBQWlCO0FBQ2IscUJBQUtBLE1BQUwsQ0FBWUssUUFBWixDQUFxQixJQUFyQjtBQUNIO0FBQ0QsaUJBQUtDLEtBQUwsQ0FBVyxPQUFYO0FBQ0gsU0FOSTtBQU9MQyxtQkFBVyxtQkFBVUMsRUFBVixFQUFjO0FBQ3JCLGdCQUFJTixTQUFTTSxHQUFHTixNQUFoQjtBQUFBLGdCQUF3Qk8sUUFBUUQsR0FBR0MsS0FBbkM7QUFDQSxnQkFBSSxLQUFLUixJQUFMLENBQVVDLE1BQVYsS0FBcUJBLE1BQXpCLEVBQWlDO0FBQzdCLHVCQUFPLEtBQUtRLEdBQUwsQ0FBUyxFQUFFUixRQUFRQSxNQUFWLEVBQWtCTyxPQUFPQSxLQUF6QixFQUFULENBQVA7QUFDSDtBQUNELG1CQUFPRSxRQUFRQyxPQUFSLEVBQVA7QUFDSDtBQWJJO0FBaEJhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xuICAgIHByb3BzOiB7XG4gICAgICAgIGluZm86IG51bGwsXG4gICAgICAgIGljb246IFN0cmluZyxcbiAgICAgICAgZG90OiBCb29sZWFuXG4gICAgfSxcbiAgICByZWxhdGlvbjoge1xuICAgICAgICBuYW1lOiAndGFiYmFyJyxcbiAgICAgICAgdHlwZTogJ2FuY2VzdG9yJyxcbiAgICAgICAgbGlua2VkOiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCA9IHRhcmdldDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50Lm9uQ2hhbmdlKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0QWN0aXZlOiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBhY3RpdmUgPSBfYS5hY3RpdmUsIGNvbG9yID0gX2EuY29sb3I7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmFjdGl2ZSAhPT0gYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHsgYWN0aXZlOiBhY3RpdmUsIGNvbG9yOiBjb2xvciB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19