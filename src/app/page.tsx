import Image from "next/image";
import styles from "./page.module.css";
import Drink from "@/components/Drink";

export default function Home() {
  return (
    <main className={styles.main}>
      <Drink title="Julmust" 
             subtitle="Älskade av tomtenissar, det är en Svensk klassiker" 
             className="julmust" />
             
      <Drink title="Påskmust" 
             subtitle="Det här en jattekyckling på flasken" 
             className="påskmust" />
    </main>
  );
}
