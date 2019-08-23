"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    relation: {
        name: 'row',
        type: 'ancestor'
    },
    props: {
        span: Number,
        offset: Number
    },
    data: {
        style: ''
    },
    methods: {
        setGutter: function setGutter(gutter) {
            var padding = gutter / 2 + "px";
            var style = gutter ? "padding-left: " + padding + "; padding-right: " + padding + ";" : '';
            if (style !== this.data.style) {
                this.set({ style: style });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJwcm9wcyIsInNwYW4iLCJOdW1iZXIiLCJvZmZzZXQiLCJkYXRhIiwic3R5bGUiLCJtZXRob2RzIiwic2V0R3V0dGVyIiwiZ3V0dGVyIiwicGFkZGluZyIsInNldCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQUQsWUFBWUUsYUFBWixDQUEwQjtBQUN0QkMsY0FBVTtBQUNOQyxjQUFNLEtBREE7QUFFTkMsY0FBTTtBQUZBLEtBRFk7QUFLdEJDLFdBQU87QUFDSEMsY0FBTUMsTUFESDtBQUVIQyxnQkFBUUQ7QUFGTCxLQUxlO0FBU3RCRSxVQUFNO0FBQ0ZDLGVBQU87QUFETCxLQVRnQjtBQVl0QkMsYUFBUztBQUNMQyxtQkFBVyxtQkFBVUMsTUFBVixFQUFrQjtBQUN6QixnQkFBSUMsVUFBVUQsU0FBUyxDQUFULEdBQWEsSUFBM0I7QUFDQSxnQkFBSUgsUUFBUUcsU0FBUyxtQkFBbUJDLE9BQW5CLEdBQTZCLG1CQUE3QixHQUFtREEsT0FBbkQsR0FBNkQsR0FBdEUsR0FBNEUsRUFBeEY7QUFDQSxnQkFBSUosVUFBVSxLQUFLRCxJQUFMLENBQVVDLEtBQXhCLEVBQStCO0FBQzNCLHFCQUFLSyxHQUFMLENBQVMsRUFBRUwsT0FBT0EsS0FBVCxFQUFUO0FBQ0g7QUFDSjtBQVBJO0FBWmEsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ3JvdycsXG4gICAgICAgIHR5cGU6ICdhbmNlc3RvcidcbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIHNwYW46IE51bWJlcixcbiAgICAgICAgb2Zmc2V0OiBOdW1iZXJcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgc3R5bGU6ICcnXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNldEd1dHRlcjogZnVuY3Rpb24gKGd1dHRlcikge1xuICAgICAgICAgICAgdmFyIHBhZGRpbmcgPSBndXR0ZXIgLyAyICsgXCJweFwiO1xuICAgICAgICAgICAgdmFyIHN0eWxlID0gZ3V0dGVyID8gXCJwYWRkaW5nLWxlZnQ6IFwiICsgcGFkZGluZyArIFwiOyBwYWRkaW5nLXJpZ2h0OiBcIiArIHBhZGRpbmcgKyBcIjtcIiA6ICcnO1xuICAgICAgICAgICAgaWYgKHN0eWxlICE9PSB0aGlzLmRhdGEuc3R5bGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCh7IHN0eWxlOiBzdHlsZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19