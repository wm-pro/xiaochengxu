"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    field: true,
    classes: ['input-class'],
    props: {
        size: String,
        icon: String,
        label: String,
        error: Boolean,
        fixed: Boolean,
        focus: Boolean,
        center: Boolean,
        isLink: Boolean,
        leftIcon: String,
        disabled: Boolean,
        autosize: Boolean,
        readonly: Boolean,
        required: Boolean,
        iconClass: String,
        clearable: Boolean,
        inputAlign: String,
        errorMessageAlign: String,
        customClass: String,
        confirmType: String,
        confirmHold: Boolean,
        errorMessage: String,
        placeholder: String,
        customStyle: String,
        useIconSlot: Boolean,
        useButtonSlot: Boolean,
        showConfirmBar: {
            type: Boolean,
            value: true
        },
        placeholderStyle: String,
        adjustPosition: {
            type: Boolean,
            value: true
        },
        cursorSpacing: {
            type: Number,
            value: 50
        },
        maxlength: {
            type: Number,
            value: -1
        },
        type: {
            type: String,
            value: 'text'
        },
        border: {
            type: Boolean,
            value: true
        },
        titleWidth: {
            type: String,
            value: '90px'
        }
    },
    data: {
        showClear: false
    },
    beforeCreate: function beforeCreate() {
        this.focused = false;
    },
    methods: {
        onInput: function onInput(event) {
            var _this = this;
            var _a = (event.detail || {}).value,
                value = _a === void 0 ? '' : _a;
            this.set({
                value: value,
                showClear: this.getShowClear(value)
            }, function () {
                _this.emitChange(value);
            });
        },
        onFocus: function onFocus(event) {
            var _a = event.detail || {},
                _b = _a.value,
                value = _b === void 0 ? '' : _b,
                _c = _a.height,
                height = _c === void 0 ? 0 : _c;
            this.$emit('focus', { value: value, height: height });
            this.focused = true;
            this.blurFromClear = false;
            this.set({
                showClear: this.getShowClear()
            });
        },
        onBlur: function onBlur(event) {
            var _this = this;
            var _a = event.detail || {},
                _b = _a.value,
                value = _b === void 0 ? '' : _b,
                _c = _a.cursor,
                cursor = _c === void 0 ? 0 : _c;
            this.$emit('blur', { value: value, cursor: cursor });
            this.focused = false;
            var showClear = this.getShowClear();
            if (this.data.value === value) {
                this.set({
                    showClear: showClear
                });
            } else if (!this.blurFromClear) {
                // fix: the handwritten keyboard does not trigger input change
                this.set({
                    value: value,
                    showClear: showClear
                }, function () {
                    _this.emitChange(value);
                });
            }
        },
        onClickIcon: function onClickIcon() {
            this.$emit('click-icon');
        },
        getShowClear: function getShowClear(value) {
            value = value === undefined ? this.data.value : value;
            return this.data.clearable && this.focused && value && !this.data.readonly;
        },
        onClear: function onClear() {
            var _this = this;
            this.blurFromClear = true;
            this.set({
                value: '',
                showClear: this.getShowClear('')
            }, function () {
                _this.emitChange('');
                _this.$emit('clear', '');
            });
        },
        onConfirm: function onConfirm() {
            this.$emit('confirm', this.data.value);
        },
        emitChange: function emitChange(value) {
            this.$emit('input', value);
            this.$emit('change', value);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwic2l6ZSIsIlN0cmluZyIsImljb24iLCJsYWJlbCIsImVycm9yIiwiQm9vbGVhbiIsImZpeGVkIiwiZm9jdXMiLCJjZW50ZXIiLCJpc0xpbmsiLCJsZWZ0SWNvbiIsImRpc2FibGVkIiwiYXV0b3NpemUiLCJyZWFkb25seSIsInJlcXVpcmVkIiwiaWNvbkNsYXNzIiwiY2xlYXJhYmxlIiwiaW5wdXRBbGlnbiIsImVycm9yTWVzc2FnZUFsaWduIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtVHlwZSIsImNvbmZpcm1Ib2xkIiwiZXJyb3JNZXNzYWdlIiwicGxhY2Vob2xkZXIiLCJjdXN0b21TdHlsZSIsInVzZUljb25TbG90IiwidXNlQnV0dG9uU2xvdCIsInNob3dDb25maXJtQmFyIiwidHlwZSIsInBsYWNlaG9sZGVyU3R5bGUiLCJhZGp1c3RQb3NpdGlvbiIsImN1cnNvclNwYWNpbmciLCJOdW1iZXIiLCJtYXhsZW5ndGgiLCJib3JkZXIiLCJ0aXRsZVdpZHRoIiwiZGF0YSIsInNob3dDbGVhciIsImJlZm9yZUNyZWF0ZSIsImZvY3VzZWQiLCJtZXRob2RzIiwib25JbnB1dCIsImV2ZW50IiwiX3RoaXMiLCJfYSIsImRldGFpbCIsInNldCIsImdldFNob3dDbGVhciIsImVtaXRDaGFuZ2UiLCJvbkZvY3VzIiwiX2IiLCJfYyIsImhlaWdodCIsIiRlbWl0IiwiYmx1ckZyb21DbGVhciIsIm9uQmx1ciIsImN1cnNvciIsIm9uQ2xpY2tJY29uIiwidW5kZWZpbmVkIiwib25DbGVhciIsIm9uQ29uZmlybSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQUQsWUFBWUUsYUFBWixDQUEwQjtBQUN0QkMsV0FBTyxJQURlO0FBRXRCQyxhQUFTLENBQUMsYUFBRCxDQUZhO0FBR3RCQyxXQUFPO0FBQ0hDLGNBQU1DLE1BREg7QUFFSEMsY0FBTUQsTUFGSDtBQUdIRSxlQUFPRixNQUhKO0FBSUhHLGVBQU9DLE9BSko7QUFLSEMsZUFBT0QsT0FMSjtBQU1IRSxlQUFPRixPQU5KO0FBT0hHLGdCQUFRSCxPQVBMO0FBUUhJLGdCQUFRSixPQVJMO0FBU0hLLGtCQUFVVCxNQVRQO0FBVUhVLGtCQUFVTixPQVZQO0FBV0hPLGtCQUFVUCxPQVhQO0FBWUhRLGtCQUFVUixPQVpQO0FBYUhTLGtCQUFVVCxPQWJQO0FBY0hVLG1CQUFXZCxNQWRSO0FBZUhlLG1CQUFXWCxPQWZSO0FBZ0JIWSxvQkFBWWhCLE1BaEJUO0FBaUJIaUIsMkJBQW1CakIsTUFqQmhCO0FBa0JIa0IscUJBQWFsQixNQWxCVjtBQW1CSG1CLHFCQUFhbkIsTUFuQlY7QUFvQkhvQixxQkFBYWhCLE9BcEJWO0FBcUJIaUIsc0JBQWNyQixNQXJCWDtBQXNCSHNCLHFCQUFhdEIsTUF0QlY7QUF1Qkh1QixxQkFBYXZCLE1BdkJWO0FBd0JId0IscUJBQWFwQixPQXhCVjtBQXlCSHFCLHVCQUFlckIsT0F6Qlo7QUEwQkhzQix3QkFBZ0I7QUFDWkMsa0JBQU12QixPQURNO0FBRVpaLG1CQUFPO0FBRkssU0ExQmI7QUE4QkhvQywwQkFBa0I1QixNQTlCZjtBQStCSDZCLHdCQUFnQjtBQUNaRixrQkFBTXZCLE9BRE07QUFFWlosbUJBQU87QUFGSyxTQS9CYjtBQW1DSHNDLHVCQUFlO0FBQ1hILGtCQUFNSSxNQURLO0FBRVh2QyxtQkFBTztBQUZJLFNBbkNaO0FBdUNId0MsbUJBQVc7QUFDUEwsa0JBQU1JLE1BREM7QUFFUHZDLG1CQUFPLENBQUM7QUFGRCxTQXZDUjtBQTJDSG1DLGNBQU07QUFDRkEsa0JBQU0zQixNQURKO0FBRUZSLG1CQUFPO0FBRkwsU0EzQ0g7QUErQ0h5QyxnQkFBUTtBQUNKTixrQkFBTXZCLE9BREY7QUFFSlosbUJBQU87QUFGSCxTQS9DTDtBQW1ESDBDLG9CQUFZO0FBQ1JQLGtCQUFNM0IsTUFERTtBQUVSUixtQkFBTztBQUZDO0FBbkRULEtBSGU7QUEyRHRCMkMsVUFBTTtBQUNGQyxtQkFBVztBQURULEtBM0RnQjtBQThEdEJDLGtCQUFjLHdCQUFZO0FBQ3RCLGFBQUtDLE9BQUwsR0FBZSxLQUFmO0FBQ0gsS0FoRXFCO0FBaUV0QkMsYUFBUztBQUNMQyxpQkFBUyxpQkFBVUMsS0FBVixFQUFpQjtBQUN0QixnQkFBSUMsUUFBUSxJQUFaO0FBQ0EsZ0JBQUlDLEtBQUssQ0FBQ0YsTUFBTUcsTUFBTixJQUFnQixFQUFqQixFQUFxQnBELEtBQTlCO0FBQUEsZ0JBQXFDQSxRQUFRbUQsT0FBTyxLQUFLLENBQVosR0FBZ0IsRUFBaEIsR0FBcUJBLEVBQWxFO0FBQ0EsaUJBQUtFLEdBQUwsQ0FBUztBQUNMckQsdUJBQU9BLEtBREY7QUFFTDRDLDJCQUFXLEtBQUtVLFlBQUwsQ0FBa0J0RCxLQUFsQjtBQUZOLGFBQVQsRUFHRyxZQUFZO0FBQ1hrRCxzQkFBTUssVUFBTixDQUFpQnZELEtBQWpCO0FBQ0gsYUFMRDtBQU1ILFNBVkk7QUFXTHdELGlCQUFTLGlCQUFVUCxLQUFWLEVBQWlCO0FBQ3RCLGdCQUFJRSxLQUFLRixNQUFNRyxNQUFOLElBQWdCLEVBQXpCO0FBQUEsZ0JBQTZCSyxLQUFLTixHQUFHbkQsS0FBckM7QUFBQSxnQkFBNENBLFFBQVF5RCxPQUFPLEtBQUssQ0FBWixHQUFnQixFQUFoQixHQUFxQkEsRUFBekU7QUFBQSxnQkFBNkVDLEtBQUtQLEdBQUdRLE1BQXJGO0FBQUEsZ0JBQTZGQSxTQUFTRCxPQUFPLEtBQUssQ0FBWixHQUFnQixDQUFoQixHQUFvQkEsRUFBMUg7QUFDQSxpQkFBS0UsS0FBTCxDQUFXLE9BQVgsRUFBb0IsRUFBRTVELE9BQU9BLEtBQVQsRUFBZ0IyRCxRQUFRQSxNQUF4QixFQUFwQjtBQUNBLGlCQUFLYixPQUFMLEdBQWUsSUFBZjtBQUNBLGlCQUFLZSxhQUFMLEdBQXFCLEtBQXJCO0FBQ0EsaUJBQUtSLEdBQUwsQ0FBUztBQUNMVCwyQkFBVyxLQUFLVSxZQUFMO0FBRE4sYUFBVDtBQUdILFNBbkJJO0FBb0JMUSxnQkFBUSxnQkFBVWIsS0FBVixFQUFpQjtBQUNyQixnQkFBSUMsUUFBUSxJQUFaO0FBQ0EsZ0JBQUlDLEtBQUtGLE1BQU1HLE1BQU4sSUFBZ0IsRUFBekI7QUFBQSxnQkFBNkJLLEtBQUtOLEdBQUduRCxLQUFyQztBQUFBLGdCQUE0Q0EsUUFBUXlELE9BQU8sS0FBSyxDQUFaLEdBQWdCLEVBQWhCLEdBQXFCQSxFQUF6RTtBQUFBLGdCQUE2RUMsS0FBS1AsR0FBR1ksTUFBckY7QUFBQSxnQkFBNkZBLFNBQVNMLE9BQU8sS0FBSyxDQUFaLEdBQWdCLENBQWhCLEdBQW9CQSxFQUExSDtBQUNBLGlCQUFLRSxLQUFMLENBQVcsTUFBWCxFQUFtQixFQUFFNUQsT0FBT0EsS0FBVCxFQUFnQitELFFBQVFBLE1BQXhCLEVBQW5CO0FBQ0EsaUJBQUtqQixPQUFMLEdBQWUsS0FBZjtBQUNBLGdCQUFJRixZQUFZLEtBQUtVLFlBQUwsRUFBaEI7QUFDQSxnQkFBSSxLQUFLWCxJQUFMLENBQVUzQyxLQUFWLEtBQW9CQSxLQUF4QixFQUErQjtBQUMzQixxQkFBS3FELEdBQUwsQ0FBUztBQUNMVCwrQkFBV0E7QUFETixpQkFBVDtBQUdILGFBSkQsTUFLSyxJQUFJLENBQUMsS0FBS2lCLGFBQVYsRUFBeUI7QUFDMUI7QUFDQSxxQkFBS1IsR0FBTCxDQUFTO0FBQ0xyRCwyQkFBT0EsS0FERjtBQUVMNEMsK0JBQVdBO0FBRk4saUJBQVQsRUFHRyxZQUFZO0FBQ1hNLDBCQUFNSyxVQUFOLENBQWlCdkQsS0FBakI7QUFDSCxpQkFMRDtBQU1IO0FBQ0osU0F4Q0k7QUF5Q0xnRSxxQkFBYSx1QkFBWTtBQUNyQixpQkFBS0osS0FBTCxDQUFXLFlBQVg7QUFDSCxTQTNDSTtBQTRDTE4sc0JBQWMsc0JBQVV0RCxLQUFWLEVBQWlCO0FBQzNCQSxvQkFBUUEsVUFBVWlFLFNBQVYsR0FBc0IsS0FBS3RCLElBQUwsQ0FBVTNDLEtBQWhDLEdBQXdDQSxLQUFoRDtBQUNBLG1CQUFRLEtBQUsyQyxJQUFMLENBQVVwQixTQUFWLElBQXVCLEtBQUt1QixPQUE1QixJQUF1QzlDLEtBQXZDLElBQWdELENBQUMsS0FBSzJDLElBQUwsQ0FBVXZCLFFBQW5FO0FBQ0gsU0EvQ0k7QUFnREw4QyxpQkFBUyxtQkFBWTtBQUNqQixnQkFBSWhCLFFBQVEsSUFBWjtBQUNBLGlCQUFLVyxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsaUJBQUtSLEdBQUwsQ0FBUztBQUNMckQsdUJBQU8sRUFERjtBQUVMNEMsMkJBQVcsS0FBS1UsWUFBTCxDQUFrQixFQUFsQjtBQUZOLGFBQVQsRUFHRyxZQUFZO0FBQ1hKLHNCQUFNSyxVQUFOLENBQWlCLEVBQWpCO0FBQ0FMLHNCQUFNVSxLQUFOLENBQVksT0FBWixFQUFxQixFQUFyQjtBQUNILGFBTkQ7QUFPSCxTQTFESTtBQTJETE8sbUJBQVcscUJBQVk7QUFDbkIsaUJBQUtQLEtBQUwsQ0FBVyxTQUFYLEVBQXNCLEtBQUtqQixJQUFMLENBQVUzQyxLQUFoQztBQUNILFNBN0RJO0FBOERMdUQsb0JBQVksb0JBQVV2RCxLQUFWLEVBQWlCO0FBQ3pCLGlCQUFLNEQsS0FBTCxDQUFXLE9BQVgsRUFBb0I1RCxLQUFwQjtBQUNBLGlCQUFLNEQsS0FBTCxDQUFXLFFBQVgsRUFBcUI1RCxLQUFyQjtBQUNIO0FBakVJO0FBakVhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xuICAgIGZpZWxkOiB0cnVlLFxuICAgIGNsYXNzZXM6IFsnaW5wdXQtY2xhc3MnXSxcbiAgICBwcm9wczoge1xuICAgICAgICBzaXplOiBTdHJpbmcsXG4gICAgICAgIGljb246IFN0cmluZyxcbiAgICAgICAgbGFiZWw6IFN0cmluZyxcbiAgICAgICAgZXJyb3I6IEJvb2xlYW4sXG4gICAgICAgIGZpeGVkOiBCb29sZWFuLFxuICAgICAgICBmb2N1czogQm9vbGVhbixcbiAgICAgICAgY2VudGVyOiBCb29sZWFuLFxuICAgICAgICBpc0xpbms6IEJvb2xlYW4sXG4gICAgICAgIGxlZnRJY29uOiBTdHJpbmcsXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBhdXRvc2l6ZTogQm9vbGVhbixcbiAgICAgICAgcmVhZG9ubHk6IEJvb2xlYW4sXG4gICAgICAgIHJlcXVpcmVkOiBCb29sZWFuLFxuICAgICAgICBpY29uQ2xhc3M6IFN0cmluZyxcbiAgICAgICAgY2xlYXJhYmxlOiBCb29sZWFuLFxuICAgICAgICBpbnB1dEFsaWduOiBTdHJpbmcsXG4gICAgICAgIGVycm9yTWVzc2FnZUFsaWduOiBTdHJpbmcsXG4gICAgICAgIGN1c3RvbUNsYXNzOiBTdHJpbmcsXG4gICAgICAgIGNvbmZpcm1UeXBlOiBTdHJpbmcsXG4gICAgICAgIGNvbmZpcm1Ib2xkOiBCb29sZWFuLFxuICAgICAgICBlcnJvck1lc3NhZ2U6IFN0cmluZyxcbiAgICAgICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcbiAgICAgICAgY3VzdG9tU3R5bGU6IFN0cmluZyxcbiAgICAgICAgdXNlSWNvblNsb3Q6IEJvb2xlYW4sXG4gICAgICAgIHVzZUJ1dHRvblNsb3Q6IEJvb2xlYW4sXG4gICAgICAgIHNob3dDb25maXJtQmFyOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgcGxhY2Vob2xkZXJTdHlsZTogU3RyaW5nLFxuICAgICAgICBhZGp1c3RQb3NpdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGN1cnNvclNwYWNpbmc6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiA1MFxuICAgICAgICB9LFxuICAgICAgICBtYXhsZW5ndGg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAtMVxuICAgICAgICB9LFxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3RleHQnXG4gICAgICAgIH0sXG4gICAgICAgIGJvcmRlcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlV2lkdGg6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnOTBweCdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICBzaG93Q2xlYXI6IGZhbHNlXG4gICAgfSxcbiAgICBiZWZvcmVDcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uSW5wdXQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBfYSA9IChldmVudC5kZXRhaWwgfHwge30pLnZhbHVlLCB2YWx1ZSA9IF9hID09PSB2b2lkIDAgPyAnJyA6IF9hO1xuICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBzaG93Q2xlYXI6IHRoaXMuZ2V0U2hvd0NsZWFyKHZhbHVlKVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmVtaXRDaGFuZ2UodmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRm9jdXM6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIF9hID0gZXZlbnQuZGV0YWlsIHx8IHt9LCBfYiA9IF9hLnZhbHVlLCB2YWx1ZSA9IF9iID09PSB2b2lkIDAgPyAnJyA6IF9iLCBfYyA9IF9hLmhlaWdodCwgaGVpZ2h0ID0gX2MgPT09IHZvaWQgMCA/IDAgOiBfYztcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2ZvY3VzJywgeyB2YWx1ZTogdmFsdWUsIGhlaWdodDogaGVpZ2h0IH0pO1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYmx1ckZyb21DbGVhciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgIHNob3dDbGVhcjogdGhpcy5nZXRTaG93Q2xlYXIoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQmx1cjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIF9hID0gZXZlbnQuZGV0YWlsIHx8IHt9LCBfYiA9IF9hLnZhbHVlLCB2YWx1ZSA9IF9iID09PSB2b2lkIDAgPyAnJyA6IF9iLCBfYyA9IF9hLmN1cnNvciwgY3Vyc29yID0gX2MgPT09IHZvaWQgMCA/IDAgOiBfYztcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2JsdXInLCB7IHZhbHVlOiB2YWx1ZSwgY3Vyc29yOiBjdXJzb3IgfSk7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBzaG93Q2xlYXIgPSB0aGlzLmdldFNob3dDbGVhcigpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgICAgIHNob3dDbGVhcjogc2hvd0NsZWFyXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghdGhpcy5ibHVyRnJvbUNsZWFyKSB7XG4gICAgICAgICAgICAgICAgLy8gZml4OiB0aGUgaGFuZHdyaXR0ZW4ga2V5Ym9hcmQgZG9lcyBub3QgdHJpZ2dlciBpbnB1dCBjaGFuZ2VcbiAgICAgICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NsZWFyOiBzaG93Q2xlYXJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmVtaXRDaGFuZ2UodmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrSWNvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2staWNvbicpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRTaG93Q2xlYXI6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdGhpcy5kYXRhLnZhbHVlIDogdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuZGF0YS5jbGVhcmFibGUgJiYgdGhpcy5mb2N1c2VkICYmIHZhbHVlICYmICF0aGlzLmRhdGEucmVhZG9ubHkpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5ibHVyRnJvbUNsZWFyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICAgICAgc2hvd0NsZWFyOiB0aGlzLmdldFNob3dDbGVhcignJylcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbWl0Q2hhbmdlKCcnKTtcbiAgICAgICAgICAgICAgICBfdGhpcy4kZW1pdCgnY2xlYXInLCAnJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Db25maXJtOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjb25maXJtJywgdGhpcy5kYXRhLnZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW1pdENoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19