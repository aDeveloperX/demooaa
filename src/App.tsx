import React, { useRef } from "react";
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
import { useReactToPrint } from "react-to-print";

function App() {
  const ref = useRef(null);

  const printHandler = useReactToPrint({
    content: () => ref.current,
  });
  return (
    <div>
      <div ref={ref}>
        <MyDocument />
      </div>
      <button onClick={printHandler}>Print</button>
    </div>
  );
}

export default App;
