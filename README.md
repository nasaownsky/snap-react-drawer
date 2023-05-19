# snap-react-drawer

As easy as your fingers snap drawer using `createPortal`.

!!!Demo: https://snap-components.netlify.app/?path=/story/snap-drawer--basic

## Install

`npm install snap-react-drawer`

## As easy as your fingers snap 👌

~~~js
<Drawer isOpen={isOpen} onClose={() => setOpen(false)}>
  This is so easy!
</Drawer>
~~~

## Simply modify styles and control dimensions

~~~js
import Drawer from "snap-react-drawer";

function App() {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div className="App">
      <button onClick={() => setOpen(true)}>Open Drawer</button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        overlayClassName="overlayStyles" // this class modifies overlay styles
        bodyClassName="drawerStyles" // and this modifies drawer container
        size={300} // easy to control dimensions
      >
        Still so easy!
      </Drawer>
    </div>
  );
}
~~~

## Props

- `isOpen`: defines if the drawer open or not (required)
- `onClose`: to close the drawer (required)
- `size`: defines the width or height of the drawer depending on its position
- `overlayClassName`: overrides overlay of the drawer (note: please use `!important` property in your css to make sure styles will apply)
- `bodyClassName`: overrides body of the drawer (note: please use `!important` property in your css to make sure styles will apply)
- `closeButton`: defines if the default close button is showing
- `closeOnClickOutside`: defines if the drawer is closable on outside click
- `position`: defines position of the drawer
- `duration`: defines transition duration of the drawer
- `enableOverlay`: defines if overlay of the drawer is enabled
