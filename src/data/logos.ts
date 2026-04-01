// Build a list of available SVG logos from src/assets/logos
// Using Vite's import.meta.glob to keep imports clean and centralized

const modules = import.meta.glob('../assets/logos/*.svg', {
  eager: true,
  // Vite v5 style: returns string URLs
  query: '?url',
  import: 'default',
});

type LogoItem = { name: string; logo: string };

function toNiceName(filePath: string): string {
  const base = filePath.split('/').pop() || '';
  const withoutExt = base.replace(/\.[^.]+$/, '');
  // strip trailing "-logo" or "logo" (case-insensitive)
  const withoutLogo = withoutExt.replace(/-?logo$/i, '');
  // normalize separators to spaces
  const normalized = withoutLogo.replace(/[_-]+/g, ' ');
  // insert space between camelCase words: GoogleAds -> Google Ads
  const spaced = normalized.replace(/([a-z])([A-Z])/g, '$1 $2');
  const trimmed = spaced.trim().replace(/\s{2,}/g, ' ');
  // Title case each word
  const titled = trimmed.replace(/\b\w/g, (m) => m.toUpperCase());

  // Special display names
  const displayNames: Record<string, string> = {
    'Tcpip': 'Networking',
    'TCPIP': 'Networking',
    'Sql': 'SQL',
    'SQL': 'SQL',
    'C': 'Low Level',
  };
  return displayNames[titled] || titled;
}

const order = ['Docker', 'Linux', 'Networking', 'Rust', 'Low Level', 'Laravel', 'SQL'];

export const logos: LogoItem[] = Object.entries(modules)
  .map(([path, url]) => ({ name: toNiceName(path), logo: url as string }))
  .sort((a, b) => {
    const ai = order.indexOf(a.name);
    const bi = order.indexOf(b.name);
    return (ai === -1 ? order.length : ai) - (bi === -1 ? order.length : bi);
  });

export type { LogoItem };


