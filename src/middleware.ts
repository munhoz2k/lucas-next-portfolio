import createMiddleware from 'next-intl/middleware';
import { defaultLocale, localesTerm } from './locales';

export default createMiddleware({
  locales: localesTerm,
  defaultLocale: defaultLocale
});
 
export const config = {
  matcher: ['/', `/(pt|en)/:path*`]
};