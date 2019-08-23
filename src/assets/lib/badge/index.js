"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    relation: {
        type: 'ancestor',
        name: 'badge-group'
    },
    props: {
        info: null,
        title: String
    },
    methods: {
        onClick: function onClick() {
            var group = this.getRelationNodes('../badge-group/index')[0];
            if (group) {
                group.setActive(this);
            }
        },
        setActive: function setActive(active) {
            this.set({ active: active });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInJlbGF0aW9uIiwidHlwZSIsIm5hbWUiLCJwcm9wcyIsImluZm8iLCJ0aXRsZSIsIlN0cmluZyIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiZ3JvdXAiLCJnZXRSZWxhdGlvbk5vZGVzIiwic2V0QWN0aXZlIiwiYWN0aXZlIiwic2V0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZRSxhQUFaLENBQTBCO0FBQ3RCQyxjQUFVO0FBQ05DLGNBQU0sVUFEQTtBQUVOQyxjQUFNO0FBRkEsS0FEWTtBQUt0QkMsV0FBTztBQUNIQyxjQUFNLElBREg7QUFFSEMsZUFBT0M7QUFGSixLQUxlO0FBU3RCQyxhQUFTO0FBQ0xDLGlCQUFTLG1CQUFZO0FBQ2pCLGdCQUFJQyxRQUFRLEtBQUtDLGdCQUFMLENBQXNCLHNCQUF0QixFQUE4QyxDQUE5QyxDQUFaO0FBQ0EsZ0JBQUlELEtBQUosRUFBVztBQUNQQSxzQkFBTUUsU0FBTixDQUFnQixJQUFoQjtBQUNIO0FBQ0osU0FOSTtBQU9MQSxtQkFBVyxtQkFBVUMsTUFBVixFQUFrQjtBQUN6QixpQkFBS0MsR0FBTCxDQUFTLEVBQUVELFFBQVFBLE1BQVYsRUFBVDtBQUNIO0FBVEk7QUFUYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICByZWxhdGlvbjoge1xuICAgICAgICB0eXBlOiAnYW5jZXN0b3InLFxuICAgICAgICBuYW1lOiAnYmFkZ2UtZ3JvdXAnXG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBpbmZvOiBudWxsLFxuICAgICAgICB0aXRsZTogU3RyaW5nXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBncm91cCA9IHRoaXMuZ2V0UmVsYXRpb25Ob2RlcygnLi4vYmFkZ2UtZ3JvdXAvaW5kZXgnKVswXTtcbiAgICAgICAgICAgIGlmIChncm91cCkge1xuICAgICAgICAgICAgICAgIGdyb3VwLnNldEFjdGl2ZSh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0QWN0aXZlOiBmdW5jdGlvbiAoYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7IGFjdGl2ZTogYWN0aXZlIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=