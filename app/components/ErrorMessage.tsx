import { Text } from "@radix-ui/themes";
import React, { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;
  return (
    <Text color="red" as="p" className="mb-1 mt-1">
      {children}
    </Text>
  );
};

export default ErrorMessage;
