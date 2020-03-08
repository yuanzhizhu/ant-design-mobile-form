import React from "react";
import { List, Toast, InputItem as _InputItem, Button } from "antd-mobile";
import { create, addErrorExplanation } from "./lib/ant-design-mobile-form";
import "./App.css";

const InputItem = addErrorExplanation(_InputItem);

const checkPhone = (rule, value, callback) => {
  value = value.split(/\s+/).join("");
  if (value) {
    if (/^\d*$/.test(value) === false) {
      callback("手机号码只能是数字");
    } else if (value.slice(0, 1) !== "1") {
      callback("手机号码必须1开头");
    } else if (value.length > 11) {
      callback("手机号码长度不超过11位");
    } else if (value.length < 11) {
      callback("请继续输入您完整的手机号");
    } else {
      callback();
    }
  }
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
