import "styled-components";
import { THEME } from "../styles/theme";

declare module "styled-components" {
  type ThemeType = typeof THEME;

  export interface DefaultTheme extends ThemeType {}
}
