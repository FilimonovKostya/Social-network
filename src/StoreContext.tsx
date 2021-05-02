import React from "react";
import {store, StoreType} from "./Redux/store";

export const StoreContext = React.createContext<StoreType>(store)
