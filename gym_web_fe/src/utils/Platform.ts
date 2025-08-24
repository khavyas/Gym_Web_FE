// src/utils/Platform.ts
export const Platform = {
  OS: typeof window !== 'undefined' ? 'web' : 'native',
  select: <T>(specifics: { web: T; native: T } | { web?: T; native?: T; default: T }): T => {
    const platform = typeof window !== 'undefined' ? 'web' : 'native';
    if ('default' in specifics) {
      return specifics[platform] ?? specifics.default;
    }
    return specifics[platform];
  }
};

export const isWeb = Platform.OS === 'web';
export const isMobile = Platform.OS === 'native';