import {ALWAYS_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils';

/**
 * Detect if app is running under Playwright
 */
export const TUI_IS_PLAYWRIGHT = tuiCreateTokenFromFactory<boolean>(ALWAYS_FALSE_HANDLER);
