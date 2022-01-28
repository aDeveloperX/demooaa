import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { Colours } from "../../theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: Colours.lightGreen,
    width: 502, // width of the header + 2 coz boarder
  },
  index: {
    //todo: move this into a config file
    width: 100,
    height: 100,
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: 400,
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 2,
  },
  rowHeader: {
    padding: "10",
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: "center",
    border: "1px solid black",
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
