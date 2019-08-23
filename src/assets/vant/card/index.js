"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = require('./../mixins/link.js');
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    classes: ['num-class', 'desc-class', 'thumb-class', 'title-class', 'price-class', 'origin-price-class'],
    mixins: [link_1.link],
    props: {
        tag: String,
        num: String,
        desc: String,
        thumb: String,
        title: String,
        price: String,
        centered: Boolean,
        lazyLoad: Boolean,
        thumbLink: String,
        originPrice: String,
        thumbMode: {
            type: String,
            value: 'aspectFit'
        },
        currency: {
            type: String,
            value: '¥'
        }
    },
    methods: {
        onClickThumb: function onClickThumb() {
            this.jumpLink('thumbLink');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwibGlua18xIiwicmVxdWlyZSIsImNvbXBvbmVudF8xIiwiVmFudENvbXBvbmVudCIsImNsYXNzZXMiLCJtaXhpbnMiLCJsaW5rIiwicHJvcHMiLCJ0YWciLCJTdHJpbmciLCJudW0iLCJkZXNjIiwidGh1bWIiLCJ0aXRsZSIsInByaWNlIiwiY2VudGVyZWQiLCJCb29sZWFuIiwibGF6eUxvYWQiLCJ0aHVtYkxpbmsiLCJvcmlnaW5QcmljZSIsInRodW1iTW9kZSIsInR5cGUiLCJjdXJyZW5jeSIsIm1ldGhvZHMiLCJvbkNsaWNrVGh1bWIiLCJqdW1wTGluayJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLFNBQVNDLFFBQVEsZ0JBQVIsQ0FBYjtBQUNBLElBQUlDLGNBQWNELFFBQVEscUJBQVIsQ0FBbEI7QUFDQUMsWUFBWUMsYUFBWixDQUEwQjtBQUN0QkMsYUFBUyxDQUNMLFdBREssRUFFTCxZQUZLLEVBR0wsYUFISyxFQUlMLGFBSkssRUFLTCxhQUxLLEVBTUwsb0JBTkssQ0FEYTtBQVN0QkMsWUFBUSxDQUFDTCxPQUFPTSxJQUFSLENBVGM7QUFVdEJDLFdBQU87QUFDSEMsYUFBS0MsTUFERjtBQUVIQyxhQUFLRCxNQUZGO0FBR0hFLGNBQU1GLE1BSEg7QUFJSEcsZUFBT0gsTUFKSjtBQUtISSxlQUFPSixNQUxKO0FBTUhLLGVBQU9MLE1BTko7QUFPSE0sa0JBQVVDLE9BUFA7QUFRSEMsa0JBQVVELE9BUlA7QUFTSEUsbUJBQVdULE1BVFI7QUFVSFUscUJBQWFWLE1BVlY7QUFXSFcsbUJBQVc7QUFDUEMsa0JBQU1aLE1BREM7QUFFUFYsbUJBQU87QUFGQSxTQVhSO0FBZUh1QixrQkFBVTtBQUNORCxrQkFBTVosTUFEQTtBQUVOVixtQkFBTztBQUZEO0FBZlAsS0FWZTtBQThCdEJ3QixhQUFTO0FBQ0xDLHNCQUFjLHdCQUFZO0FBQ3RCLGlCQUFLQyxRQUFMLENBQWMsV0FBZDtBQUNIO0FBSEk7QUE5QmEsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBsaW5rXzEgPSByZXF1aXJlKFwiLi4vbWl4aW5zL2xpbmtcIik7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xuICAgIGNsYXNzZXM6IFtcbiAgICAgICAgJ251bS1jbGFzcycsXG4gICAgICAgICdkZXNjLWNsYXNzJyxcbiAgICAgICAgJ3RodW1iLWNsYXNzJyxcbiAgICAgICAgJ3RpdGxlLWNsYXNzJyxcbiAgICAgICAgJ3ByaWNlLWNsYXNzJyxcbiAgICAgICAgJ29yaWdpbi1wcmljZS1jbGFzcycsXG4gICAgXSxcbiAgICBtaXhpbnM6IFtsaW5rXzEubGlua10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdGFnOiBTdHJpbmcsXG4gICAgICAgIG51bTogU3RyaW5nLFxuICAgICAgICBkZXNjOiBTdHJpbmcsXG4gICAgICAgIHRodW1iOiBTdHJpbmcsXG4gICAgICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgICAgIHByaWNlOiBTdHJpbmcsXG4gICAgICAgIGNlbnRlcmVkOiBCb29sZWFuLFxuICAgICAgICBsYXp5TG9hZDogQm9vbGVhbixcbiAgICAgICAgdGh1bWJMaW5rOiBTdHJpbmcsXG4gICAgICAgIG9yaWdpblByaWNlOiBTdHJpbmcsXG4gICAgICAgIHRodW1iTW9kZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdhc3BlY3RGaXQnXG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ8KlJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uQ2xpY2tUaHVtYjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5qdW1wTGluaygndGh1bWJMaW5rJyk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==