"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var safe_area_1 = require('./../mixins/safe-area.js');
component_1.VantComponent({
    mixins: [safe_area_1.safeArea()],
    classes: ['bar-class', 'price-class', 'button-class'],
    props: {
        tip: null,
        type: Number,
        price: null,
        label: String,
        loading: Boolean,
        disabled: Boolean,
        buttonText: String,
        currency: {
            type: String,
            value: '¥'
        },
        buttonType: {
            type: String,
            value: 'danger'
        }
    },
    computed: {
        hasPrice: function hasPrice() {
            return typeof this.data.price === 'number';
        },
        priceStr: function priceStr() {
            return (this.data.price / 100).toFixed(2);
        },
        tipStr: function tipStr() {
            var tip = this.data.tip;
            return typeof tip === 'string' ? tip : '';
        }
    },
    methods: {
        onSubmit: function onSubmit(event) {
            this.$emit('submit', event.detail);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwic2FmZV9hcmVhXzEiLCJWYW50Q29tcG9uZW50IiwibWl4aW5zIiwic2FmZUFyZWEiLCJjbGFzc2VzIiwicHJvcHMiLCJ0aXAiLCJ0eXBlIiwiTnVtYmVyIiwicHJpY2UiLCJsYWJlbCIsIlN0cmluZyIsImxvYWRpbmciLCJCb29sZWFuIiwiZGlzYWJsZWQiLCJidXR0b25UZXh0IiwiY3VycmVuY3kiLCJidXR0b25UeXBlIiwiY29tcHV0ZWQiLCJoYXNQcmljZSIsImRhdGEiLCJwcmljZVN0ciIsInRvRml4ZWQiLCJ0aXBTdHIiLCJtZXRob2RzIiwib25TdWJtaXQiLCJldmVudCIsIiRlbWl0IiwiZGV0YWlsIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBLElBQUlDLGNBQWNELFFBQVEscUJBQVIsQ0FBbEI7QUFDQUQsWUFBWUcsYUFBWixDQUEwQjtBQUN0QkMsWUFBUSxDQUFDRixZQUFZRyxRQUFaLEVBQUQsQ0FEYztBQUV0QkMsYUFBUyxDQUNMLFdBREssRUFFTCxhQUZLLEVBR0wsY0FISyxDQUZhO0FBT3RCQyxXQUFPO0FBQ0hDLGFBQUssSUFERjtBQUVIQyxjQUFNQyxNQUZIO0FBR0hDLGVBQU8sSUFISjtBQUlIQyxlQUFPQyxNQUpKO0FBS0hDLGlCQUFTQyxPQUxOO0FBTUhDLGtCQUFVRCxPQU5QO0FBT0hFLG9CQUFZSixNQVBUO0FBUUhLLGtCQUFVO0FBQ05ULGtCQUFNSSxNQURBO0FBRU5kLG1CQUFPO0FBRkQsU0FSUDtBQVlIb0Isb0JBQVk7QUFDUlYsa0JBQU1JLE1BREU7QUFFUmQsbUJBQU87QUFGQztBQVpULEtBUGU7QUF3QnRCcUIsY0FBVTtBQUNOQyxrQkFBVSxvQkFBWTtBQUNsQixtQkFBTyxPQUFPLEtBQUtDLElBQUwsQ0FBVVgsS0FBakIsS0FBMkIsUUFBbEM7QUFDSCxTQUhLO0FBSU5ZLGtCQUFVLG9CQUFZO0FBQ2xCLG1CQUFPLENBQUMsS0FBS0QsSUFBTCxDQUFVWCxLQUFWLEdBQWtCLEdBQW5CLEVBQXdCYSxPQUF4QixDQUFnQyxDQUFoQyxDQUFQO0FBQ0gsU0FOSztBQU9OQyxnQkFBUSxrQkFBWTtBQUNoQixnQkFBSWpCLE1BQU0sS0FBS2MsSUFBTCxDQUFVZCxHQUFwQjtBQUNBLG1CQUFPLE9BQU9BLEdBQVAsS0FBZSxRQUFmLEdBQTBCQSxHQUExQixHQUFnQyxFQUF2QztBQUNIO0FBVkssS0F4Qlk7QUFvQ3RCa0IsYUFBUztBQUNMQyxrQkFBVSxrQkFBVUMsS0FBVixFQUFpQjtBQUN2QixpQkFBS0MsS0FBTCxDQUFXLFFBQVgsRUFBcUJELE1BQU1FLE1BQTNCO0FBQ0g7QUFISTtBQXBDYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG52YXIgc2FmZV9hcmVhXzEgPSByZXF1aXJlKFwiLi4vbWl4aW5zL3NhZmUtYXJlYVwiKTtcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xuICAgIG1peGluczogW3NhZmVfYXJlYV8xLnNhZmVBcmVhKCldLFxuICAgIGNsYXNzZXM6IFtcbiAgICAgICAgJ2Jhci1jbGFzcycsXG4gICAgICAgICdwcmljZS1jbGFzcycsXG4gICAgICAgICdidXR0b24tY2xhc3MnXG4gICAgXSxcbiAgICBwcm9wczoge1xuICAgICAgICB0aXA6IG51bGwsXG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgcHJpY2U6IG51bGwsXG4gICAgICAgIGxhYmVsOiBTdHJpbmcsXG4gICAgICAgIGxvYWRpbmc6IEJvb2xlYW4sXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBidXR0b25UZXh0OiBTdHJpbmcsXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ8KlJ1xuICAgICAgICB9LFxuICAgICAgICBidXR0b25UeXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ2RhbmdlcidcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgaGFzUHJpY2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5kYXRhLnByaWNlID09PSAnbnVtYmVyJztcbiAgICAgICAgfSxcbiAgICAgICAgcHJpY2VTdHI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5kYXRhLnByaWNlIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICB9LFxuICAgICAgICB0aXBTdHI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0aXAgPSB0aGlzLmRhdGEudGlwO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB0aXAgPT09ICdzdHJpbmcnID8gdGlwIDogJyc7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25TdWJtaXQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnc3VibWl0JywgZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19