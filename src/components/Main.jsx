import React from "react";
import { Header, Palette, Grid, ActionPanel } from "./";

/**
 * We need access to COLORS and buildCellList for our initial
 * state objects
 */
import { COLORS, buildCellList } from "../utils";

/**
 * The Main component represents our entire application. It contains all of the
 * top level components, and is responsible for helping its children communicate
 * with each other via state objects, and state functions.
 */
const Main = () => {
  /**
   * Using useState you need to create:
   *
   * - activeColor, setActiveColor initialized to COLORS[0]
   * - cellList, setCellList initialized to buildCellList()
   */

  return (
    <div className="app">
      <h1>i am main</h1>
      {/* Header needs no props */}
      <Header />
      {/* Palette needs to be passed activeColor and setActiveColor */}
      <Palette />
      {/* Grid needs to be passed activeColor, cellList, and setCellList */}
      <Grid />
      {/* ActionPanel needs to be passed activeColor, cellList, and setCellList */}
      <ActionPanel />
    </div>
  );
};

export default Main;
