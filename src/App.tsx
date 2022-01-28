import React from "react";
import { MyDocument } from "./PDFcomponents/A4Container/A4Container";
import { saveAs } from "file-saver";
import {
  PDFDownloadLink,
  Document,
  Page,
  pdf,
  View,
  StyleSheet,
  Text,
} from "@react-pdf/renderer";

function App() {
  return (
    <div>
      <MyDocument />
      <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </div>
  );
}

export default App;
