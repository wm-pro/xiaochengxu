"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    field: true,
    classes: ['field-class', 'input-class', 'cancel-class'],
    props: {
        focus: Boolean,
        error: Boolean,
        disabled: Boolean,
        readonly: Boolean,
        inputAlign: String,
        showAction: Boolean,
        useActionSlot: Boolean,
        placeholder: String,
        placeholderStyle: String,
        background: {
            type: String,
            value: '#ffffff'
        },
        maxlength: {
            type: Number,
            value: -1
        },
        shape: {
            type: String,
            value: 'square'
        },
        label: String
    },
    methods: {
        onChange: function onChange(event) {
            this.set({ value: event.detail });
            this.$emit('change', event.detail);
        },
        onCancel: function onCancel() {
            this.set({ value: '' });
            this.$emit('cancel');
            this.$emit('change', '');
        },
        onSearch: function onSearch() {
            this.$emit('search', this.data.value);
        },
        onFocus: function onFocus() {
            this.$emit('focus');
        },
        onBlur: function onBlur() {
            this.$emit('blur');
        },
        onClear: function onClear() {
            this.$emit('clear');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwiZm9jdXMiLCJCb29sZWFuIiwiZXJyb3IiLCJkaXNhYmxlZCIsInJlYWRvbmx5IiwiaW5wdXRBbGlnbiIsIlN0cmluZyIsInNob3dBY3Rpb24iLCJ1c2VBY3Rpb25TbG90IiwicGxhY2Vob2xkZXIiLCJwbGFjZWhvbGRlclN0eWxlIiwiYmFja2dyb3VuZCIsInR5cGUiLCJtYXhsZW5ndGgiLCJOdW1iZXIiLCJzaGFwZSIsImxhYmVsIiwibWV0aG9kcyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJzZXQiLCJkZXRhaWwiLCIkZW1pdCIsIm9uQ2FuY2VsIiwib25TZWFyY2giLCJkYXRhIiwib25Gb2N1cyIsIm9uQmx1ciIsIm9uQ2xlYXIiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0FELFlBQVlFLGFBQVosQ0FBMEI7QUFDdEJDLFdBQU8sSUFEZTtBQUV0QkMsYUFBUyxDQUFDLGFBQUQsRUFBZ0IsYUFBaEIsRUFBK0IsY0FBL0IsQ0FGYTtBQUd0QkMsV0FBTztBQUNIQyxlQUFPQyxPQURKO0FBRUhDLGVBQU9ELE9BRko7QUFHSEUsa0JBQVVGLE9BSFA7QUFJSEcsa0JBQVVILE9BSlA7QUFLSEksb0JBQVlDLE1BTFQ7QUFNSEMsb0JBQVlOLE9BTlQ7QUFPSE8sdUJBQWVQLE9BUFo7QUFRSFEscUJBQWFILE1BUlY7QUFTSEksMEJBQWtCSixNQVRmO0FBVUhLLG9CQUFZO0FBQ1JDLGtCQUFNTixNQURFO0FBRVJiLG1CQUFPO0FBRkMsU0FWVDtBQWNIb0IsbUJBQVc7QUFDUEQsa0JBQU1FLE1BREM7QUFFUHJCLG1CQUFPLENBQUM7QUFGRCxTQWRSO0FBa0JIc0IsZUFBTztBQUNISCxrQkFBTU4sTUFESDtBQUVIYixtQkFBTztBQUZKLFNBbEJKO0FBc0JIdUIsZUFBT1Y7QUF0QkosS0FIZTtBQTJCdEJXLGFBQVM7QUFDTEMsa0JBQVUsa0JBQVVDLEtBQVYsRUFBaUI7QUFDdkIsaUJBQUtDLEdBQUwsQ0FBUyxFQUFFM0IsT0FBTzBCLE1BQU1FLE1BQWYsRUFBVDtBQUNBLGlCQUFLQyxLQUFMLENBQVcsUUFBWCxFQUFxQkgsTUFBTUUsTUFBM0I7QUFDSCxTQUpJO0FBS0xFLGtCQUFVLG9CQUFZO0FBQ2xCLGlCQUFLSCxHQUFMLENBQVMsRUFBRTNCLE9BQU8sRUFBVCxFQUFUO0FBQ0EsaUJBQUs2QixLQUFMLENBQVcsUUFBWDtBQUNBLGlCQUFLQSxLQUFMLENBQVcsUUFBWCxFQUFxQixFQUFyQjtBQUNILFNBVEk7QUFVTEUsa0JBQVUsb0JBQVk7QUFDbEIsaUJBQUtGLEtBQUwsQ0FBVyxRQUFYLEVBQXFCLEtBQUtHLElBQUwsQ0FBVWhDLEtBQS9CO0FBQ0gsU0FaSTtBQWFMaUMsaUJBQVMsbUJBQVk7QUFDakIsaUJBQUtKLEtBQUwsQ0FBVyxPQUFYO0FBQ0gsU0FmSTtBQWdCTEssZ0JBQVEsa0JBQVk7QUFDaEIsaUJBQUtMLEtBQUwsQ0FBVyxNQUFYO0FBQ0gsU0FsQkk7QUFtQkxNLGlCQUFTLG1CQUFZO0FBQ2pCLGlCQUFLTixLQUFMLENBQVcsT0FBWDtBQUNIO0FBckJJO0FBM0JhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xuICAgIGZpZWxkOiB0cnVlLFxuICAgIGNsYXNzZXM6IFsnZmllbGQtY2xhc3MnLCAnaW5wdXQtY2xhc3MnLCAnY2FuY2VsLWNsYXNzJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgZm9jdXM6IEJvb2xlYW4sXG4gICAgICAgIGVycm9yOiBCb29sZWFuLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgcmVhZG9ubHk6IEJvb2xlYW4sXG4gICAgICAgIGlucHV0QWxpZ246IFN0cmluZyxcbiAgICAgICAgc2hvd0FjdGlvbjogQm9vbGVhbixcbiAgICAgICAgdXNlQWN0aW9uU2xvdDogQm9vbGVhbixcbiAgICAgICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcbiAgICAgICAgcGxhY2Vob2xkZXJTdHlsZTogU3RyaW5nLFxuICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJyNmZmZmZmYnXG4gICAgICAgIH0sXG4gICAgICAgIG1heGxlbmd0aDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IC0xXG4gICAgICAgIH0sXG4gICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3NxdWFyZSdcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWw6IFN0cmluZ1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7IHZhbHVlOiBldmVudC5kZXRhaWwgfSk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBldmVudC5kZXRhaWwpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNhbmNlbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5zZXQoeyB2YWx1ZTogJycgfSk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjYW5jZWwnKTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsICcnKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25TZWFyY2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NlYXJjaCcsIHRoaXMuZGF0YS52YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRm9jdXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2ZvY3VzJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQmx1cjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnYmx1cicpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGVhcicpO1xuICAgICAgICB9LFxuICAgIH1cbn0pO1xuIl19