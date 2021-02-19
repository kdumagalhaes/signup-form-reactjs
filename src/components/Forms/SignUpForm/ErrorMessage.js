import React from "react";

export default function ErrorMessage({ error }) {
  if (error) {
    switch (error.type) {
      case "required":
        return <span>This is required</span>;
      case "pattern":
        return <span>Enter a valid email address</span>;
      default:
        return null;
    }
  }

  return null;
}