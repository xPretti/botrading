import { Dialog } from "radix-ui";
import styles from "./HamburgerMenu.module.css";
import { Menu, X } from "lucide-react";
import { Link } from "./compound/Link/Link";
import { Accordion } from "./compound/Accordion/Accordion";
import { Divider } from "./compound/Divider/Divider";
import { ThemeToggle } from "@/features/ThemeToggle/ThemeToggle";
import { usePageScrollLock } from "@/hooks/usePageScrollLock";

interface IHamburgerMenuProps {
   children?: React.ReactNode;
}

export function HamburgerMenu({ children }: IHamburgerMenuProps) {
   const { locked, setLocked } = usePageScrollLock();

   return (
      <div className={styles.menu}>
         <Dialog.Root open={locked} onOpenChange={setLocked}>
            <Dialog.Trigger asChild>
               <button className={styles.menuTrigger}>
                  <Menu width={32} height={32} />
               </button>
            </Dialog.Trigger>

            <Dialog.Content className={styles.menuDialog} onClick={() => setLocked(false)}>
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
