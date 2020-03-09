# Ant-Design-Mobile-form 文档

## 安装

`npm i ant-design-mobile-form`

## 场景

表单怎么优雅做校验呢？

在 PC 端，一个做的比较优雅的方案是 Ant Design 的表单组件。它可以通过简单的 rule 配置，来实现“必填”，“自定义错误提示”，甚至自定义校验规则。
Ant Design 官网：https://3x.ant.design/components/form-cn/

然而在移动端，似乎从没一个组件库，做过类似的表单封装。哪怕 Ant Design Mobile，也没有做这个事情。

所以需要一个库，来实现这个功能。基于 Ant Design Mobile 的用户基数较大，本库将基于 Ant Design Mobile。

## 在线示例

点击[查看示例](https://yuanzhizhu.github.io/ant-design-mobile-form/index.html)

## 基本用法

```jsx
import React from "react";
import { List, Toast, Button, InputItem as _InputItem } from "antd-mobile";
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

## API

#### 1、addErrorExplanation(Component)

对 Ant Design Mobile 原生的组件，如 `InputItem`，`Picker` 等组件，用 addErrorExplanation 包裹，返回一个新的组件：`const MyInputItem = addErrorExplanation(InputItem)`。

#### 2、create()(FormComponent)

在 Ant Design Mobile 里面，没有 `Form` 组件，所以这边的 `FormComponent` 更像是一个概念，一种代码层次上的 `Form`，如：`export default create()(App)`
