import React, { useState, useRef } from 'react';
import { Popover, ArrowContainer, type PopoverPosition } from 'react-tiny-popover';

export type PopoverItem = {
	icon: React.ReactNode;
	text: string;
	link: string;
};

export type HeatmapData = {
	value: number;
	time: string;
	items: PopoverItem[];
};

export type HeatmapProps = {
	data: HeatmapData[];
	boxSize?: number;
	gap?: number;
	colors?: string[];
	emptyMessage?: string;
};

const defaultColors = [
	'rgb(36, 193, 154)', // greenish
	'rgb(251, 191, 36)', // yellowish
	'rgb(248, 113, 113)', // reddish
];

export const HorizontalHeatmap: React.FC<HeatmapProps> = ({
	data,
	boxSize = 40,
	gap = 5,
	colors = defaultColors,
	emptyMessage = 'No items available',
}) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const getColor = (value: number) => {
		const max = Math.max(...data.map((d) => d.value), 1);
		const index = Math.floor((value / max) * (colors.length - 1));
		return colors[index];
	};

	const clearHideTimeout = () => {
		if (hideTimeoutRef.current) {
			clearTimeout(hideTimeoutRef.current);
			hideTimeoutRef.current = null;
		}
	};

	const startHideTimeout = (callback: () => void) => {
		clearHideTimeout();
		hideTimeoutRef.current = setTimeout(callback, 150);
	};

	return (
		<div style={{ display: 'flex', gap }}>
			{data.map((d, i) => (
				<Popover
					key={i}
					isOpen={openIndex === i}
					positions={['bottom']}
					padding={10}
					reposition={true}
					onClickOutside={() => setOpenIndex(null)}
					content={({
						position,
						childRect,
						popoverRect,
					}: {
						position: PopoverPosition;
						childRect: any;
						popoverRect: any;
					}) => (
						<ArrowContainer
							position={position}
							childRect={childRect}
							popoverRect={popoverRect}
							arrowColor="#f5f5f5"
							arrowSize={10}
							arrowStyle={{ opacity: 1 }}
							className="popover-arrow-container"
						>
							<div
								style={{
									backgroundColor: '#f5f5f5',
									color: '#333',
									padding: 12,
									borderRadius: 6,
									minWidth: 180,
									fontFamily: 'Arial, sans-serif',
									boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
								}}
								onMouseEnter={clearHideTimeout}
								onMouseLeave={() => startHideTimeout(() => setOpenIndex(null))}
							>
								<div style={{ fontWeight: 'bold', marginBottom: 6 }}>{d.time}</div>
								{d.items.length > 0 ? (
									<ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
										{d.items.map((item, idx) => (
											<li
												key={idx}
												style={{
													display: 'flex',
													alignItems: 'center',
													marginBottom: 4,
												}}
											>
												<span style={{ marginRight: 6 }}>{item.icon}</span>
												<a
													href={item.link}
													target="_blank"
													rel="noopener noreferrer"
													style={{
														color: '#1976d2',
														textDecoration: 'none',
													}}
												>
													{item.text}
												</a>
											</li>
										))}
									</ul>
								) : (
									<div style={{ fontStyle: 'italic', opacity: 0.6 }}>{emptyMessage}</div>
								)}
							</div>
						</ArrowContainer>
					)}
				>
					<div
						style={{
							width: boxSize,
							height: (boxSize * 16) / 9,
							backgroundColor: getColor(d.value),
							borderRadius: 4,
							cursor: 'pointer',
							transition: 'transform 0.15s ease-in-out',
						}}
						onMouseEnter={() => {
							clearHideTimeout();
							setOpenIndex(i);
						}}
						onMouseLeave={() => startHideTimeout(() => setOpenIndex(null))}
					/>
				</Popover>
			))}
		</div>
	);
};
