"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var behavior_1 = require('./behavior.js');
var props_1 = require('./props.js');
function observe(vantOptions, options) {
    var watch = vantOptions.watch,
        computed = vantOptions.computed;
    options.behaviors.push(behavior_1.behavior);
    if (watch) {
        var props_2 = options.properties || {};
        Object.keys(watch).forEach(function (key) {
            if (key in props_2) {
                var prop = props_2[key];
                if (prop === null || !('type' in prop)) {
                    prop = { type: prop };
                }
                prop.observer = watch[key];
                props_2[key] = prop;
            }
        });
        options.properties = props_2;
    }
    if (computed) {
        options.methods = options.methods || {};
        options.methods.$options = function () {
            return vantOptions;
        };
        if (options.properties) {
            props_1.observeProps(options.properties);
        }
    }
}
exports.observe = observe;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiYmVoYXZpb3JfMSIsInJlcXVpcmUiLCJwcm9wc18xIiwib2JzZXJ2ZSIsInZhbnRPcHRpb25zIiwib3B0aW9ucyIsIndhdGNoIiwiY29tcHV0ZWQiLCJiZWhhdmlvcnMiLCJwdXNoIiwiYmVoYXZpb3IiLCJwcm9wc18yIiwicHJvcGVydGllcyIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwicHJvcCIsInR5cGUiLCJvYnNlcnZlciIsIm1ldGhvZHMiLCIkb3B0aW9ucyIsIm9ic2VydmVQcm9wcyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGFBQWFDLFFBQVEsWUFBUixDQUFqQjtBQUNBLElBQUlDLFVBQVVELFFBQVEsU0FBUixDQUFkO0FBQ0EsU0FBU0UsT0FBVCxDQUFpQkMsV0FBakIsRUFBOEJDLE9BQTlCLEVBQXVDO0FBQ25DLFFBQUlDLFFBQVFGLFlBQVlFLEtBQXhCO0FBQUEsUUFBK0JDLFdBQVdILFlBQVlHLFFBQXREO0FBQ0FGLFlBQVFHLFNBQVIsQ0FBa0JDLElBQWxCLENBQXVCVCxXQUFXVSxRQUFsQztBQUNBLFFBQUlKLEtBQUosRUFBVztBQUNQLFlBQUlLLFVBQVVOLFFBQVFPLFVBQVIsSUFBc0IsRUFBcEM7QUFDQWhCLGVBQU9pQixJQUFQLENBQVlQLEtBQVosRUFBbUJRLE9BQW5CLENBQTJCLFVBQVVDLEdBQVYsRUFBZTtBQUN0QyxnQkFBSUEsT0FBT0osT0FBWCxFQUFvQjtBQUNoQixvQkFBSUssT0FBT0wsUUFBUUksR0FBUixDQUFYO0FBQ0Esb0JBQUlDLFNBQVMsSUFBVCxJQUFpQixFQUFFLFVBQVVBLElBQVosQ0FBckIsRUFBd0M7QUFDcENBLDJCQUFPLEVBQUVDLE1BQU1ELElBQVIsRUFBUDtBQUNIO0FBQ0RBLHFCQUFLRSxRQUFMLEdBQWdCWixNQUFNUyxHQUFOLENBQWhCO0FBQ0FKLHdCQUFRSSxHQUFSLElBQWVDLElBQWY7QUFDSDtBQUNKLFNBVEQ7QUFVQVgsZ0JBQVFPLFVBQVIsR0FBcUJELE9BQXJCO0FBQ0g7QUFDRCxRQUFJSixRQUFKLEVBQWM7QUFDVkYsZ0JBQVFjLE9BQVIsR0FBa0JkLFFBQVFjLE9BQVIsSUFBbUIsRUFBckM7QUFDQWQsZ0JBQVFjLE9BQVIsQ0FBZ0JDLFFBQWhCLEdBQTJCLFlBQVk7QUFBRSxtQkFBT2hCLFdBQVA7QUFBcUIsU0FBOUQ7QUFDQSxZQUFJQyxRQUFRTyxVQUFaLEVBQXdCO0FBQ3BCVixvQkFBUW1CLFlBQVIsQ0FBcUJoQixRQUFRTyxVQUE3QjtBQUNIO0FBQ0o7QUFDSjtBQUNEZCxRQUFRSyxPQUFSLEdBQWtCQSxPQUFsQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGJlaGF2aW9yXzEgPSByZXF1aXJlKFwiLi9iZWhhdmlvclwiKTtcbnZhciBwcm9wc18xID0gcmVxdWlyZShcIi4vcHJvcHNcIik7XG5mdW5jdGlvbiBvYnNlcnZlKHZhbnRPcHRpb25zLCBvcHRpb25zKSB7XG4gICAgdmFyIHdhdGNoID0gdmFudE9wdGlvbnMud2F0Y2gsIGNvbXB1dGVkID0gdmFudE9wdGlvbnMuY29tcHV0ZWQ7XG4gICAgb3B0aW9ucy5iZWhhdmlvcnMucHVzaChiZWhhdmlvcl8xLmJlaGF2aW9yKTtcbiAgICBpZiAod2F0Y2gpIHtcbiAgICAgICAgdmFyIHByb3BzXzIgPSBvcHRpb25zLnByb3BlcnRpZXMgfHwge307XG4gICAgICAgIE9iamVjdC5rZXlzKHdhdGNoKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmIChrZXkgaW4gcHJvcHNfMikge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wID0gcHJvcHNfMltrZXldO1xuICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBudWxsIHx8ICEoJ3R5cGUnIGluIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3AgPSB7IHR5cGU6IHByb3AgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvcC5vYnNlcnZlciA9IHdhdGNoW2tleV07XG4gICAgICAgICAgICAgICAgcHJvcHNfMltrZXldID0gcHJvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG9wdGlvbnMucHJvcGVydGllcyA9IHByb3BzXzI7XG4gICAgfVxuICAgIGlmIChjb21wdXRlZCkge1xuICAgICAgICBvcHRpb25zLm1ldGhvZHMgPSBvcHRpb25zLm1ldGhvZHMgfHwge307XG4gICAgICAgIG9wdGlvbnMubWV0aG9kcy4kb3B0aW9ucyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZhbnRPcHRpb25zOyB9O1xuICAgICAgICBpZiAob3B0aW9ucy5wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBwcm9wc18xLm9ic2VydmVQcm9wcyhvcHRpb25zLnByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5vYnNlcnZlID0gb2JzZXJ2ZTtcbiJdfQ==