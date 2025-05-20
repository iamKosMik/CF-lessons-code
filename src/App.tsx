// import ViteIntro from "./pages/ViteIntro.tsx";

import ClassComponent from "./components/ClassComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";

function App() {

  return (
    <>
        {/*<div className="text-center text-xl font-bold">this is a comment</div>*/}

        {/*<ViteIntro />*/}

        <ClassComponent />

        <FunctionalComponent />

        <ArrowFunctionalComponent />

        <ArrowFunctionalComponentWithProps
            title="is an Arrow Functional Component With Props"
            description="this is a description"
        />

    </>
  )
}

export default App
