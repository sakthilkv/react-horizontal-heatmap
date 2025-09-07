import React from 'react';

export type HeatmapProps = {
	data: number[];
	maxValue?: number;
	colors?: string[];
	boxSize?: number;
	gap?: number;
};

const defaultColors = ['#e0f7fa', '#80deea', '#26c6da', '#00acc1', '#006064'];

export const HorizontalHeatmap: React.FC<HeatmapProps> = ({
	data,
	maxValue,
	colors = defaultColors,
	boxSize = 20,
	gap = 2,
}) => {
	const max = maxValue ?? Math.max(...data, 1);

	const getColor = (value: number) => {
		const idx = Math.floor((value / max) * (colors.length - 1));
		return colors[idx];
	};

	return (
		<div style={{ display: 'flex' }}>
			{data.map((value, key) => (
				<div
					key={key}
					title={`Value: ${value}`}
					style={{
						width: boxSize,
						height: boxSize,
						backgroundColor: getColor(value),
						marginRight: gap,
						borderRadius: 3,
					}}
				/>
			))}
		</div>
	);
};
