"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    field: true,
    relation: {
        name: 'checkbox-group',
        type: 'ancestor'
    },
    classes: ['icon-class', 'label-class'],
    props: {
        value: null,
        disabled: Boolean,
        useIconSlot: Boolean,
        checkedColor: String,
        labelPosition: String,
        labelDisabled: Boolean,
        shape: {
            type: String,
            value: 'round'
        }
    },
    methods: {
        emitChange: function emitChange(value) {
            var parent = this.getRelationNodes('../checkbox-group/index')[0];
            if (parent) {
                this.setParentValue(parent, value);
            } else {
                this.$emit('input', value);
                this.$emit('change', value);
            }
        },
        toggle: function toggle() {
            if (!this.data.disabled) {
                this.emitChange(!this.data.value);
            }
        },
        onClickLabel: function onClickLabel() {
            if (!this.data.disabled && !this.data.labelDisabled) {
                this.emitChange(!this.data.value);
            }
        },
        setParentValue: function setParentValue(parent, value) {
            var parentValue = parent.data.value.slice();
            var name = this.data.name;
            if (value) {
                if (parent.data.max && parentValue.length >= parent.data.max) {
                    return;
                }
                /* istanbul ignore else */
                if (parentValue.indexOf(name) === -1) {
                    parentValue.push(name);
                    parent.$emit('input', parentValue);
                    parent.$emit('change', parentValue);
                }
            } else {
                var index = parentValue.indexOf(name);
                /* istanbul ignore else */
                if (index !== -1) {
                    parentValue.splice(index, 1);
                    parent.$emit('input', parentValue);
                    parent.$emit('change', parentValue);
                }
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImNsYXNzZXMiLCJwcm9wcyIsImRpc2FibGVkIiwiQm9vbGVhbiIsInVzZUljb25TbG90IiwiY2hlY2tlZENvbG9yIiwiU3RyaW5nIiwibGFiZWxQb3NpdGlvbiIsImxhYmVsRGlzYWJsZWQiLCJzaGFwZSIsIm1ldGhvZHMiLCJlbWl0Q2hhbmdlIiwicGFyZW50IiwiZ2V0UmVsYXRpb25Ob2RlcyIsInNldFBhcmVudFZhbHVlIiwiJGVtaXQiLCJ0b2dnbGUiLCJkYXRhIiwib25DbGlja0xhYmVsIiwicGFyZW50VmFsdWUiLCJzbGljZSIsIm1heCIsImxlbmd0aCIsImluZGV4T2YiLCJwdXNoIiwiaW5kZXgiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0FELFlBQVlFLGFBQVosQ0FBMEI7QUFDdEJDLFdBQU8sSUFEZTtBQUV0QkMsY0FBVTtBQUNOQyxjQUFNLGdCQURBO0FBRU5DLGNBQU07QUFGQSxLQUZZO0FBTXRCQyxhQUFTLENBQUMsWUFBRCxFQUFlLGFBQWYsQ0FOYTtBQU90QkMsV0FBTztBQUNIVCxlQUFPLElBREo7QUFFSFUsa0JBQVVDLE9BRlA7QUFHSEMscUJBQWFELE9BSFY7QUFJSEUsc0JBQWNDLE1BSlg7QUFLSEMsdUJBQWVELE1BTFo7QUFNSEUsdUJBQWVMLE9BTlo7QUFPSE0sZUFBTztBQUNIVixrQkFBTU8sTUFESDtBQUVIZCxtQkFBTztBQUZKO0FBUEosS0FQZTtBQW1CdEJrQixhQUFTO0FBQ0xDLG9CQUFZLG9CQUFVbkIsS0FBVixFQUFpQjtBQUN6QixnQkFBSW9CLFNBQVMsS0FBS0MsZ0JBQUwsQ0FBc0IseUJBQXRCLEVBQWlELENBQWpELENBQWI7QUFDQSxnQkFBSUQsTUFBSixFQUFZO0FBQ1IscUJBQUtFLGNBQUwsQ0FBb0JGLE1BQXBCLEVBQTRCcEIsS0FBNUI7QUFDSCxhQUZELE1BR0s7QUFDRCxxQkFBS3VCLEtBQUwsQ0FBVyxPQUFYLEVBQW9CdkIsS0FBcEI7QUFDQSxxQkFBS3VCLEtBQUwsQ0FBVyxRQUFYLEVBQXFCdkIsS0FBckI7QUFDSDtBQUNKLFNBVkk7QUFXTHdCLGdCQUFRLGtCQUFZO0FBQ2hCLGdCQUFJLENBQUMsS0FBS0MsSUFBTCxDQUFVZixRQUFmLEVBQXlCO0FBQ3JCLHFCQUFLUyxVQUFMLENBQWdCLENBQUMsS0FBS00sSUFBTCxDQUFVekIsS0FBM0I7QUFDSDtBQUNKLFNBZkk7QUFnQkwwQixzQkFBYyx3QkFBWTtBQUN0QixnQkFBSSxDQUFDLEtBQUtELElBQUwsQ0FBVWYsUUFBWCxJQUF1QixDQUFDLEtBQUtlLElBQUwsQ0FBVVQsYUFBdEMsRUFBcUQ7QUFDakQscUJBQUtHLFVBQUwsQ0FBZ0IsQ0FBQyxLQUFLTSxJQUFMLENBQVV6QixLQUEzQjtBQUNIO0FBQ0osU0FwQkk7QUFxQkxzQix3QkFBZ0Isd0JBQVVGLE1BQVYsRUFBa0JwQixLQUFsQixFQUF5QjtBQUNyQyxnQkFBSTJCLGNBQWNQLE9BQU9LLElBQVAsQ0FBWXpCLEtBQVosQ0FBa0I0QixLQUFsQixFQUFsQjtBQUNBLGdCQUFJdEIsT0FBTyxLQUFLbUIsSUFBTCxDQUFVbkIsSUFBckI7QUFDQSxnQkFBSU4sS0FBSixFQUFXO0FBQ1Asb0JBQUlvQixPQUFPSyxJQUFQLENBQVlJLEdBQVosSUFBbUJGLFlBQVlHLE1BQVosSUFBc0JWLE9BQU9LLElBQVAsQ0FBWUksR0FBekQsRUFBOEQ7QUFDMUQ7QUFDSDtBQUNEO0FBQ0Esb0JBQUlGLFlBQVlJLE9BQVosQ0FBb0J6QixJQUFwQixNQUE4QixDQUFDLENBQW5DLEVBQXNDO0FBQ2xDcUIsZ0NBQVlLLElBQVosQ0FBaUIxQixJQUFqQjtBQUNBYywyQkFBT0csS0FBUCxDQUFhLE9BQWIsRUFBc0JJLFdBQXRCO0FBQ0FQLDJCQUFPRyxLQUFQLENBQWEsUUFBYixFQUF1QkksV0FBdkI7QUFDSDtBQUNKLGFBVkQsTUFXSztBQUNELG9CQUFJTSxRQUFRTixZQUFZSSxPQUFaLENBQW9CekIsSUFBcEIsQ0FBWjtBQUNBO0FBQ0Esb0JBQUkyQixVQUFVLENBQUMsQ0FBZixFQUFrQjtBQUNkTixnQ0FBWU8sTUFBWixDQUFtQkQsS0FBbkIsRUFBMEIsQ0FBMUI7QUFDQWIsMkJBQU9HLEtBQVAsQ0FBYSxPQUFiLEVBQXNCSSxXQUF0QjtBQUNBUCwyQkFBT0csS0FBUCxDQUFhLFFBQWIsRUFBdUJJLFdBQXZCO0FBQ0g7QUFDSjtBQUNKO0FBNUNJO0FBbkJhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xuICAgIGZpZWxkOiB0cnVlLFxuICAgIHJlbGF0aW9uOiB7XG4gICAgICAgIG5hbWU6ICdjaGVja2JveC1ncm91cCcsXG4gICAgICAgIHR5cGU6ICdhbmNlc3RvcidcbiAgICB9LFxuICAgIGNsYXNzZXM6IFsnaWNvbi1jbGFzcycsICdsYWJlbC1jbGFzcyddLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgdXNlSWNvblNsb3Q6IEJvb2xlYW4sXG4gICAgICAgIGNoZWNrZWRDb2xvcjogU3RyaW5nLFxuICAgICAgICBsYWJlbFBvc2l0aW9uOiBTdHJpbmcsXG4gICAgICAgIGxhYmVsRGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3JvdW5kJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGVtaXRDaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMuZ2V0UmVsYXRpb25Ob2RlcygnLi4vY2hlY2tib3gtZ3JvdXAvaW5kZXgnKVswXTtcbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhcmVudFZhbHVlKHBhcmVudCwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0b2dnbGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0Q2hhbmdlKCF0aGlzLmRhdGEudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrTGFiZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLmRpc2FibGVkICYmICF0aGlzLmRhdGEubGFiZWxEaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdENoYW5nZSghdGhpcy5kYXRhLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0UGFyZW50VmFsdWU6IGZ1bmN0aW9uIChwYXJlbnQsIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50VmFsdWUgPSBwYXJlbnQuZGF0YS52YWx1ZS5zbGljZSgpO1xuICAgICAgICAgICAgdmFyIG5hbWUgPSB0aGlzLmRhdGEubmFtZTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQuZGF0YS5tYXggJiYgcGFyZW50VmFsdWUubGVuZ3RoID49IHBhcmVudC5kYXRhLm1heCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudFZhbHVlLmluZGV4T2YobmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFZhbHVlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC4kZW1pdCgnaW5wdXQnLCBwYXJlbnRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC4kZW1pdCgnY2hhbmdlJywgcGFyZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHBhcmVudFZhbHVlLmluZGV4T2YobmFtZSk7XG4gICAgICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFZhbHVlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC4kZW1pdCgnaW5wdXQnLCBwYXJlbnRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC4kZW1pdCgnY2hhbmdlJywgcGFyZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19