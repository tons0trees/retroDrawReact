import React, { useState, useEffect } from "react";
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
  const getCellListFromLocal = () => {
    let cellList = JSON.parse(localStorage.getItem('cellList'));
    if (cellList) {
      return cellList;
    }
    return buildCellList();
  }

  const setCellListOnLocal = (cellList) => {
    localStorage.setItem('cellList', JSON.stringify(cellList));
  }

  const setCellList = (newCellList) => {
    setCellListOnLocal(newCellList);
    _setCellList(newCellList);
  }

  const [activeColor, setActiveColor] = useState(COLORS[0]);
  const [cellList, _setCellList] = useState([]);

  useEffect(() => {
    _setCellList(getCellListFromLocal());
  },[])

  return (
    <div className="app">
      {/* Header needs no props */}
      <Header />
      {/* Palette needs to be passed activeColor and setActiveColor */}
      <Palette activeColor={activeColor} setActiveColor={setActiveColor} />
      {/* Grid needs to be passed activeColor, cellList, and setCellList */}
      <Grid activeColor={activeColor} cellList={cellList} setCellList={setCellList}/>
      {/* ActionPanel needs to be passed activeColor, cellList, and setCellList */}
      <ActionPanel activeColor={activeColor} cellList={cellList} setCellList={setCellList}/>
    </div>
  );
};

export default Main;
