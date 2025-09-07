# React Horizontal Heatmap

A lightweight React component for rendering a **horizontal heatmap**.
Perfect for timelines, activity charts, contribution-style graphs, or health status indicators.
Fully customizable colors, box size, and spacing.

[![npm version](https://img.shields.io/npm/v/react-horizontal-heatmap.svg)](https://www.npmjs.com/package/react-horizontal-heatmap)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/sakthilkv/react-horizontal-heatmap.svg)](https://github.com/sakthilkv/react-horizontal-heatmap/issues)

![Heatmap Demo](./docs/screenshots/demo.gif)

---

## 🚀 Installation

```bash
npm install react-horizontal-heatmap
# or
yarn add react-horizontal-heatmap
# or
pnpm add react-horizontal-heatmap
```

---

## 📦 Usage

```tsx
import React from 'react';
import { HorizontalHeatmap } from 'react-horizontal-heatmap';

export const App = () => {
	const data = [
		{
			value: 2,
			time: '2025-09-07 10:00',
			items: [
				{ icon: <FaUser />, text: 'New User', link: '#' },
				{ icon: <FaBug />, text: 'Error Reported', link: '#' },
			],
		},
		{
			value: 0,
			time: '2025-09-07 11:00',
			items: [],
		},
		{
			value: 1,
			time: '2025-09-07 12:00',
			items: [{ icon: <FaLink />, text: 'Server Linked', link: '#' }],
		},
	];

	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
			<HorizontalHeatmap data={data} boxSize={30} gap={6} />
		</div>
	);
};
```

---

## ⚙️ Props

| Prop       | Type       | Default                                                   | Description                                   |
| ---------- | ---------- | --------------------------------------------------------- | --------------------------------------------- |
| `data`     | `number[]` | **(required)**                                            | Array of values to visualize.                 |
| `maxValue` | `number`   | `Math.max(...data)`                                       | Maximum value for color scaling.              |
| `colors`   | `string[]` | `["#e0f7fa", "#80deea", "#26c6da", "#00acc1", "#006064"]` | Array of hex colors used as gradient buckets. |
| `boxSize`  | `number`   | `20`                                                      | Width & height of each square in pixels.      |
| `gap`      | `number`   | `2`                                                       | Gap (px) between boxes.                       |

---

## 🎨 Example with Custom Colors

```tsx
<HorizontalHeatmap data={[2, 4, 8, 10, 6]} colors={['#f1f8e9', '#aed581', '#7cb342', '#33691e']} />
```

---

## 📊 Use Cases

- **Server health timeline**
- **Activity trackers**
- **GitHub-style contribution graph (1 row)**
- **Resource usage visualization**

---

## 🛠 Development

```bash
git clone https://github.com/sakthilkv/react-horizontal-heatmap.git
cd react-horizontal-heatmap
npm install
npm run build
```

---

## 📜 License

MIT © [Sakthi LK](https://github.com/sakthilkv)
