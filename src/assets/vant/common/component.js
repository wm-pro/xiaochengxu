"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var basic_1 = require('./../mixins/basic.js');
var index_1 = require('./../mixins/observer/index.js');
function mapKeys(source, target, map) {
    Object.keys(map).forEach(function (key) {
        if (source[key]) {
            target[map[key]] = source[key];
        }
    });
}
function VantComponent(vantOptions) {
    if (vantOptions === void 0) {
        vantOptions = {};
    }
    var _a;
    var options = {};
    mapKeys(vantOptions, options, {
        data: 'data',
        props: 'properties',
        mixins: 'behaviors',
        methods: 'methods',
        beforeCreate: 'created',
        created: 'attached',
        mounted: 'ready',
        relations: 'relations',
        destroyed: 'detached',
        classes: 'externalClasses'
    });
    var relation = vantOptions.relation;
    if (relation) {
        options.relations = Object.assign(options.relations || {}, (_a = {}, _a["../" + relation.name + "/index"] = relation, _a));
    }
    // add default externalClasses
    options.externalClasses = options.externalClasses || [];
    options.externalClasses.push('custom-class');
    // add default behaviors
    options.behaviors = options.behaviors || [];
    options.behaviors.push(basic_1.basic);
    // map field to form-field behavior
    if (vantOptions.field) {
        options.behaviors.push('wx://form-field');
    }
    // add default options
    options.options = {
        multipleSlots: true,
        addGlobalClass: true
    };
    index_1.observe(vantOptions, options);
    Component(options);
}
exports.VantComponent = VantComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImJhc2ljXzEiLCJyZXF1aXJlIiwiaW5kZXhfMSIsIm1hcEtleXMiLCJzb3VyY2UiLCJ0YXJnZXQiLCJtYXAiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsIlZhbnRDb21wb25lbnQiLCJ2YW50T3B0aW9ucyIsIl9hIiwib3B0aW9ucyIsImRhdGEiLCJwcm9wcyIsIm1peGlucyIsIm1ldGhvZHMiLCJiZWZvcmVDcmVhdGUiLCJjcmVhdGVkIiwibW91bnRlZCIsInJlbGF0aW9ucyIsImRlc3Ryb3llZCIsImNsYXNzZXMiLCJyZWxhdGlvbiIsImFzc2lnbiIsIm5hbWUiLCJleHRlcm5hbENsYXNzZXMiLCJwdXNoIiwiYmVoYXZpb3JzIiwiYmFzaWMiLCJmaWVsZCIsIm11bHRpcGxlU2xvdHMiLCJhZGRHbG9iYWxDbGFzcyIsIm9ic2VydmUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxVQUFVQyxRQUFRLGlCQUFSLENBQWQ7QUFDQSxJQUFJQyxVQUFVRCxRQUFRLDBCQUFSLENBQWQ7QUFDQSxTQUFTRSxPQUFULENBQWlCQyxNQUFqQixFQUF5QkMsTUFBekIsRUFBaUNDLEdBQWpDLEVBQXNDO0FBQ2xDVixXQUFPVyxJQUFQLENBQVlELEdBQVosRUFBaUJFLE9BQWpCLENBQXlCLFVBQVVDLEdBQVYsRUFBZTtBQUNwQyxZQUFJTCxPQUFPSyxHQUFQLENBQUosRUFBaUI7QUFDYkosbUJBQU9DLElBQUlHLEdBQUosQ0FBUCxJQUFtQkwsT0FBT0ssR0FBUCxDQUFuQjtBQUNIO0FBQ0osS0FKRDtBQUtIO0FBQ0QsU0FBU0MsYUFBVCxDQUF1QkMsV0FBdkIsRUFBb0M7QUFDaEMsUUFBSUEsZ0JBQWdCLEtBQUssQ0FBekIsRUFBNEI7QUFBRUEsc0JBQWMsRUFBZDtBQUFtQjtBQUNqRCxRQUFJQyxFQUFKO0FBQ0EsUUFBSUMsVUFBVSxFQUFkO0FBQ0FWLFlBQVFRLFdBQVIsRUFBcUJFLE9BQXJCLEVBQThCO0FBQzFCQyxjQUFNLE1BRG9CO0FBRTFCQyxlQUFPLFlBRm1CO0FBRzFCQyxnQkFBUSxXQUhrQjtBQUkxQkMsaUJBQVMsU0FKaUI7QUFLMUJDLHNCQUFjLFNBTFk7QUFNMUJDLGlCQUFTLFVBTmlCO0FBTzFCQyxpQkFBUyxPQVBpQjtBQVExQkMsbUJBQVcsV0FSZTtBQVMxQkMsbUJBQVcsVUFUZTtBQVUxQkMsaUJBQVM7QUFWaUIsS0FBOUI7QUFZQSxRQUFJQyxXQUFXYixZQUFZYSxRQUEzQjtBQUNBLFFBQUlBLFFBQUosRUFBYztBQUNWWCxnQkFBUVEsU0FBUixHQUFvQnpCLE9BQU82QixNQUFQLENBQWNaLFFBQVFRLFNBQVIsSUFBcUIsRUFBbkMsR0FBd0NULEtBQUssRUFBTCxFQUN4REEsR0FBRyxRQUFRWSxTQUFTRSxJQUFqQixHQUF3QixRQUEzQixJQUF1Q0YsUUFEaUIsRUFFeERaLEVBRmdCLEVBQXBCO0FBR0g7QUFDRDtBQUNBQyxZQUFRYyxlQUFSLEdBQTBCZCxRQUFRYyxlQUFSLElBQTJCLEVBQXJEO0FBQ0FkLFlBQVFjLGVBQVIsQ0FBd0JDLElBQXhCLENBQTZCLGNBQTdCO0FBQ0E7QUFDQWYsWUFBUWdCLFNBQVIsR0FBb0JoQixRQUFRZ0IsU0FBUixJQUFxQixFQUF6QztBQUNBaEIsWUFBUWdCLFNBQVIsQ0FBa0JELElBQWxCLENBQXVCNUIsUUFBUThCLEtBQS9CO0FBQ0E7QUFDQSxRQUFJbkIsWUFBWW9CLEtBQWhCLEVBQXVCO0FBQ25CbEIsZ0JBQVFnQixTQUFSLENBQWtCRCxJQUFsQixDQUF1QixpQkFBdkI7QUFDSDtBQUNEO0FBQ0FmLFlBQVFBLE9BQVIsR0FBa0I7QUFDZG1CLHVCQUFlLElBREQ7QUFFZEMsd0JBQWdCO0FBRkYsS0FBbEI7QUFJQS9CLFlBQVFnQyxPQUFSLENBQWdCdkIsV0FBaEIsRUFBNkJFLE9BQTdCO0FBQ0FzQixjQUFVdEIsT0FBVjtBQUNIO0FBQ0RmLFFBQVFZLGFBQVIsR0FBd0JBLGFBQXhCIiwiZmlsZSI6ImNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGJhc2ljXzEgPSByZXF1aXJlKFwiLi4vbWl4aW5zL2Jhc2ljXCIpO1xudmFyIGluZGV4XzEgPSByZXF1aXJlKFwiLi4vbWl4aW5zL29ic2VydmVyL2luZGV4XCIpO1xuZnVuY3Rpb24gbWFwS2V5cyhzb3VyY2UsIHRhcmdldCwgbWFwKSB7XG4gICAgT2JqZWN0LmtleXMobWFwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKHNvdXJjZVtrZXldKSB7XG4gICAgICAgICAgICB0YXJnZXRbbWFwW2tleV1dID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIFZhbnRDb21wb25lbnQodmFudE9wdGlvbnMpIHtcbiAgICBpZiAodmFudE9wdGlvbnMgPT09IHZvaWQgMCkgeyB2YW50T3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hO1xuICAgIHZhciBvcHRpb25zID0ge307XG4gICAgbWFwS2V5cyh2YW50T3B0aW9ucywgb3B0aW9ucywge1xuICAgICAgICBkYXRhOiAnZGF0YScsXG4gICAgICAgIHByb3BzOiAncHJvcGVydGllcycsXG4gICAgICAgIG1peGluczogJ2JlaGF2aW9ycycsXG4gICAgICAgIG1ldGhvZHM6ICdtZXRob2RzJyxcbiAgICAgICAgYmVmb3JlQ3JlYXRlOiAnY3JlYXRlZCcsXG4gICAgICAgIGNyZWF0ZWQ6ICdhdHRhY2hlZCcsXG4gICAgICAgIG1vdW50ZWQ6ICdyZWFkeScsXG4gICAgICAgIHJlbGF0aW9uczogJ3JlbGF0aW9ucycsXG4gICAgICAgIGRlc3Ryb3llZDogJ2RldGFjaGVkJyxcbiAgICAgICAgY2xhc3NlczogJ2V4dGVybmFsQ2xhc3NlcydcbiAgICB9KTtcbiAgICB2YXIgcmVsYXRpb24gPSB2YW50T3B0aW9ucy5yZWxhdGlvbjtcbiAgICBpZiAocmVsYXRpb24pIHtcbiAgICAgICAgb3B0aW9ucy5yZWxhdGlvbnMgPSBPYmplY3QuYXNzaWduKG9wdGlvbnMucmVsYXRpb25zIHx8IHt9LCAoX2EgPSB7fSxcbiAgICAgICAgICAgIF9hW1wiLi4vXCIgKyByZWxhdGlvbi5uYW1lICsgXCIvaW5kZXhcIl0gPSByZWxhdGlvbixcbiAgICAgICAgICAgIF9hKSk7XG4gICAgfVxuICAgIC8vIGFkZCBkZWZhdWx0IGV4dGVybmFsQ2xhc3Nlc1xuICAgIG9wdGlvbnMuZXh0ZXJuYWxDbGFzc2VzID0gb3B0aW9ucy5leHRlcm5hbENsYXNzZXMgfHwgW107XG4gICAgb3B0aW9ucy5leHRlcm5hbENsYXNzZXMucHVzaCgnY3VzdG9tLWNsYXNzJyk7XG4gICAgLy8gYWRkIGRlZmF1bHQgYmVoYXZpb3JzXG4gICAgb3B0aW9ucy5iZWhhdmlvcnMgPSBvcHRpb25zLmJlaGF2aW9ycyB8fCBbXTtcbiAgICBvcHRpb25zLmJlaGF2aW9ycy5wdXNoKGJhc2ljXzEuYmFzaWMpO1xuICAgIC8vIG1hcCBmaWVsZCB0byBmb3JtLWZpZWxkIGJlaGF2aW9yXG4gICAgaWYgKHZhbnRPcHRpb25zLmZpZWxkKSB7XG4gICAgICAgIG9wdGlvbnMuYmVoYXZpb3JzLnB1c2goJ3d4Oi8vZm9ybS1maWVsZCcpO1xuICAgIH1cbiAgICAvLyBhZGQgZGVmYXVsdCBvcHRpb25zXG4gICAgb3B0aW9ucy5vcHRpb25zID0ge1xuICAgICAgICBtdWx0aXBsZVNsb3RzOiB0cnVlLFxuICAgICAgICBhZGRHbG9iYWxDbGFzczogdHJ1ZVxuICAgIH07XG4gICAgaW5kZXhfMS5vYnNlcnZlKHZhbnRPcHRpb25zLCBvcHRpb25zKTtcbiAgICBDb21wb25lbnQob3B0aW9ucyk7XG59XG5leHBvcnRzLlZhbnRDb21wb25lbnQgPSBWYW50Q29tcG9uZW50O1xuIl19