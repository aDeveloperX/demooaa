import React from "react";
import Row from "../Row/Row";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { RowHeader } from "../Row/Row";
import { ISectionTheme } from "../../theme";

interface ISection {
  headerText: string;
  subText: string;
  content: string[];
  themeColour: ISectionTheme;
}

const styles = StyleSheet.create({
  sectionContainer: {
    display: "flex",
    flexDirection: "column",
  },
});

const Section = ({ headerText, subText, content, themeColour }: ISection) => {
  return (
    <View style={styles.sectionContainer}>
      <RowHeader text={headerText} colour={themeColour.headerColour} />
      <RowHeader text={subText} colour={themeColour.subHeaderColour} />
      {content.map((x, i) => (
        <Row
          index={i}
          text={x}
          colour={themeColour.contentColour}
          textColour={themeColour.textColour}
        />
      ))}
    </View>
  );
};

export default Section;
