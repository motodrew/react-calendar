import React from 'react';
import PropTypes from 'prop-types';

import Flex from './Flex';

import { getTileClasses } from './shared/utils';
import { tileGroupProps } from './shared/propTypes';

const TileGroup = ({
	className,
	count,
	dateTransform,
	dateType,
	end,
	hover,
	offset,
	start,
	step,
	tile: Tile,
	value,
	valueType,
	events,
	...tileProps
}) => {
	const tiles = [];
	for (let point = start; point <= end; point += step) {
		const date = dateTransform(point);

		tiles.push(
			<Tile
				classes={getTileClasses({
					value,
					valueType,
					date,
					dateType,
					hover,
					events
				})}
				date={date}
				point={point}
				key={date.getTime()}
				{...tileProps}
			/>
		);
	}

	return (
		<Flex className={className} count={count} offset={offset} wrap>
			{tiles}
		</Flex>
	);
};

TileGroup.propTypes = {
	...tileGroupProps,
	activeStartDate: PropTypes.instanceOf(Date),
	count: PropTypes.number,
	dateTransform: PropTypes.func.isRequired,
	offset: PropTypes.number,
	tile: PropTypes.func.isRequired,
	step: PropTypes.number
};

TileGroup.defaultProps = {
	count: 3,
	step: 1
};

export default TileGroup;
