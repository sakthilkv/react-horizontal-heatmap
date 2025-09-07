# React Horizontal Heatmap

A lightweight React component for rendering a **horizontal heatmap**.
Perfect for timelines, activity charts, contribution-style graphs, or health status indicators.
Fully customizable colors, box size, and spacing.

![Heatmap Demo](./docs/screenshots/heatmap_demo.png)

[![npm version](https://img.shields.io/npm/v/react-horizontal-heatmap.svg)](https://www.npmjs.com/package/react-horizontal-heatmap)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/sakthilkv/react-horizontal-heatmap.svg)](https://github.com/sakthilkv/react-horizontal-heatmap/issues)

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

export default function App() {
	const values = [1, 5, 3, 9, 7, 2, 10, 6, 4, 8];

	return (
		<div style={{ padding: 20 }}>
			<h2>Server Health</h2>
			<HorizontalHeatmap data={values} />
		</div>
	);
}
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
