import { HeaderNavigationItemData } from './header-navigation-item-data';

export interface HeaderData {
  readonly navigatePreviousData: HeaderNavigationItemData | undefined;
  readonly navigateNextData: HeaderNavigationItemData | undefined;
}
