"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var safe_area_1 = require('./../mixins/safe-area.js');
component_1.VantComponent({
    mixins: [safe_area_1.safeArea()],
    relation: {
        name: 'tabbar-item',
        type: 'descendant',
        linked: function linked(target) {
            this.children = this.children || [];
            this.children.push(target);
            this.setActiveItem();
        },
        unlinked: function unlinked(target) {
            this.children = this.children || [];
            this.children = this.children.filter(function (item) {
                return item !== target;
            });
            this.setActiveItem();
        }
    },
    props: {
        active: Number,
        activeColor: String,
        fixed: {
            type: Boolean,
            value: true
        },
        zIndex: {
            type: Number,
            value: 1
        }
    },
    watch: {
        active: function active(_active) {
            this.currentActive = _active;
            this.setActiveItem();
        }
    },
    created: function created() {
        this.currentActive = this.data.active;
    },
    methods: {
        setActiveItem: function setActiveItem() {
            var _this = this;
            if (!Array.isArray(this.children) || !this.children.length) {
                return Promise.resolve();
            }
            return Promise.all(this.children.map(function (item, index) {
                return item.setActive({
                    active: index === _this.currentActive,
                    color: _this.data.activeColor
                });
            }));
        },
        onChange: function onChange(child) {
            var _this = this;
            var active = (this.children || []).indexOf(child);
            if (active !== this.currentActive && active !== -1) {
                this.currentActive = active;
                this.setActiveItem().then(function () {
                    _this.$emit('change', active);
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwic2FmZV9hcmVhXzEiLCJWYW50Q29tcG9uZW50IiwibWl4aW5zIiwic2FmZUFyZWEiLCJyZWxhdGlvbiIsIm5hbWUiLCJ0eXBlIiwibGlua2VkIiwidGFyZ2V0IiwiY2hpbGRyZW4iLCJwdXNoIiwic2V0QWN0aXZlSXRlbSIsInVubGlua2VkIiwiZmlsdGVyIiwiaXRlbSIsInByb3BzIiwiYWN0aXZlIiwiTnVtYmVyIiwiYWN0aXZlQ29sb3IiLCJTdHJpbmciLCJmaXhlZCIsIkJvb2xlYW4iLCJ6SW5kZXgiLCJ3YXRjaCIsImN1cnJlbnRBY3RpdmUiLCJjcmVhdGVkIiwiZGF0YSIsIm1ldGhvZHMiLCJfdGhpcyIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwiYWxsIiwibWFwIiwiaW5kZXgiLCJzZXRBY3RpdmUiLCJjb2xvciIsIm9uQ2hhbmdlIiwiY2hpbGQiLCJpbmRleE9mIiwidGhlbiIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBLElBQUlDLGNBQWNELFFBQVEscUJBQVIsQ0FBbEI7QUFDQUQsWUFBWUcsYUFBWixDQUEwQjtBQUN0QkMsWUFBUSxDQUFDRixZQUFZRyxRQUFaLEVBQUQsQ0FEYztBQUV0QkMsY0FBVTtBQUNOQyxjQUFNLGFBREE7QUFFTkMsY0FBTSxZQUZBO0FBR05DLGdCQUFRLGdCQUFVQyxNQUFWLEVBQWtCO0FBQ3RCLGlCQUFLQyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsSUFBaUIsRUFBakM7QUFDQSxpQkFBS0EsUUFBTCxDQUFjQyxJQUFkLENBQW1CRixNQUFuQjtBQUNBLGlCQUFLRyxhQUFMO0FBQ0gsU0FQSztBQVFOQyxrQkFBVSxrQkFBVUosTUFBVixFQUFrQjtBQUN4QixpQkFBS0MsUUFBTCxHQUFnQixLQUFLQSxRQUFMLElBQWlCLEVBQWpDO0FBQ0EsaUJBQUtBLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjSSxNQUFkLENBQXFCLFVBQVVDLElBQVYsRUFBZ0I7QUFBRSx1QkFBT0EsU0FBU04sTUFBaEI7QUFBeUIsYUFBaEUsQ0FBaEI7QUFDQSxpQkFBS0csYUFBTDtBQUNIO0FBWkssS0FGWTtBQWdCdEJJLFdBQU87QUFDSEMsZ0JBQVFDLE1BREw7QUFFSEMscUJBQWFDLE1BRlY7QUFHSEMsZUFBTztBQUNIZCxrQkFBTWUsT0FESDtBQUVIeEIsbUJBQU87QUFGSixTQUhKO0FBT0h5QixnQkFBUTtBQUNKaEIsa0JBQU1XLE1BREY7QUFFSnBCLG1CQUFPO0FBRkg7QUFQTCxLQWhCZTtBQTRCdEIwQixXQUFPO0FBQ0hQLGdCQUFRLGdCQUFVQSxPQUFWLEVBQWtCO0FBQ3RCLGlCQUFLUSxhQUFMLEdBQXFCUixPQUFyQjtBQUNBLGlCQUFLTCxhQUFMO0FBQ0g7QUFKRSxLQTVCZTtBQWtDdEJjLGFBQVMsbUJBQVk7QUFDakIsYUFBS0QsYUFBTCxHQUFxQixLQUFLRSxJQUFMLENBQVVWLE1BQS9CO0FBQ0gsS0FwQ3FCO0FBcUN0QlcsYUFBUztBQUNMaEIsdUJBQWUseUJBQVk7QUFDdkIsZ0JBQUlpQixRQUFRLElBQVo7QUFDQSxnQkFBSSxDQUFDQyxNQUFNQyxPQUFOLENBQWMsS0FBS3JCLFFBQW5CLENBQUQsSUFBaUMsQ0FBQyxLQUFLQSxRQUFMLENBQWNzQixNQUFwRCxFQUE0RDtBQUN4RCx1QkFBT0MsUUFBUUMsT0FBUixFQUFQO0FBQ0g7QUFDRCxtQkFBT0QsUUFBUUUsR0FBUixDQUFZLEtBQUt6QixRQUFMLENBQWMwQixHQUFkLENBQWtCLFVBQVVyQixJQUFWLEVBQWdCc0IsS0FBaEIsRUFBdUI7QUFDeEQsdUJBQU90QixLQUFLdUIsU0FBTCxDQUFlO0FBQ2xCckIsNEJBQVFvQixVQUFVUixNQUFNSixhQUROO0FBRWxCYywyQkFBT1YsTUFBTUYsSUFBTixDQUFXUjtBQUZBLGlCQUFmLENBQVA7QUFJSCxhQUxrQixDQUFaLENBQVA7QUFNSCxTQVpJO0FBYUxxQixrQkFBVSxrQkFBVUMsS0FBVixFQUFpQjtBQUN2QixnQkFBSVosUUFBUSxJQUFaO0FBQ0EsZ0JBQUlaLFNBQVMsQ0FBQyxLQUFLUCxRQUFMLElBQWlCLEVBQWxCLEVBQXNCZ0MsT0FBdEIsQ0FBOEJELEtBQTlCLENBQWI7QUFDQSxnQkFBSXhCLFdBQVcsS0FBS1EsYUFBaEIsSUFBaUNSLFdBQVcsQ0FBQyxDQUFqRCxFQUFvRDtBQUNoRCxxQkFBS1EsYUFBTCxHQUFxQlIsTUFBckI7QUFDQSxxQkFBS0wsYUFBTCxHQUFxQitCLElBQXJCLENBQTBCLFlBQVk7QUFDbENkLDBCQUFNZSxLQUFOLENBQVksUUFBWixFQUFzQjNCLE1BQXRCO0FBQ0gsaUJBRkQ7QUFHSDtBQUNKO0FBdEJJO0FBckNhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbnZhciBzYWZlX2FyZWFfMSA9IHJlcXVpcmUoXCIuLi9taXhpbnMvc2FmZS1hcmVhXCIpO1xuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XG4gICAgbWl4aW5zOiBbc2FmZV9hcmVhXzEuc2FmZUFyZWEoKV0sXG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ3RhYmJhci1pdGVtJyxcbiAgICAgICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxuICAgICAgICBsaW5rZWQ6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZUl0ZW0oKTtcbiAgICAgICAgfSxcbiAgICAgICAgdW5saW5rZWQ6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtICE9PSB0YXJnZXQ7IH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVJdGVtKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIGFjdGl2ZTogTnVtYmVyLFxuICAgICAgICBhY3RpdmVDb2xvcjogU3RyaW5nLFxuICAgICAgICBmaXhlZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHpJbmRleDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDFcbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgYWN0aXZlOiBmdW5jdGlvbiAoYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY3RpdmUgPSBhY3RpdmU7XG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZUl0ZW0oKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRBY3RpdmUgPSB0aGlzLmRhdGEuYWN0aXZlO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzZXRBY3RpdmVJdGVtOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMuY2hpbGRyZW4pIHx8ICF0aGlzLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbCh0aGlzLmNoaWxkcmVuLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5zZXRBY3RpdmUoe1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IGluZGV4ID09PSBfdGhpcy5jdXJyZW50QWN0aXZlLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogX3RoaXMuZGF0YS5hY3RpdmVDb2xvclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGFjdGl2ZSA9ICh0aGlzLmNoaWxkcmVuIHx8IFtdKS5pbmRleE9mKGNoaWxkKTtcbiAgICAgICAgICAgIGlmIChhY3RpdmUgIT09IHRoaXMuY3VycmVudEFjdGl2ZSAmJiBhY3RpdmUgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aXZlID0gYWN0aXZlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlSXRlbSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kZW1pdCgnY2hhbmdlJywgYWN0aXZlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19