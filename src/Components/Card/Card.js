import { Draggable } from 'react-beautiful-dnd';

import './Card.css';

export default function Card({ draggable_id, card_index, card_title, card_column }) {
  return (
    <Draggable draggableId={draggable_id} index={card_index}>
      {provided => (
        <div
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="legend shifter-card">
            <p>Card</p>
          </div>
          <h5 className="ms-3 mb-3">{card_title}</h5>
          <h6 className="ms-3 mb-3">{card_column}</h6>
        </div>
      )}
    </Draggable>
  );
}
