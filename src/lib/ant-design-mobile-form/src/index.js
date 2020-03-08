import React from "react";
import { createForm } from "rc-form";

export const addErrorExplanation = Component => {
  class NewComponent extends React.Component {
    render = () => {
      const { getFieldError, fieldKey, ...restProps } = this.props;
      const error = getFieldError(fieldKey);
      const errorMsg = error ? error.join("") : "";

      return (
        <>
          <Component {...restProps} />
          <span
            style={{ color: "#f5222d", lineHeight: "30px" }}
            className="form-error-explain"
          >
            {errorMsg}
          </span>
        </>
      );
    };
  }

  return NewComponent;
};

export const create = options => {
  return FormComponent => {
    class NewFormComponent extends React.Component {
      myGetFieldDecorator = (name, option = {}) => element => {
        // 下面这行代码主要用于validator；如果不使用validator可以删除
        option.validateFirst =
          option.validateFirst === undefined ? true : option.validateFirst;

        return this.props.form.getFieldDecorator(name, option)(
          React.cloneElement(element, {
            fieldKey: name,
            getFieldError: this.props.form.getFieldError
          })
        );
      };

      render = () => {
        return (
          <FormComponent
            {...this.props}
            form={{
              ...this.props.form,
              getFieldDecorator: this.myGetFieldDecorator
            }}
          />
        );
      };
    }

    return createForm(options)(NewFormComponent);
  };
};
