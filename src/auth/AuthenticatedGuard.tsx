import { withAuthenticationRequired } from "@auth0/auth0-react";
import { LinearProgress } from "@mui/material";
import React from "react";

interface AuthenticationGuardProps {
  component: React.ComponentType;
}

export function AuthenticationGuard({ component }: AuthenticationGuardProps) {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <LinearProgress />,
  });

  return <Component />;
}
