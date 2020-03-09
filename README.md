# Ant-Design-Mobile-form文档

## 场景
表单怎么优雅做校验呢？

在PC端，一个做的比较优雅的方案是Ant Design的表单组件。它可以通过简单的rule配置，来实现“必填”，“自定义错误提示”，甚至自定义校验规则。
Ant Design官网：https://3x.ant.design/components/form-cn/

然而在移动端，似乎从没一个组件库，做过类似的表单封装。哪怕Ant Design Mobile，也没有做这个事情。

所以需要一个库，来实现这个功能。基于Ant Design Mobile的用户基数较大，本库将基于Ant Design Mobile。

## 示例
点击(查看示例)[https://yuanzhizhu.github.io/ant-design-mobile-form/]

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


