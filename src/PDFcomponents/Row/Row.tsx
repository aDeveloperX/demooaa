import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { Colours } from "../../theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: Colours.lightGreen,
    width: 162, // width of the header + 2 coz boarder
  },
  index: {
    //todo: move this into a config file
    width: 40,
    height: 40,
    border: "0.2px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "10px",
  },
  content: {
    width: 140,
    border: "0.2px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 2,
    fontSize: "6px",
  },
  rowHeader: {
    padding: "10",
    width: 160,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: "center",
    border: "0.2px solid black",
    fontSize: "12px",
  },
});

interface IRow {
  index: number;
  text: string;
  colour: string;
  textColour: string;
}

const Row = ({ index, text, colour, textColour }: IRow) => {
  return (
    <View style={{ ...styles.container, backgroundColor: colour }}>
      <Text style={styles.index}>{index}</Text>
      <Text style={{ ...styles.content, color: textColour }}>{text}</Text>
    </View>
  );
};

type IRowHeader = {
  text: string;
  colour: string;
};

export const RowHeader = ({ text, colour }: IRowHeader) => {
  return (
    <Text style={{ ...styles.rowHeader, backgroundColor: colour }}>{text}</Text>
  );
};

export default Row;
