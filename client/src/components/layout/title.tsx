import React from "react";
import {
  useRouterContext,
  useLink,
  useRouterType,
  useRefineOptions,
} from "@refinedev/core";
import MuiLink from "@mui/material/Link";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import type { RefineLayoutThemedTitleProps } from "@refinedev/mui";
import { logo,yariga } from "../../assets";

export const ThemedTitleV2: React.FC<RefineLayoutThemedTitleProps> = ({
  collapsed,
  wrapperStyles,
  icon: iconFromProps,
  text: textFromProps,
}) => {
  const { title: { icon: defaultIcon, text: defaultText } = {} } =
    useRefineOptions();
  const icon =
    typeof iconFromProps === "undefined" ? defaultIcon : iconFromProps;
  const text =
    typeof textFromProps === "undefined" ? defaultText : textFromProps;
  const routerType = useRouterType();
  const Link = useLink();
  const { Link: LegacyLink } = useRouterContext();

  const ActiveLink = routerType === "legacy" ? LegacyLink : Link;

  return (
    <MuiLink
      to="/"
      component={ActiveLink}
      underline="none"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        ...wrapperStyles,
      }}
    >


      {/* Logo image based on collapsed */}
            <img
              src={collapsed ? logo : yariga}
              alt={collapsed ? "Yariga Icon" : "Yariga Logo"}
              width={collapsed ? "28px" : "148px"}
            />
      
            {/* Optional text if needed in future */}
            {/* {!collapsed && text && (
              <Typography variant="h6" color="text.primary">
                {text}
              </Typography>
            )} */}
    </MuiLink>
  );
};
