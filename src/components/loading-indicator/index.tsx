import { FunctionComponent } from "react";

import "./loading-indicator.scss";
import Spinner from "./spinner";

export const wraper = (Component: FunctionComponent<any>) => {
  return (props: any) => (
    <div className="loading-wraper" data-testid="loading-wraper">
      <Component {...props} />
    </div>
  );
};

export const LoadingSpinner = wraper(Spinner);
