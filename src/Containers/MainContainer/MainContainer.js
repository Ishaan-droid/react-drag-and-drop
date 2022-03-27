import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import all_data from '../../Service/Data';
import Column from '../../Components/Column/Column';
import Header from '../../Components/Header/Header';
import updateState from '../Helpers/Helper';

export default function MainContainer() {
  const [data, setData] = useState(all_data);

  const dragItem = res => {
    const { source, destination } = res;

    if (source.droppableId === destination.droppableId) {
      const tempData = data.find(cur => cur.id === destination.droppableId);
      const { column_data } = tempData;

      if (!destination) return;

      const destinationBckp = [...column_data];

      const [removed] = destinationBckp.splice(source.index, 1);
      destinationBckp.splice(destination.index, 0, removed);

      const params = [setData, source, destination, {}, tempData, [], destinationBckp];

      return updateState(...params);
    } else {
      const startCol = data.find(cur => cur.id === source.droppableId);
      const endCol = data.find(cur => cur.id === destination.droppableId);

      if (!destination) return;

      const sourceBckp = [...startCol.column_data];
      const destinationBckp = [...endCol.column_data];

      const [removed] = sourceBckp.splice(source.index, 1);
      destinationBckp.splice(destination.index, 0, removed);

      const params = [setData, source, destination, startCol, endCol, sourceBckp, destinationBckp];

      return updateState(...params);
    }
  };

  return (
    <>
      <Header title="React Drag And Drop" />
      <div className="d-flex justify-content-center mt-5">
        <DragDropContext onDragEnd={dragItem}>
          {data.map(cur => (
            <Column
              key={cur.id}
              column_id={cur.id}
              column_name={cur.name}
              card_column={cur.name}
              column_data={cur.column_data}
            />
          ))}
        </DragDropContext>
      </div>
    </>
  );
}
