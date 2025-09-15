import { Dialog } from "radix-ui";
import styles from "./HeaderMenu.module.css";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "../../../feature/ThemeToggle";


export function HeaderMenu() {
   const [open, setOpen] = useState(false);

   useEffect(() => {
      if (open) {
         document.body.style.overflow = "hidden";
      }
      return () => {
         document.body.style.overflow = "";
      };
   }, [open]);

   return (
      <div className={styles.headerMenu}>
         <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
               <button className={styles.headerMenuTrigger}>
                  <Menu width={35} height={35} />
               </button>
            </Dialog.Trigger>

            <Dialog.Content className={styles.headerMenuBackground} onClick={() => setOpen(false)}>
               <div className={styles.headerMenuContent} onClick={(e) => e.stopPropagation()}>
                  <div className={styles.headerMenuContentHeader}>
                     <p className={styles.headerMenuContentHeaderTitle}>Menu</p>
                     <Dialog.Close className={styles.headerMenuContentHeaderClose}>
                        <X width={25} height={25} />
                     </Dialog.Close>
                  </div>
                  <div className={styles.headerMenuContentBody}>
                     <ul>
                        <li>
                           <a href="/">Home</a>
                        </li>
                        <li>
                           <a href="/">Soluções</a>
                        </li>
                        <li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li><li>
                           <a href="/">Central de Suporte</a>
                        </li>
                     </ul>
                  </div>
                  <div className={styles.headerMenuContentFooter}>
                     <ThemeToggle />
                  </div>
               </div>
            </Dialog.Content>
         </Dialog.Root>
      </div>
   );
}
