import React from "react";
import "../../tailwind.scss";
import PropTypes from "prop-types";

/**
 * Button Component made with TailwindCSS
 */
export default class Button extends React.Component {
  static propTypes = {
    /** Background Colour */
    bgColor: PropTypes.oneOf(["primary"]),
    children: PropTypes.string.isRequired,
  };
  static defaultProps = {
    bgColor: "primary",
  };

  render() {
    return (
      <button className="bg-blue-400 text-white">{this.props.children}</button>
    );
  }
}
