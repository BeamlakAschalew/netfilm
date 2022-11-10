import { Footer } from "layouts/Footer";
import { Header } from "layouts/Header";
import React from "react";
import styles from "./layoutHome.module.scss";

const LayoutHome = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutHome;
