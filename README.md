# Dragonfly UI

A modern React component library built with TypeScript and TailwindCSS, designed for scalable and accessible web applications.

## Features

- 🎨 **Modern Design System** - Consistent, beautiful components
- 🔧 **TypeScript Support** - Full type safety and IntelliSense
- 🎯 **TailwindCSS** - Utility-first styling with custom prefix (`df:`)
- 📚 **Storybook Integration** - Interactive component documentation
- ⚡ **Vite Powered** - Fast development and build process
- 🧪 **Testing Ready** - Vitest and Playwright configured

## Installation

```bash
npm install dragonfly-ui
```

## Components

### Avatar
Display user avatars with fallback initials support.

```tsx
import { Avatar } from 'dragonfly-ui'

<Avatar userName="John Doe" size="medium" />
<Avatar src="/avatar.jpg" userName="Jane Smith" />
```

**Props:**
- `src` - Image source URL
- `userName` - User's name (for initials fallback)
- `size` - `small` | `medium` | `large`
- `className` - Additional CSS classes

### Badge
Status indicators and labels with semantic variants.

```tsx
import { Badge } from 'dragonfly-ui'

<Badge variants="positive">Success</Badge>
<Badge variants="warning">Warning</Badge>
<Badge variants="negative">Error</Badge>
```

**Props:**
- `variants` - `positive` | `negative` | `warning` | `ghost` | `primary` | `secondary`
- `className` - Additional CSS classes

### Button
Interactive buttons with multiple variants and sizes.

```tsx
import { Button } from 'dragonfly-ui'

<Button variant="primary" size="medium" onClick={handleClick}>
  Click me
</Button>
```

**Props:**
- `variant` - `primary` | `secondary` | `ghost`
- `size` - `small` | `medium` | `large`
- `onClick` - Click handler function
- `className` - Additional CSS classes
- Extends all standard HTML button attributes

### Card
Flexible container components for content organization.

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from 'dragonfly-ui'

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    Main content goes here
  </CardContent>
  <CardFooter>
    Footer content
  </CardFooter>
</Card>
```

**Components:**
- `Card` - Main container
- `CardHeader` - Header section
- `CardTitle` - Title text
- `CardDescription` - Description text
- `CardContent` - Main content area
- `CardFooter` - Footer section

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run Storybook
npm run storybook

# Build library
npm run build

# Lint code
npm run lint
```

## Styling

This library uses TailwindCSS with a custom `df:` prefix to avoid conflicts with your application's styles. CSS custom properties are used for theming support.

## License

Private library - see package.json for details.
