"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    field: true,
    classes: ['input-class', 'plus-class', 'minus-class'],
    props: {
        value: null,
        integer: Boolean,
        disabled: Boolean,
        inputWidth: String,
        asyncChange: Boolean,
        disableInput: Boolean,
        min: {
            type: null,
            value: 1
        },
        max: {
            type: null,
            value: Number.MAX_SAFE_INTEGER
        },
        step: {
            type: null,
            value: 1
        }
    },
    computed: {
        minusDisabled: function minusDisabled() {
            return this.data.disabled || this.data.value <= this.data.min;
        },
        plusDisabled: function plusDisabled() {
            return this.data.disabled || this.data.value >= this.data.max;
        }
    },
    watch: {
        value: function value(_value) {
            if (_value === '') {
                return;
            }
            var newValue = this.range(_value);
            if (typeof newValue === 'number' && _value !== newValue) {
                this.set({ value: newValue });
            }
        }
    },
    data: {
        focus: false
    },
    created: function created() {
        this.set({
            value: this.range(this.data.value)
        });
    },
    methods: {
        onFocus: function onFocus(event) {
            this.$emit('focus', event.detail);
        },
        onBlur: function onBlur(event) {
            var value = this.range(this.data.value);
            this.triggerInput(value);
            this.$emit('blur', event.detail);
        },
        // limit value range
        range: function range(value) {
            return Math.max(Math.min(this.data.max, value), this.data.min);
        },
        onInput: function onInput(event) {
            var _a = (event.detail || {}).value,
                value = _a === void 0 ? '' : _a;
            this.triggerInput(value);
        },
        onChange: function onChange(type) {
            if (this.data[type + "Disabled"]) {
                this.$emit('overlimit', type);
                return;
            }
            var diff = type === 'minus' ? -this.data.step : +this.data.step;
            var value = Math.round((this.data.value + diff) * 100) / 100;
            this.triggerInput(this.range(value));
            this.$emit(type);
        },
        onMinus: function onMinus() {
            this.onChange('minus');
        },
        onPlus: function onPlus() {
            this.onChange('plus');
        },
        triggerInput: function triggerInput(value) {
            this.set({
                value: this.data.asyncChange ? this.data.value : value
            });
            this.$emit('change', value);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwiaW50ZWdlciIsIkJvb2xlYW4iLCJkaXNhYmxlZCIsImlucHV0V2lkdGgiLCJTdHJpbmciLCJhc3luY0NoYW5nZSIsImRpc2FibGVJbnB1dCIsIm1pbiIsInR5cGUiLCJtYXgiLCJOdW1iZXIiLCJNQVhfU0FGRV9JTlRFR0VSIiwic3RlcCIsImNvbXB1dGVkIiwibWludXNEaXNhYmxlZCIsImRhdGEiLCJwbHVzRGlzYWJsZWQiLCJ3YXRjaCIsIm5ld1ZhbHVlIiwicmFuZ2UiLCJzZXQiLCJmb2N1cyIsImNyZWF0ZWQiLCJtZXRob2RzIiwib25Gb2N1cyIsImV2ZW50IiwiJGVtaXQiLCJkZXRhaWwiLCJvbkJsdXIiLCJ0cmlnZ2VySW5wdXQiLCJNYXRoIiwib25JbnB1dCIsIl9hIiwib25DaGFuZ2UiLCJkaWZmIiwicm91bmQiLCJvbk1pbnVzIiwib25QbHVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZRSxhQUFaLENBQTBCO0FBQ3RCQyxXQUFPLElBRGU7QUFFdEJDLGFBQVMsQ0FDTCxhQURLLEVBRUwsWUFGSyxFQUdMLGFBSEssQ0FGYTtBQU90QkMsV0FBTztBQUNITixlQUFPLElBREo7QUFFSE8saUJBQVNDLE9BRk47QUFHSEMsa0JBQVVELE9BSFA7QUFJSEUsb0JBQVlDLE1BSlQ7QUFLSEMscUJBQWFKLE9BTFY7QUFNSEssc0JBQWNMLE9BTlg7QUFPSE0sYUFBSztBQUNEQyxrQkFBTSxJQURMO0FBRURmLG1CQUFPO0FBRk4s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QixLQUFLVixLQUFMLENBQVcxQixLQUFYLENBQWxCO0FBQ0EsaUJBQUtpQyxLQUFMLENBQVdsQixJQUFYO0FBQ0gsU0ExQkk7QUEyQkw0QixpQkFBUyxtQkFBWTtBQUNqQixpQkFBS0gsUUFBTCxDQUFjLE9BQWQ7QUFDSCxTQTdCSTtBQThCTEksZ0JBQVEsa0JBQVk7QUFDaEIsaUJBQUtKLFFBQUwsQ0FBYyxNQUFkO0FBQ0gsU0FoQ0k7QUFpQ0xKLHNCQUFjLHNCQUFVcEMsS0FBVixFQUFpQjtBQUMzQixpQkFBSzJCLEdBQUwsQ0FBUztBQUNMM0IsdUJBQU8sS0FBS3NCLElBQUwsQ0FBVVYsV0FBVixHQUF3QixLQUFLVSxJQUFMLENBQVV0QixLQUFsQyxHQUEwQ0E7QUFENUMsYUFBVDtBQUdBLGlCQUFLaUMsS0FBTCxDQUFXLFFBQVgsRUFBcUJqQyxLQUFyQjtBQUNIO0FBdENJO0FBdERhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xuICAgIGZpZWxkOiB0cnVlLFxuICAgIGNsYXNzZXM6IFtcbiAgICAgICAgJ2lucHV0LWNsYXNzJyxcbiAgICAgICAgJ3BsdXMtY2xhc3MnLFxuICAgICAgICAnbWludXMtY2xhc3MnXG4gICAgXSxcbiAgICBwcm9wczoge1xuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgaW50ZWdlcjogQm9vbGVhbixcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIGlucHV0V2lkdGg6IFN0cmluZyxcbiAgICAgICAgYXN5bmNDaGFuZ2U6IEJvb2xlYW4sXG4gICAgICAgIGRpc2FibGVJbnB1dDogQm9vbGVhbixcbiAgICAgICAgbWluOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgdmFsdWU6IDFcbiAgICAgICAgfSxcbiAgICAgICAgbWF4OiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgdmFsdWU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gICAgICAgIH0sXG4gICAgICAgIHN0ZXA6IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICB2YWx1ZTogMVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBtaW51c0Rpc2FibGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmRpc2FibGVkIHx8IHRoaXMuZGF0YS52YWx1ZSA8PSB0aGlzLmRhdGEubWluO1xuICAgICAgICB9LFxuICAgICAgICBwbHVzRGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuZGlzYWJsZWQgfHwgdGhpcy5kYXRhLnZhbHVlID49IHRoaXMuZGF0YS5tYXg7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLnJhbmdlKHZhbHVlKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmV3VmFsdWUgPT09ICdudW1iZXInICYmIHZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHsgdmFsdWU6IG5ld1ZhbHVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGZvY3VzOiBmYWxzZVxuICAgIH0sXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5yYW5nZSh0aGlzLmRhdGEudmFsdWUpXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbkZvY3VzOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2ZvY3VzJywgZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25CbHVyOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMucmFuZ2UodGhpcy5kYXRhLnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcklucHV0KHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2JsdXInLCBldmVudC5kZXRhaWwpO1xuICAgICAgICB9LFxuICAgICAgICAvLyBsaW1pdCB2YWx1ZSByYW5nZVxuICAgICAgICByYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4odGhpcy5kYXRhLm1heCwgdmFsdWUpLCB0aGlzLmRhdGEubWluKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25JbnB1dDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgX2EgPSAoZXZlbnQuZGV0YWlsIHx8IHt9KS52YWx1ZSwgdmFsdWUgPSBfYSA9PT0gdm9pZCAwID8gJycgOiBfYTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcklucHV0KHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhW3R5cGUgKyBcIkRpc2FibGVkXCJdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb3ZlcmxpbWl0JywgdHlwZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGRpZmYgPSB0eXBlID09PSAnbWludXMnID8gLXRoaXMuZGF0YS5zdGVwIDogK3RoaXMuZGF0YS5zdGVwO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gTWF0aC5yb3VuZCgodGhpcy5kYXRhLnZhbHVlICsgZGlmZikgKiAxMDApIC8gMTAwO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VySW5wdXQodGhpcy5yYW5nZSh2YWx1ZSkpO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCh0eXBlKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25NaW51czogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSgnbWludXMnKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25QbHVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKCdwbHVzJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHRyaWdnZXJJbnB1dDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZGF0YS5hc3luY0NoYW5nZSA/IHRoaXMuZGF0YS52YWx1ZSA6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19