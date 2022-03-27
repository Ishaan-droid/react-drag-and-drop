import { Droppable } from 'react-beautiful-dnd';

import Card from '../Card/Card';
import './Column.css';

export default function Column({ column_id, column_name, column_data }) {
  return (
    <div className="m-2 column">
      <div className="d-flex flex-column">
        <div className="legend shifter-col">
          <p>{column_name}</p>
        </div>
        <Droppable droppableId={column_id}>
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef} style={{ height: '80vh' }}>
              {column_data.map((cur, idx) => (
                <Card
                  key={cur.id}
                  card_index={idx}
                  draggable_id={cur.id}
                  card_title={cur.title}
                  card_column={column_name}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
}
