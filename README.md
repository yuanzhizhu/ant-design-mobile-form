# usage

#### step1. Use addErrorExplanation() to wrap component
```javascript
import { addErrorExplanation } from "@/components/form"
import { InputItem as _InputItem, WhiteSpace } from "antd-mobile";

const InputItem = addErrorExplanation(_InputItem);
```

#### step2. Use getFieldDecorator() to wrap element
```javascript
<List>
    {this.props.form.getFieldDecorator("phone", {
        rules: [
        {
            required: true,
            message: "请输入您的手机号"
        },
        {
            validator: checkPhone
        }
        ]
    })(
        <InputItem
        placeholder="请输入您的手机号码"
        type="phone"
        ></InputItem>
    )}
</List>
```

#### step3. Use create() to wrap Form Component
```javascript
import { create } from "@/components/form"

export default create()(YourForm);
```
