"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    field: true,
    classes: ['node-class'],
    props: {
        checked: null,
        loading: Boolean,
        disabled: Boolean,
        activeColor: String,
        inactiveColor: String,
        size: {
            type: String,
            value: '30px'
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
        onClick: function onClick() {
            var _a = this.data,
                activeValue = _a.activeValue,
                inactiveValue = _a.inactiveValue;
            if (!this.data.disabled && !this.data.loading) {
                var checked = this.data.checked === activeValue;
                var value = checked ? inactiveValue : activeValue;
                this.$emit('input', value);
                this.$emit('change', value);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwiY2hlY2tlZCIsImxvYWRpbmciLCJCb29sZWFuIiwiZGlzYWJsZWQiLCJhY3RpdmVDb2xvciIsIlN0cmluZyIsImluYWN0aXZlQ29sb3IiLCJzaXplIiwidHlwZSIsImFjdGl2ZVZhbHVlIiwiaW5hY3RpdmVWYWx1ZSIsIndhdGNoIiwic2V0IiwiY3JlYXRlZCIsImRhdGEiLCJtZXRob2RzIiwib25DbGljayIsIl9hIiwiJGVtaXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0FELFlBQVlFLGFBQVosQ0FBMEI7QUFDdEJDLFdBQU8sSUFEZTtBQUV0QkMsYUFBUyxDQUFDLFlBQUQsQ0FGYTtBQUd0QkMsV0FBTztBQUNIQyxpQkFBUyxJQUROO0FBRUhDLGlCQUFTQyxPQUZOO0FBR0hDLGtCQUFVRCxPQUhQO0FBSUhFLHFCQUFhQyxNQUpWO0FBS0hDLHVCQUFlRCxNQUxaO0FBTUhFLGNBQU07QUFDRkMsa0JBQU1ILE1BREo7QUFFRlosbUJBQU87QUFGTCxTQU5IO0FBVUhnQixxQkFBYTtBQUNURCxrQkFBTSxJQURHO0FBRVRmLG1CQUFPO0FBRkUsU0FWVjtBQWNIaUIsdUJBQWU7QUFDWEYsa0JBQU0sSUFESztBQUVYZixtQkFBTztBQUZJO0FBZFosS0FIZTtBQXNCdEJrQixXQUFPO0FBQ0hYLGlCQUFTLGlCQUFVUCxLQUFWLEVBQWlCO0FBQ3RCLGlCQUFLbUIsR0FBTCxDQUFTLEVBQUVuQixPQUFPQSxLQUFULEVBQVQ7QUFDSDtBQUhFLEtBdEJlO0FBMkJ0Qm9CLGFBQVMsbUJBQVk7QUFDakIsYUFBS0QsR0FBTCxDQUFTLEVBQUVuQixPQUFPLEtBQUtxQixJQUFMLENBQVVkLE9BQW5CLEVBQVQ7QUFDSCxLQTdCcUI7QUE4QnRCZSxhQUFTO0FBQ0xDLGlCQUFTLG1CQUFZO0FBQ2pCLGdCQUFJQyxLQUFLLEtBQUtILElBQWQ7QUFBQSxnQkFBb0JMLGNBQWNRLEdBQUdSLFdBQXJDO0FBQUEsZ0JBQWtEQyxnQkFBZ0JPLEdBQUdQLGFBQXJFO0FBQ0EsZ0JBQUksQ0FBQyxLQUFLSSxJQUFMLENBQVVYLFFBQVgsSUFBdUIsQ0FBQyxLQUFLVyxJQUFMLENBQVViLE9BQXRDLEVBQStDO0FBQzNDLG9CQUFJRCxVQUFVLEtBQUtjLElBQUwsQ0FBVWQsT0FBVixLQUFzQlMsV0FBcEM7QUFDQSxvQkFBSWhCLFFBQVFPLFVBQVVVLGFBQVYsR0FBMEJELFdBQXRDO0FBQ0EscUJBQUtTLEtBQUwsQ0FBVyxPQUFYLEVBQW9CekIsS0FBcEI7QUFDQSxxQkFBS3lCLEtBQUwsQ0FBVyxRQUFYLEVBQXFCekIsS0FBckI7QUFDSDtBQUNKO0FBVEk7QUE5QmEsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XG4gICAgZmllbGQ6IHRydWUsXG4gICAgY2xhc3NlczogWydub2RlLWNsYXNzJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgY2hlY2tlZDogbnVsbCxcbiAgICAgICAgbG9hZGluZzogQm9vbGVhbixcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIGFjdGl2ZUNvbG9yOiBTdHJpbmcsXG4gICAgICAgIGluYWN0aXZlQ29sb3I6IFN0cmluZyxcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICczMHB4J1xuICAgICAgICB9LFxuICAgICAgICBhY3RpdmVWYWx1ZToge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGluYWN0aXZlVmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgY2hlY2tlZDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNldCh7IHZhbHVlOiB0aGlzLmRhdGEuY2hlY2tlZCB9KTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCBhY3RpdmVWYWx1ZSA9IF9hLmFjdGl2ZVZhbHVlLCBpbmFjdGl2ZVZhbHVlID0gX2EuaW5hY3RpdmVWYWx1ZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLmRpc2FibGVkICYmICF0aGlzLmRhdGEubG9hZGluZykge1xuICAgICAgICAgICAgICAgIHZhciBjaGVja2VkID0gdGhpcy5kYXRhLmNoZWNrZWQgPT09IGFjdGl2ZVZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGNoZWNrZWQgPyBpbmFjdGl2ZVZhbHVlIDogYWN0aXZlVmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=