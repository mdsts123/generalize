
let a=[ "Circle", "Switch", "Affix", "Alert", "Anchor", "AnchorLink", "AutoComplete", "Avatar", "BackTop", "Badge", "Breadcrumb", "BreadcrumbItem", "Button", "ButtonGroup", "Card", "Carousel", "CarouselItem", "Cascader", "Cell", "CellGroup", "Checkbox", "CheckboxGroup", "Col", "Collapse", "ColorPicker", "Content", "DatePicker", "Divider", "Drawer", "Dropdown", "DropdownItem", "DropdownMenu", "Footer", "Form", "FormItem", "Header", "Icon", "Input", "InputNumber", "Scroll", "Sider", "Split", "Submenu", "Layout", "LoadingBar", "Menu", "MenuGroup", "MenuItem", "Message", "Modal", "Notice", "Option", "OptionGroup", "Page", "Panel", "Poptip", "Progress", "Radio", "RadioGroup", "Rate", "Row", "Select", "Slider", "Spin", "Step", "Steps", "Table", "Tabs", "TabPane", "Tag", "Time", "Timeline", "TimelineItem", "TimePicker", "Tooltip", "Transfer", "Tree", "Upload"]
a=a.map(c=>{
  return `Vue.component('${c}', ${c})`
}).join('\n')
console.log(a);
