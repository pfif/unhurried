import { SalteAuth, OAuth2Provider, Provider } from "@salte-auth/salte-auth";
import { Popup } from "@salte-auth/popup";

export class SpotifyProvider extends OAuth2Provider {
  /**
   * This is the default name of the provider.
   */
  get name() {
    return "spotify";
  }

  get login() {
    return "https://accounts.spotify.com/authorize";
  }
}

function isSpotifyProvider(provider: Provider): provider is SpotifyProvider {
  return provider.name == "spotify";
}

export const auth = new SalteAuth({
  providers: [
    new SpotifyProvider({
      clientID: "e41402e713bb4a1384ffdbb812e6922f",
      responseType: "token",
    }),
  ],

  handlers: [
    new Popup({
      default: true,
    }),
  ],
});

export function getTokenFromAuth(auth: SalteAuth) {
  const provider = auth.provider("spotify");
  if (isSpotifyProvider(provider)) {
    return provider.accessToken;
  }

  return null;
}
