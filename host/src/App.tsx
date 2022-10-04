import React from "react";
import ReactDOM from "react-dom";
import { Page } from "./Main"

import "./index.scss";
import { System } from "./utils/loadComponent";
import ErrorBoundary from "./Error";

type System = {
  url: string;
  scope: string;
  module: string
}

const RemoteButton = React.lazy(() => import("dsl/ButtonFallback"));

const App = () => {
  const [system, setSystem] = React.useState<System | undefined>(undefined);
  // return (
  //   <div className="mt-10 text-3xl mx-auto max-w-6xl">
  //     <div>Name: host</div>
  //     <div>Framework: react</div>
  //     <div>Language: TypeScript</div>
  //     <div>CSS: Tailwind</div>
  //     <button onClick={() => {
  //       setSystem({
  //         url: "http://localhost:8081/remoteEntry.js",
  //         scope: "dsl",
  //         module: "./Button"
  //       })
  //     }}>
  //       Carregar módulo
  //     </button>
  //     <System system={system} />
  //   </div>
  // )

  return (
    <Page>
      <React.Suspense fallback="Loading...">
        <ErrorBoundary>
          <RemoteButton />
        </ErrorBoundary>
      </React.Suspense>
    </Page>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
