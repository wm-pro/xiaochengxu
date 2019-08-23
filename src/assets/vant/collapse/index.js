"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    relation: {
        name: 'collapse-item',
        type: 'descendant',
        linked: function linked(child) {
            this.children.push(child);
        }
    },
    props: {
        value: {
            type: null,
            observer: 'updateExpanded'
        },
        accordion: {
            type: Boolean,
            observer: 'updateExpanded'
        },
        border: {
            type: Boolean,
            value: true
        }
    },
    beforeCreate: function beforeCreate() {
        this.children = [];
    },
    methods: {
        updateExpanded: function updateExpanded() {
            this.children.forEach(function (child) {
                child.updateExpanded();
            });
        },
        switch: function _switch(name, expanded) {
            var _a = this.data,
                accordion = _a.accordion,
                value = _a.value;
            if (!accordion) {
                name = expanded ? (value || []).concat(name) : (value || []).filter(function (activeName) {
                    return activeName !== name;
                });
            } else {
                name = expanded ? name : '';
            }
            this.$emit('change', name);
            this.$emit('input', name);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJjaGlsZCIsImNoaWxkcmVuIiwicHVzaCIsInByb3BzIiwib2JzZXJ2ZXIiLCJhY2NvcmRpb24iLCJCb29sZWFuIiwiYm9yZGVyIiwiYmVmb3JlQ3JlYXRlIiwibWV0aG9kcyIsInVwZGF0ZUV4cGFuZGVkIiwiZm9yRWFjaCIsInN3aXRjaCIsImV4cGFuZGVkIiwiX2EiLCJkYXRhIiwiY29uY2F0IiwiZmlsdGVyIiwiYWN0aXZlTmFtZSIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZRSxhQUFaLENBQTBCO0FBQ3RCQyxjQUFVO0FBQ05DLGNBQU0sZUFEQTtBQUVOQyxjQUFNLFlBRkE7QUFHTkMsZ0JBQVEsZ0JBQVVDLEtBQVYsRUFBaUI7QUFDckIsaUJBQUtDLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQkYsS0FBbkI7QUFDSDtBQUxLLEtBRFk7QUFRdEJHLFdBQU87QUFDSFgsZUFBTztBQUNITSxrQkFBTSxJQURIO0FBRUhNLHNCQUFVO0FBRlAsU0FESjtBQUtIQyxtQkFBVztBQUNQUCxrQkFBTVEsT0FEQztBQUVQRixzQkFBVTtBQUZILFNBTFI7QUFTSEcsZ0JBQVE7QUFDSlQsa0JBQU1RLE9BREY7QUFFSmQsbUJBQU87QUFGSDtBQVRMLEtBUmU7QUFzQnRCZ0Isa0JBQWMsd0JBQVk7QUFDdEIsYUFBS1AsUUFBTCxHQUFnQixFQUFoQjtBQUNILEtBeEJxQjtBQXlCdEJRLGFBQVM7QUFDTEMsd0JBQWdCLDBCQUFZO0FBQ3hCLGlCQUFLVCxRQUFMLENBQWNVLE9BQWQsQ0FBc0IsVUFBVVgsS0FBVixFQUFpQjtBQUNuQ0Esc0JBQU1VLGNBQU47QUFDSCxhQUZEO0FBR0gsU0FMSTtBQU1MRSxnQkFBUSxpQkFBVWYsSUFBVixFQUFnQmdCLFFBQWhCLEVBQTBCO0FBQzlCLGdCQUFJQyxLQUFLLEtBQUtDLElBQWQ7QUFBQSxnQkFBb0JWLFlBQVlTLEdBQUdULFNBQW5DO0FBQUEsZ0JBQThDYixRQUFRc0IsR0FBR3RCLEtBQXpEO0FBQ0EsZ0JBQUksQ0FBQ2EsU0FBTCxFQUFnQjtBQUNaUix1QkFBT2dCLFdBQ0QsQ0FBQ3JCLFNBQVMsRUFBVixFQUFjd0IsTUFBZCxDQUFxQm5CLElBQXJCLENBREMsR0FFRCxDQUFDTCxTQUFTLEVBQVYsRUFBY3lCLE1BQWQsQ0FBcUIsVUFBVUMsVUFBVixFQUFzQjtBQUFFLDJCQUFPQSxlQUFlckIsSUFBdEI7QUFBNkIsaUJBQTFFLENBRk47QUFHSCxhQUpELE1BS0s7QUFDREEsdUJBQU9nQixXQUFXaEIsSUFBWCxHQUFrQixFQUF6QjtBQUNIO0FBQ0QsaUJBQUtzQixLQUFMLENBQVcsUUFBWCxFQUFxQnRCLElBQXJCO0FBQ0EsaUJBQUtzQixLQUFMLENBQVcsT0FBWCxFQUFvQnRCLElBQXBCO0FBQ0g7QUFsQkk7QUF6QmEsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ2NvbGxhcHNlLWl0ZW0nLFxuICAgICAgICB0eXBlOiAnZGVzY2VuZGFudCcsXG4gICAgICAgIGxpbmtlZDogZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlRXhwYW5kZWQnXG4gICAgICAgIH0sXG4gICAgICAgIGFjY29yZGlvbjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlRXhwYW5kZWQnXG4gICAgICAgIH0sXG4gICAgICAgIGJvcmRlcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGJlZm9yZUNyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHVwZGF0ZUV4cGFuZGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQudXBkYXRlRXhwYW5kZWQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzd2l0Y2g6IGZ1bmN0aW9uIChuYW1lLCBleHBhbmRlZCkge1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCBhY2NvcmRpb24gPSBfYS5hY2NvcmRpb24sIHZhbHVlID0gX2EudmFsdWU7XG4gICAgICAgICAgICBpZiAoIWFjY29yZGlvbikge1xuICAgICAgICAgICAgICAgIG5hbWUgPSBleHBhbmRlZFxuICAgICAgICAgICAgICAgICAgICA/ICh2YWx1ZSB8fCBbXSkuY29uY2F0KG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIDogKHZhbHVlIHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24gKGFjdGl2ZU5hbWUpIHsgcmV0dXJuIGFjdGl2ZU5hbWUgIT09IG5hbWU7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9IGV4cGFuZGVkID8gbmFtZSA6ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgbmFtZSk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIG5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=