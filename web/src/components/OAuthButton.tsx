import Link from "next/link";
import React from "react";
import { BACKEND } from "../constants/conn";
import { DiscordIcon } from "../icons/oauth/DiscordIcon";
import { GoogleIcon } from "../icons/oauth/GoogleIcon";
import { MicrosoftIcon } from "../icons/oauth/MicrosoftIcon";
import { getDiscordAuthUrl, getGoogleAuthUrl } from "../utils/getAuthUrl";

type ProviderType = "google" | "discord" | "microsoft";

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

interface OAuthButtonProps {
  provider: ProviderType;
  style?: React.CSSProperties;
}

const ICON_MAP = {
  discord: DiscordIcon,
  google: GoogleIcon,
  microsoft: MicrosoftIcon,
};

const HREF_MAP = {
  discord: getDiscordAuthUrl(process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID),
  google: getGoogleAuthUrl(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID),
  microsoft: `${BACKEND}/microsoft/`,
};

export const OAuthButton: React.FC<OAuthButtonProps> = ({
  provider,
  style,
}) => {
  const Icon = ICON_MAP[provider];
  const href = HREF_MAP[provider];

  return (
    <Link href={href} passHref>
      <button className={`oauth-button oauth-button-${provider}`} style={style}>
        {capitalize(provider)}
        <Icon className="oauth-button__icon" />
      </button>
    </Link>
  );
};
