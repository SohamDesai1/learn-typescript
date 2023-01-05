type Draggable = {
    x: number;
    y: number;
    onDragStart: () => void;
    onDrag: () => void;
};

type Sizable = {
    width: number;
    height: number;
    onResizeStart: () => void;
    onResize: () => void;
};

type DraggableAndSizable = Draggable & Sizable;

const draggableAndSizable: DraggableAndSizable = {
    x: 0,
    y: 0,
    onDragStart: () => {},
    onDrag: () => {},
    width: 0,
    height: 0,
    onResizeStart: () => {},
    onResize: () => {},
};