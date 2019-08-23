"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    field: true,
    props: {
        value: null,
        title: String,
        border: Boolean,
        checked: Boolean,
        loading: Boolean,
        disabled: Boolean,
        activeColor: String,
        inactiveColor: String,
        size: {
            type: String,
            value: '24px'
        },
        activeValue: {
            type: null,
            value: true
        },
        inactiveValue: {
            type: null,
            value: false
        }
    },
    watch: {
        checked: function checked(value) {
            this.set({ value: value });
        }
    },
    created: function created() {
        this.set({ value: this.data.checked });
    },
    methods: {
        onChange: function onChange(event) {
            this.$emit('change', event.detail);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsImZpZWxkIiwicHJvcHMiLCJ0aXRsZSIsIlN0cmluZyIsImJvcmRlciIsIkJvb2xlYW4iLCJjaGVja2VkIiwibG9hZGluZyIsImRpc2FibGVkIiwiYWN0aXZlQ29sb3IiLCJpbmFjdGl2ZUNvbG9yIiwic2l6ZSIsInR5cGUiLCJhY3RpdmVWYWx1ZSIsImluYWN0aXZlVmFsdWUiLCJ3YXRjaCIsInNldCIsImNyZWF0ZWQiLCJkYXRhIiwibWV0aG9kcyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCIkZW1pdCIsImRldGFpbCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQUQsWUFBWUUsYUFBWixDQUEwQjtBQUN0QkMsV0FBTyxJQURlO0FBRXRCQyxXQUFPO0FBQ0hMLGVBQU8sSUFESjtBQUVITSxlQUFPQyxNQUZKO0FBR0hDLGdCQUFRQyxPQUhMO0FBSUhDLGlCQUFTRCxPQUpOO0FBS0hFLGlCQUFTRixPQUxOO0FBTUhHLGtCQUFVSCxPQU5QO0FBT0hJLHFCQUFhTixNQVBWO0FBUUhPLHVCQUFlUCxNQVJaO0FBU0hRLGNBQU07QUFDRkMsa0JBQU1ULE1BREo7QUFFRlAsbUJBQU87QUFGTCxTQVRIO0FBYUhpQixxQkFBYTtBQUNURCxrQkFBTSxJQURHO0FBRVRoQixtQkFBTztBQUZFLFNBYlY7QUFpQkhrQix1QkFBZTtBQUNYRixrQkFBTSxJQURLO0FBRVhoQixtQkFBTztBQUZJO0FBakJaLEtBRmU7QUF3QnRCbUIsV0FBTztBQUNIVCxpQkFBUyxpQkFBVVYsS0FBVixFQUFpQjtBQUN0QixpQkFBS29CLEdBQUwsQ0FBUyxFQUFFcEIsT0FBT0EsS0FBVCxFQUFUO0FBQ0g7QUFIRSxLQXhCZTtBQTZCdEJxQixhQUFTLG1CQUFZO0FBQ2pCLGFBQUtELEdBQUwsQ0FBUyxFQUFFcEIsT0FBTyxLQUFLc0IsSUFBTCxDQUFVWixPQUFuQixFQUFUO0FBQ0gsS0EvQnFCO0FBZ0N0QmEsYUFBUztBQUNMQyxrQkFBVSxrQkFBVUMsS0FBVixFQUFpQjtBQUN2QixpQkFBS0MsS0FBTCxDQUFXLFFBQVgsRUFBcUJELE1BQU1FLE1BQTNCO0FBQ0g7QUFISTtBQWhDYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICBmaWVsZDogdHJ1ZSxcbiAgICBwcm9wczoge1xuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgdGl0bGU6IFN0cmluZyxcbiAgICAgICAgYm9yZGVyOiBCb29sZWFuLFxuICAgICAgICBjaGVja2VkOiBCb29sZWFuLFxuICAgICAgICBsb2FkaW5nOiBCb29sZWFuLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgYWN0aXZlQ29sb3I6IFN0cmluZyxcbiAgICAgICAgaW5hY3RpdmVDb2xvcjogU3RyaW5nLFxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJzI0cHgnXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZVZhbHVlOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgaW5hY3RpdmVWYWx1ZToge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBjaGVja2VkOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHsgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2V0KHsgdmFsdWU6IHRoaXMuZGF0YS5jaGVja2VkIH0pO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBldmVudC5kZXRhaWwpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=