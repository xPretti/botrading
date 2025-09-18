import { Dialog } from "radix-ui";
import styles from "./HamburgerMenu.module.css";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../../../features/ThemeToggle/ThemeToggle";
import { Link } from "./compound/Link/Link";
import { Accordion } from "./compound/Accordion/Accordion";
import { Divider } from "./compound/Divider/Divider";

interface IHamburgerMenuProps {
   children?: React.ReactNode;
}

export function HamburgerMenu({ children }: IHamburgerMenuProps) {
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
      <div className={styles.menu}>
         <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
               <button className={styles.menuTrigger}>
                  <Menu width={35} height={35} />
               </button>
            </Dialog.Trigger>

            <Dialog.Content className={styles.menuDialog} onClick={() => setOpen(false)}>
               <div className={styles.menuContent} onClick={(e) => e.stopPropagation()}>
                  <div className={styles.menuContentHeader}>
                     <p className={styles.menuContentHeaderTitle}>Menu</p>
                     <Dialog.Close className={styles.menuContentHeaderClose}>
                        <X width={25} height={25} />
                     </Dialog.Close>
                  </div>
                  <nav className={styles.menuContentBody}>
                     {children}
                  </nav>
                  <div className={styles.menuContentFooter}>
                     <ThemeToggle />
                  </div>
               </div>
            </Dialog.Content>
         </Dialog.Root>
      </div>
   );
}


/**
 * Subcomponents
 */
HamburgerMenu.Link = Link;
HamburgerMenu.Accordion = Accordion;
HamburgerMenu.Divider = Divider;
