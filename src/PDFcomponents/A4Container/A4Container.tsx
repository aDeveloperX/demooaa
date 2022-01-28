import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import Section from "../Section/Section";
import data from "../../PDFConfig.json";
import { ISectionTheme, SectionColours } from "../../theme";

// Create styles
const styles = StyleSheet.create({
  page: {
    display: "flex",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
export const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {[1, 1, 1, 1].map((x) => (
        <Section
          {...data.section}
          //@ts-ignore
          themeColour={SectionColours[data.section.themeColour]}
        />
      ))}
    </Page>
  </Document>
);
