const updateState = (
  setData,
  source,
  destination,
  startCol = {},
  endCol = {},
  sourceBckp = [],
  destinationBckp = []
) =>
  setData(prevValue => {
    return [
      ...prevValue.map(cur => {
        if (cur.id === destination.droppableId) {
          return { id: endCol.id, name: endCol.name, column_data: [...destinationBckp] };
        } else if (cur.id === source.droppableId) {
          return { id: startCol.id, name: startCol.name, column_data: [...sourceBckp] };
        } else {
          return cur;
        }
      }),
    ];
  });

export default updateState;
