# Ant-Design-Mobile-form文档

## 用法

```jsx
import React from "react";
import { List, Toast, InputItem as _InputItem, Button } from "antd-mobile";
import { create, addErrorExplanation } from "./lib/ant-design-mobile-form";
import "./App.css";

const InputItem = addErrorExplanation(_InputItem);

const checkPhone = (rule, value, callback) => {
    // check code
};

class App extends React.Component {
  handleSubmit = () => {
    this.props.form.validateFields(async (errors, value) => {
      if (errors === null) {
        Toast.success(JSON.stringify(value));
      }
    });
  };

  render = () => {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="container">
        <List>
          {getFieldDecorator("phone", {
            rules: [
              {
                required: true,
                message: "请输入您的手机号"
              },
              {
                validator: checkPhone
              }
            ]
          })(<InputItem placeholder="手机号" />)}

          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "请输入密码"
              }
            ]
          })(<InputItem placeholder="密码" type="password" />)}
        </List>

        <Button
          style={{ marginTop: 24 }}
          onClick={this.handleSubmit}
          type="primary"
        >
          登录
        </Button>
      </div>
    );
  };
}

export default create()(App);
```


