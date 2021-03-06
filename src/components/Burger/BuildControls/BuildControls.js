import React from 'react';
import {SALAD, BACON, CHEESE, MEAT} from '../BurgerIngredient/BurgerIngredient';

import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.css';

const controls = [
    {label: 'Salad', type: SALAD},
    {label: 'Bacon', type: BACON},
    {label: 'Cheese', type: CHEESE},
    {label: 'Meat', type: MEAT}
]

const buildControls = (props) => (
    <div className={styles.BuildControls}>
        <p>Current Price: <strong>{props.currentPrice.toFixed(2)}</strong></p>
        {controls.map(ctrl => <BuildControl
            key={ctrl.label}
            {...ctrl}
            added={() => props.ingredientAdded(ctrl.type)} ł
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}/>)
        }
        <button
            className={styles.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW
        </button>
    </div>
)

export default buildControls;